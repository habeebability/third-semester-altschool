<template>
  <div class="bg-black w-screen h-screen">
    <nav class="p-3 h-1/6 sticky top-0 z-20 bg-black">
      <div class="flex justify-center md:justify-around">
        <mdicon class="hidden md:block text-white cursor-pointer" name="counter" size="50" />
        <div class="flex space-x-10">
          <router-link to="/">
            <mdicon class="text-white cursor-pointer" name="home" size="50" />
          </router-link>

          <router-link to="/about">
            <mdicon class="text-white cursor-pointer" name="Account" size="50" />
          </router-link>
        </div>
      </div>
    </nav>
    <RouterView class="h-5/6" v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <Component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
/* transition name is fade */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

/* transition name is slide */
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s ease-in-out;
}
</style>