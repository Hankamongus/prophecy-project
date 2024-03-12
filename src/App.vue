
<template>
    <!--Navbar---->
    <nav id="navbar" class="w-full left-0 right-0 mt-0 bg-gradient-to-r from-gray-500 via-sky-700 to-gray-500 fixed left-0 w-full z-30 top-0 mb-5 p-1 text-lg transition-transform duration-300 transform">
        <div class="text-black"><strong>Solid Rock Baptist</strong></div>
        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <!-- Mobile menu button-->
            <button @click="navOpen = !navOpen" type="button" class=" md:hidden relative inline-flex items-center justify-center fixed left-0 z-10 rounded-md p-2 text-gray-400 bg-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--
                Icon when the menu is closed.
                Menu open: "hidden", Menu closed: "block"
              -->
              <svg v-if="!navOpen" class="block h-6 w-6 fixed left-0 z-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--
                Icon when the menu is open.
                Menu open: "block", Menu closed: "hidden"
              -->
              <svg v-else class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div v-if="navOpen" class="px-8;sm:hidden p-4 rounded border left-0 mt-56 ml-0 bg-black">
           <ul>
            <li><router-link to="contact" class="text-red-800 hover:text-sky-700">Contact:</router-link></li>
            <li><router-link to="about" class="text-red-800 hover:text-sky-700">About:</router-link></li>
            <li><router-link to="prophecies" class="text-red-800 hover:text-sky-700">Prophecies:</router-link></li>
            <li><router-link to="sermons" class="text-red-800 hover:text-sky-700">Sermons:</router-link></li>
            <li><router-link to="directory" class="text-red-800 hover:text-sky-700">Directory:</router-link></li>
            <li><router-link to="donate" class="text-red-800 hover:text-sky-700">Donate:</router-link></li>
          </ul>
        </div>

        <router-link
            v-for="button in navButtons"
            :key="button"
            class="
            hidden
            sm:block
            w-20
            md:w-full
            min-h-screen
            sm:mr-2 md:mr-7
            mb-10 mt-5
            text-gray-800
            py-2 px-1
            md:px-2
            rd-5
            rounded-md
            text-xs
            sm:text-sm
            md:text-md
            xl:text-lg
            bg-transparent
            hover:bg-gray-400
            hover:text-sky-700
            hover:border
            border-black
            transform
            translate-x-full
            relitive
            flex
            min-h-0
            space-y-0
            space-x-6
            p-0
            translate-x-0"

            :to="button == 'Home' ? '/' : button.toLowerCase()"
            v-html="button"/>
              </div>
           </div>
        </nav>


    <!--Image Header-->
<link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet">
  <link href="style.css" type="text/css" rel="stylesheet">
    <div class=" relative filter grayscale hover:filter-none transition duration-500" style="display: flex; width: 100%; justify-content: center; margin-top: 200px; margin-bottom: 50px;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
        <img class="transition duration-300 transform hover:scale-110 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full hover:md:w-full" style="border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;" src="https://i.swncdn.com/media/800w/cms/CCOM/46076-old-church.800w.tn.webp">

        <img class="transition duration-300 transform hover:scale-110 w-full h-lg md:w-full md:h-md lg:w-full lg:h-auto xl:w-full xl:h-auto hover:md:w-full" style="position: relative; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); border-radius: 0.375rem; transform: scale(1.35);" src="https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <img class="transition duration-300 transform hover:scale-110 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full hover:md:w-full" style="border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;" src="https://research.lifeway.com/wp-content/uploads/2021/05/church_plant_closures.jpg">
      </div>
    </div>
    <router-view/>

</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      navButtons: ['Home', 'About', 'Donate', 'Contact', 'Prophecies', 'Sermons', 'Directory'],
    };
  },
  mounted() {
    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // Scroll up: Show the navbar
        navbar.style.transform = 'translateY(0)';
      } else {
        // Scroll down: Hide the navbar
        navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;
      }
      prevScrollpos = currentScrollPos;
    };
  }
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
nav {
    transition: height 0.3s ease;
}
@media (max-height: 480px) {
    nav {
        padding: 1px;
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
