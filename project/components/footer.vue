<template>
  <footer class="bg-dark-gray text-white">
    <div class="flex justify-center">
      <div class="container grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <!-- Stay in Touch section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Stay in Touch</h3>
          <ul>
            <li>Address: 123 Main Street</li>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 123-456-7890</li>
          </ul>
        </div>

        <!-- Locations section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Locations</h3>
          <ul>
            <li>New York</li>
            <li>Los Angeles</li>
            <li>London</li>
          </ul>
        </div>

        <!-- Navigation section -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Navigation</h3>
          <ul>
            <li><nuxt-link to="/home" class="text-white">Home</nuxt-link></li>
            <li><nuxt-link to="/about" class="text-white">About</nuxt-link></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Schedule appointment</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4 bg-medium-gray p-3">
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
* {
}
</style>
