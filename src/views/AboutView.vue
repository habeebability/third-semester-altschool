<template>
  <div class>
    <section class="bg-black">
      <div class="grid px-4 py-8 mx-auto lg:gap-1 xl:gap-0 lg:py-16 lg:grid-cols-8">
        <div class="place-self-center lg:col-span-5">
          <h1
            class="my-4 max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
          >Counter App made with vue</h1>
          <p
            class="max-w-xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl"
          >The counter app was made with vuejs, vuex, tailwindcss, eslint and vite</p>

          <router-link
            to="/"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >Go to counter</router-link>
        </div>
        <!-- <div class="hidden lg:mt-0 lg:col-span-3 lg:flex">
          <img src="../assets/counter-1.jpeg" alt="banner-image" />
        </div>-->
      </div>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
