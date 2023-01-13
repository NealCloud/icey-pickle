<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Member</h3>

    <label for="First">First Name:</label>
    <input type="text" name="first" v-model="first" required>

    <label for="Last">Last Name:</label>
    <input type="text" name="last" v-model="last" required>

    <label for="author">Email:</label>
    <input type="text" name="email" v-model="email" required>

    <button>Add Member</button>
    
  </form>
</template>

<script>
import { ref } from 'vue'
import {db} from '../firebase/config'
import {addDoc, collection} from 'firebase/firestore'
import getUser from '../composables/getUser'

export default {
  setup() {
    const first = ref('')
    const last = ref('')
    const email = ref('')
    const {user} = getUser()

    const handleSubmit = async () => {
      const colRef = collection(db, 'waltermlp')

      await addDoc(colRef, {
        first: first.value,
        last: last.value,
        email: email.value,
        isConfirmed: false,
        admin: user.value.uid
      })

      first.value = ''
      last.value = '' 
      email.value = '' 
    }
    return { handleSubmit, first, last, email }
  }
}
</script>

<style>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}
</style>