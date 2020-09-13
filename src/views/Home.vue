<template>
  <main>
    <!-- <Upload /> -->
    <Uploading />
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from "@/components/HelloWorld.vue";
import Upload from "@/components/Upload.vue";
import Uploading from '@/components/Uploading.vue';

@Component({
  components: {
    Upload,
    Uploading
  }
})
export default class Home extends Vue{

};
</script>
