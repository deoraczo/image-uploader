<template>
  <main>
    <component :is="status"/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from "@/components/HelloWorld.vue";
import Upload from "@/components/Upload.vue";
import Uploading from '@/components/Uploading.vue';
import Uploaded from '@/components/Uploaded.vue';
import { Getter } from 'vuex-class'

@Component({
  components: {
    Upload,
    Uploading,
    Uploaded
  }
})
export default class Home extends Vue{

  @Getter('uploader/getStatus')
  public status!: string;

};
</script>
