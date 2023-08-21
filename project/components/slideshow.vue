<template>
  <div class="slideshow">
    <transition name="fade" mode="out-in">
      <div :key="currentIndex" class="slide text-3xl text-center">
        {{ currentText }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        "“AMAZING DOCTOR! I finally have my life back after a difficult decade. Thank you so much!”",
        "“I felt so respected and the process was so smooth. I feel great! Thank you doctor!”",
        "“I have never felt better! My knee recovered so well, I don't know where I would be without this surgery.”",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentText() {
      return this.texts[this.currentIndex];
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    },
  },
  mounted() {
    setInterval(this.nextSlide, 7000); // Switch slide every 3 seconds
  },
};
</script>
