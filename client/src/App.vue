<template>
  <div id="app">
    <div id="nav" @click="refreshPage">
      <router-link :to="{ name: 'Home' }">intermoon_</router-link> |
      <router-link :to="{ name: 'Audio' }">audio</router-link> |
      <router-link :to="{ name: 'Visual' }">visual</router-link> |
      <router-link :to="{ name: 'Submit' }">submit</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      refreshPage() {
        setTimeout(function() {
          window.location.reload();
        }, 200);
      }
    };
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #ffffff;
}

#nav {
  padding: 20px;
}
#nav a {
  text-decoration: none;
  font-weight: normal;
  color: #008dff;
}

#nav a.router-link-exact-active {
  color: #000000;
}

/* Global Transitions */

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
