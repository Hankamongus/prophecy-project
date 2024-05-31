<template>
<div>
    <div class="text-red-800 flex w-full justify-center items-center text-center mt-2 text-2xl md:text-3xl mb-24 font-serif">
             <strong>{{ title }}</strong>&nbsp;
    </div>
<!--Header Image!!-->
<div class="flex justify-center">
    <div class="z-6 p-10 bg-gray-500 dark:bg-gray-800 backdrop-blur rounded-lg border-2 space-y-8 border-sky-800 h-auto w-3/4">
            <div class="flex justify-between text-2xl mb-5">
                <div><strong>How much do you want to give?</strong></div>
                <form action="/submit" method="post">
                    <label for="user Input"></label>
                    <input type="submit" value="" id="user Input" name="user Input">
                    <input type="subit" value="$" class="rounded-lg bg-gray-300 p-0 md:p1 w-1/2 sm:w-3/4 md:w-full">
                </form>
            </div>
        </div>
</div>
</div>


  </template>

  <script>
  export default {
    data() {
        return {
            title: 'Help Support Solid Rock Baptist Church'

        }
    }

  }
  </script>

  <style>

  </style>

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
