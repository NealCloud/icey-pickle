<template>
	<!-- <section class="dark:bg-gray-800 dark:text-gray-100">
		<div class="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
			<h2 class="text-2xl font-semibold sm:text-4xl">Events</h2>
			<p class="mt-4  dark:text-gray-400">To View all Events</p>
            <router-link :to="{name:'login'}" class="font-medium text-walter-secondary mb-8 hover:text-walter-primary">Login to your account</router-link> 
			<div class="space-y-4">

				<details class="w-full border rounded-lg bg-slate-200 ">
                    <summary class="flex justify-evenly align-bottom px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                         <div>
                            <span class="flex w-8 h-8 bg-green-500 rounded-full"></span>
                            <p>Full</p>
                         </div>                         
                         <h1 class="text-xl mx-2 font-bold">Backyard 2 Clinic</h1>
                         <span>12 June</span>                           
                    </summary>
                    <div class="pt-6 pb-4 space-y-2 bg-slate-400">                         
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                        <a rel="noopener noreferrer" href="#" class="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        </a>
                    </div>                    
				</details>
				<details class="w-full border rounded-lg bg-slate-200">
					<summary class="flex justify-evenly align-bottom px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                        <p>Test title?</p> 
                        <span>12 June</span>   
                    </summary>
                    <div class="pt-6 pb-4 space-y-2 bg-slate-400">
                        <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
				<div class="flex w-full space-x-2 sm:space-x-4">
					<img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera">
					<div class="flex flex-col justify-between w-full pb-4">
						<div class="flex justify-between w-full pb-2 space-x-2">
							<div class="space-y-1">
								<h3 class="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
								<p class="text-sm dark:text-gray-400">Classic</p>
							</div>
							<div class="text-right">
								<p class="text-lg font-semibold">59.99€</p>
								<p class="text-sm line-through dark:text-gray-600">75.50€</p>
							</div>
						</div>
						<div class="flex text-sm divide-x">
							<button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
									<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
									<rect width="32" height="200" x="168" y="216"></rect>
									<rect width="32" height="200" x="240" y="216"></rect>
									<rect width="32" height="200" x="312" y="216"></rect>
									<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
								</svg>
								<span>Remove</span>
							</button>
							<button type="button" class="flex items-center px-2 py-1 space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
									<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
								</svg>
								<span>Add to favorites</span>
							</button>
						</div>
					</div>
				</div>
			</li>                      
                    </div>					
				</details>				
			</div>
		</div>
	</section>  -->
   
	<section class="py-6 dark:bg-gray-800 dark:text-gray-50">
		<div class="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
			<img src="https://source.unsplash.com/random/301x301/" alt="" class="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6">
			<img alt="" class="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7">
			<img src="https://source.unsplash.com/random/302x302/" alt="" class="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square">
		</div>
	</section>

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

        

        // onMounted(()=>{ initTooltips(), initDropdowns();})

        return {dropDowner, memberTest}
    }    
}
</script>

<style>

</style>