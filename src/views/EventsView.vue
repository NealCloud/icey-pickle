<template>
        <!-- Middle Pic Offset  -->
  <div class="eventBanner h-48 m-4 dupr md:absolute hidden rounded-lg border-8  shadow-sm  md:flex md:justify-end  bg-slate-50 ">        
    <div class="w-4/5 justify-center mt-5 p-5 text-3xl">
      <p class="club align-middle">New Partnership</p>
    </div>    
    <button type="button">
      <img src="../assets/logoWL.png" class="p-2 w-44 object-cover" alt="DUPR iOS App">
    </button>          
    <button type="button">
      <img src="../assets/NewPartnership2.png" class="p-2 w-44 object-cover" alt="DUPR Android App">
    </button>          
  </div>   
  <div class="grid grid-cols-6 grid-rows-auto gap-4 m-4">
   <!-- first half -->
    <div class="col-span-full md:col-span-4">
       <p class="glow text-4xl p-6">Ongoing updates
        <span class="text-indigo-500">DUPR </span>
       Clinics and Camps!</p> 
       <div>        
      </div>
              <!-- Middle Pic Offset  -->       
    </div>
    <!-- right half  -->
    <div class="rounded-sm col-span-full md:col-span-2  bg-walter-primary">      
      <div class="col-span-full md:col-span-2  ">
        <p class="grow club text-3xl">Events</p>        
      <div class="h-28 m-4 dupr rounded-lg overflow-hidden border-2 shadow-sm flex justify-between items-center  bg-slate-50 ">         
          <img src="../assets/elcamino.png" class="aspect-square  w-24 " alt="DUPR iOS App">
          <div class="text-xl font-medium mr-6">
            <button v-for="(clinic,index) in clinics"  :key="index" >
              <input class="sr-only peer" name="size" type="radio" value="s" checked />
              <div class=" gap-x-0.5 text-slate-900 ">
                  {{clinic.name}} 
              </div>
            </button>      
        </div>
      </div>
      <div class="h-28 m-4 dupr rounded-lg overflow-hidden border-2 shadow-sm flex justify-between  items-center bg-slate-50 ">         
          <img src="../assets/elcamino.png" class=" w-24 aspect-square" alt="DUPR iOS App">
          <button>
          
          <div class="mr-6">           
              <p  class="text-xl">Memorial Day Live Ball Event - 6/27</p>           
          </div> 
          </button>
      </div>      
      </div>
    </div>
     
  </div>  
  <div class="col-span-full h-12 bg-walter-primary">
    
  </div>
  
</template>

<script>
export default {
    data(){ 
      return {
        clinics : [
          {name: "Live Ball Fridays 11:30 El Camino Country Club"}          
        ]
      }
    }
}

</script>

<style>
.nature{
  background-color: white;
  color: rgb(224, 46, 46);
  font-size: 25vw; 
  font-weight: bold;
  margin: 0 auto;
  padding: 10px;
  width: 50%;
  text-align: center;
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode:saturation;
}
.club{
  color: #FFFFFF;

  text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
}
.glow { 

  font-family: 'Concert One', 'Times New Roman', serif
}

.eventBanner{
  left: 10%;
  top: 60%;
  width: 70%;
}


        
</style>