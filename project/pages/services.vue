<template>
  <div
    style="background-image: url('/assets/img/gray-bg.jpeg')"
    class="bg-yellow h-max font-merriweather w-[100%] pt-10 pb-7 bg-local bg-cover bg-no-repeat"
  >
    <h2 class="lg:text-3xl text-lg text-center">A Directory to all</h2>
    <h1 class="lg:text-7xl text-3xl text-dark-gray text-center pt-5 mb-10 px-4">
      Our Services For You
    </h1>
    <div class="md:flex justify-around lg:mt-20 mt-10 mx-20">
      <div
        class="bg-light-yellow md:w-[30%] md:h-[32rem] lg:h-[36rem] flex flex-col text-center items-center mb-8"
      >
        <h3
          class="lg:text-4xl text-lg w-[100%] bg-dark-gray mb-7 p-7 text-white"
        >
          Knee
        </h3>
        <img
          src="/assets/img/knee-services-thumbnail.jpeg"
          alt=""
          class="w-[90%] h-[20rem] object-cover"
        />
        <NuxtLink
          to="/knee"
          class="lg:text-3xl text-sm m-7 bg-yellow-btn p-3 pl-6 pr-6"
          >Learn More</NuxtLink
        >
      </div>
      <div
        class="bg-light-yellow md:w-[30%] md:h-[32rem] lg:h-[36rem] flex flex-col text-center items-center mb-8"
      >
        <h3
          class="lg:text-4xl text-lg w-[100%] bg-dark-gray mb-7 p-7 text-white"
        >
          Shoulder
        </h3>
        <img
          src="/assets/img/shoulder-services-thumbnail.jpeg"
          alt=""
          class="w-[90%] h-[20rem] object-cover"
        />
        <NuxtLink
          to="/shoulder"
          class="lg:text-3xl text-sm m-7 m-7 bg-yellow-btn p-3 pl-6 pr-6"
          >Learn More</NuxtLink
        >
      </div>
      <div
        class="bg-light-yellow md:w-[30%] md:h-[32rem] lg:h-[36rem] flex flex-col text-center items-center"
      >
        <h3
          class="lg:text-4xl text-lg w-[100%] bg-dark-gray mb-7 p-7 text-white"
        >
          Consultations
        </h3>
        <img
          src="/assets/img/ortho-services-thumbnail.jpeg"
          alt=""
          class="w-[90%] h-[20rem] object-cover"
        />
        <NuxtLink
          to="/consultations"
          class="lg:text-3xl text-sm m-7 m-7 bg-yellow-btn p-3 pl-6 pr-6"
          >Learn More</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
