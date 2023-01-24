<template>
  
	<section class="py-6 dark:bg-violet-400 dark:text-gray-900">
		<div class="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
			<h1 class="text-5xl font-bold leading-none text-center">Thank you {{firstName}} </h1>
            <p class="pt-2 pb-8 text-xl font-medium text-center">for joining Walter Lau Pickleball Club</p>
			<p class="pt-2 pb-8 text-xl font-medium text-center">Updates to user pages should be ready around February, giving you access to events and clinics</p>
			<!-- <button class="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Learn more</button> -->
		</div>
	</section>


</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {   
    setup(){

		const firstName = ref('')
        const route = useRoute()
		onMounted(()=>{
			firstName.value = route.params.name
		})
        
        return {firstName}
    }
}
</script>

<style>

</style>