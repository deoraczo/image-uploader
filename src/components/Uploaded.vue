<template>
  <div class="card fadeIn">
    <div class="card_header">
      <button class="btn btn_back" @click="backUpload()">
        <i class="material-icons">keyboard_backspace</i>
      </button>
      <div class="text--center success">
        <i class="material-icons">check_circle</i>
      </div>
      <h1 class="card_header--text text--center">Uploaded Successfully!</h1>
    </div>
    <div class="card_body preview">
      <img class="preview--image" :src="urlImage" alt />
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
import { Getter, Action } from 'vuex-class';

@Component({})
export default class Uploaded extends Vue {
  $refs!: {
    inputUrl: HTMLInputElement;
  };

  @Getter('uploader/getPreviewUrl')
  private urlImage!: string;

  @Action('uploader/upload')
  private upload!: () => void;

  copyLink(): void {
    if (this.urlImage) {
      this.$refs.inputUrl.select();
      document.execCommand("copy");
    }
  }

  backUpload(): void {
    this.upload();
  }
}
</script>

<style lang="scss" scoped>
.card_header {
  .success {
    i {
      color: #219653;
      font-size: 35px;
    }
  }
}
.preview {
  margin-top: 26px;
  &--image {
    max-height: 224px;
    max-width: 336px;
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