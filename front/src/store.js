import { createStore } from 'vuex';
import axios from 'axios';
const apiUrl = 'http://127.0.0.1:8000/api';

const store = createStore({
    state () {
        return {
            projects:[],
            project:{},
            projectForm:{
                name:'',
                description:''
            },
            tasks:[],
            task:{},
            taskForm:{
                name:'',
                description:'',
                status:''
            }
        }
    },
    mutations: {
        selectProject(state,id)
        {
            const project = state.projects.find((el)=>el.id == id);
            state.project = project;
            state.projectForm = project;
        },
        selectTask(state,id)
        {
            const task = state.tasks.find((el)=>el.id == id);
            state.task = task;
            state.taskForm = task;
        },
        setProjectName(state,name)
        {
            state.projectForm.name = name;
        },
        setProjectDescription(state,description)
        {
            state.projectForm.description = description;
        },
        saveProject(state,post)
        {
            state.projects.unshift(post);
        },
        setProjects(state,projects)
        {
            state.projects = projects;
        },
        updateProjects(state,project)
        {
            const index = state.projects.find((el,index)=>{if(el.id==project.id) return index;})
            state.projects.splice(index,1);
            state.projects.unshift(project);
        },
        setProject(state,project)
        {
            state.project = project;
            state.tasks = project.tasks;
        },
        setTaskName(state,name)
        {
            state.taskForm.name = name;
        },
        setTaskDescription(state,description)
        {
            state.taskForm.description = description;
        },
        setTaskStatus(state,status)
        {
            state.taskForm.status = status;
        },
        saveTask(state,task)
        {
            state.tasks.unshift(task);
        },
        setTasks(state,tasks)
        {
            state.tasks = tasks;
        },
        setTask(state,task)
        {
            state.task = task;
        },
        updateTasks(state,task)
        {
            const index = state.tasks.find((el,index)=>{if(el.id==task.id) return index;})
            state.tasks.splice(index,1);
            state.tasks.unshift(task);
        },
        deleteProject(state,id)
        {
            const index = state.projects.find((el,index)=>{if(el.id==id) return index;})
            state.projects.splice(index,1);
        },
        deleteTask(state,id)
        {
            const index = state.tasks.find((el,index)=>{if(el.id==id) return index;})
            state.tasks.splice(index,1);
        }
    },
    actions:{
        async saveProject(context)
        {
            const {data}= await axios.post(apiUrl+'/projects',context.state.projectForm);
            context.commit('saveProject',data);
        },
        async getProjects(context)
        {
            const {data} = await axios.get(apiUrl+'/projects');
            context.commit('setProjects',data);
        },
        async getProject(context,id){
            const {data} = await axios.get(apiUrl+'/projects/'+id);
            context.commit('setProject',data);
        },
        async editProject(context){
            const {state} = context;
            const dataForm = {name: state.projectForm.name,description:state.projectForm.description};
            const {data} = await axios.put(apiUrl+'/projects/'+state.project.id,dataForm);
            context.commit('updateProjects',data);
        },
        async saveTask(context)
        {
            const dataForm = {...context.state.taskForm,project_id:context.state.project.id};
            const {data}= await axios.post(apiUrl+'/tasks',dataForm);
            context.commit('saveTask',data);
        },
        async getTasks(context)
        {
            const {data} = await axios.get(apiUrl+'/tasks');
            context.commit('setTasks',data);
        },
        async editTask(context,id){
            const {name,description,status} = context.state.taskForm;
            const dataForm = {name:name,description:description,status:status,project_id:context.state.project.id};
            const {data} = await axios.put(apiUrl+'/tasks/'+id,dataForm);
            context.commit('updateTasks',data);
        },
        async deleteProject(context,id)
        {
            const {data} = await axios.delete(apiUrl+'/projects/'+id);
            context.commit('deleteProject',id);
        },
        async deleteTask(context,id)
        {
            const {data} = await axios.delete(apiUrl+'/tasks/'+id);
            context.commit('deleteTask',id);
        }
    }
})

export default store;