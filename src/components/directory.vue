<template>

   <!-- Main Content -->
   <div class="container mx-auto py-12">
   <div class="max-w-xl sm:max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
     <div class="px-6 py-4">
        <div class="flex content justify-center">
            <span class="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Login {{ name }}</span>
        </div>
       <form @submit.prevent="sendEmail">
         <div class="mb-4">
           <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email \ Username</label>
           <input type="email" v-model="email" id="email" name="email" class="appearance-none border rounded w-64 h-4 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-sky-700">
         </div>
         <div>Password</div>
         <div class="mb-4 flex justify-center">

            <label for="password" class="block text-sm font-medium text-gray-700 "></label>
            <input
            type="password"
            v-model="password"
            id="password"
            name="password"
            class=" mt-1 border-2 hover:border-sky-800 focus:ring-indigo-500 focus:border-indigo-500 block w-64 shadow-sm sm:text-sm border-gray-300 rounded-md h-6"
            placeholder="Enter your password"
            >
        </div>
            <div class="mb-4 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-6 h-6 bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
            </svg>
        </div>



         <div class="flex justify-end">
           <router-link to="lost">
            <button @click="sendEmail" type="submit" class="bg-blue-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
           </router-link>
         </div>
       </form>
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
