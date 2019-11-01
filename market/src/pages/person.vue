<template>
    <div>
    欢迎{{user}}
    </div>
</template>

<script>
    export default {
        name: "person",
      data() {
        return {
          user:window.localStorage.getItem('accessUser')
        }
      },
    }
</script>

<style>

</style>
