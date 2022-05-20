<script>
import axios from "axios";

export default {
  data: function () {
    return {
      drug: {},
    };
  },
  created: function () {
    axios.get("localhost:3000/drugs/" + this.$route.params.id + ".json").then((response) => {
      console.log("Show Drug", response.data);
      this.drug = response.data;
    });
  },
};
</script>

<template></template>
