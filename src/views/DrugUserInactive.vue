<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Removed Drugs",
      drug_users: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/drug_users/inactive.json").then((response) => {
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
    <p>Last Updated: {{ drug_user.updated_at }}</p>
  </div>
</template>
