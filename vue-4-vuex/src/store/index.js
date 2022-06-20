import { createStore } from "vuex";
import { postModule } from "@/store/PostModule";

export default createStore({
    state: { // описание самого состояние
        likes: 2,
        isAuth: false
    },
    getters: { // computed свойства
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    mutations: { // напрямую менять состояние не может, но можем использовать мутации
        incLikes(state) {
            return state.likes += 1
        },
        decLikes(state) {
            return state.likes -= 1
        },
        Auth(state) {
            return state.isAuth = !state.isAuth
        }
    },
    actions: { // функции для вызова мутаций
    
    },
    modules: { // слепок состояния, функций по его изменению, который потом объединяется в глобальный стор
        post: postModule
    }
})