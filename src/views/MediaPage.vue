<template>     


	<section class="py-6 dark:bg-gray-800 dark:text-gray-50">
		<div class="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
			<img src="..\assets\highlight1Thumb.jpg" data-modal-target="modal1" data-modal-toggle="modal1" alt="" class="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="..\assets\main3.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="..\assets\clinic1.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="..\assets\clinic2.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="..\assets\paddleCover.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src="..\assets\about1.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src="..\assets\bayclub1.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src="..\assets\clinic3.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 " src="..\assets\clinic4.jpg">
			<img src="..\assets\main2.jpg" alt="" class="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 ">
		</div>
        <h1 class="hubub">Nike Camp at Life Time Fitness in San Clemente, CA - Apr 17/18 2023 </h1>
        <div class="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
			<img src="..\assets\highlight2Thumb.jpg" data-modal-target="modal2" data-modal-toggle="modal2" alt="" class="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="..\assets\clinic5.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="..\assets\clinic6.jpg">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="..\assets\clinic7.jpg">
			<!-- <img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="..\assets\paddleCover.jpg"> -->
			
		</div>
	</section>

    <!-- Main modal -->
<div id="modal1" tabindex="-1"  aria-hidden="true" class=" fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        <video class="w-full h-auto max-w-full" controls>
          <source src="@/assets/highlight1.mp4" type="video/mp4">
             Your browser does not support the video tag.
        </video>
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
         
          
            <!-- Modal footer -->
            <div class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <!-- <button data-modal-hide="modal1" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button> -->
                <button  @click="videoPlay()" data-modal-hide="modal1" type="button" class="text-gray-500 justify-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
            </div>
        </div>
    </div>
</div>

<div id="modal2" tabindex="-1"  aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        <video class="w-full h-auto max-w-full" controls>
          <source src="@/assets/highlight2.mp4" type="video/mp4">
             Your browser does not support the video tag.
        </video>
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
         
          
            <!-- Modal footer -->
            <div class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <!-- <button data-modal-hide="modal2" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button> -->
                <button  @click="videoPlay()" data-modal-hide="modal2" type="button" class="text-gray-500 justify-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
            </div>
        </div>
    </div>
</div>


</template>



<script>
import {   initModals    } from "flowbite"
import {onMounted, ref} from 'vue'

export default {
    setup(){      
        
     onMounted(() => {
            initModals();
    })

    const videoPlay = ()=>{

    }

        return {videoPlay}
    }    
}
</script>

<style>

</style>