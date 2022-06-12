<?php

namespace App\Services\Base;

use Illuminate\Database\Eloquent\Model;

class BaseHendler
{
    public function create($fields):Model
    {
        return $this->model->create($fields);
    }
    public function edit(int $id, array $fields):Model
    {
        return tap($this->model->where('id',$id))->update($fields)->first();
    }
    public function delete(int $id)
    {
        return $this->model->where('id',$id)->delete();
    }
}