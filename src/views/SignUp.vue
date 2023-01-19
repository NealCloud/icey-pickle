<template>
  <!-- <form @submit.prevent="handleSubmit">
    <h2>Sign up</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button v-if="!isPending" >Sign up</button>
  </form> -->
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-24 w-auto" src="../assets/logoWL.png" alt="Walter Lau Pickleball" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-walter-primary">Create an account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{' '}}
          <router-link :to="{name:'login'}" class="font-medium text-walter-secondary hover:text-walter-primary">Login to your account</router-link>
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
            <label for="First Name" class="sr-only">First Name</label>
            <input v-model="first" id="first-name" name="first" type="text" autocomplete="First Name" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-walter-primary focus:outline-none focus:ring-walter-primary sm:text-sm" placeholder="First Name" />
          </div>
          <div>
            <label for="Last Name" class="sr-only">Last Name</label>
            <input v-model="last" id="first-name" name="last" type="text" autocomplete="Last Name" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-walter-primary focus:outline-none focus:ring-walter-primary sm:text-sm" placeholder="Last Name" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:walter-primary focus:outline-none focus:ring-walter-primary sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          
          <div class="flex items-center">
            <!-- <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-walter-primary focus:ring-walter-primary" /> -->
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">{{error}}</label>
          </div>

          <!-- <div class="text-sm">
            <a class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div> -->
        </div>

        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-walter-primary focus:outline-none focus:ring-2 focus:ring-walter-primary focus:ring-offset-2">
            
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/userSignUp'
import { useRouter } from 'vue-router'
import { doc, setDoc } from '@firebase/firestore'
import { db } from '@/firebase/config'


export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const first = ref('')
    const last = ref('')
    
    const {signup, error, isPending, user} = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
      await signup(email.value, password.value)
      if(!error.value){
        const colRef = doc(db, 'users', user.value.uid)

        await setDoc(colRef, {
          first: first.value,
          last: last.value,
          email: email.value,
          isConfirmed: false,
          userId: user.value.uid,
          admin: user.value.uid
        })        
       
       router.push({name:'home'})

      }   
      
    }

    

    return { email, isPending, password, first, last, error, handleSubmit }
  }
}
</script>