<template>
  <div id="app" style="height: 100%;width: 100%">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    @import "css/normalize.css";
    .router-link-active{
      text-decoration: none;
    }
    a {
      text-decoration: none;
    }
</style>
