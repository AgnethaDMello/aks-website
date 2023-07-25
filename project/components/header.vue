<template>
  <header class="bg-medium-gray text-white m-0 w-full">
    <div
      class="container flex justify-between items-center bg-medium-gray m-0 p-0"
    >
      <!-- Logo and h1 section -->
      <div class="flex items-center space-x-2 p-4 bg-dark-gray">
        <img class="h-12 w-12" src="aks.png" alt="Anjani K. Sinha Logo" />
        <h1 class="text-3xl">
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
        <ul class="flex space-x-20 bg-medium-gray text-l justify-evenly">
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
          <li>
            <a class="text-black" href="#">Schedule appointment</a>
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
