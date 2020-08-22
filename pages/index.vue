<template>
  <section class="home-banner">
    <HomeBannerBackground class="home-banner__background"/>
    <h1 class="home-banner__title">
      <WrittingAnimation :words-list="greetings" />
    </h1>
    <h2 class="home-banner__subtitle">I'm Fernando Navarijo</h2>
    <h6 class="home-banner__job-position">Web Developer & Devops Enginer</h6>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import HomeBannerBackground from '@/components/home/HomeBannerBackground.vue';

@Component({
  components: {
    HomeBannerBackground,
  },
})
export default class HomePage extends Vue {
  get greetings (): string[] {
    return ['¡Hola!', 'Hi!'];
  }
}
</script>

<style lang="scss" scoped>
.home-banner {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #363635;
  color: #fff;
  position: relative;

  &__title,
  &__subtitle,
  &__job-position {
    z-index: 5;
  }

  &__title,
  &__subtitle {
    text-transform: uppercase;
  }

  &__title {
    font-size: px-to-rem(96);
    font-weight: bold;
  }

  &__subtitle {
    font-size: px-to-rem(64);
  }

  &__job-position {
    font-size: $size-3;
  }

  &__background {
    position: absolute;
  }
}
</style>

