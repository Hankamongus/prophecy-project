
<template>
<link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet">
  <link href="style.css" type="text/css" rel="stylesheet">
    <div style="display: flex; width: 100%; justify-content: center; margin-top: 200px; margin-bottom: 50px;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
        <img class="w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full" style="border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;" src="https://i.swncdn.com/media/800w/cms/CCOM/46076-old-church.800w.tn.webp">

        <img class="w-full h-lg md:w-full md:h-md lg:w-full lg:h-auto xl:w-full xl:h-auto" style="position: relative; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); border-radius: 0.375rem; transform: scale(1.35);" src="https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <img class="w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full" style="border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;" src="https://research.lifeway.com/wp-content/uploads/2021/05/church_plant_closures.jpg">
      </div>
    </div>
   <!--Navbar-->
<div>
    <nav content="width=device-width,initial-scale=1.0" class="fixed left-0 w-full z-50 top-0 mb-7 bg-gradient-to-r from-gray-500 via-sky-700 to-gray-500 to-white p-5 text-lg mt-0">
        <div class=" text-black text-md sm:text-xl md:text-2xl xl:text-3xl mb-5"><strong> Solid Rock Baptist Church</strong></div>
        <router-link
            v-for="button in navButtons"
            :key="button"
            class="sm:mr-2 md:mr-7 mb-10 mt-5 text-gray-800 py-2 px-1 md:px-2 rd-5 rounded-md text-xs sm:text-sm md:text-md xl:text-lg bg-transparent hover:bg-gray-400  hover:text-sky-700 hover:border border-black"
            :to="button == 'Home' ? '/' : button.toLowerCase()"
            v-html="button"/>
    </nav>
</div>
    <router-view/>
</template>

<script>
export default {
    data() {

        return {
            navButtons: ['Home', 'About', 'Donate', 'Contact', 'Prophecies', 'Sermons', 'Directory'],

        };

  },

};
</script>


<style>
nav{
    transition: width 0.3s ease;
}
@media (max-width: 640px) {
    nav{
        width: 80%;
    }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.background:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
