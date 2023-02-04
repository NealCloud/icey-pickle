<template>
  <!-- <div class="about">
    <h1>Walter Lau Profile Page</h1>
    <p>Director of Pickleball at the El Camino Country Club</p>
    <p> Fairbanks Ranch Gated Community HOA Resident Pro</p>    
    <p>2022 Minto US Open Champion (Naples, Florida)</p>
    <p>2022 Margaritaville Nationals Champion(Indian Wells Tennis Garden, CA)</p>
  </div> -->
   <main class="grid grid-cols-1 md:grid-cols-6 auto-rows-auto" >
    <div class="panel welcome p-3 row-span-full col-span-full  lg:col-span-2 md:col-span-3 grid grid-cols-1 auto-rows-auto ">
      <nav>
        <router-link :to="{name:'home'}">Home</router-link>
        <!-- <a href="">Resume</a>
        <a href="">Contact</a> -->
      </nav>      
      <div class="fontFamily-Poppins text-5xl">
          Walter Lau    
      </div>
      <footer>
        <!-- <p  class="p-3"> Former tennis coach and seasoned athlete, Walter discovered Pickleball during the pandemic and quickly took to the growing sport. 
          Now he has aspirations to grow with the sport and help shape its future with clubs, leagues and more.</p> -->
          <p>
            This past year's 2022 Minto U.S. Open and 2022 Margaritaville Nationals Gold Medalist.
          </p>
          <p>
            Walter was a Top-10 ranked junior tennis player in the USTA for both singles & doubles, a 4-star tennis recruit to UCSD, and a tennis and pickleball coach at a number of country clubs in San Diego and Orange County.
          </p>
          <p>
            He is currently a sponsored pickleball player competing in tournaments throughout the U.S. He has also been slected as an Ambassador for the USAPA and is a certified coach providing lessons and clinics in San Diego and Orange County
          </p>
          <p>
            Walter bings ample experience in directing dynamic clinics, leagues, tournaments, and events.
          </p>
          <p>
            In addition to his tennis experience, Walter was a certified personal trainer who still loves to keep in shape via calisthenics, plyometrics, and by playing competitive sports including basketball, volleyball, and other racket sports such as racquetball, badminton, and ping pong.
          </p>
          <p>
            Be on the lookout for various events he will be putting on for our pickleball community in the comming months.
          </p>
      </footer>
    </div>
    <div class="md:mx-2 mx-0 my-2 panel about lg:row-span-full  lg:col-span-2  md:row-span-3  md:col-span-3  grid grid-cols-1 auto-rows-auto">
      <div class="col-span-1 row-span-2">
        <img src="../assets/podiumDouble.jpg" alt="main pic">
      </div>      
      <div class="text  p-3 bg-walter-primary col-span-1 row-span-3">        
            <p>2022 Minto US Open Champion</p>
            <span> Naples, Florida</span><br>
             <i class='fas fa-medal'></i>
            <p>2022 Margaritaville Nationals Champion</p>
            <span> Indian Wells Tennis Garden, CA</span>
      </div>
    </div>
    <div class="md:mx-2 mx-0 my-2 panel photos lg:row-span-full col-span-full  lg:col-span-2 md:row-span-3  md:col-span-3 grid grid-cols-2 auto-rows-auto">
      <div class="my-2 text p-3 bg-walter-primary lg:col-span-2 lg:row-span-1 col-span-full row-span-2">        
        <p>Director of Pickleball</p>
          <span>El Camino Country Club</span><br>
           <i class='far fa-compass'></i>
        <p>Resident Pickleball Pro</p> 
        <span>Fairbanks Ranch Estates</span> 
      </div>
      <div class="lg:col-span-2 lg:row-span-2 col-span-full row-span-4">
        <img   src="../assets/coach.jpg" alt="landscape pic">
      </div>
      
    </div>
    <div class="md:mx-2 mx-0 my-2 panel about lg:col-span-2  md:row-span-3  md:col-span-3  grid grid-cols-1 auto-rows-auto">
      <div class="col-span-1 row-span-2">
        <img src="../assets/about3.jpg" alt="main pic">
      </div>      
      <div class="text  p-3 bg-walter-primary col-span-1 row-span-3 my-1">        
            <p>Pickleball Pro</p>
            <span> Fairbanks Ranch Country Club, </span><br>             
            <p>Bay Club of Carmel Valley,</p>
            <i class='fab fa-d-and-d'></i>
            <p>The Bridges Country Club at Rancho Santa Fe</p>
            <span> </span>
      </div>
    </div>
     <div class="panel photos col-span-full  lg:col-span-2 md:row-span-3  md:col-span-full grid grid-cols-2 auto-rows-auto">
      <div class="text p-3 bg-walter-primary lg:col-span-2 lg:row-span-1 col-span-full row-span-2">        
        <i class='far fa-compass'></i> <br>
        <p>Club Owner</p>          
           
           <span>DUPR - Walter Lau Pickleball</span>       
      </div>
      <div class="lg:col-span-2 lg:row-span-2 col-span-full row-span-4">
        <img src="../assets/duprCheck.jpg" alt="landscape pic">
      </div>
      
    </div>
  </main>
</template>



<script>
import { initTooltips, initDropdowns  } from "flowbite"
import {onMounted, ref} from 'vue'

export default {
    setup(){
        const dropDowner = ref(['mario', 'lugio', 'peach'])
        const memberTest = ref([
            {id: 1, first: 'billy', last: 'gaonzo', email: 'ger@gmail.com'},            
            {id: 2, first: 'bozo', last: 'sfeged', email: 'gdfeer@gmail.com'}
        ])
        
        const keymaster = Object.keys(memberTest.value[0])

        console.log(keymaster)

        onMounted(()=>{ initTooltips(), initDropdowns();})

        return {dropDowner, memberTest}
    }    
}
</script>

<style>

</style>