<template>
  <v-container fluid class="background-color" id="career">
    <v-row class="career-wrapper">
      <v-col align="center" mx-15 mb-2 mt-10>
        <h1 class="display-1 font-weight-light">Career</h1>
      </v-col>

      <v-divider color="gray"></v-divider>

      <v-col
        class="text-xs-left"
        v-for="(job, index) in careerData"
        :key="index"
      >
        <h1 class="font-weight-light mt-10 mb-5 experience">{{ job.title }}</h1>
        <div class="description">
          <h2 class="font-weight-light position">
            {{ job.position }}
            <span class="date">{{ job.date }}</span>
          </h2>
          <p class="font-weight-normal description-text">
            {{ job.description }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CareerView",
  data() {
    return {
      careerData: [
        {
          title: "My future prospects",
          description: `The DevOps culture is something I took an interest in a few years ago and I want to keep nurturing. It fits my persona of helping others and I also like the fact that it’s a very broad concept covering many areas and allowing you to hop between topics without getting tired of doing the same over and over, and developing not just technical but also interpersonal skills, which in my opinion sometimes weigh more than what you can do with your mouse and keyboard. Although I’m a learner, I’m not a fan of certifications - they can be handy but are not fault-proof. I had passed the ACE certification from GCP years ago, and I can’t say it was really worth it. One can learn about anything he or she is truly interested in without setting the goals of having a title. Although I initially contemplated the option of obtaining the [Certified Kubernetes Administrator (CKA)](https://www.cncf.io/certification/cka/), I can say that I learned much through daily on-hands practice, and for the moment, although there is definitely room for acquiring more knowledge on Kubernetes, I’m comfortable where I am.`,
        },
        // Add other job experiences here...
      ],
    };
  },
};
</script>

<style>
.career-wrapper {
  margin-left: 15vw;
  margin-right: 15vw;
  color: black;
}

.experience {
  border-bottom: 5px solid #78909c;
  display: inline-block;
}

.position {
  display: inline-block;
  margin-bottom: 3px;
  color: black;
}

.description {
  border-left: dotted;
  border-width: 4px;
  color: #b0bec5;
  padding-left: 10px;
  margin-top: 15px;
}

.description-text {
  color: black;
  text-align: justify;
}

.date {
  font-size: 16px;
  font-weight: 400;
  color: white;
  background-color: #90a4ae;
  padding: 1px 5px;
  border-radius: 3px;
}
</style>
