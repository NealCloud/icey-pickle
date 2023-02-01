<template>
  <form @submit.prevent="handleSubmit">
    <div class="grid gap-6 mb-6 md:grid-cols-4">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input v-model="first" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input v-model="last" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input v-model="phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="714-454-4678" pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}" >
        </div>     
    </div>
  
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Member</button>
</form>  
<form @submit.prevent>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input v-model="searchWord"  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Names  Email ..." required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
  
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
                    Phone
                </th>                
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="member in filteredDupr" :key=member.id class="bg-white border-b hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{member.name}}
                </th>
                <td class="px-6 py-4">
                    {{member.email}}
                </td>
                <td class="px-6 py-4">
                    {{member.phone}}
                </td>                               
                <td class="px-6 py-4">
                    <!-- <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> -->
                </td>
            </tr>
                  
        </tbody>
    </table>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import { addDoc, collection, getDocs, limit, query, serverTimestamp } from '@firebase/firestore'
import { db } from '@/firebase/config'
import { computed, onMounted } from '@vue/runtime-core'
import transactionCounter from '../composables/updateCounter'

export default {
    props: ['duprList'],
    emits: ['addDupr'],
    setup(props, context){       
        const members = [{id: 1, email: 'df', first: 'hey', last: 'mark', phone: 123}]
        const first = ref('')
        const last = ref('')
        const email = ref('')
        const phone = ref('')
        const {user} = getUser()
        const searchWord = ref('')

        const memberData = ref([])
        const mlpRef = collection(db, 'duprClub') 

        onMounted(()=>{
            //getMembers()
            console.log('dupr club', props.duprList)
        })

        const handleSubmit = async () => {
            let newMember = {
                first: first.value,
                last: last.value,
                email: email.value,
                isConfirmed: false,
                phone: phone.value,
                userId: null,
                creator: user.value.uid,
                timestamp: serverTimestamp()  
            }
            const duprdocRef = await addDoc(mlpRef, newMember )

            newMember = {[duprdocRef.id]: { 
                name: first.value + ' ' + last.value,               
                email: email.value,
                phone: phone.value               
                }}

            context.emit('addDupr', 'addDupr', newMember);

                //memberData.value.push(newMember)
                console.log('succes add')
                first.value = ''
                last.value = '' 
                email.value = ''
                phone.value = '' 
                transactionCounter('duprClub', 1)
        }

        const filteredDupr = computed(() => {
            const newData = ref([])
           
            for (const property in props.duprList) {
                if(props.duprList[property].name.includes(searchWord.value)){
                    newData.value.push({...props.duprList[property]})
                }
                        
            }

            // let tester = newData.value.filter((item)=>{
            //     if(item.name.includes(searchWord)) return true
            // })
            
            console.log(typeof newData.value, searchWord.value)
            return newData.value
            // for (const property in props.duprList) {
            //     let keyPair = props.duprList[property]
            //     if(keyPair.name.includes(searchWord.value)){
            //         newData = {...newData, keyPair}
            //     }           
                    
            // }
            
              
        })

        const getMembers = async()=>{
            const memberFirst = query(collection(db, "walterMlp"), limit(2));
            const documentSnapshots = await getDocs(memberFirst);
            documentSnapshots.docs.forEach(doc => {
                memberData.value.push({ ...doc.data(), id: doc.id})         
            })
        }        

        return {members, first, last, email, phone, memberData, searchWord, filteredDupr, handleSubmit}
    }
}
</script>

<style>

</style>