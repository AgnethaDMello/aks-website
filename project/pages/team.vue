<template>
  <div class="bg-yellow md:pt-10 font-merriweather">
    <header class="text-black p-4">
      <h1 class="text-4xl text-left ml-[5%] mt-10">Our Team</h1>
    </header>

    <main class="container mx-auto py-8 pt-4">
      <div class="grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="doctor in doctors"
          :key="doctor.id"
          class="relative group md:flex flex-row items-center md:m-6"
        >
          <img
            :src="doctor.image"
            :alt="doctor.name"
            class="w-80 h-80 object-cover transition-opacity duration-300 group-hover:opacity-60 mx-auto"
          />
          <div
            class="absolute inset-0 md:mt-[7rem] lg:mt-[1.5rem] xl:mt-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity h-80 w-80 mx-auto md:mx-0"
          >
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity"
            >
              <div class="text-white text-center p-4">
                <h2 class="text-xl font-bold">Contact:</h2>
                <h2 class="text-xl">{{ doctor.phone }}</h2>
              </div>
            </div>
          </div>
          <div class="text-center md:text-left my-4 mx-5">
            <h2 class="text-xl font-bold mb-5">{{ doctor.name }}</h2>
            <p>{{ doctor.description }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";

const doctors = ref([
  {
    id: 1,
    name: "Anjani K. Sinha, M.D.",
    image: "sinha-w-bg.jpg",
    phone: "718-886-2011",
    description:
      "Dr. Sinha is passionate about his patients and their experience at Prestige Pain. Compassionate in his clinical approach, Dr. Sinha uses leading-edge, minimally-invasive approaches to address acute and chronic pain effectively.",
  },
  {
    id: 2,
    name: "Alexandra Carrer, M.D.",
    image: "doctor2.jpg",
    phone: "223-355-2245",
    description:
      "Dr. Carrer is passionate about her patients and their experience at Prestige Pain. Compassionate in her clinical approach, Dr. Carrer uses leading-edge, minimally-invasive approaches to address acute and chronic pain effectively.",
  },
  {
    id: 3,
    name: "Shubrata Dey, MBBS, MSN, NP-BC",
    image: "doctor1.jpg",
    phone: "323-355-2245",
    description:
      "Dr. Dey is passionate about his patients and their experience at Prestige Pain. Compassionate in his clinical approach, Dr. Dey uses leading-edge, minimally-invasive approaches to address acute and chronic pain effectively.",
  },
  {
    id: 4,
    name: "Robert Yeun, P.A.",
    image: "doctor1.jpg",
    phone: "423-355-2245",
    description:
      "Dr. Yuen is passionate about his patients and their experience at Prestige Pain. Compassionate in his clinical approach, Dr. Yuen uses leading-edge, minimally-invasive approaches to address acute and chronic pain effectively.",
  },
  {
    id: 5,
    name: "Richard Aminov, P.A.-C",
    image: "doctor1.jpg",
    phone: "523-355-2245",
    description:
      "Dr. Yuen is passionate about his patients and their experience at Prestige Pain. Compassionate in his clinical approach, Dr. Yuen uses leading-edge, minimally-invasive approaches to address acute and chronic pain effectively.",
  },
  {
    id: 6,
    name: "Sekina Aminov - Practice Administrator",
    image: "doctor2.jpg",
    phone: "623-355-2245",
    description:
      "Sekina Aminov is a Practice Administrator in the clinics. She is compassionate towards the patients and takes care of them. She is kind and patient when dealing with people.",
  },
  {
    id: 7,
    name: "Kathy Fox - Surgical Coordinator",
    image: "doctor2.jpg",
    phone: "623-355-2245",
    description:
      "Kathy Fox is a Surgical Coordinator for the clinics. She is compassionate towards the patients and takes care of them. She is kind and patient when dealing with people.",
  },
  {
    id: 8,
    name: "Eric Li - Office Manager",
    image: "ericli.jpg",
    phone: "623-355-2245",
    description:
      "Eric Li is the Office Manager in the clinics. He is compassionate towards the patients and takes care of them. He is kind and patient when dealing with people.",
  },
]);
</script>
<style lang="scss"></style>
