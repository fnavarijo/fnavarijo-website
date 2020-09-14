<template>
  <div class="cheatsheet">
    <aside class="cheatsheet__navigation">
      <div class="cheatsheet__navigation-menu navigation">
        <h3 class="title navigation__title">Semantic HTML</h3>
        <ul class="navigation__list">
          <li
            v-for="(section, index) in pageTitles"
            :key="index"
            class="navigation__list-item"
          >
            <a
              :href="`#${section.id}`"
              class="has-text-white"
            >
              {{ section.text }}
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <article class="content cheatsheet__content">
      <NuxtContent :document="page" />
    </article>
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

  // TODO: update typing
  get pageTitles (): Array<Object> {
    return this.page!.toc as Array<Object>;
  }
}
</script>

<style lang="scss" scoped>
.cheatsheet {
  min-height: 100vh;
  background-color: $white;
  display: grid;
  grid-template-columns: px-to-rem(250) 1fr;

  &__navigation {
    // padding: px-to-rem(25);
    border-right: 1px solid $white;
    background-color: $primary;

    // TODO: check if fixed is the solution?
    // &-menu {}
  }

  &__content {
    padding: px-to-rem(50);
    grid-column: 2;

    /deep/ h2 {
      border-bottom: px-to-rem(4) solid $blue-900;
    }

    /deep/ h3 {
      a::before {
        content: '#';
      }
    }
  }

  .navigation {
    &__title {
      border-bottom: 1px solid $white;
      padding: px-to-rem(10) px-to-rem(25);
    }

    &__list {
      &-item {
        padding: px-to-rem(10);

        /deep/ a {
          color: $primary;
        }

        &:hover {
          background-color: $grey-500;
          // border-radius: px-to-rem(5);
        }
      }
    }
  }
}
</style>