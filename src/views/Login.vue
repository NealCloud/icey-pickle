<template>

   <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-24 w-auto" src="../assets/logoWL.png" alt="Walter Lau Pickleball" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-walter-primary">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{' '}}
          <router-link :to="{name:'signup'}" class="font-medium text-walter-secondary hover:text-walter-primary">create an account</router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-walter-primary focus:outline-none focus:ring-walter-primary sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:walter-primary focus:outline-none focus:ring-walter-primary sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div v-if="errorMessage" class="flex items-center">
            <span class="flex w-3 h-3 bg-red-500 rounded-full"></span>
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">{{errorMessage}}</label>
          </div>

          <!-- <div class="text-sm">
            <a class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div> -->
        </div>

        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-walter-primary focus:outline-none focus:ring-2 focus:ring-walter-primary focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-slate-500 group-hover:text-slate-800" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import userLogin from '../composables/userLogin'
import { useRouter } from 'vue-router'
import { LockClosedIcon } from '@heroicons/vue/20/solid'

export default {
  components:{ LockClosedIcon },
  setup() {
    const email = ref('')
    const password = ref('')
    const errorMessage = ref(null)
    const {login, error, isPending} = userLogin()
    const router = useRouter()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if(!error.value){
       router.push({name:'home'})
      } 
      
      if(error.value){
        errorMessage.value = "wrong password or email"
      }
      
    }

    return { email, isPending, error, errorMessage, password, handleSubmit }
  }
}
</script>