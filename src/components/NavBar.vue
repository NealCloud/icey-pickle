<template>
  <Popover class="relative bg-white z-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <!-- logo -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link :to="{name:'home'}">
            <span class="sr-only">Walter Lau Pickleball</span>
            <img class="h-8 w-auto sm:h-10" src="../assets/LogoWL.svg" alt="" />
          </router-link>
        </div>
        <!-- mobile 3 bar menu -->
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          
          <router-link v-for="nav in mobileList" :key="nav.id" :to="{name:nav.href}" class="text-base font-medium text-gray-900 hover:text-walter-primary">{{nav.name}}</router-link>
          <router-link v-if="navAdmin" :to="{name:'admin'}" class="text-base font-medium text-gray-900 hover:text-walter-primary">Admin</router-link>
          <!-- More Menu Options -->
          <!-- <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2']">
              <span>More</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in resources" :key="item.name" :href="item.href" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                      <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-walter-primary" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                  <div class="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                    <div>
                      <h3 class="text-base font-medium text-gray-500">Recent Posts</h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li v-for="post in recentPosts" :key="post.id" class="truncate text-base">
                          <a :href="post.href" class="font-medium text-gray-900 hover:text-gray-700">{{ post.name }}</a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a href="#" class="font-medium text-gray-900 hover:text-walter-primary">
                        View all posts
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover> -->

        </PopoverGroup>
        <!-- Sign in Nav -->
        <div v-if="!user" class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <router-link :to="{name:'login'}" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</router-link>
          <router-link :to="{name:'signup'}" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-walter-primary">Sign up</router-link>
        </div>
        <div v-if="user"  class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">          
          <button @click="handleLogout" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Logout</button>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel  v-slot="{ close }" focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="../assets/logo.png" alt="Walter Lau Pickleball" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-400 hover:bg-walter-primary hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <!-- Mobile Nav List -->
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link v-for="item in mobileList" :key="item.name" @click="accept(close)" :to="{name:item.href}"   class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-walter-primary" aria-hidden="true" />
                  <span    class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                </router-link>               
              </nav>
            </div>
          </div>
          <!-- Login Mobile -->
          <div class="space-y-6 py-6 px-5" v-if="!user">
           
            <div>
              <router-link to="signup"  @click="accept(close)" class="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-walter-primary">Sign up</router-link>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Already signed up?
                {{ ' ' }}
                <router-link to="login" @click="accept(close)" class="text-black hover:text-walter-primary">Log in</router-link>
              </p>
            </div>
          </div>
           <div class="space-y-6 py-6 px-5" v-if="user">
           
            <div>
              <a   @click="accept(close, true)" class="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-walter-primary">Logout</a>

            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>



<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { useRouter } from 'vue-router'
import { auth } from '../firebase/config'
import {signOut} from 'firebase/auth'
import getUser from '../composables/getUser'
import { ref, watchEffect } from '@vue/runtime-core'

export default{
    components:{
        Popover, PopoverButton, PopoverGroup, PopoverPanel, Bars3Icon, ChevronDownIcon, XMarkIcon
    },
    setup(){
      const {user} = getUser()
      const router = useRouter()
      const navAdmin = ref(false)

      const handleLogout = () => {     
        signOut(auth)
        router.push('/Login') 
      }      

      watchEffect(()=>{
        if(!user.value){
          console.log('user switch')
          navAdmin.value = false
        }
        else{
          if(user.value.uid == '37gKEAuWzfYbDk5d1Fq0aR158Oh2' || user.value.uid == "34343")
          navAdmin.value = true
        }
      }) 

      const mobileList = [
        { 
            name: 'Walter Lau',
            href: 'about',
            icon: LifebuoyIcon,
            id: 1
        },
        {
            name: 'Sponsors',
            href: 'sponsor',
            icon: ShieldCheckIcon,
            id: 2
        },
        {
            name: 'Events',
            href: 'events',
            icon: CalendarIcon,
            id: 3
        },
        {
            name: 'Tournaments',
            href: 'tournaments',
            icon: ShieldCheckIcon,
            id: 4
        }
      ]
        
        const callsToAction = [
            // { name: 'Watch Demo', href: '#', icon: PlayIcon },
            // { name: 'Contact Sales', href: '#', icon: PhoneIcon },
        ]
      const resources = [
        {
            name: 'Help Center',
            description: 'Get all of your questions answered in our forums or contact support.',
            href: '#',
            icon: LifebuoyIcon,
        },
        {
            name: 'Guides',
            description: 'Learn how to maximize our platform to get the most out of it.',
            href: '#',
            icon: BookmarkSquareIcon,
        },
        {
            name: 'Events',
            description: 'See what meet-ups and other events we might be planning near you.',
            href: '#',
            icon: CalendarIcon,
        },
        { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
      ]
      const recentPosts = [
        { id: 1, name: 'Boost your conversion rate', href: '#' },
        { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
        { id: 3, name: 'Improve your customer experience', href: '#' },
      ]
      

      const handleNavClick = (togo)=>{
        console.log('going to ' + togo)            
        router.push({name: togo})
      }
      const accept = (close, mobile)=> {        
          close()
          if(mobile){
            handleLogout();
          }
      }        
      
      return {recentPosts, callsToAction, resources, mobileList, navAdmin, handleNavClick, accept, handleLogout, user}
  }
}



</script>