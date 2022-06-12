<?php

namespace App\Services\Task\Repositories;

use App\Models\Task;
use App\Services\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class TaskRepository extends BaseRepository
{
    public function __construct(Task $task)
    {
        $this->model = $task;
    }
    public function getTasks(int $id):Collection
    {
        return $this->model->where('project_id',$id)->get();
    }
}