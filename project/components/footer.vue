<template>
  <footer class="bg-dark-gray text-white">
    <div class="flex justify-center">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[4rem] lg:gap-[10rem] xl:gap-[18rem] md:gap-[15rem] md:py-16 py-8 md:flex"
      >
        <!-- Locations section -->
        <div class="flex flex-col justify-start items-start">
          <h3 class="text-lg font-semibold mb-4">Locations</h3>
          <ul class="text-sm">
            <li class="pb-1">Flushing</li>
            <li class="pb-1">Bronx</li>
            <li class="pb-1">Queens</li>
            <li class="pb-1">Brooklyn</li>
            <li class="pb-1">New Jersey</li>
            <li class="pb-1">Long Island</li>
          </ul>
        </div>

        <!-- Stay in Touch section -->
        <div class="flex flex-col justify-start items-start">
          <h3 class="text-lg font-semibold mb-4">Stay in Touch</h3>
          <ul class="text-sm">
            <li>Address: 164-10 Northern Boulevard, Suite 204, Flushing, NY 11358</li>
            <li>Email: anjanisinhamedicalpc@gmail.com</li>
            <li>Phone: 718-886-2011</li>
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
            <li class="pb-1">
              <nuxt-link to="/locations" class="text-white">Contact</nuxt-link>
            </li>
            <li class="pb-1">
              <nuxt-link to="/team" class="text-white">Team</nuxt-link>
            </li>
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
