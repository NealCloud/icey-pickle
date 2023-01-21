<template>
  <form @submit.prevent="handleSubmit">
    <div class="grid gap-6 mb-6 md:grid-cols-4">
        <div class="col-span-2">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input v-model="todoTitle" pattern="\w{0,10}" id="todoTitle" type="text" class="block p-2.5 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="no spaces and up to 10 letters">
        </div>
        <div class="col-span-1">
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority Rating</label>
            <input v-model="todoPriority" type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" min="0" max="10" required>
            
        </div> 
         <div class="col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text</label>
            <textarea v-model="todoText" id="todoText" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a task/issue to be done..."></textarea>
        </div>
        <div>
            <p>data calls: {{dataCalls}}</p>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Todo</button>    
        </div>    
    </div> 
</form> 
  
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Text
                </th>
                <th scope="col" class="px-6 py-3">
                    Priority Level
                </th> 
                <th scope="col" class="px-6 py-3">
                    Created
                </th>               
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in todoList" :key=todo.id class="bg-white border-b hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{todo.idkey}} 
                </th>
                <td class="px-6 py-4">
                    {{todo.text}}
                </td>
                <td class="px-6 py-4">
                    {{todo.priority}}
                </td>
                <td class="px-6 py-4">
                    {{timeLord(todo.timestamp)}} ago..
                </td>               
                <td class="px-6 py-4">
                    <button type="button"  @click="handleDelete(todo.idkey)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </td>
            </tr>
            <!-- <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>               
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> -->
                 
        </tbody>
    </table>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import { deleteField, doc, getDoc, serverTimestamp, setDoc, updateDoc } from '@firebase/firestore'
import { db } from '@/firebase/config'
import { onMounted } from '@vue/runtime-core'
import { formatDistanceToNow } from 'date-fns'


export default {
    setup(){
        
        const docRef = doc(db, "todoList", "mainList");
        
        //trigger the doc read on mount 
        onMounted(()=>{docGetter()})

        const todoList = ref(null)
        const newTodo = ref(null)
        const todoTitle = ref('')
        const todoText = ref('')
        const todoPriority = ref('')        
        const {user} = getUser()
        const dataCalls = ref(0)

        //read todo document
        const docGetter = async ()=> {             
            let docSnap = await getDoc(docRef)
            if (docSnap.exists()) {              
                todoList.value = ({ ...docSnap.data()})
                dataCalls.value++    
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        const timeLord = (time) =>{
            let timeRevamp
            if(time){
                timeRevamp = formatDistanceToNow(time.toDate())
            }
            else{
                timeRevamp = formatDistanceToNow(new Date())
            }
            return timeRevamp
        }

        const handleSubmit = async () => {            
            //create new todo key data
             newTodo.value = {
                [todoTitle.value] : {
                    text: todoText.value,
                    priority: todoPriority.value,            
                    isConfirmed: false,            
                    creator: user.value.uid,
                    timestamp: serverTimestamp(),
                    idkey: todoTitle.value
                } 
            }
            //update firestore todo field
            await updateDoc(docRef, 
                 newTodo.value
            )
            //spread new todo key to current list
            todoList.value = {...todoList.value, 
                [todoTitle.value] : {
                    text: todoText.value,
                    priority: todoPriority.value,            
                    isConfirmed: false,            
                    creator: user.value.uid,
                    timestamp: null,
                    idkey: todoTitle.value
                } 
            }
            dataCalls.value++
            todoText.value = ''
            todoPriority.value = ''
            todoTitle.value = ''
        }

        const handleDelete = async (todoId) =>{            
            await updateDoc(docRef, {
                [todoId]: deleteField()
            })
            delete todoList.value[todoId] 
            dataCalls.value++      
        }


        return {todoList, todoText, todoTitle, todoPriority, dataCalls, handleDelete, handleSubmit, timeLord}
    }
}
</script>

<style>

</style>