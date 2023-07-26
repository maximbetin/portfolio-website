<template>
  <div>
    <v-app-bar app clipped-left elevate-on-scroll color="#B0BEC5">
      <v-spacer></v-spacer>

      <v-app-bar-items class="menu-button">
        <v-btn
          text
          class="menu-button hidden-sm-and-down"
          @click="goTo(item.link)"
          v-for="item in menu"
          :key="item.icon"
          >{{ item.title }}</v-btn
        >

        <div class="hidden-md-and-up">
          <v-menu class="menu-dropdown">
            <template #activator="{ on }">
              <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
            </template>

            <v-list class="menu-dropdown">
              <v-list-item
                v-for="item in menu"
                @click="goTo(item.link)"
                class="menu-dropdown"
                :key="item.id"
              >
                <v-list-item-title class="menu-dropdown">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-spacer></v-spacer>
      </v-app-bar-items>
    </v-app-bar>

    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      bottom
      right
      color="#78909C"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "NavigationView",
  setup() {
    const fab = ref(false);

    const menu = [
      { icon: "about", title: "ABOUT", link: "#about" },
      { icon: "skills", title: "SKILLS", link: "#skills" },
      { icon: "career", title: "CAREER", link: "#career" },
      { icon: "projects", title: "PROJECTS", link: "#projects" },
      { icon: "contact", title: "CONTACT", link: "#contact" },
    ];

    const goTo = (link) => {
      if (typeof window === "undefined") return;
      window.scrollTo({
        top: document.querySelector(link).offsetTop,
        behavior: "smooth",
      });
    };

    const onScroll = (e) => {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      fab.value = top > 20;
    };

    const toTop = () => {
      goTo("#app"); // Assuming you have an element with id="app" wrapping the entire app.
    };

    // Hook to add scroll event listener on component mount.
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

    return {
      fab,
      menu,
      goTo,
      onScroll,
      toTop,
    };
  },
};
</script>

<style scoped>
.menu-button {
  height: 100% !important;
  font-weight: bold;
  color: white;
}

.menu-dropdown {
  background-color: rgb(176, 190, 197);
  color: white;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
}

.menu-dropdown:hover {
  color: rgb(69, 90, 100);
}

.menu-button:hover {
  color: rgb(69, 90, 100);
}
</style>
