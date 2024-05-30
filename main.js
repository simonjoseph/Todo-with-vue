const app = Vue.createApp({
    data(){
        return{
            textTodo: '',
            todos:[]
        }
    },
    methods:{
        displaySidebar(){

            document.querySelector('.sidebar').classList.toggle('display-sidebar');
        },
        addTodo(){
            this.todos.push({name: this.textTodo})
            this.textTodo = '';
        },
        doneTodo(){
            console.log('done');
        },
        deleteTodo(){
            console.log('delete');
        }
    }
});

app.mount('#app');