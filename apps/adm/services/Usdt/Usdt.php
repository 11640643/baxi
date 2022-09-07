<?php

namespace C\S\Usdt;

use C\L\Service;

class Usdt extends Service
{

    protected function setModel()
    {
        $this->model = new \C\M\Usdt();
    }

}