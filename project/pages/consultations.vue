<template>
  <div class="bg-yellow font-merriweather">
    <div class="relative">
      <img
        src="/assets/img/running.jpeg"
        alt="City header image"
        class="h-[30vh] w-[100vw] object-cover"
        style="object-position: center bottom"
      />
      <h1 class="absolute top-1/4 text-white text-5xl ml-[5%] mt-10">
        Consultations
      </h1>
    </div>
    <div
      class="relative md:flex items-center md:justify-between mx-[5%] mt-[3rem]"
    >
      <div class="md:w-2/3 md:pr-8 pb-4">
        <h2 class="text-yellow-txt text-2xl mb-[5%]">
          Medical History Questionnaire and Examination
        </h2>
        <p class="mb-10">
          The doctor will likely ask you about your general health, past health conditions, family medical history, and other existing conditions that you may have. They will particularly want to know about conditions such as arthritis, osteoporosis, anemia, diabetes, obesity, and hypertension, because these issues may influence the treatment option that the surgeon provides.
        </p>
        <p class="mb-10">
          You’ve probably discussed any and all pain that you are currently experiencing with your primary care physician. You’ll likely discuss it all again in detail with your surgeon.
        </p>
        <p class="mb-10">Even if you’re experiencing pains that are separate from the main focus of your pain or the location of the main issue, they could all be connected to the specific orthopedic condition. Be sure to mention the impact your pain has had on your functionality. (“It hurts when I…”)</p>
        <p class="mb-10">Also, be sure to discuss previous injuries or existing conditions that could be having an effect on this orthopedic condition. Before your consultation, it may be helpful to keep a pain journal where you can record activities and positions that cause pain anywhere in your body. Be sure to bring the journal with you to your consultation and share it with the surgeon.</p>
      </div>
      <div class="md:w-1/3">
        <img
          src="/assets/img/redknee.png"
          alt="pain on knee"
          class="w-full max-w-md mx-auto"
        />
      </div>
    </div>

    <hr class="my-12 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-100" />
    <div class="pb-[3rem] mx-[5%]">
      <h2 class="text-yellow-txt text-2xl mb-[2rem]">Orthopedic Physical Examination</h2>
      <p>
        Physical examinations are important for the surgeon to assess your range of motion, swelling, reflexes, and skin condition. Your doctor will be observing your general capacity to move around in certain positions such as walking, sitting, standing, climbing stairs, bending forward and backward, etc. These tests are used to exclude or confirm likely diagnoses.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
