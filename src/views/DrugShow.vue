<script>
import axios from "axios";

export default {
  data: function () {
    return {
      drug: {},
    };
  },
  created: function () {
    axios.get("/drugs/" + this.$route.params.id + ".json").then((response) => {
      console.log("Show Drug", response.data);
      this.drug = response.data;
    });
  },
};
</script>

<template>
  <h1>{{ drug.name }}</h1>
  <img :src="drug.image_url" :alt="drug.name" />
  <p>Classification: {{ drug.classification }}</p>
  <p>Description: {{ drug.description }}</p>
</template>
