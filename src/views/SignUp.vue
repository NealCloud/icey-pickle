<template>
  <form @submit.prevent="handleSubmit">
    <h2>Sign up</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button v-if="!isPending" >Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/userSignUp'
import { useRouter } from 'vue-router'


export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const {signup, error, isPending} = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
      await signup(email.value, password.value)
      if(!error.value){
       router.push({name:'home'})
      }   
      
    }

    return { email, isPending, password, handleSubmit }
  }
}
</script>