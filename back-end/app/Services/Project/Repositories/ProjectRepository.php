<?php

namespace App\Services\Project\Repositories;

use App\Models\Project;
use App\Services\Base\BaseRepository;

class ProjectRepository extends BaseRepository
{
    public function __construct(Project $project)
    {
        $this->model = $project;
    }
}