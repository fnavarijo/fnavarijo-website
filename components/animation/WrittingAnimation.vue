<template>
  <span class="writting-animation">
    {{ displayedText }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

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
  pauseIntervalId: NodeJS.Timeout | null = null;
  displayedText = '';


  mounted (): void {
    this.setWritingTextInterval();
  }

  setWritingTextInterval (): void {
    this.textIntervalId = setInterval(this.handleTextDisplay, 250);
  }

  handleTextDisplay (): void {
    const currentWord = this.wordsList[this.currentWordIndex];
    const { length } = currentWord;
    
    if (this.isEnteringText) {
      this.displayedText += currentWord.charAt(this.displayedText.length);
    } else {
      this.displayedText = this.removeLastChar(this.displayedText);
    }
    
    if (this.displayedText.length === length) {
      this.isEnteringText = false;
      this.clearInterval(this.textIntervalId!);
      this.setTextPause();
    } else if (!this.isEnteringText && this.displayedText.length === 0) {
      this.isEnteringText = true;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.wordsList.length;
    }
  }

  setTextPause (): void {
    this.pauseIntervalId = setInterval(() => {
      this.clearInterval(this.pauseIntervalId!);
      this.setWritingTextInterval();
    }, 2000);
  }

  beforeDestroy (): void {
    const { textIntervalId, pauseIntervalId } = this;
    textIntervalId
      ? this.clearInterval(this.textIntervalId!)
      : this.clearInterval(this.pauseIntervalId!);
  }

  clearInterval (intervalId: NodeJS.Timeout): void {
    clearInterval(intervalId);
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