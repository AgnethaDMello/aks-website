<template>
  <div
    style="background-image: url('gray-bg.jpeg')"
    class="bg-yellow h-max font-merriweather w-[100%] pt-10 pb-7 bg-local bg-cover bg-no-repeat"
  >
    <h2 class="text-3xl text-center">A Directory to All</h2>
    <h1 class="text-7xl text-dark-gray text-center pt-5 mb-10">
      Our Services For You
    </h1>
    <div class="flex justify-around mt-20 ml-10 mr-10">
      <div
        class="bg-light-yellow w-[22%] h-[32rem] flex flex-col text-center items-center"
      >
        <h3 class="text-5xl w-[100%] bg-dark-gray mb-7 p-7 text-white">Knee</h3>
        <img
          src="knee-services-thumbnail.jpeg"
          alt=""
          class="w-[90%] h-[20rem]"
        />
        <NuxtLink to="/knee" class="text-3xl m-7 bg-yellow-btn p-3 pl-6 pr-6"
          >Learn More</NuxtLink
        >
      </div>
      <div
        class="bg-light-yellow w-[22%] h-[32rem] flex flex-col text-center items-center"
      >
        <h3 class="text-5xl w-[100%] bg-dark-gray mb-7 p-7 text-white">
          Shoulder
        </h3>
        <img
          src="shoulder-services-thumbnail.jpeg"
          alt=""
          class="w-[90%] h-[20rem]"
        />
        <NuxtLink
          to="/shoulder"
          class="text-3xl m-7 bg-yellow-btn p-3 pl-6 pr-6"
          >Learn More</NuxtLink
        >
      </div>
      <div
        class="bg-light-yellow w-[22%] h-[32rem] flex flex-col text-center items-center"
      >
        <h3 class="text-5xl w-[100%] bg-dark-gray mb-7 p-7 text-white">
          Consultations
        </h3>
        <img
          src="ortho-services-thumbnail.jpeg"
          alt=""
          class="w-[90%] h-[20rem]"
        />
        <NuxtLink
          to="/shoulder"
          class="text-3xl m-7 bg-yellow-btn p-3 pl-6 pr-6"
          >Learn More</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
