<?php

namespace App\Services\Task\Hendlers;

use App\Models\Task;
use App\Services\Base\BaseHendler;

class TaskHendler extends BaseHendler
{
    public function __construct(Task $task)
    {
        $this->model = $task;
    }
}