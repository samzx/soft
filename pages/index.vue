<template>
  <div>
    <hero/>
    <a class="mail" href="mailto:contact@samxie.net">✉️</a>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero
  }
}
</script>

<style scoped>
.mail {
  position: sticky;
  float: right;
  bottom: 20px;
  right: 20px;
  margin-top: -40px;
  padding: 5px;
  font-size: 24px;
  text-decoration: none;
}
</style>
