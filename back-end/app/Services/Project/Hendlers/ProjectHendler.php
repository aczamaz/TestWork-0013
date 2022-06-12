<?php

namespace App\Services\Project\Hendlers;

use App\Models\Project;
use App\Services\Base\BaseHendler;

class ProjectHendler extends BaseHendler
{
    public function __construct(Project $project)
    {
        $this->model = $project;
    }
}