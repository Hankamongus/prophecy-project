<template>
    <div class="text-black">wake up</div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {

    },
})
</script>
<!--<template>
  <div class="flex justify-center w-full mt-64 mb-50" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="flex -space-x-8 w-full">
      <div v-for="(image, index) in images" :key="index" :class="[aspectVideoClass, hover ? 'hovered' : '']">
        <img :src="image.url" :alt="'Image ' + (index + 1)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      images: [
        { url: 'https://i.swncdn.com/media/800w/cms/CCOM/46076-old-church.800w.tn.webp' },
        { url: 'https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://research.lifeway.com/wp-content/uploads/2021/05/church_plant_closures.jpg' }
      ]
    };
  },
  computed: {
    aspectVideoClass() {
      return 'aspect-video w-full bg-center bg-cover filter grayscale transition duration-500 transform scale-150 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full rounded-lg -mr-6 md:mr-0';
    }
  }
};
</script>

<style scoped>
.aspect-video {
  position: relative;
  overflow: hidden;
}

.aspect-video img {
  width: 100%;
  height: auto;
}

.hovered {
  transform: translateX(-20px);
}
</style>
-->
