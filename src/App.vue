
<template>
<div class="fixed -translate-y-[125%] -translate-x-2/3 scale-[200%] w-full h-full rotate-45 bg-gray-300 dark:bg-gray-900 z-10"/>
<div class="relative z-20">

    <!--Navbar---->
    <nav id="navbar" class="w-full left-0 right-0 mt-0 bg-gradient-to-r from-gray-400 via-sky-800 to-gray-400 dark:from-gray-800 dark:via-sky-800 dark:to-gray-800 fixed left-0 w-full z-30 top-0 mb-5 p-1 text-lg transition-transform duration-300 transform">

        <div class="group flex flex-col items-center">

            <div class="flex items-center space-x-2">
                <p class="text-center font-bold text-white dark:text-black text-lg sm:text-xl md:text-3xl">Solid Rock Baptist</p>

                <button @click="contactOpen = !contactOpen" class="flex items-center justify-center items-center text-white font-bold py-1 px-1 rounded-full hover:border-sky-900 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 bg-sky-900 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path v-if="contactOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
            </div>

            <div id="contact" v-if="contactOpen" class="flex justify-center border-black border-4 rounded-lg h-auto w-28 bg-gray-500">
                <ul class="text-lg">
                    <li>

                        <a href="tel:2705272957">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="h-8 w-8 mt-4 bi bi-telephone-outbound text-black hover:text-sky-800" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </a>

                    </li>
                    <li>
                        <a href="mailto:joyoconnell@outlook.com?subject=Contact Solid Rock" class="text-black hover:text-sky-700 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8 mt-4 bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/maps/place/The+Solid+Rock+Baptist+Church/@36.9297529,-88.3411535,17z/data=!3m1!4b1!4m6!3m5!1s0x887a42bc802dd477:0x3046b7e3359d6952!8m2!3d36.9297486!4d-88.3385786!16s%2Fg%2F11c380rcrx?entry=ttu" class="text-black hover:text-sky-700">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="h-8 w-8 mt-4 bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            </div>
                <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
                    <!-- Mobile menu button-->
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button @click="navOpen = !navOpen" type="button" class="md:hidden relative flex items-center justify-center focus:!outline-none !border-none" aria-controls="mobile-menu" aria-expanded="false">
                                <svg class="block h-8 w-9 fixed left-3 bg-white dark:bg-black rounded-lg hover:bg-gray-700 hover:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path v-if="navOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div v-if="navOpen" class="px-8 sm:hidden p-4 rounded border mt-56 bg-white dark:bg-black">
                            <div class="w-full h-screen fixed z-10 top-0 left-0" @click="navOpen = false"></div>
                            <ul class="z-20 relative" @click.stop="navOpen = false">
                                <li><router-link to="/#/" class="text-red-800 hover:text-sky-700">Home</router-link>▾</li>
                                <li><router-link to="contact" class="text-red-800 hover:text-sky-700">Contact</router-link>▾</li>
                                <li><router-link to="about" class="text-red-800 hover:text-sky-700">About</router-link>▾</li>
                                <li><router-link to="prophecies" class="text-red-800 hover:text-sky-700">Prophecies</router-link>▾</li>
                                <li><router-link to="sermons" class="text-red-800 hover:text-sky-700">Sermons</router-link>▾</li>
                                <li><router-link to="directory" class="text-red-800 hover:text-sky-700">Directory</router-link>▾</li>
                                <li><router-link to="donate" class="text-red-800 hover:text-sky-700">Donate</router-link>▾</li>
                            </ul>
                        </div>
                        <div class="hidden sm:justify-center sm:items-center sm:ml-6 sm:flex w-full items-center">
                            <span>||</span>
                            <div v-for="button in navButtons" :key="button">
                                <router-link
                                class="sm:mr-4 px-1 py-1 md:px-2 hover:border rounded hover:bg-sky-700 text-black hover:text-white hover:border-black"
                                :to="button == 'Home' ? '/' : button.toLowerCase()"
                                v-html="button"
                                />
                                <span class="justify-between">|</span>
                            </div>
                            <span>|</span>
                        </div>
                    </div>
                </div>

        </nav>


    <!--Image Header-->
<link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet">
  <link href="style.css" type="text/css" rel="stylesheet">
  <div class="flex justify-center w-full mt-64 mb-50">
  <div class="flex -space-x-8 w-full">
        <div class="aspect-video w-full bg-center bg-cover filter grayscale hover:filter transition duration-500 transition duration-300 transform hover:scale-150 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full rounded-lg -mr-6 md:mr-0" style="background-image: url(https://i.swncdn.com/media/800w/cms/CCOM/46076-old-church.800w.tn.webp)" />
        <div class="aspect-video w-full bg-center bg-cover scale-150 filater hover:grayscale z-20 w-full h-lg md:w-full md:h-md lg:w-full lg:h-auto xl:w-full xl:h-auto relative shadow-md rounded-lg transform scale-150 -ml-6 -mr-6" style="background-image: url(https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" />
        <div class="aspect-video w-full bg-center bg-cover filter grayscale hover:filter-none transition duration-500 z-10 transition duration-300 transform hover:scale-150 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full rounded-lg -ml-6 md:ml-0" style="background-image: url(https://research.lifeway.com/wp-content/uploads/2021/05/church_plant_closures.jpg)" />
    </div>

</div>

    <router-view/>

</div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      navButtons: ['Home', 'About',  'Donate', 'Contact', 'Prophecies', 'Sermons', 'Directory'],
      contactOpen: false
    };
  },
  mounted() {
    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // Scroll up: Show the navbar
        navbar.style.transform = 'translateY(0)';
      } else {
        // Scroll down: Hide the navbar
        navbar.style.transform = `translateY(-${navbar.offsetHeight / 2}px)`;
      }
      prevScrollpos = currentScrollPos;
    };

    // Event listener to close navbar when clicked outside
    document.addEventListener('click', this.closeNavbarOnClickOutside);
  },
  beforeDestroy() {
    // Remove event listener to avoid memory leaks
    document.removeEventListener('click', this.closeNavbarOnClickOutside);
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
