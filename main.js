const app = Vue.createApp({
    data() {
        return {
            textTodo: '',
            activeFilter: 'all',
            todos: [],
            currentDate: ''
        }
    },
    methods: {
        displaySidebar() {

            document.querySelector('.sidebar').classList.toggle('display-sidebar');
        },
        addTodo() {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();

            this.currentDate = `${year}-${month}-${day}`;

            if (this.textTodo === '') return;
            this.todos.push({
                name: this.textTodo,
                date: this.currentDate,
                status: 'uncompleted'
            })
            this.textTodo = '';
        },
        doneTodo(index) {
            this.todos[index].status = 'completed';
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        filterTodos(value) {
            this.activeFilter = value;
        },
        filteredTodos() {
            if (this.activeFilter === 'uncompleted') {
                return this.todos.filter(todo => todo.status !== 'completed');
            } else if (this.activeFilter === 'completed') {
                return this.todos.filter(todo => todo.status === 'completed');
            } else {
                return this.todos;
            }
        },
        themeDark(){
            document.body.classList.remove('ligth-theme');
        },
        themeLight(){
            document.body.classList.add('ligth-theme');
        }
    },
});

app.mount('#app');