<template>
  <div>
    <Header />
    <div><slot /></div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Styling for the layout goes here */
</style>
