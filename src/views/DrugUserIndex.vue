<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "List of Current Drug List",
      drug_users: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/drug_users.json").then((response) => {
      this.drug_users = response.data;
      console.log("All Drugs", this.drug_users);
    });
  },
};
</script>

<template>
  <h1>{{ message }}</h1>

  <div v-for="drug_user in drug_users" v-bind:key="drug_user.id">
    <p>Drug: {{ drug_user.drug }}</p>
    <p>Doctor: {{ drug_user.prescribed_md }}</p>
    <p>Directions: {{ drug_user.directions }}</p>
    <p>Quantity: {{ drug_user.quantity }}</p>
    <a :href="`/drugs/${drug_user.drug_id}`">More Info</a>
  </div>
</template>
