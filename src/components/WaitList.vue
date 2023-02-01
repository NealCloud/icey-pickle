<template>
<h1>WaitList</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Club
                    </th>                                  
                    <th scope="col" class="px-6 py-3">
                        Profile Page
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in waitList" :key=user.userid class="bg-white border-b hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{user.name}} 
                    </th>
                    <td class="px-6 py-4">
                        {{user.email}}
                    </td>
                    <td class="px-6 py-4">
                        {{user.joinClub}}
                    </td>                    
                    <td class="px-6 py-4">                        
                        <button type="button" @click="goToProfile(user.userid)"  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Profile</button>
                    </td>              
                    <!-- <td class="px-6 py-4">
                        <button type="button"  @click="handleDelete(user.idkey)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    </td> -->
                </tr>         
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
import { useRouter } from 'vue-router'


export default {
    props: ['waitList'],
    setup(props, context){
        
        const router = useRouter()
        const docRef = doc(db, "waitList", "mainList");        
        //trigger the doc read on mount 
        //onMounted(()=>{ console.log("user list: ", props.userList)})       
        
        const dataCalls = ref(0)     

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
        
        const handleDelete = async (userkey) =>{            
            await updateDoc(docRef, {
                [userkey]: deleteField()
            })
            delete waitList.value[userkey] 
            dataCalls.value++      
        }

        const goToProfile = (idkey)=>{
            router.push({            
                name:'profile',  params: { userid: idkey  }
          })
           
        }

        return { dataCalls, handleDelete, timeLord, goToProfile}
    }
}
</script>

<style>

</style>