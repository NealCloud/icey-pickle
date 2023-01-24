<template>
  
  <h1>Profile </h1>
  <p>{{userData.first + ' ' + userData.last}} </p>
  <p>{{userData.email}}</p>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { doc, getDoc } from '@firebase/firestore'
import { db } from '@/firebase/config'

export default {
    setup(){
        
        const route = useRoute()
        const userData = ref({})
        const paramId = ref()
        onMounted(()=>{
            paramId.value = route.params.userid
            profileGetter(paramId.value)
        })

        const profileGetter = async (docid)=> {   
            const docRef = doc(db, "users", docid);            
            let docSnap = await getDoc(docRef)
            if (docSnap.exists()) {              
                userData.value = ({ ...docSnap.data()})
                  
            } else {
                // doc.data() will be undefined in this case
                console.log("No such profile!");
            }
        }

        return { userData}
    }
    
}
</script>

<style>

</style>