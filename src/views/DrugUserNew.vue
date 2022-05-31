<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newDrugUserParams: {},
      errors: [],
    };
  },
  methods: {
    createDrugUser: function () {
      console.log("Adding Drug to User");

      axios
        .post("http://localhost:3000/drug_users.json", this.newDrugUserParams)
        .then((response) => {
          console.log("Success", response.data);
          this.drug_users.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<template>
  <div class="druguser-new">
    <form v-on:submit.prevent="createDrugUser()">
      <h1>Please Input Information</h1>
    </form>
  </div>
</template>
