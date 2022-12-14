<?php

namespace C\S\Goods;

use C\L\Service;

class Goods extends Service
{

    protected function setModel()
    {
        $this->model = new \C\M\GoodsList();
    }

    public function getStatusConfig()
    {
        if ($this->language =='cn' ){
        return [
            // 'is_show_index' => [
            //     'Y' => '是',
            //     'N' => '否'
            // ],
            'status' => [
                'Y' => '上架',
                'N' => '下架'
            ]
        ];
        }else{
                    return [
            // 'is_show_index' => [
            //     'Y' => '是',
            //     'N' => '否'
            // ],
            'status' => [
                'Y' => 'Na prateleira',
                'N' => 'Fora da prateleira'
            ]
        ];
        }
    }

}
