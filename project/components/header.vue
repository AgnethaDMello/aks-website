<template>
  <header class="bg-medium-gray text-white">
    <div class="container flex justify-between items-center bg-medium-gray">
      <!-- Logo and h1 section -->
      <div class="flex items-center space-x-2 p-4 bg-dark-gray">
        <img class="h-12 w-12" src="aks.png" alt="Anjani K. Sinha Logo" />
        <h1 class="text-3xl">
          <nuxt-link to="/about" class="text-white">Anjani K. Sinha</nuxt-link>
        </h1>
      </div>

      <!-- Navigation section -->
      <nav class="mt-4 p-4">
        <ul class="flex space-x-6 bg-medium-gray">
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
* {
}
</style>
