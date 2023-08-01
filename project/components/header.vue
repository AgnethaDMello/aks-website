<template>
  <header class="text-white bg-medium-gray">
    <div class="flex justify-between items-center bg-medium-gray w-[100%]">
      <!-- Logo and h1 section -->
      <div class="flex items-center space-x-3 p-4 bg-dark-gray">
        <img class="h-10 w-10" src="aks.png" alt="Anjani K. Sinha Logo" />
        <h1 class="text-2xl">
          <nuxt-link
            to="/about"
            class="text-yellow"
            style="font-family: 'Racing Sans One', cursive"
            >Anjani K. Sinha</nuxt-link
          >
        </h1>
      </div>

      <!-- Navigation section -->
      <nav class="">
        <ul class="flex space-x-[12rem] mr-[40%] text-l justify-evenly">
          <li>
            <nuxt-link to="/home" class="text-black">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="text-black">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services" class="text-black">Services</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="text-black">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
