<template>
  <div>
    this is main
    <ul>
      <li>route params=>{{ route.params }}</li>
      <li>router name =>{{ router.name }}</li>
      <li>router path=>{{ router.path }}</li>
    </ul>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>
