<?php

namespace App\Services\Base;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class BaseRepository
{
    public function get():Collection
    {
        return $this->model->all();
    }
    public function getOne(int $id):Model
    {
        return $this->model->where('id',$id)->firstOrFail();
    }
}