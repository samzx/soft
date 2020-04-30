<template>
  <div>
    <hero/>
    <div class="cards">
      <card
        v-for="(product, index) in products" :key="index"
        v-bind:accolade="product.accolade"
        v-bind:name="product.name"
        v-bind:copy="product.copy"
        v-bind:links="product.links"
        v-bind:images="product.images"
      />
    </div>
    <foot v-bind:author="author" v-bind:links="links" />
    <a class="mail" href="mailto:contact@samxie.net">✉️</a>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Card from '~/components/Card.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Hero,
    Card,
    Foot
  },
  data: () => ({
    author: "Sam Xie",
    products: [
      {
        accolade: "17th on Product Hunt",
        name: "Messengerlytics",
        copy: ["Download your Facebook messages and let our tool generate insights for your friendships."],
        links: {
          color: "#FF7E29",
          primary: {
            name: "Visit",
            url: "https://messengerlytics.com/"
          }
        },
        images: ["https://res.cloudinary.com/xielabs/image/upload/v1586508529/wordcloud.png"]
      },
      {
        accolade: "2,000 Peak MAU",
        name: "MPH Watch",
        copy: ["Stats for cryptocurrency miners mining on Mining Pool Hub.", "Clean and simple interface for monitoring mining activity."],
        links: {
          color: "#7793C7",
          primary: {
            name: "Visit",
            url: "http://mphwatch.samxie.net/"
          },
          secondary: {
            name: "Github",
            url: "https://github.com/samzx/mphwatch"
          }
        },
        images: ["https://res.cloudinary.com/xielabs/image/upload/v1541582260/mphwatch.png"]
      },
      {
        accolade: "Virtual Reality",
        name: "Final Slash VR",
        copy: ["A short survival experience on an abandoned planet."],
        links: {
          color: "#588372",
          primary: {
            name: "Visit",
            url: "https://samzx.itch.io/final-slash-vr"
          },
        },
        images: ["https://res.cloudinary.com/xielabs/image/upload/v1563021446/1.png"]
      }
    ],
    links: [
      {
        name: "Twitter",
        url: "https://twitter.com/samxstudio"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/xiesam/"
      },
      {
        name: "Email",
        url: "mailto:contact@samxie.net"
      },
    ]
  })
}
</script>

<style>
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
.cards {
  margin-top: -80px;
}

</style>
