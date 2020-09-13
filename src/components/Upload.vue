<template>
    <div class="card">
        <div class="card_header">
            <h1 class="card_header--text text--center">Upload your image</h1>
        </div>
        <div class="card_body">
            <span class="card--subtitle">File should Jpeg, Png, ...</span>
            <div class="upload">
                <img class="upload--cover" :src="require('@/assets/images/image.svg')" alt="">
                <span class="upload--text">Drag & Drop your image here</span>
                <input type="file" class="upload--file" @change="changeHandled($event)" ref="fileInput">
            </div>
        </div>
        <div class="card_footer">
            <span class="card--subtitle">OR</span>
            <button class="btn btn_primary" type="button" @click="selectImage()">Choose a file</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Upload extends Vue {
    $refs!: {
        fileInput: HTMLInputElement
    }

    changeHandled(event: any) {
        console.log(event);
    }

    selectImage() {
        this.$refs.fileInput.click();
    }
}



</script>

<style lang="scss" scoped>
::-webkit-file-upload-button {
    cursor: pointer;
}
.upload {
    position: relative;
    background: #F6F8FB;
    border: 1px dashed #97BEF4;
    border-radius: 12px;
    width: 100%;
    padding-top: 36px;
    padding-bottom: 36px;
    &--cover {
        margin-bottom: 36px;
    }
    &--text {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: var(--letter-spacing);
        color: #BDBDBD
    }
    &--file {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
        top: 0;
    }
}
.card_footer {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>