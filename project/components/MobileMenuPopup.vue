<template>
  <div class="fixed inset-0 bg-medium-gray z-50 p-4">
    <!-- Close button -->
    <button @click="close" class="absolute top-2 right-2">
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
    <!-- You can style the popup here as per your design -->
    <ul class="flex flex-col space-y-6 p-4 text-l">
      <li class="text-sm">
        <nuxt-link @click="close" to="/" class="text-black">Home</nuxt-link>
      </li>
      <li class="text-sm">
        <nuxt-link @click="close" to="/about" class="text-black"
          >About</nuxt-link
        >
      </li>
      <li class="text-sm">
        <nuxt-link @click="close" to="/services" class="text-black"
          >Services</nuxt-link
        >
      </li>
      <li class="text-sm">
        <nuxt-link @click="close" to="/contact" class="text-black"
          >Contact</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MobileMenuPopup",
  methods: {
    closeMobileMenu() {
      this.showMobileMenu = false;
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
