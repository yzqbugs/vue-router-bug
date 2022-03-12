<script setup></script>

<template>
  <div>
    this is home
    <p></p>
    <ul>
      <li>
        <router-link to="/main">to /main</router-link>
      </li>
      <li>
        <router-link to="/a/main">to /a/main</router-link>
      </li>
      <li>
        <router-link to="/a/main/dism">to /a/main/dism</router-link>
      </li>
      <li>
        <router-link to="/a/main/dism/notepad"
          >to /a/main/dism/notepad</router-link
        >
      </li>
    </ul>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
