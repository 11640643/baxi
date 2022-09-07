<?php

namespace C\S\User;

use C\L\Service;

class Invest extends Service
{
    protected function setModel()
    {
        $this->model = new \C\M\UserInvest();
    }

    public function getStatusConfig()
    {
        return [
            'status' => [
                'N' => $this->translate['income_err'],
                'D' => $this->translate['has_ingore'],
                'S' => $this->translate['post_app'],
                'Y' => $this->translate['income_success'],
                'C' => $this->translate['has_unable']
            ],
            'front_status' => [
                'S' => $this->translate['authing'],
                'D' => $this->translate['authing'],
                'Y' => $this->translate['income_success'],
                'N' => $this->translate['auth_err'],
                'C' => $this->translate['has_unable']
            ],
            'channel' => [
                'wx' => $this->translate['wx'],
                'alipay' => $this->translate['alipay'],
                'bank' => 'Chuyển khoản'//'银行转账'
            ]
        ];
    }
    
    


    public function verify($id, $status,$fail_tips)
    {
        try {

            if (!$this->di['s_user']->lock("invest:$id", 5)) {
                throw new \Exception($this->translate['serve_busy']);
            }

            $invest = $this->search($id);
            if (!in_array($invest['status'], ['S', 'D']) || !in_array($status, ['Y', 'N', 'D', 'C'])) {
                throw new \Exception($this->translate['new_lang_current_can_not_operate']);
            }

            $this->di['db']->begin();

            $update = ['status' => $status, 'front_status' => $status];
            if ($status == 'Y') {
                $update['ok_time'] = time();
            }else{
		        $update['fail_tips'] = $fail_tips;
	        }

            if (!$this->update($id, $update)) {
                throw new \Exception($this->translate['new_lang_update_falied']);
            }

            if ($status == 'Y') {
                $config = $this->s_config->get('pay');
                $invest_credit_apr = $config['rate'];
                $exchange_credit = bcmul($invest['money'], $invest_credit_apr, 2);
                if ($exchange_credit > 0 && !$send_ex_credit) {
                    throw new \Exception($this->translate['new_lang_spend_moeny_get_score_failed']);
                }

                $stype = "invest_{$invest['channel']}";
                if (!$this->di['s_funds']->add($invest['uid'], $exchange_credit, 'money', $stype, $this->translate['blacne_income'], $id)) {
                    throw new \Exception($this->translate['new_lang_flow_add_failed']);
                }

                $this->di['cache']->rPush('sms_list', json_encode([
                    'uid' => $invest['uid'],
                    'type' => 'invest_ok',
                    'params' => date('Y.m.d H:i')
                ]));

            }

            if ($status == 'N') {
                $this->di['cache']->rPush('sms_list', json_encode([
                    'uid' => $invest['uid'],
                    'type' => 'invest_no',
                    'params' => date('Y.m.d H:i')
                ]));
            }


            $this->di['db']->commit();
            return true;


        } catch (\Exception $e) {

            if ($this->di['db']->isUnderTransaction()) {
                $this->di['db']->rollback();
            }

            $this->di['message']->setSerMsg($e->getMessage());
            return false;

        }
    }

}
