<template>
  <main>
    <!-- <Upload /> -->
    <!-- <Uploading /> -->
    <Uploaded />
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from "@/components/HelloWorld.vue";
import Upload from "@/components/Upload.vue";
import Uploading from '@/components/Uploading.vue';
import Uploaded from '@/components/Uploaded.vue';

@Component({
  components: {
    Upload,
    Uploading,
    Uploaded
  }
})
export default class Home extends Vue{

};
</script>
