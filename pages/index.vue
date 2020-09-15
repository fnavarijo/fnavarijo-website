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
    <span class="home-banner__job-position">Web Developer & Devops Engineer</span>
    <footer class="home-banner__footer">
      <div class="is-flex footer__icons-container">
        <a href="https://twitter.com/fnavarijo96" target="_blank">
          <img class="footer__icon" src="~/assets/img/twitter.svg" alt="Link to my twitter account" />
        </a>
        <a href="https://www.linkedin.com/in/fnavarijo/" target="_blank">
          <img class="footer__icon" src="~/assets/img/linkedin.svg" alt="Link to my linkedin account" />
        </a>
      </div>
      <div class="footer__icons-author">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
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

  &__footer {
    position: absolute;
    bottom: px-to-rem(20);
  }

  .footer {
    &__icons-container {
      place-content: center space-evenly;
    }

    &__icons-author {
      font-size: px-to-rem(10);
    }

    &__icon {
      display: inline-block;
      width: px-to-rem(30);
      height: px-to-rem(30);
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

