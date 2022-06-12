<?php

namespace App\Services\Base;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class BaseService
{
    public function get():Collection
    {
        return $this->repository->get();
    }
    public function getOne(int $id):Model
    {
        return $this->repository->getOne($id);
    }
    public function create(array $fields):Model
    {
        return $this->hendler->create($fields);
    }
    public function edit(int $id, array $fields):Model
    {
        return $this->hendler->edit($id, $fields);
    }
    public function delete(int $id)
    {
        return $this->hendler->delete($id);
    }
}