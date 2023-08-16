<template>
  <div class="font-merriweather">
    <div class="relative">
      <div class="absolute ml-[38.5rem] mt-[18rem]">
        <svg width="1200">
          <rect
            x="10"
            y="10"
            width="1150"
            height="80"
            fill="#404654"
            fill-opacity=".75"
          />
        </svg>
      </div>
      <div class="absolute z-20 w-[100%]">
        <h1
          class="text-8xl float-right text-white w-[70rem] h-[5.5rem] text-center mr-[9rem] mt-[16rem]"
        >
          Anjani K. Sinha M.D
        </h1>
        <div class="float-right mr-[19rem] mt-[4rem]">
          <button
            class="text-4xl h-[4.5rem] w-[20rem] m-20 bg-yellow-btn/75 outline outline-3 outline-black shadow-black/60 shadow-[-10px_10px_9px]"
          >
            Learn More
          </button>
          <button
            class="text-4xl h-[4.5rem] w-[20rem] m-20 mr-0 bg-yellow-btn/75 outline outline-3 outline-black shadow-black/60 shadow-[-10px_10px_9px]"
          >
            Find a Location
          </button>
        </div>
        <h2
          class="text-white text-5xl bg-dark-gray/75 mt-[43rem] ml-[42rem] w-[44rem] h-[3.5rem] text-center"
        >
          Ease your pain and your worries!
        </h2>
      </div>
      <img
        src="placeholder-doc-img.png"
        alt="Doctor Anjani K. Sinha"
        class="absolute mt-12 z-30 h-[55rem]"
      />
      <img
        src="black_gold_triangle.png"
        alt="Black and Gold Triangle"
        class="absolute ml-[52.5%] mt-12 z-30 h-[55rem]"
      />
      <img
        src="city-background-2.jpeg"
        alt="city"
        class="bg-auto opacity-[.55] z-10"
      />
    </div>
    <div class="h-[60rem] bg-yellow">
      <div class="w-[40%]">
        <img
          src="R-shoulder.jpeg"
          alt="X-ray of right shoulder"
          class="w-[25rem] h-[25rem] z-10 absolute mt-[7rem] ml-[7rem]"
        />
        <img
          src="knee-xray.jpeg"
          alt="X-ray of both knees"
          class="w-[25rem] h-[25rem] z-20 absolute mt-[14rem] ml-[30rem]"
        />
        <img
          src="L-shoulder.jpeg"
          alt="X-ray of left shoulder"
          class="w-[25rem] h-[25rem] z-10 absolute mt-[26rem] ml-[16rem]"
        />
      </div>
      <div class="w-[50%] float-right">
        <h2 class="text-center font-black text-6xl mt-[15rem]">
          Our Specialties
        </h2>
        <p class="text-center text-3xl m-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="h-[60rem] bg-light-gray">
      <h2 class="text-center text-6xl font-black pt-[10rem]">Services</h2>
      <div class="m-20 grid grid-cols-4">
        <div>
          <img
            src="shoulder-thumbnail.jpeg"
            alt="Image of shoulder pain"
            class="w-[27.2rem] h-[27.2rem] absolute object-cover duration-100 hover:opacity-20"
          />
          <h3
            class="duration-100 w-[27.2rem] h-[27.2rem] text-5xl bg-black text-white hover:opacity-100 text-center pt-[44%]"
          >
            Shoulder Pain
          </h3>
        </div>
        <div>
          <img
            src="knee-thumbnail.jpeg"
            alt="Image of knee pain"
            class="w-[27.2rem] h-[27.2rem] absolute object-cover duration-100 hover:opacity-20"
          />
          <h3
            class="duration-100 w-[27.2rem] h-[27.2rem] text-5xl bg-black text-white hover:opacity-100 text-center pt-[44%]"
          >
            Knee Pain
          </h3>
        </div>
        <div>
          <img
            src="ortho-thumbnail.jpeg"
            alt="Orthopedic doctor talking to patient"
            class="w-[27.2rem] h-[27.2rem] absolute object-cover duration-100 hover:opacity-20"
          />
          <h3
            class="duration-100 w-[27.2rem] h-[27.2rem] text-5xl bg-black text-white hover:opacity-100 text-center pt-[44%]"
          >
            Orthopedics
          </h3>
        </div>
        <div>
          <img
            src="surgery-thumbnail.jpeg"
            alt="Surgeon reaching out for tools"
            class="w-[27.2rem] h-[27.2rem] absolute object-cover duration-100 hover:opacity-20"
          />
          <h3
            class="duration-100 w-[27.2rem] h-[27.2rem] text-5xl bg-black text-white hover:opacity-100 text-center pt-[44%]"
          >
            Surgeries
          </h3>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-b from-yellow to-dark-gray h-[70rem]">
      <h2 class="text-center text-6xl font-black pt-[4rem]">Reviews</h2>
      <div class="justify-items-center grid grid-cols-2 gap-4">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-dark-gray opacity-70 w-[80%] mt-20 text-white rounded-[2rem]"
        >
          <img
            src="5stars.png"
            alt="5 stars"
            class="w-[21%] ml-16 mt-6 absolute"
          />
          <img
            :src="review.pfp"
            alt="User profile picture"
            class="w-[6rem] h-[6rem] ml-[75%] mt-5 rounded-[100%]"
          />
          <h3 class="text-xl text-right mr-[13%] mt-[1rem]">
            {{ review.name }}
          </h3>
          <p class="text-2xl text-center p-5 mt-5 mb-3">
            {{ review.testimonial }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const reviews = ref([
  {
    id: 1,
    pfp: "aks.png",
    name: "joe mother",
    testimonial:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
  },
  {
    id: 2,
    pfp: "aks.png",
    name: "joe mother",
    testimonial:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
  },
  {
    id: 3,
    pfp: "aks.png",
    name: "joe mother",
    testimonial:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
  },
  {
    id: 4,
    pfp: "aks.png",
    name: "joe mother",
    testimonial:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
  },
]);
</script>
