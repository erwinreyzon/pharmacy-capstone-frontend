<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "List of All Drugs",
      drugs: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/drugs.json").then((response) => {
      this.drugs = response.data;
      console.log("All Drugs", this.drugs);
    });
  },
};
</script>

<template>
  <h1>{{ message }}</h1>

  <div v-for="drug in drugs" v-bind:key="drug.id">
    <img :src="drug.image_url" :alt="drug.name" />
    <p>Name: {{ drug.name }}</p>
    <p>Classification: {{ drug.classification }}</p>
    <a :href="`/drugs/${drug.id}`">More Info</a>
    <br />
    <a :href="`/drug_users/${drug.id}`">Add Drug</a>
  </div>
</template>

<style>
img {
  width: 300px;
  border-radius: 8px;
}
</style>
