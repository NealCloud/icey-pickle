<template>
  <form @submit.prevent="handleSubmit">
    <div class="grid gap-6 mb-6 md:grid-cols-4">        
        <div class="col-span-3">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo Text</label>
            <textarea v-model="todoText" id="todoText" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </div>
        <div class="col-span-1">
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority Rating</label>
            <input v-model="todoPriority" type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Todo</button>
        </div>     
    </div> 
</form> 
  
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Text
                </th>
                <th scope="col" class="px-6 py-3">
                    Priority
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>                
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in todoList" :key=todo.id class="bg-white border-b hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{todo.text}} space {{todo.id}}
                </th>
                <td class="px-6 py-4">
                    {{todo.priority}}
                </td>
                <td class="px-6 py-4">
                    {{todo.timestamp}}
                </td>               
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
import getCollection from '@/composables/getCollection'
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '@/firebase/config'


export default {
    setup(){
        const { documents:todoList } = getCollection('todoList') 
        const todoText = ref('')
        const todoPriority = ref('')        
        const {user} = getUser()

        const handleSubmit = async () => {
        const colRef = collection(db, 'todoList')

        await addDoc(colRef, {
            text: todoText.value,
            priority: todoPriority.value,            
            isConfirmed: false,            
            creator: user.value.uid,
            timestamp: serverTimestamp()  
        })
            console.log('succes add')
            todoText.value = ''
            todoPriority.value = ''
        }
        return {todoList, todoText, todoPriority, handleSubmit}
    }
}
</script>

<style>

</style>