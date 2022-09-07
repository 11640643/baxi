<?php

namespace C\M;

use C\M\Model;

class UserStatisCatData extends Model
{
    public function beforeValidationOnCreate()
    {
        $this->addtime = $this->uptime = time();
        return true;
    }

    public function beforeValidationOnUpdate()
    {
        $this->uptime = time();
        return true;
    }

}