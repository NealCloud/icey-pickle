<template>
  <!-- <div class="home">
    <img alt="Walter Lau logo" src="../assets/logo.png">
    <HelloWorld msg="Walter Lau Pickleball"/>
  </div> -->
      <div class=" gridSplash h-max-full">         
        
        <div class=" bg-black col-span-full row-span-full md:col-start-2 md:col-end-5  md:row-start-1 md:row-end-4 ">
            <img src="../assets/main1.jpg" aria-hidden="true" class=" " > 
        </div>
        <div class=" col-start-3 row-start-6">
          <img src="../assets/logoWL.png" alt="">
        </div>      
      </div>        
        <!-- <main class="px-16 py-6  bg-gray-100">            

       <div class="card hover:shadow-lg">        
            <img src="img/sponser.jpg" alt="noodles" class="h-32 sm:h-48 w-full object-cover">
            <div class="m-4">
              <span class="font-bold">Sponser Ipsum</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
              <svg class="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>25 mins</span>
            </div>
        </div>  
        </main> -->   
      <!-- sizes="(min-width: 500px) 480w, 650w "
        class="-z-20 object-cover object-center distance-1 sepia" -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup(){
    
  }
}
</script>
<style >
  .gridSplash{
    display: grid;    
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
     
  }
  .spacer{
    width: 100%;
    height: 100%;
  }
  .color2{
    background-color: teal;
  }
</style>