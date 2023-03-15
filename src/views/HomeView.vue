<script setup>
import { useStore } from 'vuex'

import useCounterStore from '../composables/counter'

const store = useStore()
const { counter, increment, decrement, reset, setValue } = useCounterStore()
</script>

<template>
  <main class="flex justify-center items-start bg-black h-screen w-screen">
    <div class="flex justify-between md:justify-around items-center w-full p-5 relative">
      <transition name="fade">
        <mdicon
          @click.prevent="decrement"
          class="text-white cursor-pointer"
          name="minus"
          size="60"
        />
      </transition>

      <transition name="fade">
        <div>
          <h1 class="text-3xl md:text-9xl font-semibold text-white cursor-pointer">{{ counter }}</h1>
        </div>
      </transition>

      <transition name="fade">
        <mdicon @click.prevent="increment" class="text-white cursor-pointer" name="plus" size="60" />
      </transition>
    </div>

    <div class="py-2 absolute bottom-10">
      <div class="flex space-x-10">
        <div>
          <mdicon @click.prevent="reset" class="text-white cursor-pointer" name="reload" size="50" />
          <label class="text-white">Reset</label>
        </div>
        <div class="flex">
          <transition name="fade">
            <div class="flex">
              <div>
                <input
                  type="number"
                  class="p-3 w-20"
                  placeholder="set number"
                  v-model="store.state.val"
                />
              </div>
            </div>
          </transition>
          <div @click.prevent="setValue(store.state.val)">
            <mdicon class="text-white cursor-pointer" name="ShapeSquareRoundedPlus" size="50" />
            <label class="text-white">Set value</label>
          </div>
        </div>
      </div>
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
