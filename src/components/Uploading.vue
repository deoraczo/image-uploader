<template>
  <div class="card fadeIn">
    <div class="card_header">
      <h1 class="card_header--text">Uploading...</h1>
    </div>
    <div class="card_body">
      <div class="loader">
        <div class="loader--progress loader--bar"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { UploadService } from "@/services/upload.service";
import { lazyInject } from "@/ioc/container";
import { TYPES } from "../ioc/types";

@Component({})
export default class Uploading extends Vue {

  @lazyInject(TYPES.UPLOAD_SERVICE)
  private uploadService!: UploadService;

  @Getter("uploader/getFormData")
  public formData!: {};

  @Action('uploader/uploaded')
  public uploaded!: (payload: {}) => void

  @Action('uploader/upload')
  private upload!: () => void;

  mounted(): void {
    this.uploadService.upload(this.formData)
      .then(({ imageUrl }) => {
        this.uploaded({
          status: 'Uploaded',
          previewUrl: imageUrl
        })
      })
      .catch(err => {
        console.log(err);
        this.upload();
      })
  }
}
</script>

<style lang="scss" scoped>
.loader {
  background: #f2f2f2;
  width: 100%;
  position: relative;
  overflow: hidden;
  &,
  &--bar {
    border-radius: 8px;
    height: 6px;
  }
  &--bar {
    background: #2f80ed;
    width: 100px;
    height: 100%;
    display: block;
    position: absolute;
  }
  &--progress {
    animation: progress 2s infinite;
  }
}
.card_body {
  padding-top: 30px;
}

@keyframes progress {
  to {
    left: 100%;
  }
  from {
    left: 0;
  }
}
</style>