<template>
  <!-- <div class="home">
    <ul>
      <li v-for="member in members" :key="member.id">

        <div class="details">
          <h3 @click="handleDelete(member.id)">{{ member.first }}</h3>
          <p>By {{ member.last }}</p>
        </div>
        <div class="icon" @click="handleUpdate(member)">
          <span v-if="member.isFav" class="material-icons">favorite</span>
          <span v-else class="material-icons">cancel</span>
        </div>
      </li>
    </ul>
    <AddMember />
  </div> -->
  
<div class="grid grid-cols-12">

  <div class="col-span-3">

    <div>
        
    <aside class="w-80" aria-label="Sidebar">
      <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
                <a href="#" @click="dashboardSelect(dashboardKeys.todoList)" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span class="ml-3">Todo List</span>
                </a>
            </li>         
            <li>
                <a href="#" @click="dashboardSelect(dashboardKeys.mlpMembersList)" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Dupr Club</span>
                  <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">212</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Club Waitlist</span>
                  <span class="inline-flex items-center justify-center  h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-walter-primary rounded-full dark:bg-blue-900 dark:text-blue-200">300</span>
                </a>
            </li>
            <li>
                <a href="#" @click="dashboardSelect(dashboardKeys.userList)" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Tournaments</span>
                </a>
            </li>
            <li>
                <a href="#" @click="dashboardSelect(dashboardKeys.eventsList)" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Events</span>
                </a>
            </li>
            <li>
                <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Lessons</span>
                </a>
            </li>
          </ul>
      </div>
    </aside>


    </div>



    <!-- Dropdown menu -->


  </div>

  <div v-if="dashboardBools.mlpMembersList" class="col-span-9">
    <MLPmembers/>
  </div>
  
    <div v-if="dashboardBools.todoList" class="col-span-9" >
      <TodoList  :todoList="todoListMain"  @update="handleDocData" @delete="handleDocData"/>
    </div>
  
  <div v-if="dashboardBools.eventsList" class="col-span-9">
    <EventsList :test='testData'  @deletus="handleDocDelete"/>
  </div>
  <div v-if="dashboardBools.userList" class="col-span-9">
    <UserList/>
  </div>
</div>


</template>

<script>
import getDocument from '@/composables/getDocument'
import AddMember from '@/components/AddMember'
import MLPmembers from '@/components/MLPmembers.vue'
import TodoList from '@/components/TodoList.vue'
import EventsList from '@/components/EventsList.vue'
import UserList from '@/components/UserList.vue'
import getCollection from '@/composables/getCollection'
import getUser from '../composables/getUser'

import {db} from '../firebase/config'
import {doc, serverTimestamp, deleteDoc, updateDoc, deleteField} from 'firebase/firestore'

import { onMounted, ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

export default {
  name: 'Home',
  components: { MLPmembers, TodoList, EventsList, UserList  },
  

  setup() {
    const dashboardBools = ref({mlpMembersList : true, todoList: false, eventsList: false, userList: false})
    const dashboardKeys = ref({mlpMembersList: 'mlp', todoList: 'todo', eventsList: 'events', userList: 'users'})
    const dashboardDataBools = ref({mlpMembersList : true, todoList: false, eventsList: false, userList: false})
    const docRefHolder = ref({mlpMembersList : {}, todoList: {}, eventsList: {}, userList: {}})

    const todoListMain = ref({})
    const testData = ref([{idkey: "loading", text: 'loading', priority: '1', timestamp: new Date()}])
    const testData2 = ref([{idkey: "beer", text: 'loading', priority: '1', timestamp: new Date()}])
    //firestore data reads
    const dataCalls = ref(0)

    const {user} = getUser()
    const selectedPerson = ref("Heya")
    // const { documents:books } = getCollection('members', ['userUid', '==', user.value.uid]) 
    // const { documents:members } = getCollection('walterMlp')    
    
    const handleDelete = (id)=>{
      const docRef = doc(db, 'walterMlp', id)
      deleteDoc(docRef)         
    }

    

    const handleUpdate = (member)=>{
      const docRef = doc(db, 'walterMlp', member.id)
      updateDoc(docRef, { isFav: !member.isFav })
    }
     
    const loadDataDoc = async ( doc)=>{
        const {document} = await getDocument(doc)    
        return document.value                 
    } 

    onMounted(()=>{
      //console.log('welcome admin')
    })

    const simLoad = ()=>{      
      testData.value = testData2.value
    }

    const dashboardSelect = async (panel)=>{
      dashboardBools.value.mlpMembersList = false
      dashboardBools.value.todoList = false
      dashboardBools.value.eventsList = false
      dashboardBools.value.userList = false
      
      switch(panel){
        case 'mlp':  dashboardBools.value.mlpMembersList = true;
        break;
        case 'todo': dashboardBools.value.todoList = true
        if(!dashboardDataBools.value.todoList){
          docRefHolder.value.todoList = doc(db, 'todoList', 'mainList') 
          todoListMain.value = await loadDataDoc(docRefHolder.value.todoList)
          dashboardDataBools.value.todoList = true  }         
        break;
        case 'events': dashboardBools.value.eventsList = true;
         await setTimeout(simLoad, 500)
        break;
        case 'users': dashboardBools.value.userList = true;
        break;
      }
    }

    //delete a field id dynamically
    const handleDocData = async (docRefString, fieldId)=>{
      switch(docRefString){
        case 'deleteTodo' : handleDocDelete(docRefHolder.value.todoList, fieldId)
        break;
        case 'udpateTodo' : handleNewTodo(docRefHolder.value.todoList, fieldId)
        break;
      }
    }
     //delete a field with docRef and id of field
    const handleDocDelete = async (docRef, fieldId) =>{            
            await updateDoc(docRef, {
                [fieldId]: deleteField()
            })
           delete todoListMain.value[fieldId] 
            dataCalls.value++                
      }

      const handleNewTodo = async (docRef, fieldObject) => {                       
            //grab field key from object
            let fieldKey = Object.keys(fieldObject)[0]
            //check if its already in list
            if(fieldKey in todoListMain.value){
              console.log('this field key alrady taken!')
              return
            }
            //update the 
            await updateDoc(docRef, 
                 fieldObject
            )
            dataCalls.value++             
            
            //spread new todo key to current list
            todoListMain.value = {...todoListMain.value, 
                [fieldKey] : {
                    text: fieldObject[fieldKey].text,
                    priority: fieldObject[fieldKey].priority,            
                    isConfirmed: false,            
                    creator: fieldObject[fieldKey].creator,
                    timestamp: null,
                    idkey: fieldKey
                }                 
            }
            
      }

    
    return { handleUpdate, handleDelete,handleDocDelete, handleDocData, dashboardSelect,todoListMain, testData, dashboardKeys, dashboardBools, selectedPerson}
  }
}
</script>

<style>

</style>