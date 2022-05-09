const App = {
    data() {
        return {
            counter: 0,
            title: 'Счетчик',
            title2: 'Список заметок',
            placeholderString: 'Введите текст заметки',
            inputValue: '',
            notes: [ 'Заметка 1' ]
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     // console.log('inputChangeHandler ', event, event.target.value)
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if (this.inputValue) {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
            return undefined // неявно прописано в методах
        },
        // inputKeyPress(event) {
        //     // console.log(event.key)
        //     if (event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }
        toUpperCase(item) {
            return item.toUpperCase()
        },
        doubleCount() {
            // console.log('doubleCount') // вызывается часто - каждый раз при изменении input - для исправления используем computed
            return this.notes.length * 2
        },
        removeNote(index, event) {
            // console.log('removeNote ', index, event)
            this.notes.splice(index, 1)
        }
    },
    computed: { // должны зависеть от вычисляемых свойств (будет зависеть от изменений их), которые что-то возвращают, фактически являются get и set, а не методами
        doubleCountedCount() {
            // console.log('doubleCountedCount') // вызывается часто - каждый раз при изменении input
            return this.notes.length * 2
        },
    },
    watch: { // можем следить за изменениями переменных
        inputValue(value) {
            // console.log('input value changed ', value)
            if (value.length > 10) this.inputValue = ''
        }
    }
}

Vue.createApp(App).mount('#app')