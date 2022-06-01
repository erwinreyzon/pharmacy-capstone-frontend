<script>
import axios from "axios";

export default {
  data: function () {
    return {
      errors: [],
      drug_user: {},
    };
  },
  created: function () {
    axios.get("/drug_users/" + this.$route.params.id + ".json").then((response) => {
      console.log("Show Drug User", response.data);
      this.drug_user = response.data;
    });
  },
  methods: {
    updateDrugUser: function () {
      console.log("Update Drug User");
      axios
        .patch("/drug_users/" + this.$route.params.id + ".json", this.drug_user)
        .then((response) => {
          console.log("Success", response.data);
          this.$router.push("/drug_users");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<template>
  <h1>{{ drug_user.drug }}</h1>
  <form v-on:submit.prevent="updateDrugUser()">
    <h1>Please Edit Information</h1>

    <div>
      <div class="form-group">
        Prescribing Doctor:
        <input type="text" v-model="drug_user.prescribed_md" />
      </div>
      <div class="form-group">
        Quantity:
        <input type="text" v-model="drug_user.quantity" />
      </div>
      <div class="form-group">
        Directions:
        <input type="text" v-model="drug_user.directions" />
      </div>
    </div>
    <input type="submit" value="edit" />
  </form>
</template>
