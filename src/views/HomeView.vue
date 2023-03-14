<script setup>
import { ref } from 'vue'
const counter = ref(0)

const increment = () => {
  counter.value++
}
const decrement = () => {
  counter.value--
}
</script>

<template>
  <main class="flex justify-center items-center bg-black h-screen w-screen relative">
    <div class="py-2 absolute top-0">
      <mdicon @click.prevent="increment" class="text-white cursor-pointer" name="reset" size="50" />
    </div>
    <div class="flex justify-between items-center w-full p-5">
      <transition name="fade">
        <mdicon
          @click.prevent="decrement"
          class="text-white cursor-pointer"
          name="minus"
          size="50"
        />
      </transition>

      <transition name="fade">
        <h1 class="text-3xl md:text-9xl font-semibold text-white cursor-pointer">{{ counter }}</h1>
      </transition>

      <transition name="fade">
        <mdicon @click.prevent="increment" class="text-white cursor-pointer" name="plus" size="50" />
      </transition>
    </div>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
