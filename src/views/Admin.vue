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
                  <span class="inline-flex items-center justify-center  h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-walter-primary rounded-full dark:bg-blue-900 dark:text-blue-200">{{transactionListData.todo}}</span>
                </a>
            </li>         
            <li>
                <a href="#" @click="dashboardSelect(dashboardKeys.duprList)" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Dupr Club</span>
                  <span class="inline-flex items-center justify-center  h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-walter-primary rounded-full dark:bg-blue-900 dark:text-blue-200">{{transactionListData.duprClub}}</span>
                </a>
            </li>
            <li>
                <a href="#" @click="dashboardSelect(dashboardKeys.waitList)" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Club Verification</span>
                  <span class="inline-flex items-center justify-center  h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-walter-primary rounded-full dark:bg-blue-900 dark:text-blue-200">{{transactionListData.waitList}}</span>
                </a>
            </li>
            <li>
                <a href="#" @click="dashboardSelect(dashboardKeys.userList)" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Site Users</span>
                  <span class="inline-flex items-center justify-center  h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-walter-primary rounded-full dark:bg-blue-900 dark:text-blue-200">{{transactionListData.users}}</span>
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
                  <span class="flex-1 ml-3 whitespace-nowrap">Tournaments</span>
                </a>
            </li>
             <li>
                <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Lessons</span>
                </a>
            </li>
          </ul>
      </div>
    </aside>

  </div>
    <!-- Dropdown menu -->
  </div>
  
  <div v-if="dashboardBools.todoList" class="col-span-9" >
    <TodoList  :todoList="todoListMain"  @update="handleDocData" @delete="handleDocData"/>
  </div>

  <div v-if="dashboardBools.duprList" class="col-span-9">
    <DuprClubList :duprList='duprListMain' @addDupr="handleDocData"/>
  </div>
  
  <div v-if="dashboardBools.eventsList" class="col-span-9">
    <EventsList :test='testData'  @deletus="handleDocDelete"/>
  </div>
  <div v-if="dashboardBools.userList" class="col-span-9">
    <UserList :userList="userListMain"/>
  </div>
  <div v-if="dashboardBools.waitList" class="col-span-9">
    <WaitList :waitList="waitListMain"/>
  </div>
</div>

</template>

<script>
import getDocument from '@/composables/getDocument'
import AddMember from '@/components/AddMember'
import DuprClubList from '@/components/DuprClubList.vue'
import TodoList from '@/components/TodoList.vue'
import EventsList from '@/components/EventsList.vue'
import UserList from '@/components/UserList.vue'
import WaitList from '@/components/WaitList.vue'
import getCollection from '@/composables/getCollection'
import getUser from '../composables/getUser'
import transactionCounter from '../composables/updateCounter'

import {db} from '../firebase/config'
import {doc, deleteDoc, updateDoc, deleteField} from 'firebase/firestore'

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
  components: { DuprClubList, TodoList, EventsList, UserList, WaitList  },
  

  setup() {
    //dashboard v-if components
    const dashboardBools = ref({duprList : false, todoList: false, eventsList: false, userList: false, waitList: false})
    //dashboard component key string pair for linking to vue logic
    const dashboardKeys = ref({duprList: 'dupr', todoList: 'todo', eventsList: 'events', userList: 'users', waitList: 'waitList'})
    //dashboard data bool trigger for data singleton
    const dashboardDataBools = ref({duprList : false, todoList: false, eventsList: false, userList: false, waitList: false})
    //holds docRefs for each component when data bool is triggered
    const docRefHolder = ref({duprList : {}, todoList: {}, eventsList: {}, userList: {}, waitList: {}})
    //temp data holders for components
    const todoListMain = ref({})
    const userListMain = ref({})
    const waitListMain = ref({})
    const duprListMain = ref({})
    //used for incremental numbers in sidebar
    const transactionListRef = doc(db, 'dataCounter', 'counters')
    const transactionListData = ref({todo: 20})
    //test dat delete later
    const testData = ref([{idkey: "loading", text: 'loading', priority: '1', timestamp: new Date()}])
    const testData2 = ref([{idkey: "beerFest", text: 'test event', priority: '1', timestamp: new Date()}])
    //to count firestore data reads in testing
    const dataCalls = ref(0)
    //get usered
    const {user} = getUser()
    

    // const { documents:books } = getCollection('members', ['userUid', '==', user.value.uid]) 
    // const { documents:members } = getCollection('walterMlp') 

     onMounted( async ()=>{
      transactionListData.value = await loadDataDoc(transactionListRef, 'obj')      
    })
    //handle doc delete no in use
    const handleDelete = (id)=>{
      const docRef = doc(db, 'walterMlp', id)
      deleteDoc(docRef)         
    }    
    //handle doc udpate  not in use
    const handleUpdate = (member)=>{
      const docRef = doc(db, 'walterMlp', member.id)
      updateDoc(docRef, { isFav: !member.isFav })
    }
     //loads composable getDocument and returns its ref value
    const loadDataDoc = async ( docRef, typeString)=>{
        const {document, error} = await getDocument(docRef, typeString) 
        if(error.value){
          console.log(error.value)
        }        
        return document.value                 
    }    

    //delete this event page simulator
    const simLoad = ()=>{      
      testData.value = testData2.value
    }
    //Handles dashboard components data and v-if to limit data reads
    const dashboardSelect = async (panel)=>{
      dashboardBools.value.duprList = false
      dashboardBools.value.todoList = false
      dashboardBools.value.eventsList = false
      dashboardBools.value.userList = false
      dashboardBools.value.waitList = false
      //triggers which admin panel list will show in main view
      switch(panel){

        case 'dupr':  dashboardBools.value.duprList = true;
        if(!dashboardDataBools.value.duprList){
          docRefHolder.value.duprList = doc(db, 'duprRef', 'mainList') 
          duprListMain.value = await loadDataDoc(docRefHolder.value.duprList, 'list')
          dashboardDataBools.value.duprList = true  }
          
        break;

        case 'todo': dashboardBools.value.todoList = true
        if(!dashboardDataBools.value.todoList){
          docRefHolder.value.todoList = doc(db, 'todoList', 'mainList') 
          todoListMain.value = await loadDataDoc(docRefHolder.value.todoList, 'list')
          dashboardDataBools.value.todoList = true  }         
        break;

        case 'events': dashboardBools.value.eventsList = true;
         await setTimeout(simLoad, 500)
        break;

        case 'users': dashboardBools.value.userList = true;
        if(!dashboardDataBools.value.userList){
          docRefHolder.value.userList = doc(db, 'userRef', 'mainList') 
          userListMain.value = await loadDataDoc(docRefHolder.value.userList, 'list')
          dashboardDataBools.value.userList = true  } 
          console.log('users list', userListMain.value)
        break;

        case 'waitList': dashboardBools.value.waitList = true;
        if(!dashboardDataBools.value.waitList){
          docRefHolder.value.waitList = doc(db, 'waitList', 'mainList') 
          waitListMain.value = await loadDataDoc(docRefHolder.value.waitList, 'list')
          dashboardDataBools.value.waitList = true  }
        break;        
      }

      
    }

    //delete a field id dynamically
    const handleDocData = async (docRefString, fieldId)=>{
      switch(docRefString){
        case 'deleteTodo' : handleDocDelete(docRefHolder.value.todoList, fieldId)
        break;
        case 'addTodo' : handleNewDoc(docRefHolder.value.todoList, fieldId, 'todo')
        break;
        case 'addDupr' : handleNewDoc(docRefHolder.value.duprList, fieldId, 'dupr')
      }
    }
     //delete a field with docRef and id of field
    const handleDocDelete = async (docRef, fieldId) =>{            
            await updateDoc(docRef, {
                [fieldId]: deleteField()
            })
           delete todoListMain.value[fieldId]
           transactionCounter('todo', -1)
           transactionListData.value.todo = transactionListData.value.todo - 1
            dataCalls.value++                
      }

      const handleNewDoc = async (docRef, fieldObject, listType) => {                       
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
            switch(listType){
              case 'todo':
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
                 transactionListData.value.todo = transactionListData.value.todo + 1
                 transactionCounter('todo', 1)
              break;
              case 'dupr':
                  //spread new todo key to current list
                  duprListMain.value = {...duprListMain.value, 
                      [fieldKey] : {
                          name: fieldObject[fieldKey].name,                                    
                          email: fieldObject[fieldKey].email,            
                          phone: fieldObject[fieldKey].phone                          
                      }                 
                  }
                  transactionListData.value.duprClub = transactionListData.value.duprClub + 1
                  transactionCounter('duprClub', 1)
              break;          
            }
            
           dataCalls.value+= 3                
      }     

    return { handleUpdate, handleDelete,handleDocDelete, handleDocData, dashboardSelect,transactionListData, todoListMain, testData, userListMain, duprListMain, waitListMain, dashboardKeys, dashboardBools}
  }
}
</script>

<style>

</style>