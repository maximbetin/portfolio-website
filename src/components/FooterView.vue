<template>
  <v-container fluid class="background-color-fh" id="footer">
    <v-footer class="font-weight-light background-color-fh">
      <v-row class="text-center">
        <v-col>
          <strong
            >{{ new Date().getFullYear() }} - Maxim Betin - Copyright @ All
            Rights Reserved</strong
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "FooterView",
};
</script>
