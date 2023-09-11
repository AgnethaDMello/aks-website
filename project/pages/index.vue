<template>
  <div class="font-merriweather">
    <div class="relative ">
      <div class="flex items-center justify-center xl:left-[29%] lg:top-[18%]">
        <svg class="absolute top-9 sm:top-14 md:top-20 lg:left-[25%] lg:top-[18%] xl:left-[29%] w-[17rem] h-[3rem] sm:w-[25rem] sm:h-[3rem] md:w-[40rem] md:h-[6rem] lg:w-[45rem] lg:h-[9rem] xl:h-[11rem] xl:w-[65rem]">
          <rect class="w-[95%] h-[100%]"
            x="10"
            y="10"
            fill="#404654"
            fill-opacity="1"
          />
        </svg>
      </div>
      <div class="w-screen flex items-center justify-center">
        <h1
          class="absolute z-20 text-2xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl text-white text-center top-[15%] xl:right-[15%] lg:right-[18%]"
        >
          Anjani K. Sinha
          <p class="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mt-[3%]">Medical P.C.</p>
        </h1>
        </div>
      <div class="absolute z-20 w-[100%] mt-[4%]">
        <div class="flex flex-col md:flex-row w-[50%] mt-[22%] ml-[45%] sm:mt-[25%] sm:ml-[35%] justify-around">
          <button
            class="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl h-[1.5rem] sm:h-[4.5rem] w-[60%] sm:w-[30%] md:w-[40%] bg-yellow-btn/75 outline outline-3 outline-black shadow-black/60 shadow-[-10px_10px_9px] mb-2"
          >
            Learn More
          </button>
          <button
            class="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl h-[1.5rem] md:h-[4.5rem] w-[60%] sm:w-[30%] md:w-[40%] bg-yellow-btn/75 outline outline-3 outline-black shadow-black/60 shadow-[-10px_10px_9px]"
          >
            Find a Location
          </button>
        </div>
        <h2
          class="text-white text-xs sm:text-base lg:text-lg xl:text-3xl bg-dark-gray/75 w-[60%] sm:w-[45%] md:w-[35%] mt-[3%] sm:mt-[6%] md:mt-[8%] xl:mt-[8%] ml-[38%] p-1 md:pt-2 md:pb-2 text-center"
        >
          Ease your pain and your worries!
        </h2>
      </div>
      <div class="w-full">
        <img
          src="sinha.png"
          alt="Doctor Anjani K. Sinha"
          class="absolute bottom-0 z-30 lg:h-[100%] h-[75%]"
        />
        <img
          src="black_gold_triangle.png"
          alt="Black and Gold Triangle"
          class="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:z-30 lg:h-[80%]"
        />
        <img
          src="home-bg.jpg"
          alt="Knee and Shoulder"
          class="object-cover w-full opacity-[.55] z-10"
        />
      </div>
    </div>
    <div class="h-auto bg-yellow flex flex-col md:flex-row justify-around">
      <div class="md:w-[50%] mt-10 h-auto flex flex-col justify-center items-center">
        <h2 class="text-center font-black text-2xl sm:text-2xl md:text-4xl lg:text-6xl">
          Our Specialties
        </h2>
        <p class="text-center m-10 sm:text-lg md:text-xl lg:text-3xl">
          Our mission is to put you on track to a full and speedy recovery. Our board certified orthopaedic surgeons have advanced training and specialize in arthroscopic surgery of the shoulder and the knee. Advanced Orthopaedics is a unique and comprehensive facility that will provide you with advanced treatment options and outstanding customer service. Our goal is to achieve the most optimal level of functionality for all of our patients by providing timely, efficient, and thorough care. Our dedicated staff understands the patient's needs and will provide you with individualized and prompt attention. Our staff speaks English, Spanish, Chinese, Mandarin, Korean, Hebrew and Russian.For your convenience we have office locations in Queens, Brooklyn, Bronx and Long Island
        </p>
      </div>
      <div class="md:w-[40%] h-full flex flex-col items-center justify-center pb-[8%] pl-[2%]">
        <img
          src="/assets/img/R-shoulder.jpeg"
          alt="X-ray of right shoulder"
          class="z-10 ml-[10%] md:mt-[15%] md:ml-[30%] -rotate-6 w-[33%] h-[8rem] md:w-[53%] md:h-[12rem] lg:h-[20rem]"
        />
        <img
          src="/assets/img/knee-xray.jpeg"
          alt="X-ray of both knees"
          class="mr-[10%] md:ml-[3%] z-20 rotate-6 w-[33%] h-[8rem] md:w-[53%] md:h-[12rem] lg:h-[20rem]"
        />
        <img
          src="/assets/img/L-shoulder.jpeg"
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
            src="/assets/img/shoulder-thumbnail.jpeg"
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
            src="/assets/img/knee-thumbnail.jpeg"
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
            src="/assets/img/ortho-thumbnail.jpeg"
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
            src="/assets/img/surgery-thumbnail.jpeg"
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
          class="bg-dark-gray opacity-70 w-[80%] mt-20 text-white rounded-[2rem]"
        >
          <img
            src="/assets/img/5stars.png"
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
    name: "John Doe",
    testimonial:
      "“Dr. ___ is compassionate and understanding. His PA, Tim, is top notch. They listen and respond to your questions with confidence and clarity.”",
  },
  {
    id: 2,
    pfp: "aks.png",
    name: "Jane Doe",
    testimonial:
      "“Dr. ___ was able to cure me by performing a laminectomy, and the incision was only 2 inches long! I went home that same afternoon!”",
  },
  {
    id: 3,
    pfp: "aks.png",
    name: "Mike Smith",
    testimonial:
      "“Dr. ___ has been amazing in finding treatments to give me relief and I can walk again without being in extreme discomfort.”",
  },
  {
    id: 4,
    pfp: "aks.png",
    name: "Joe White",
    testimonial:
      "“I recommend Dr. ___ to anyone in pain who needs a top Orthopedic Sports Medicine Specialist. Also, his office staff are first rate, courteous, and helpful.”",
  },
]);
</script>
