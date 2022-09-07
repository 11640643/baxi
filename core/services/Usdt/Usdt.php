<?php

namespace C\S\usdt;

use C\L\Service;

class Usdt extends Service
{
    protected function setModel()
    {
        $this->model = new \C\M\UserAddress();
    }
}
