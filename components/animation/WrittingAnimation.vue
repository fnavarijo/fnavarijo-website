<template>
  <span class="writting-animation">
    {{ displayedText }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class WrittingAnimation extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  readonly wordsList!: string[];

  currentWordIndex: number = 0;
  isEnteringText: boolean = true;
  textIntervalId: NodeJS.Timeout | null = null;
  displayedText = '';

  // TODO: improve clean coding
  mounted (): void {
    this.textIntervalId = setInterval(() => {
      const currentWord = this.wordsList[this.currentWordIndex];
      const { length } = currentWord;
      
      if (this.isEnteringText) {
        this.displayedText += currentWord.charAt(this.displayedText.length);
      } else {
        this.displayedText = this.removeLastChar(this.displayedText);
      }
      
      if (this.displayedText.length === length) {
        this.isEnteringText = false;
      } else if (!this.isEnteringText && this.displayedText.length === 0) {
        this.isEnteringText = true;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.wordsList.length;
      }
    }, 250);
  }

  beforeDestroy (): void {
    this.clearInterval();
  }

  clearInterval (): void {
    clearInterval(this.textIntervalId as NodeJS.Timeout);
  }

  removeLastChar (word: string): string {
    return word.slice(0, -1);
  }
}
</script>

<style lang="scss" scoped>
.writting-animation {
  border-right: px-to-rem(5) solid;
}
</style>