<script setup
        lang="ts">
import { useRoute } from 'vue-router'


const route = useRoute();
console.log(route);

</script>

<template>
  <h1>{{ route?.params?.id }}</h1>
</template>