<template>
  <div class="bg-yellow overflow-y-hidden md:pt-10">
    <header class="relative">
      <img
        src="hospital.jpeg"
        alt="hospital header image"
        class="h-[30vh] w-[100vw] object-cover object-center"
      />
      <h1 class="absolute top-1/4 text-white text-5xl ml-[5%] mt-10">
        Locations
      </h1>
    </header>

    <main class="mx-auto">
      <div class="grid-cols-1 md:grid-cols-2 gap-8">
        <div class="relative group flex flex-row items-center p-10">
          <div class="text-center bg-yellow md:text-left mt-4 md:mx-5">
              <h2 class="text-xl font-bold pb-2">Main Office - Flushing</h2>
              <p>164-10 Northern Boulevard, Suite 204</p>
              <p>Flushing, NY 11358</p>
              <p>Call: 718-886-2011</p>
              <p>anjanisinhamedicalpc@gmail.com</p>
              <p class="font-bold mt-5">Languages Spoken: </p>
              <ul>
                <li>English</li>
                <li>Spanish</li>
                <li>Russian</li>
                <li>Chinese</li>
                <li>Korean</li>
                <li>Hindi</li>
                <li>Bengali</li>
              </ul>
            </div>
          <img
            src="location.png"
            alt="Flushing Office"
            class="w-9/12 object-cover h-64 p-4"
          />
        </div>
        <div
          v-for="(location, index) in locations"
          :key="location.id"
          class="relative group flex flex-row items-center p-10"
          :class="{
            'bg-light-gray': index % 2 === 0,
            'bg-yellow': index % 2 !== 0,
          }"
        >
          <div class="text-center md:text-left mt-4 md:mx-5">
            <h2 class="text-xl font-bold pb-2">{{ location.name }}</h2>
            <p>anjanisinhamedicalpc@gmail.com</p>
          </div>
          <img
            :src="location.image"
            :alt="location.name"
            class="w-9/12 object-cover h-64 p-4 ml-[1.5%]"
          />
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";

const locations = ref([
  {
    id: 1,
    name: "Bronx",
    image: "location.png",
  },
  {
    id: 2,
    name: "Queens",
    image: "location.png",
  },
  {
    id: 3,
    name: "Brooklyn",
    image: "location.png",
  },
  {
    id: 4,
    name: "New Jersey",
    image: "location.png",
  },
  {
    id: 5,
    name: "Long Island",
    image: "location.png",
  },
]);
</script>
<style lang="scss"></style>
