<template>
  <span>
    <Presentation />
    <About />
    <Skills />
    <Career />
    <Projects />
    <Contact />
    <Footer />
  </span>
</template>

<script>
import Presentation from "../components/PresentationView.vue";
import About from "../components/AboutView.vue";
import Skills from "../components/SkillsView.vue";
import Career from "../components/CareerView.vue";
import Projects from "../components/ProjectsView.vue";
import Footer from "../components/FooterView.vue";
import Contact from "../components/ContactView.vue";

export default {
  components: {
    Presentation,
    About,
    Skills,
    Career,
    Projects,
    Contact,
    Footer,
  },
};
</script>
