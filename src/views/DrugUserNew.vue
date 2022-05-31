<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newDrugUserParams: {},
      errors: [],
      drug: {},
    };
  },
  methods: {
    createDrugUser: function () {
      console.log("Adding Drug to User");

      axios
        .post("/drug_users.json", this.newDrugUserParams)
        .then((response) => {
          console.log("Success", response.data);
          this.drug_users.push(response.data);
        })
        .catch((error) => console.log(error.response));

      axios.get("/drugs/" + this.$route.params.id + ".json").then((response) => {
        console.log("Show Drug", response.data);
        this.drug = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="druguser-new">
    <form v-on:submit.prevent="createDrugUser()">
      <h1>Please Input Information</h1>

      <div>
        <div class="form-group">
          Prescribing Doctor:
          <input type="text" v-model="newDrugUserParams.prescribed_md" />
        </div>
        <div class="form-group">
          Quantity:
          <input type="text" v-model="newDrugUserParams.quantity" />
        </div>
        <div class="form-group">
          Directions:
          <input type="text" v-model="newDrugUserParams.directions" />
        </div>
        <div class="form-group">
          Drug:
          <input type="text" v-model="drug.id" />
        </div>
      </div>
    </form>
  </div>
</template>
