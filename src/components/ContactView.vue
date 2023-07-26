<template>
  <v-container fluid class="background-color" id="contact">
    <v-row class="contact-wrapper">
      <v-col align="center" mx-15 mb-2 mt-10>
        <h1 class="display-1 font-weight-light text-xs-center mb-1">Contact</h1>
      </v-col>

      <v-divider color="gray"></v-divider>

      <v-row
        align="center"
        justify="center"
        column
        my-10
        mx-15
        class="about-text"
      >
        <v-col align="center">
          <v-row>
            <v-col class="mx-8">
              <v-btn
                class="button"
                outlined
                rounded
                href="https://www.linkedin.com/in/maxim-betin/"
                target="_blank"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
            <v-col class="mx-8">
              <v-btn
                class="button"
                outlined
                rounded
                href="https://www.instagram.com/maximbetin/"
                target="_blank"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-row class="mt-10">
          <p style="text-align: center" class="font-weight-normal">
            My preferred method of contact is through my LinkedIn
            <a href="https://www.linkedin.com/in/maxim-betin/" target="_blank"
              >page</a
            >.
          </p>
        </v-row>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style>
.contact-wrapper {
  margin-left: 15vw;
  margin-right: 15vw;
  color: black;
}

.button {
  padding: 12px;
  background-color: #90a4ae;
}
</style>
