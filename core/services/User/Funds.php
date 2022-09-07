<?php

namespace C\S\User;

use C\L\Service;

class Funds extends Service
{
    protected function setModel()
    {
        $this->model = new \C\M\UserFunds();
    }

    public function add($uid, $money, $type, $stype, $title, $cid, $status = 'D', $beforMoney = 0, $afterMoney = 0, $remark = '')
    {
        $add = [
            'cid' => $cid,
            'uid' => $uid,
            'money' => $money,
            'type' => $type,
            'stype' => $stype,
            'title' => $title,
            'status' => $status,
            'befor_money' => $beforMoney,
            'after_money' => $afterMoney,
            'btype' => $money < 0 ? 'sub' : 'add',
            'remark' => $remark
        ];

        return $this->save($add);
    }

    public function getStatusConfig()
    {
        if ( $this->language == 'cn' ){
            return [
                'status' => [
                    'D' => '待处理',
                    'S' => '处理中',
                    'Y' => '处理成功',
                ],
                'type' => [
                    'money' => '金额',
                    'credit' => '等级积分',
                    'prize_num' => '抽奖',
                    'exchange_credit' => '兑换积分',
                    // 'manure' => '肥料',
                    // 'water' => '浇水',
                    // 'fruit' => '果实',
                 //   'anwser_num' => '答题',
                ],
                'stype' => [
                    'bank_invest_back' => '银行充值返现',
                    'back_money' => '满返本金',
                    'pack_send' => '红包发送',
                    'prize_money' => '抽奖红包',
                    'prize_num_sub' => '抽奖减少',
                    'prize_num_add_item' => '投资项目',
                    'sys_prize_num' => '后台操作增减抽奖',
                    'sys_money' => '后台操作增减金额',
                    'sys_anwser_num' => '后台操作增减答题',
                    'item_pack' => '投资送红包',
                    'item_credit' => '投资送等级积分',
                    'itemdq_apr' => '理财利息',
                    'itemdq_money' => '理财本金',
                    'invest_wx' => '微信充值',
                    'invest_alipay' => '支付宝充值',
                    'invest_bank' => '银行卡充值',
                    'cost' => '提现',
                    'invest_credit' => '充值送兑换积分',
                    'itemdq_apply' => '项目投资',//'项目投资',
                    'cost_back' => '提现拒绝退还',
                    'share_money' => '邀请好友注册奖励',
                    'reg_money' => '新用户注册奖励',
                    'huzhuan_out' => '会员互转-转出',
                    'huzhuan_in' => '会员互转-转入',
                    'checkin' => '签到奖励',
                    'reward_invest' => '好友充值奖励',
                    'reward_item' => '好友投资奖励',
                    'reward_item_f' => '好友投资分润奖励',
                    'apply_item' => '参与投资任务',
                    // 'manure_apply' => '浇水',
                    // 'water_apply' => '施肥',
                    // 'tree_pluck' => '果实采摘',
                    'goods_apply' => '积分换购商品',
                    'clo' => '早起挑战赛',
                    'pack' => '运动挑战赛',
                    // 'yeb' => '余额宝任务',
                    // 'clos' => '持续早起任务',
                    'auth' => '认证任务',
                    'task_item' => '投资理财任务',
                    // 'pack_step' => '达3000步任务',
                    'pack_apply' => '运动挑战赛报名',
                    'pack_back' => '运动挑战赛退还',
                    'clo_apply' => '早起挑战赛报名',
                    'clo_back' => '早起挑战赛退还',
                    // 'login_manure' => '每日赠送肥料',
                    // 'login_water' => '每日赠送浇水',
                    'cumulative_sign' => '累计签到奖励',
                //    'anwser' => '答题奖励',
                //    'anwser_num_sub' => '参与答题',
                ],
            ];
        }else{
            return [
                'status' => [
                    'D' => 'Pendente',
                    'S' => 'Em processamento',
                    'Y' => 'Processado  com sucesso'//'处理成功'
                ],
                'type' => [
                    'money' => 'Saldo',
                    'credit' => 'Nível de crédito',
                    'prize_num' => 'Sorteio',
                    'exchange_credit' => 'Resgatar pontos',
                    // 'manure' => '肥料',
                    // 'water' => '浇水',
                    // 'fruit' => '果实',
                 //   'anwser_num' => '答题',
                ],
                'stype' => [
                    'bank_invest_back' => 'Recarga com o cartão do banco',
                    'back_money' => ' reembolso total',
                    'pack_send' => 'Enviar envelopes vermelhos',
                    'prize_money' => 'envelopes vermelhos sorteados',
                    'prize_num_sub' => 'sorte nos sorteios reduzida',
                    'prize_num_add_item' => 'projeto de investimento',
                    'sys_prize_num' => 'Operação em segundo plano aumenta ou diminui a loteria',
                    'sys_money' => 'O sistema aumenta ou diminui a quantidade',
                    'sys_anwser_num' => ' O sistema de respostas aumenta ou diminui',
                    'item_pack' => 'Invista em dar envelopes vermelhos',
                    'item_credit' => 'invista para obter pontos',
                    'itemdq_apr' => 'juros  financeiros',
                    'itemdq_money' => 'capital de investimento',
                    'invest_wx' => ' recarga via wechat',
                    'invest_alipay' => 'Recarga via Alipay',
                    'invest_bank' => 'Deposite dinheiro com cartões bancários',
                    'cost' => 'Sacar dinheiro',
                    'invest_credit' => ' Recarregue para resgatar pontos',
                    'itemdq_apply' => 'investimento',//'项目投资',
                    'cost_back' => 'Saque sem reembolso',
                    'share_money' => 'Convide amigos para se registrar e ganhe recompensas',
                    'reg_money' => 'Nova recompensa de registro do usuário',
                    'huzhuan_out' => "transferência mutua de membros', transferências para fora",
                    'huzhuan_in' => "transferência entre membros', transferências para fora",
                    'checkin' => 'recompensa por check-in',
                    'reward_invest' => 'Bônus pela recarga dos amigos',
                    'reward_item' => 'Bônus pelo investimento dos amigos',
                    'reward_item_f' => 'Investimento amigo e bônus de participação nos lucros',
                    'apply_item' => 'Participe da tarefa de investimento',
                    // 'manure_apply' => '浇水',
                    // 'water_apply' => '施肥',
                    // 'tree_pluck' => '果实采摘',
                    'goods_apply' => 'pontos para comprar mercadorias',
                    'clo' => 'Desafio matinal',
                    'pack' => 'Desafio esportivo',
                    // 'yeb' => '余额宝任务',
                    // 'clos' => '持续早起任务',
                    'auth' => 'Tarefa de certificação',
                    'task_item' => 'Investimento e tarefa financeira',
                    // 'pack_step' => '达3000步任务',
                    'pack_apply' => 'Registro de desafio esportivo',
                    'pack_back' => 'Reembolso do Desafio Esportivo',
                    'clo_apply' => 'Faça um desafio inicial para se registrar',
                    'clo_back' => 'Faça um desafio inicial para retornar',
                    // 'login_manure' => '每日赠送肥料',
                    // 'login_water' => '每日赠送浇水',
                    'cumulative_sign' => 'Sinal cumulativo -in recompensa',
                //    'anwser' => '答题奖励',
                //    'anwser_num_sub' => '参与答题',
                ],
            ];
            
        }
    }

    public function applyPack($name, $vip, $money)
    {
        try {

            if (empty($name)) {
                throw new \Exception($this->translate['new_lang_hbm_empty']);
            }

            if ($money < 0.01) {
                throw new \Exception($this->translate['new_lang_hb_min_01']);
            }

            $vipConfig = $this->di['s_level']->search($vip);
            if (empty($vipConfig)) {
                throw new \Exception($this->translate['new_lang_current_vip_setting_not_find']);
            }

            $data = [];
            $scores = $this->di['s_level']->getNextLevelScore($vip);
            if ($scores[1] > 0) {
                $scores[1] -= 1;
                $data['data']['credit'] = $scores;
                $data['data_type']['credit'] = 'between';
            } else {
                $data['data']['credit'] = $scores[0];
                $data['data_type']['credit'] = '>=';
            }

            if (empty($data)) {
                throw new \Exception($this->translate['new_lang_add_failed']);
            }

            $users = $this->di['s_user']->searchAll($data['data'], $data['data_type'], ['uid', 'credit']);
            if (empty($users)) {
                throw new \Exception($this->translate['new_lang_current_vip_not_user']);
            }

            $adds = [];
            $time = time();
            foreach ($users as $user) {
                $adds[] = [
                    'cid' => $user['uid'],
                    'uid' => $user['uid'],
                    'money' => $money,
                    'type' => 'money',
                    'stype' => 'pack_send',
                    'title' => $name,
                    'status' => 'D',
                    'uptime' => $time,
                    'addtime' => $time,
                ];
            }

            if (!$this->saves($adds)) {
                throw new \Exception($this->translate['new_lang_add_failed']);
            }

            return true;

        } catch (\Exception $e) {

            $this->di['message']->setSerMsg($e->getMessage());
            return false;
        }
    }

}
