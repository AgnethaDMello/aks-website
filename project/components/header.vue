<template>
  <header class="text-white bg-medium-gray">
    <div class="flex justify-between items-center bg-medium-gray md:w-auto">
      <!-- Logo and h1 section -->
      <div class="flex items-center space-x-3 p-3 bg-dark-gray">
        <nuxt-link to="/">
          <img class="h-10 w-10" src="aks.png" alt="Anjani K. Sinha Logo" />
        </nuxt-link>
        <h1 class="md:text-2xl">
          <nuxt-link
            to="/"
            class="text-yellow"
            style="font-family: 'Racing Sans One', cursive"
            >Anjani K. Sinha</nuxt-link
          >
        </h1>
      </div>

      <!-- Navigation section -->
      <nav v-if="showMobileMenu" class="hidden md:block md:flex items-center">
        <ul
          class="flex space-x-12 md:space-x-[4.5rem] text-l md:pl-8 lg:space-x-[11.5rem] xl:space-x-[18rem]"
        >
          <li class="text-sm">
            <nuxt-link to="/" class="text-black">Home</nuxt-link>
          </li>
          <li class="relative group text-sm">
            <nuxt-link
              to="/about"
              class="text-black relative"
              @mouseenter="showServicePopupAbout = true"
              @mouseleave="hideServicePopupWithDelayAbout()"
              >About</nuxt-link
            >
            <div
              v-if="showServicePopupAbout"
              class="absolute left-0 mt-2 bg-light-gray p-4 shadow-lg z-10 transform translate-x-[-30%] opacity-100 group-hover:opacity-100 transition-transform transition-opacity duration-1000"
              style="transition-property: opacity"
            >
              <ul class="space-y-2 text-center">
                <li>
                  <nuxt-link
                    to="/team"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >Team</nuxt-link
                  >
                </li>
                <li></li>
              </ul>
            </div>
          </li>
          <li class="relative group text-sm">
            <nuxt-link
              to="/services"
              class="text-black relative"
              @mouseenter="showServicePopup = true"
              @mouseleave="hideServicePopupWithDelay()"
              >Services</nuxt-link
            >
            <div
              v-if="showServicePopup"
              class="absolute left-0 mt-2 bg-light-gray p-4 shadow-lg z-10 transform translate-x-[-30%] opacity-100 group-hover:opacity-100 transition-transform transition-opacity duration-1000"
              style="transition-property: opacity"
            >
              <ul class="space-y-2 text-center">
                <li>
                  <nuxt-link
                    to="/knee"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >Knee</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/shoulder"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >Shoulders</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="text-sm">
            <nuxt-link to="/locations" class="text-black">Contact</nuxt-link>
          </li>
        </ul>
      </nav>

      <nav class="flex items-center space-x-12 md:flex">
        <ul
          class="hidden md:flex space-x-12 p-4 md:space-x-[4rem] md:pr-[4rem] text-l"
        ></ul>
        <button
          class="md:hidden ml-auto p-3 ml-4"
          @click="showMobileMenu = !showMobileMenu"
          aria-label="Open Menu"
        >
          <svg
            v-if="showMobileMenu"
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <svg
            v-else
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
        <MobileMenuPopup
          v-if="!showMobileMenu"
          @close="showMobileMenu = true"
        />
      </nav>
    </div>
  </header>
</template>

<script>
import MobileMenuPopupVue from "@/components/MobileMenuPopup.vue";
export default {
  name: "Header",
  components: { MobileMenuPopupVue },
  data() {
    return {
      showMobileMenu: true,
      showServicePopup: false,
      showServicePopupAbout: false,
    };
  },
  methods: {
    hideServicePopupWithDelay() {
      // Delay hiding the popup for 1000 milliseconds (adjust as needed)
      setTimeout(() => {
        this.showServicePopup = false;
      }, 900);
    },
    hideServicePopupWithDelayAbout() {
      // Delay hiding the popup for 1000 milliseconds (adjust as needed)
      setTimeout(() => {
        this.showServicePopupAbout = false;
      }, 900);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
