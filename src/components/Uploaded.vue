<template>
  <div class="card">
    <div class="card_header">
      <div class="text--center">
        <i class="material-icons">check_circle</i>
      </div>
      <h1 class="card_header--text text--center">Uploaded Successfully!</h1>
    </div>
    <div class="card_body preview">
      <img class="preview--image" :src="require('@/assets/images/test.jpg')" alt />
    </div>
    <div class="card_footer">
      <div class="copy">
        <input class="copy--text" readonly type="text" :value="urlImage" ref="inputUrl" />
        <button class="btn btn_primary" @click="copyLink()">Copy Link</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Uploaded extends Vue {
  $refs!: {
    inputUrl: HTMLInputElement;
  };

  private urlImage =
    "https://firebasestorage.googleapis.com/v";

  copyLink(): void {
    if (this.urlImage) {
      this.$refs.inputUrl.select();
      document.execCommand("copy");
    }
  }
}
</script>

<style lang="scss" scoped>
.card_header {
  i {
    color: #219653;
    font-size: 35px;
  }
}
.preview {
  margin-top: 26px;
  &--image {
    max-height: 224px;
    width: auto;
    border-radius: 12px;
  }
}
.copy {
  background-color: #f6f8fb;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: flex;
  &--text {
    padding: 0 12px;
    border: none;
    background-color: transparent;
    font-size: 9px;
    color: #4f4f4f;
    letter-spacing: var(--letter-spacing);
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.card_footer {
  margin-top: 28px;
}
</style>