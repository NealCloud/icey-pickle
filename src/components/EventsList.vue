<template>     
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
            <tr v-for="todo in test" :key=todo.idkey class="bg-white border-b hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
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
                    <!-- {{timeLord(todo.timestamp)}} ago.. -->
                </td>               
                <td class="px-6 py-4">
                    <button type="button"  @click="deleteTest('rough')" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
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
import { onMounted } from '@vue/runtime-core'
export default {
  props: ['test'],
  setup(props, context){
    onMounted(()=>{
      console.log('yooooo', props.test)
    })

    const deleteTest = (bark)=>{
      context.emit('deletus');
    }

    return {deleteTest}
  }
}
</script>

<style>

</style>