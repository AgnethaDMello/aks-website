<template>
  <div class="bg-yellow">
    <header class="text-black p-4">
      <h1 class="text-4xl text-left ml-28 mt-10">Locations</h1>
    </header>

    <main class="container mx-auto py-8 pt-4">
      <div class="grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="location in locations"
          :key="location.id"
          class="relative group flex flex-row items-center m-6"
        >
          <div class="text-center md:text-left mt-4 mx-5">
            <h2 class="text-xl font-bold">{{ location.name }}</h2>
            <p>{{ location.address }}</p>
          </div>

          <img
            :src="location.image"
            :alt="location.name"
            class="w-9/12 object-cover h-64"
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
    name: "New Jersey Newbury",
    image: "location.png",
    phone: "123-355-2245",
    address: "123 main st Staten Island, 10384",
  },
  {
    id: 2,
    name: "New Jersey Newbury",
    image: "location.png",
    phone: "123-355-2245",
    address: "123 main st Staten Island, 10384",
  },
  {
    id: 3,
    name: "New Jersey Newbury",
    image: "location.png",
    phone: "123-355-2245",
    address: "123 main st Staten Island, 10384",
  },
  {
    id: 4,
    name: "New Jersey Newbury",
    image: "location.png",
    phone: "123-355-2245",
    address: "123 main st Staten Island, 10384",
  },
  {
    id: 5,
    name: "New Jersey Newbury",
    image: "location.png",
    phone: "123-355-2245",
    address: "123 main st Staten Island, 10384",
  },
]);
</script>
<style lang="scss"></style>
