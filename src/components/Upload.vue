<template>
    <div class="card fadeIn">
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
import { Component, Vue, Emit } from 'vue-property-decorator';
import axios from 'axios';
import { lazyInject } from '@/ioc/container';
import { UploadService } from '../services/upload.service';
import { TYPES } from '../ioc/types';
import { mapActions } from 'vuex'

import { namespace } from 'vuex-class'
const uploader = namespace('uploader')

@Component({})
export default class Upload extends Vue {

    @lazyInject(TYPES.UPLOAD_SERVICE)
    private uploadService!: UploadService;

    $refs!: {
        fileInput: HTMLInputElement
    }

    @uploader.State
    private status!: String;

    @uploader.Action
    uploading!: (payload: {}) => void

    @uploader.Action
    setFile!: (file: any) => void;

    changeHandled(event: any) {
        const { target } = event;
        const [file] = target.files;
        if(!this.validateImage(file)) {
            return;
        }
        const formData = new FormData();
        formData.append('image', file);
        this.uploading({
            status: 'Uploading',
            formData: formData
        });
    }

    selectImage() {
        this.$refs.fileInput.click();
    }

    validateImage(file: File): boolean {
        const typeImages = ["image/jpeg", "image/png", "image/jpg"];
        return typeImages.indexOf(file.type) > -1;
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
    &:hover{
        background: #00ff1614;
    }
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