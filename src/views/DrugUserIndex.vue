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
  methods: {
    destroyDrugUser: function (drug_user) {
      axios.delete("/drug_users/" + drug_user.id).then((response) => {
        console.log("Drug User Destroy", response);
        this.$router.push("/drug_users");
      });
    },
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
    <br />
    <a v-bind:href="`/drug_users/${drug_user.id}/edit`">Edit</a>
    <br />
    <button v-on:click="destroyDrugUser(drug_user)">Remove from List</button>
  </div>
</template>
