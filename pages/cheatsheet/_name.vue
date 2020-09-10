<template>
  <div class="cheatsheet">
    <aside class="cheatsheet__navigation">
      <h3 class="title">Semantic HTML</h3>
    </aside>
    <section class="content cheatsheet__content">
      <header>
        <h1 class="title is-1 cheatsheet__title">
          Semantic CheatSheet
        </h1>
      </header>
      <NuxtContent :document="page" />
    </section>
  </div>
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
  min-height: 100vh;
  background-color: $white;
  display: grid;
  grid-template-columns: px-to-rem(300) 1fr;

  &__navigation {
    padding: px-to-rem(25);
    border-right: 1px solid $white;
    background-color: $primary;
  }

  &__content {
    padding: px-to-rem(50);

    /deep/ h2 {
      border-bottom: px-to-rem(4) solid $blue-900;
    }
  }
}
</style>