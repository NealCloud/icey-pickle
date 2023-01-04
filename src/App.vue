<template>
  <NavBar/>  
  <router-view/>     
</template>

<script>
import NavBar from './components/NavBar.vue'

export default ({
  components:{
    NavBar
  },
  setup() {
    
  },
})
</script>


<style>
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 body {  
  font-family: "Poppins";
}

/* .content {
  margin: 0 auto;
  max-width: 500px;
  padding: 0 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
} */

nav a.router-link-exact-active {
  color: rgb(190, 212, 53);
}
</style>
