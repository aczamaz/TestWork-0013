<?php

namespace App\Services\Project;

use App\Services\Base\BaseService;
use App\Services\Project\Hendlers\ProjectHendler;
use App\Services\Project\Repositories\ProjectRepository;

class ProjectService extends BaseService
{
    public $repository;
    public $hendler;
    public function __construct(ProjectRepository $projectRepository, ProjectHendler $projectHendler)
    {
        $this->repository = $projectRepository;
        $this->hendler = $projectHendler;
    }
}