<?php

namespace App\Services\Task;

use App\Services\Base\BaseService;
use App\Services\Task\Hendlers\TaskHendler;
use App\Services\Task\Repositories\TaskRepository;
use Illuminate\Database\Eloquent\Collection;

class TaskService extends BaseService
{
    public $repository;
    public $hendler;
    public function __construct(TaskRepository $taskRepository, TaskHendler $taskHendler)
    {
        $this->repository = $taskRepository;
        $this->hendler = $taskHendler;
    }
    public function getTasks(int $id):Collection
    {
        return $this->repository->getTasks($id);
    }
}