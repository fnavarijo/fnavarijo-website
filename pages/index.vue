<template>
  <section class="home-banner">
    <HomeBannerBackground class="home-banner__background is-hidden-touch"/>
    <h1 class="home-banner__title">
      <WritingAnimation
        :words-list="greetings"
        @textWrote="saluteUser = true"
      />
      <span
        class="home-banner__emoji-wave"
        id="emoji-wave"
        :class="{ 'home-banner__emoji-wave--salute': saluteUser  }"
      >👋</span>
    </h1>
    <h2 class="home-banner__subtitle">
      I'm Fernando Navarijo
    </h2>
    <h6 class="home-banner__job-position">Web Developer & Devops Engineer</h6>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';

import HomeBannerBackground from '@/components/home/HomeBannerBackground.vue';

@Component({
  components: {
    HomeBannerBackground,
  },
})
export default class HomePage extends Vue {
  saluteUser: boolean = false;
  
  get greetings (): string[] {
    return ['¡Hola!', 'Hi!'];
  }

  mounted (): void {
    const waveEmoji = document.getElementById('emoji-wave');
    waveEmoji!.addEventListener('animationend', this.stopSaluting, false);
  }

  beforeDestroy (): void {
    const waveEmoji = document.getElementById('emoji-wave');
    waveEmoji!.removeEventListener('animationend', this.stopSaluting, false);
  }

  stopSaluting (event: AnimationEvent): void {
    const { animationName } = event;
    if (animationName.includes('salute')) {
      this.saluteUser = false;
    }
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
  background-color: $grey-800;
  color: $white;
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

  &__emoji-wave {
    display: inline-block;

    &--salute {
      animation: salute 1s linear .3s;
    }
  }
}

@include touch {
  .home-banner {
    &__title {
      font-size: px-to-rem(64);
    }
  
    &__subtitle {
      font-size: px-to-rem(48);
      text-align: center;
    }

    &__job-position {
      font-size: $size-5;
      text-align: center;
    }
  }
}

@keyframes salute {
  35%, 55% {
    transform: rotate(-5deg);
  }

  40%, 50%, 60%, 70% {
    transform: rotate(0);
  }

  45%, 65% {
    transform: rotate(5deg);
  }
}
</style>

