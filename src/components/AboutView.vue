<template>
  <v-container fluid class="background-color" id="about">
    <v-row class="about-wrapper">
      <v-col class="text-center">
        <h1 class="display-1 font-weight-light">About me</h1>
      </v-col>
    </v-row>
    <v-divider color="gray"></v-divider>
    <v-row class="font-weight-normal about-text my-10">
      <v-col>
        <p class="text-justify">
          I’m a graduated Computer Engineer from the
          <a href="https://www.ua.es/en/index.html">University of Alicante</a>
          and the
          <a
            href="https://eps.ua.es/en/ingenieria-informatica/curriculum/high-academic-performance-groups.html"
            >ARA</a
          >
          (Alto Rendimiento Académico or High Academic Performance in English)
          group. I’ve been living in Spain through the majority of my life and
          also studied
          <a href="https://www.ibo.org/">International Baccalaureate</a> in
          Sweden (English-coursed), and thus I speak both Spanish and English
          fluently, albeit with a stronger proficiency in English due to it
          simply being stuck with me ever since my IB endeavour.
        </p>
        <p class="text-justify">
          I consider myself as a very observant and analytical person. Before
          taking action or making important decisions, I often methodically
          evaluate and consider the possible outcomes. In my daily life, this
          helps me in keeping my thoughts in check, have an objective point of
          view, remain calm and avoid possibly hasty decisions. I'm also
          naturally curious - I pay close attention to details and allow myself
          to be inspired by others to learn - either in IT, history, culture,
          economics, or getting started with a new hobby.
        </p>
        <p class="text-justify">
          I've also learned that I'm very sensitive to giving back - I enjoy
          helping others through any means at my disposal. I perceive a strong
          sense of accomplishment whenever I'm able to help someone who's
          struggling and make life easier for them. I generally try to listen,
          understand and help to the best of my abilities, since often times,
          we're not that different, and struggles I've been through and how I've
          overcome them, may be valuable to someone else. Back in my college
          days while writing my thesis, of all the topics I could choose from
          and thought of, I was captivated by the topic of school bullying and
          chose to code a solution that could help in that regard. I'm not fond
          of unjust or unfair treatment, and will usually take strong action.
          When it comes to backing up my own, I may even take the bullet myself
          in some situations.
        </p>
        <v-row align="center">
          <v-col cols="12" class="chart" align="center">
            <v-card outlined max-width="600" color="white">
              <apexchart
                type="pie"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "AboutView",
  components: {
    Apexchart: VueApexCharts,
  },
  setup() {
    const series = ref([15, 15, 10, 10, 10, 10, 10, 10, 5, 5]);

    const chartOptions = ref({
      chart: {
        type: "pie",
      },
      plotOptions: {
        pie: {
          customScale: 1,
        },
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              pie: {
                customScale: 1,
              },
            },
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
          },
        },
      ],
      labels: [
        "Coding",
        "Movies",
        "Travelling",
        "Jogging",
        "Climbing",
        "Boxing",
        "Gaming",
        "Guitar",
        "Chess",
        "Mindfulness",
      ],
      theme: {
        mode: "light",
        monochrome: {
          enabled: true,
          color: "#607D8B",
        },
      },
      title: {
        text: "My life's routine",
        align: "center",

        style: {
          fontSize: "16px",
          fontWeight: "400",
          color: "black",
          fontFamily: "Roboto, sans-serif",
        },
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
      },
      legend: {
        show: true,
        position: "bottom",
      },
    });

    return {
      series,
      chartOptions,
    };
  },
};
</script>
