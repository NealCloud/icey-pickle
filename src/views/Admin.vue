<template>
  <div class="home">
    <ul>
      <li v-for="member in members" :key="member.id">

        <div class="details">
          <h3 @click="handleDelete(member.id)">{{ member.first }}</h3>
          <p>By {{ member.last }}</p>
        </div>
        <div class="icon" @click="handleUpdate(member)">
          <span v-if="member.isFav" class="material-icons">favorite</span>
          <span v-else class="material-icons">cancel</span>
        </div>
      </li>
    </ul>
    <AddMember />
  </div>
</template>

<script>

import AddMember from '@/components/AddMember'
import getCollection from '@/composables/getCollection'
import getUser from '../composables/getUser'

import {db} from '../firebase/config'
import {doc, deleteDoc, updateDoc} from 'firebase/firestore'

export default {
  name: 'Home',
  components: { AddMember },
  setup() {
    const {user} = getUser()
    // const { documents:books } = getCollection('members', ['userUid', '==', user.value.uid]) 
    const { documents:members } = getCollection('members')    
    
    const handleDelete = (id)=>{
      const docRef = doc(db, 'members', id)
      deleteDoc(docRef)         
    }

    const handleUpdate = (member)=>{
      const docRef = doc(db, 'members', member.id)
      updateDoc(docRef, { isFav: !member.isFav })
    }

    return { handleUpdate, handleDelete, members}
  }
}
</script>

<style>
.home ul {
  padding: 0;
}
.home li {
  list-style-type: none;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}
.home li .details {
  margin-right: auto;
}
.home li h3 {
  margin: 0;
  margin-bottom: 4px;
}
.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}
.home li p {
  margin: 0;
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}
</style>