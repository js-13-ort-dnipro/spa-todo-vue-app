
    import {createApp} from '../../node_modules/vue/dist/vue.esm-browser.js';

    createApp({

        data(){
            return {
                title: 'TODO+Vue App',
                newTask: '',
                tasks: []
            }
        },
        watch:{
            tasks: {
                handler(){
                    localStorage.setItem('data', JSON.stringify(this.tasks));
                },
                deep: true
            }
        },
        mounted(){
            let data = localStorage.getItem('data');

            if(data){
                this.tasks = JSON.parse(data);
            }
        },
        methods: {
            addTask(){
                let txt = this.newTask.trim();
                if(txt){
                    this.tasks.unshift({
                        title: txt,
                        completed: false
                    });
                    this.newTask = '';
                }
            },
            delTask(n){
                if(!confirm('Are You Sure?')){
                    return;
                }

                this.tasks.splice(n, 1);
            }
        }

    }).mount('#app');