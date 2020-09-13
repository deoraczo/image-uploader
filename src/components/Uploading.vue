<template>
  <div class="card">
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

@Component({})
export default class Uploading extends Vue {}
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