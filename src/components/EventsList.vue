<template>     
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Location
                </th>
                <th scope="col" class="px-6 py-3">
                    Players
                </th> 
                <th scope="col" class="px-6 py-3">
                    Date
                </th> 
                <th scope="col" class="px-6 py-3">
                    spots
                </th>              
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="event in eventData" :key=event.id class="bg-white border-b hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{event.name}} 
                </th>
                <td class="px-6 py-4">
                    {{event.location}}
                </td>
                <td class="px-6 py-4">
                    {{event.max}}
                </td>
                <td class="px-6 py-4">
                    <!-- {{timeLord(todo.timestamp)}} ago.. -->
                </td>               
                <td class="px-6 py-4">
                    <button type="button"  @click="goToProfile(event.id)"  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Event Page</button>
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
    <nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" @click="getNextEvent" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>
  </div>
  
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { collection, getDocs, limit, query, startAfter } from '@firebase/firestore'
import { db } from '@/firebase/config'
import { useRouter } from 'vue-router'

export default {
  props: ['test'],
   
  setup(props, context){
    const next = ref()
    const router = useRouter()
    const eventData = ref([])
    onMounted(()=>{
        getEvents()
      console.log('events', props.test)
    })

    const deleteTest = (bark)=>{
      context.emit('deletus');
    }

    const getEvents = async ()=>{
         const first = query(collection(db, "events"), limit(2));
        const documentSnapshots = await getDocs(first);
        documentSnapshots.docs.forEach(doc => {
             eventData.value.push({ ...doc.data(), id: doc.id})        
         })
        
         // Get the last visible document
        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        console.log("last", lastVisible);

        // Construct a new query starting at this document,
        // get the next 25 cities.
        next.value = query(collection(db, "events"),        
            startAfter(lastVisible),
            limit(2));
    }

    const getNextEvent = async () =>{
        const docSnap = await getDocs(next.value)
        console.log('docs')
        docSnap.forEach(doc => {
             eventData.value.push({ ...doc.data(), id: doc.id})        
         })
    }
    const goToProfile = (idkey)=>{
            router.push({            
                name:'event',  params: { eventid: idkey  }
          })
           
        }
   

   
    return {deleteTest, getNextEvent, eventData, goToProfile}
  }
}
</script>

<style>

</style>