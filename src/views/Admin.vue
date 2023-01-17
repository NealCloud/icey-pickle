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
  <div class="fixed top-16 w-72">
      <Listbox v-model="selectedPerson">
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span class="block truncate">{{ selectedPerson.name }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="person in members"
                :key="person.id"
                :value="person"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ person.first }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

</template>

<script>

import AddMember from '@/components/AddMember'
import getCollection from '@/composables/getCollection'
import getUser from '../composables/getUser'

import {db} from '../firebase/config'
import {doc, deleteDoc, updateDoc} from 'firebase/firestore'

import { onMounted, ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

export default {
  name: 'Home',
  components: { AddMember, CheckIcon, ChevronUpDownIcon, Listbox,ListboxLabel, ListboxButton, ListboxOptions, ListboxOption, ListboxButton },
  
  


  setup() {
    const {user} = getUser()
    const selectedPerson = ref("Heya")
    // const { documents:books } = getCollection('members', ['userUid', '==', user.value.uid]) 
    const { documents:members } = getCollection('walterMlp')    
    
    const handleDelete = (id)=>{
      const docRef = doc(db, 'walterMlp', id)
      deleteDoc(docRef)         
    }

    const handleUpdate = (member)=>{
      const docRef = doc(db, 'walterMlp', member.id)
      updateDoc(docRef, { isFav: !member.isFav })
    }

    onMounted(()=>{
      console.log(members)
    }
    )
    
    return { handleUpdate, handleDelete, members, selectedPerson}
  }
}
</script>

<style>
/* .home ul {
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
} */
</style>