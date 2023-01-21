<template>
  <div>
    <h1>Users</h1>
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
        
        const docRef = doc(db, "users", "mainList");        
        //trigger the doc read on mount 
        onMounted(()=>{docGetter()})       
        
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