<template>
  
  <!-- <h1>Profile </h1>
  <p>{{userData.first + ' ' + userData.last}} </p>
  <p>{{userData.email}}</p> -->
<div class="grid md:grid-cols-12">
    <aside class="col-span-3">
       <div class="w-full max-w-sm overflow-hidden  rounded-lg shadow-lg bg-gray-200">
    
	<div class="py-4 rounded shadow-md w-60 sm:w-80 bg-gray-400">
		<div class="flex p-4 space-x-4 sm:px-8">
			<div class="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
			<div class="flex-1 py-2 space-y-4">
				<div class="w-full h-3 rounded bg-gray-200"></div>
				<div class="w-5/6 h-3 rounded bg-gray-200"></div>
			</div>
		</div>
		<div class="p-4 space-y-4 sm:px-8">
			<div class="w-full h-4 rounded bg-gray-400"></div>
			<div class="w-full h-4 rounded bg-gray-400"></div>
			<div class="w-3/4 h-4 rounded bg-gray-400"></div>
		</div>
	</div>


    <div class="flex items-center px-6 py-3 bg-walter-primary">
        <!-- <svg aria-label="headphones icon" class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"/>
        </svg> -->
        <svg ref="triangle" class="w-6 h-6  fill-current" version="1.1"  x="0px" y="0px" width="30" height="30" viewBox="0 0 200 200" >
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
        <h1 class="mx-3 text-lg font-semibold ">Level 1</h1>
    </div>

    <div class="px-6 py-4">
        <h1 class="text-xl font-semibold text-gray-800 dark:text-white">{{userData.first + ' ' + userData.last}}</h1>

        <p class="py-2 text-gray-700 dark:text-gray-400">Current Info</p>

        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg aria-label="suitcase icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11H10V13H14V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
            </svg>

            <h1 class="px-2 text-sm">{{userData.phone}}</h1>
        </div>

        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg aria-label="location pin icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"/>
            </svg>

            <h1 class="px-2 text-sm">California</h1>
        </div>

        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg aria-label="email icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
            </svg>

            <h1 class="px-2 text-sm">{{userData.email}}</h1>
        </div>
    </div>
</div>
    </aside>
    <section class="col-span-4"> 		
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Events</h5>
                <!-- <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a> -->
        </div>
        <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <!-- <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> -->
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Status
                                </p>
                                <span class="flex w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <div class="flex-1 items-center min-w-0">
                                <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Test Event
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    San Diego Bay Club
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {{testDate}}
                            </div>
                        </div>
                    </li>                  
                 
                    
                    
                </ul>
        </div>
        </div>

    </section>
    
    <section class="col-span-4"> 		
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Lessons</h5>
                <!-- <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a> -->
        </div>
        <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <!-- <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> -->
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Status
                                </p>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Test Event
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    San Diego Bay Club
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {{testDate}}
                            </div>
                        </div>
                    </li>                  
                 
                    
                    
                </ul>
        </div>
        </div>

    </section>
</div>


</template>

<script>
import { onMounted, ref } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { doc, getDoc } from '@firebase/firestore'
import { db } from '@/firebase/config'
import format from 'date-fns/esm/format/index'

export default {
    setup(){
        
        const route = useRoute()
        const userData = ref({first: '', last: '', email: ''})
        const paramId = ref()
        const testDate = format(new Date(2022, 3, 11), 'MM/dd/yyyy')

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

        return { userData, testDate}
    }
    
}
</script>

<style>

</style>