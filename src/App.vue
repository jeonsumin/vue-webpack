<template>
<div id="wrapper">
	<router-view></router-view>
</div>
</template>

<script>
export default {
	data() {
		return {

		};
	},
  mounted() {
    this.$axios.get("/api/member")
    console.log("env", process.env.base_url)
  }
};
</script>

<style>

</style>
