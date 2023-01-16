import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

let app
//allows auth check in router
onAuthStateChanged(auth, ()=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }   
})
