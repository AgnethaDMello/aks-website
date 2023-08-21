<template>
  <div class="font-merriweather">
    <!-- <div class="relative">
      <div class="absolute ml-[35%] mt-[18rem]">
        <svg width="1200">
          <rect
            x="10"
            y="10"
            width="1050"
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
          class="text-white text-4xl bg-dark-gray/75 mt-[43rem] ml-[42rem] w-[36%] pt-2 pb-2 text-center"
        >
          Ease your pain and your worries!
        </h2>
      </div>
      <div class="w-full">
        <img
          src="placeholder-doc-img.png"
          alt="Doctor Anjani K. Sinha"
          class="absolute bottom-0 z-30 h-[55rem]"
        />
        <img
          src="black_gold_triangle.png"
          alt="Black and Gold Triangle"
          class="absolute bottom-0 right-0 z-30 h-[55rem]"
        />
        <img
          src="city-background-2.jpeg"
          alt="city"
          class="object-cover w-full opacity-[.55] z-10"
        />
      </div>
    </div> -->
    <div class="h-auto bg-yellow flex flex-col md:flex-row justify-around">
      <div class="md:w-[50%] mt-10 h-auto flex flex-col justify-center items-center">
        <h2 class="text-center font-black text-2xl sm:text-2xl md:text-4xl lg:text-6xl">
          Our Specialties
        </h2>
        <p class="text-center m-10 sm:text-lg md:text-xl lg:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="md:w-[40%] h-full flex flex-col items-center justify-center pb-[8%] pl-[2%]">
        <img
          src="R-shoulder.jpeg"
          alt="X-ray of right shoulder"
          class="z-10 ml-[10%] md:mt-[15%] md:ml-[30%] -rotate-6 w-[33%] h-[8rem] md:w-[53%] md:h-[12rem] lg:h-[20rem]"
        />
        <img
          src="knee-xray.jpeg"
          alt="X-ray of both knees"
          class="mr-[10%] md:ml-[3%] z-20 rotate-6 w-[33%] h-[8rem] md:w-[53%] md:h-[12rem] lg:h-[20rem]"
        />
        <img
          src="L-shoulder.jpeg"
          alt="X-ray of left shoulder"
          class="z-10 ml-[10%] md:ml-[30%] -rotate-6 w-[33%] h-[8rem] md:w-[53%] md:h-[12rem] lg:h-[20rem]"
        />
      </div>
    </div>
    <div class="h-auto bg-light-gray pb-[5rem]">
      <h2 class="text-center text-4xl lg:text-6xl font-black pt-[5rem] lg:pb-10">Services</h2>
      <div class="m-20 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div class="relative m-5 md:m-10 lg:mb-20 xl:m-0">
          <img
            src="shoulder-thumbnail.jpeg"
            alt="Image of shoulder pain"
            class="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[22rem] absolute object-cover duration-100 hover:opacity-20"
          />
          <h3
            class="duration-100 h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[22rem] inset-0 text-2xl md:text-4xl xl:text-5xl bg-black text-white hover:opacity-100 text-center flex justify-center items-center"
          >
            Shoulder Pain
          </h3>
        </div>
        <div class="relative m-5 mb-20 md:m-10 xl:m-0">
          <img
            src="knee-thumbnail.jpeg"
            alt="Image of knee pain"
            class="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[22rem] absolute object-cover duration-100 hover:opacity-20"
          />
          <h3
            class="duration-100 sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[22rem] inset-0 w-full h-full text-2xl md:text-4xl xl:text-5xl bg-black text-white hover:opacity-100 text-center flex justify-center items-center mb-10"
          >
            Knee Pain
          </h3>
        </div>
        <div class="relative m-5 mt-20 mb-20 md:m-10 xl:m-0">
          <img
            src="ortho-thumbnail.jpeg"
            alt="Orthopedic doctor talking to patient"
            class="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[22rem] absolute object-cover duration-100 hover:opacity-20"
          />
          <h3
            class="duration-100 sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[22rem] inset-0 w-full h-full text-2xl md:text-4xl xl:text-5xl bg-black text-white hover:opacity-100 text-center flex justify-center items-center mb-10"
          >
            Orthopedics
          </h3>
        </div>
        <div class="relative m-5 mt-20 mb-20 md:m-10 xl:m-0">
          <img
            src="surgery-thumbnail.jpeg"
            alt="Surgeon reaching out for tools"
            class="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[22rem] absolute object-cover duration-100 hover:opacity-20"
          />
          <h3
            class="duration-100 sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[22rem] inset-0 w-full h-full text-2xl md:text-4xl xl:text-5xl bg-black text-white hover:opacity-100 text-center flex justify-center items-center"
          >
            Surgeries
          </h3>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-b from-yellow to-dark-gray h-auto pb-20">
      <h2 class="text-center text-4xl lg:text-6xl font-black pt-[4rem]">Reviews</h2>
      <div class="justify-items-center flex flex-col md:grid grid-cols-2 gap-4">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-dark-gray opacity-70 w-[80%] mt-20 text-white rounded-[2rem] relative mx-auto"
        >
          <img
            src="5stars.png"
            alt="5 stars"
            class="w-[50%] top-[10%] left-[8%] absolute"
          />
          <div
            class="flex flex-col justify-center items-center relative ml-[65%] mt-[7%]"
          >
            <img
              :src="review.pfp"
              alt="User profile picture"
              class="w-[35%] rounded-[100%]"
            />
            <h3 class="text-xl mt-[10%]">
              {{ review.name }}
            </h3>
          </div>
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
