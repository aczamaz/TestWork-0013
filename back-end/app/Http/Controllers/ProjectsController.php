<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Services\Project\ProjectService;
use App\Services\Task\TaskService;

class ProjectsController extends Controller
{
    public function __construct(ProjectService $projectService,TaskService $taskService)
    {
        $this->projectService = $projectService;
        $this->taskService = $taskService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->projectService->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectRequest $request)
    {
        return $this->projectService->create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = $this->projectService->getOne($id);
        $project->tasks = $this->taskService->getTasks($project->id);
        return $project;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProjectRequest $request, $id)
    {
        return $this->projectService->edit($id,$request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->projectService->delete($id);
    }
}
