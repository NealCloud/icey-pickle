<template>
  
  <h1>Profiles</h1>
</template>

<script>
import { onMounted } from "@vue/runtime-core"
import { useRoute } from "vue-router"

export default {
    setup(){
        const route = useRoute()
        onMounted(()=>{
            console.log(route.params)
        })
    }
    
}
</script>

<style>

</style>