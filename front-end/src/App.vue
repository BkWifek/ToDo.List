<template>
  <div id="app">
    <h1>Welcome to ToDo List</h1>
    <button @click="goToRegister">Register</button>
    <button @click="goToLogin">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegister() {
      alert("Go to Register Page");
    },
    goToLogin() {
      alert("Go to Login Page");
    }
  }
}
</script>

<style>
button {
  margin: 5px;
  padding: 10px 20px;
}
</style>
