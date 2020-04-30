<template>
  <div class="background">
    <div class="container">
      <div class="text-container">
        <h1>Sam Xie</h1>
        <h2>Software engineer at <a class="linked" href="https://www.zendesk.com/about/" target="_blank">Zendesk.</a></h2>
        <h2>Indie software dev launching <a class="linked" href="/#products">one product</a> at a time.</h2>
        <div class="social-links">
          <h2><a class="linked" href="https://twitter.com/samxstudio" target="_blank">Twitter</a></h2>
          <h2><a class="linked" href="https://twitter.com/samxstudio" target="_blank">Medium</a></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background {
  background: url("https://res.cloudinary.com/xielabs/image/upload/v1588150730/spheres.jpg");
  background-size: cover;
  background-position: 50%;
  height: 800px;
  width: 100%;
  min-width: 400px;
  max-width: 1600px;
  margin: auto;
}

.container {
  max-width: 980px;
  margin: auto;
  padding-top: 180px;
}

.text-container {
  width: 380px;
  margin: 10px;
}

.social-links {
  margin: 36px 0px;
  display: flex;
}

.social-links h2 {
  margin-right: 32px
}

h1, h2 {
  font-weight: bold;
}

h1 {
  font-size: 96px;
  margin-bottom: 32px;
}

h2 {
  font-size: 24px;
  margin: 16px 0px;
}

a {
  color: #3B70A2;
  text-decoration: none;
  position: relative;
}

.linked::after {
  width: 0%;
  content: "";
  height: 3px;
  background: #3B70A2;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.3s;
}

.linked:hover::after {
  width: 100%;
}

@media screen and (max-width: 980px) {
  .container {
    padding-top: 120px;
  }
  .background {
    background-position: 54% 0px;
    background-size: inherit;
  }
  h1 {
    font-size: 72px;
  }
}
</style>
