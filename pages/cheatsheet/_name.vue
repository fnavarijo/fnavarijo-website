<template>
  <section class="cheatsheet">
    <header>
      <h1 class="title is-1 cheatsheet__title">Semantic CheatSheets</h1>
    </header>
    <NuxtContent :document="page" />
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import { Result as NuxtContentResult } from '@nuxt/content';
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class CheatSheets extends Vue {
  page: NuxtContentResult | null = null;

  async asyncData(
    { $content, params }: Context
  ): Promise<{ page: NuxtContentResult }> {
    const { name } = params;
    const page: NuxtContentResult = await $content(`cheatsheet/${name}`).fetch();

    return {
      page
    };
  }
}
</script>

<style lang="scss" scoped>
.cheatsheet {
  color: $white;
  min-height: 100vh;
  background-color: $grey-500;

  &__title {
    color: inherit;
  }
}
</style>