<template>
  <footer class="bg-dark-gray text-white">
    <div class="flex justify-center">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[15rem] md:py-16 py-8 md:flex"
      >
        <!-- Locations section -->
        <div class="flex flex-col justify-start items-start">
          <h3 class="text-lg font-semibold mb-4">Locations</h3>
          <ul class="text-sm">
            <li class="pb-1">New York</li>
            <li class="pb-1">Los Angeles</li>
            <li>London</li>
          </ul>
        </div>

        <!-- Stay in Touch section -->
        <div class="flex flex-col justify-start items-start">
          <h3 class="text-lg font-semibold mb-4">Stay in Touch</h3>
          <ul class="text-sm">
            <li>Address: 123 Main Street</li>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 123-456-7890</li>
          </ul>
        </div>

        <!-- Navigation section -->
        <div class="flex flex-col justify-start items-start">
          <h3 class="text-lg font-semibold mb-4">Navigation</h3>
          <ul class="text-sm">
            <li class="pb-1">
              <nuxt-link to="/" class="text-white">Home</nuxt-link>
            </li>
            <li class="pb-1">
              <nuxt-link to="/about" class="text-white">About</nuxt-link>
            </li>
            <li class="pb-1">
              <nuxt-link to="/services" class="text-white">Services</nuxt-link>
            </li>
            <li class="pb-1"><a href="#">Contact</a></li>
            <li class="pb-1"><a href="#">Our team</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-center bg-medium-gray p-3">
      <p class="text-black">©2023 copyright all rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
