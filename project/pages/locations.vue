<template>
  <div class="bg-yellow overflow-y-hidden">
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
        <div
          v-for="(location, index) in locations"
          :key="location.id"
          class="relative group flex flex-row items-center p-10"
          :class="{
            'bg-yellow': index % 2 === 0,
            'bg-light-gray': index % 2 !== 0,
          }"
        >
          <div class="text-center md:text-left mt-4 md:mx-5">
            <h2 class="text-xl font-bold pb-2">{{ location.name }}</h2>
            <p>{{ location.address }}</p>
            <p>Call: {{ location.phone }}</p>
          </div>
          <img
            :src="location.image"
            :alt="location.name"
            class="w-9/12 object-cover h-64 p-4"
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
