<template>
  <button @click="goBack">Go Back</button>
</template>

<script>
export default {
  name: 'GoBackBtn',
  methods: {
	goBack() {
	  this.$router.go(-1);
	}
  }
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
