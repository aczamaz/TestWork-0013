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
        setProject(state,project)
        {
            state.project = project;
            state.tasks = project.tasks;
        },
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
            context.commit('setProject',data);
        }
    }
})

export default store;