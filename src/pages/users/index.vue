<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
  const { $backendURL } = useNuxtApp()
  const {data: response} = await useFetch(`${$backendURL()}/api/check`, {
    server: true,
  })
  const message = response.value?.message

</script>

<style scoped>
</style>
