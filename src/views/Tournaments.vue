<template>
  <div class="md:grid grid-cols-1  ">
    <div v-show="!isMobile" class="hidden md:grid lg:mx-auto">
        <video  @click="videoPlay()"  muted loop ref="myVideo" >
        <source src="@/assets/highlight1.mp4" loading="lazy" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>  
    </div>
    
    <div class="text-5xl m-4 col-span-full">
        <p>Tournament Schedule</p>
    </div>
    <div v-for="tourna in tournaList" :key="tourna.id" class="grid grid-cols-6 col-span-full ">
    <div class="sm:col-span-2 sm:row-span-full col-span-full">
        <img :src="tourna.pic" alt="Masters At Rancho Mirage" class="object-fill rounded-lg m-auto" loading="lazy" />
    </div>
    <form class="col-span-full md:col-span-4 p-6 grid-cols-4">
        <div class="flex flex-wrap items-baseline col-span-4">
        <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
            {{tourna.title}}   
        </h1>
        <div class="flex-auto text-lg font-medium text-slate-500">
            {{tourna.date}}
        </div>      
        </div>
        <div class="grid col-span-4 mt-4 mb-2 pb-3 border-b border-slate-200">
        <div class="text-sm font-medium">
            <label v-for="(div,index) in tourna.divs"  :key="index" >
            <input class="sr-only peer" name="size" type="radio" value="s" checked />
            <div class=" gap-x-0.5 text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                {{div.pro}} 
            </div>
            </label>      
        </div>
        </div>
        <div class="flex space-x-4 mb-5 text-sm font-medium">
        <div class="flex-auto flex space-x-4 pr-4">
            <button @click="goTo(tourna.urlMain)" class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
            Site
            </button>
            <button @click="goTo(tourna.urlMap)"  class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
            Map
            </button>
        </div>
        <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
            <svg ref="triangle" version="1.1"  x="0px" y="0px" width="30" height="30" viewBox="0 0 200 200" >
                <circle display="none" fill="none" stroke="#000000" stroke-width="3.357" stroke-miterlimit="10" cx="99.25" cy="99.75" r="89.016"/>
                <circle fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" cx="99.25" cy="99.75" r="89.016"/>
                <ellipse transform="matrix(0.8184 -0.5747 0.5747 0.8184 -14.5245 43.5424)" cx="61.625" cy="44.75" rx="9.375" ry="6.25"/>
                <ellipse transform="matrix(0.8659 0.5002 -0.5002 0.8659 81.1005 -15.0512)" cx="68.625" cy="143.75" rx="9.376" ry="6.25"/>
                <ellipse transform="matrix(0.6537 -0.7567 0.7567 0.6537 -54.6163 172.1336)" cx="160.776" cy="145.744" rx="9.375" ry="4.729"/>
                <ellipse transform="matrix(-0.19 -0.9818 0.9818 -0.19 116.235 292.5521)" cx="178.793" cy="98.33" rx="9.375" ry="4.042"/>
                <ellipse transform="matrix(0.5906 0.807 -0.807 0.5906 102.6214 -107.0318)" cx="156.797" cy="47.624" rx="9.375" ry="1.846"/>
                <ellipse transform="matrix(0.9884 0.1519 -0.1519 0.9884 5.3326 -16.9363)" cx="113.52" cy="26.435" rx="9.375" ry="3.088"/>
                <ellipse transform="matrix(0.9903 -0.139 0.139 0.9903 -21.9826 17.4477)" cx="113.962" cy="166.154" rx="9.375" ry="3.822"/>
                <ellipse cx="43.75" cy="96.875" rx="6.25" ry="9.375"/>
                <circle cx="99" cy="66.5" r="6.25"/>
                <circle cx="97" cy="119.5" r="6.25"/>
                <circle cx="144" cy="117.5" r="6.25"/>
                <circle cx="139" cy="67.5" r="6.25"/>
            </svg>
        </button>
        </div>
        <p class="text-sm text-slate-500">
        {{tourna.endBlurb}}
        </p>
    </form>
    </div>

    </div>

</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import masterPic from '@/assets/masterHyunda.jpg'
import arizonaPic from '@/assets/arizonaPPA.jpg'
import osioShootOut from '@/assets/osioShootout.jpg'
import appNewport from '@/assets/appNewport.jpg'
import { onMounted, onUnmounted } from '@vue/runtime-core'

export default {
  setup(){

   

   onMounted(()=>{
       
        if( screen.width <= 600 ) {
                isMobile.value = true;
                console.log("mobile detected")
            }
            else {
                isMobile.value = false;
                myVideo.value.play();
            }
    })


    const isMobile = ref(true)
    const myVideo = ref(null)
    const router = useRouter()
    const tournaList = ref([
        {
            title:"APP Newport Beach Open ",
            pic: appNewport,
            date:"June 28 - July 2, 2023",
            divs: [ 
                {pro:" Mixed Doubles Pro "},
             {pro:"Men's Pro Doubles | Partner: Daniel Leiderman"}             
             ],
            urlMain: "https://apptour.org/usa-pickleball-announces-2023-national-championships-series-schedule/",
            urlMap: "https://www.google.com/maps/place/11+Clubhouse+Dr,+Newport+Beach,+CA+92660/@33.6105566,-117.880961,16z/data=!4m6!3m5!1s0x80dce062f3e8d7c9:0x9e6f9a326b0349e9!8m2!3d33.6105789!4d-117.879813!16s%2Fg%2F11gfnz3wmm",
            endBlurb: "Golden Ticket Tournament",
            id: 4
        },
        {
            title:"PPA Ogio Shootout - Newport Beach, CA ",
            pic: osioShootOut,
            date:"April 21-23, 2023",
            divs: [ {pro:"4/21 - Mixed Doubles Pro "},
             {pro:"4/22 - Men's Pro Doubles | Partner: Golden Tate"},
             {pro:"4/23 - Championship Sunday"}
             ],
            urlMain: "https://www.ppatour.com/events/newport-beach-shootout/",
            urlMap: "https://www.google.com/maps/place/11+Clubhouse+Dr,+Newport+Beach,+CA+92660/@33.6105566,-117.880961,16z/data=!4m6!3m5!1s0x80dce062f3e8d7c9:0x9e6f9a326b0349e9!8m2!3d33.6105789!4d-117.879813!16s%2Fg%2F11gfnz3wmm",
            endBlurb: "Watch on CBS live! 4/22,   1-2pm",
            id: 3
        },
        {
            title:"The Carvana Arizona Grand Slam - Mesa, AZ ",
            pic: arizonaPic,
            date:"February 15-19, 2023",
            divs: [ {pro:"2/16 - Men's Singles Pro"},
             {pro:"2/17 - Mixed Doubles Pro"},
             {pro:"2/18 - Men's Doubles Pro"},
             {pro:"2/19 - Championship Sunday"}
             ],
            urlMain: "https://www.ppatour.com/events/arizona-grand-slam/",
            urlMap: "https://www.google.com/maps/place/Bell+Bank+Park/@33.298451,-111.626002,745m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x8f58ae0ae6c6013b!8m2!3d33.298451!4d-111.626002",
            endBlurb: "Thank you for your support!",
            id: 2
         },
         {
            title:"The Hyundai Masters - Mission Hills, CA ",
            pic: masterPic,
            date:"January 12-15, 2023",
            divs: [ {pro:"1/12 - Men's Singles Pro "},
             {pro:"1/13 - Mixed Doubles Pro"},
             {pro:"1/15 - Men's Doubles Pro"}
             ],
            urlMain: "https://www.ppatour.com/events/the-masters/",
            urlMap: "https://www.google.com/maps?q=34600+Mission+Hills+Drive+Rancho+Mirage,+CA,+92270+United+States",
            endBlurb: "",
            id: 1
        },
         ])
       
         
    // const vidBtn = ref(null)
    const videoPlay = () => {
      if (myVideo.value.paused) {
        myVideo.value.play();
        // vidBtn.value.innerHTML = "Pause";
      } else {
        myVideo.value.pause();
        // vidBtn.value.innerHTML = "Play";
      }  }

  const goTo = (url)=>{    
    window.open(url, '_blank')    
  }
    return {myVideo, videoPlay, goTo, tournaList, isMobile}
  }

}
</script>

<style>

</style>