<template>
  <v-container fluid class="background-color" id="skills">
    <v-flex class="skills-wrapper">
      <v-layout align-center column>
        <v-flex class="display-1 font-weight-light text-xs-center mb-1">
          Skills
        </v-flex>
      </v-layout>

      <v-divider color="gray"></v-divider>

      <br />

      <v-col>
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          :skill="skills"
        />
      </v-col>
    </v-flex>
  </v-container>
</template>

<style>
.skills-wrapper {
  margin-left: 15vw;
  margin-right: 15vw;
  color: black;
}
</style>

<script>
import { SkillBar } from "vue-skill-bar";
export default {
  components: {
    "skill-bar": SkillBar,
  },
  data() {
    return {
      skills: [
        { name: "Scripting", level: 90 },
        { name: "Support", level: 85 },
        { name: "Quality Analysis", level: 80 },
        { name: "Patch Management", level: 75 },
        { name: "Incident Handling", level: 75 },
        { name: "Monitoring", level: 75 },
        { name: "BCM", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "Cloud", level: 70 },
        { name: "IaC", level: 70 },
        { name: "Containerization", level: 70 },
        { name: "Virtualization", level: 65 },
        { name: "Security", level: 60 },
        { name: "Networking", level: 55 },
      ],
    };
  },
};
</script>
