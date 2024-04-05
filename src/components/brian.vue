<template>

    <div>
       <div>
            <h1 class="text-red-800 flex w-full justify-center items-center text-center mt-20 text-2xl md:text-3xl">
               <strong>{{ title }}</strong>&nbsp;
           </h1>
       </div>


       <div class="h-full w-2 hover:w-full sm:hover:w-64 bg-gray-800  fixed left-0 z-20 rounded-lg border-black border-2  hover:border-sky-700 group top-8">
            <span class="group-hover:hidden text-red-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class=" bi bi-arrow-bar-right mt-64" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
                </svg>
            </span>
           <ul class="hidden group-hover:block mt-24">
           <li class="text-red-800 sm:text-white font-serif font-bold text-4xl mb-4">Contact:</li>
           <li class="hover:bg-gray-500 mb-12 text-2xl"><router-link to="kyle" class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline"><strong>Pastor~</strong> Kyle Reeder</router-link></li>
           <li class="hover:bg-gray-500 mb-12 text-2xl"><router-link to="brent" class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline"><strong>Elder~</strong> Brent Madding</router-link></li>
           <li class="hover:bg-gray-500 mb-12 text-2xl"><router-link to="charlie" class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline"><strong>Elder~</strong> Charlie Lynch</router-link></li>
           <li class="hover:bg-gray-500 mb-12 text-2xl"><router-link to="brian" class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline"><strong>Elder~</strong> Brian Sims</router-link></li>
           <li class="hover:bg-gray-500 hover:text-sky-800 mb-12 text-2xl"><router-link to="leadership" class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline">Front Desk~</router-link></li>
           <li class="hover:bg-gray-500 hover:text-sky-800 mb-12 text-2xl"><router-link to="leadership" class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline">Help~</router-link></li>
           <li class="hover:bg-gray-500 hover:text-sky-800 mb-12 text-2xl"><router-link to="leadership" class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline">Outreach~</router-link></li>
       </ul>
   </div>
<div class="mt-24 max-w-3xl mx-auto px-8 gap-4 md:gap-8 content justify-center">
    <div class="content justify-center p-8 relative translate-x-10 -translate-y-10 bg-slate-800 mb-8 backdrop-blur rounded-lg border-sky-800 p-8 space-y-8 z-10">
        <div class="group left-0 ml-0 z-10 p-16  rounded-lg border-2 space-y-8 w-full h-full bg-gray-500 dark:bg-gray-800 border-sky-800 mb-4">
        <div class="profile-section mt-0 flex flex-col items-center">
            <a :href="sa">
                <img class="profile-picture hover:brightness-50 rounded-full border-2 border-sky-800" :src='image' alt="Profile Picture">
            </a>
            <a :href="sa" class="text-4xl font-bold text-sky-700 mb-1 hover:underline hover:text-sky-700 hover:underline mt-0">{{ name }}</a>
            <a :href="sa" class="text-2xl font-bold text-sky-700 mb-4 hover:text-sky-700 mt-0"><em>Elder</em></a>
            <ul class="text-lg text-black list-disc list-inside">
                <li class="flex content justify-center">
                    <span class="text-white text-xl sm:text-2xl p-2">Email:</span>
                    <a :href="`mailto:${email}?subject=Hey ${name}`" class="text-white dark:text-gray-500 hover:text-sky-700 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-4 w-4 sm:h-6 sm:w-6 mt-4 bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                    </a>
                </li>
                <li class="flex content justify-center">
                    <span class="text-xl text-white sm:text-2xl p-2">Call:</span>
                    <a :href="`tel:(270) 205-6625`">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="text-white dark:text-gray-500 h-6 w-6 mt-4 bi bi-telephone-outbound text-black dark:text-white hover:text-sky-800" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="group flex items-center">
                <div class="mt-4 text-xl sm:text-2xl font-bold text-black dark:text-white">About</div>
                <button @click="aboutOpen = aboutOpen == name ? null : name" class="flex items-center justify-center items-center text-white font-bold py-1 px-1 rounded-full hover:border-sky-900 p-1 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:w-4 sm:h-4 hover:h-6 hover:w-6 bg-sky-900 rounded-full transition-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path v-if="aboutOpen  == name" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
            </div>
           <div id="about" v-if="aboutOpen == name" @click="aboutOpen = name" class="flex items-center justify-center items-center text-white font-bold py-1 px-1 rounded-full hover:border-sky-900 p-1">
               <div @click.stop class="bg-transparent rounded-lg max-w-2xl">
                   <div class="text-center mb-4">
                   <div class="text-lg">{{ bio }}</div>
               </div>
             </div>
         </div>
     </div>
  </div>
</div>
</div>


   <!-- Main Content -->
   <div class="container mx-auto py-12">
   <div class="max-w-xl sm:max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
     <div class="px-6 py-4">
        <div class="flex content justify-center">
            <span class="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Contact {{ name }}</span>
            <span class="ml-4">
                <a :href="sa">
                    <img class="profile-picture hover:brightness-50 rounded-full border-2 border-sky-800 h-4 w-4 md:h-12 md:w-12" :src='image' alt="Profile Picture">
                </a>
             </span>
        </div>
       <form @submit.prevent="sendEmail">
         <div class="mb-4">
           <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
           <input type="email" v-model="email" id="email" name="email" class="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-sky-700">
         </div>
         <div class="mb-4">
           <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
           <textarea v-model="message" id="message" name="message" rows="4" class="appearance-none border rounded w-full py- px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-sky-700"></textarea>
         </div>
         <div class="flex justify-end">
           <button @click="sendEmail" type="submit" class="bg-blue-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:w-8 sm:h-8 bg-sky-900 rounded-full transition-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path v-if="sendOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z"/>
                       <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                   </svg>
           </button>
         </div>
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
               title: 'Brian Sims',
               aboutOpen: null,
               message: 'Hey Solid Rock',
               sendOpen: false,
               position: 'Elder',
               name: 'Brian Sims',
               email: 'brian.sims@example.com',
               phone: '(270) 205-6625',
               bio: 'Brian Sims serves as an esteemed elder at Solid Rock Baptist Church in Benton, Kentucky, embodying a steadfast commitment to the congregations spiritual growth and well-being. With a heart devoted to service, Brian tirelessly advocates for the churchs mission, imparting wisdom and guidance drawn from his deep-rooted faith. Through his dedicated leadership, Brian fosters a nurturing environment where individuals can flourish in their relationship with God and each other, making an indelible impact on the community and exemplifying the churchs values of compassion, integrity, and grace.',
               image: 'https://media.sermonaudio.com/images/speakers/thumbnail/24152-0001.png',
               sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brian%20Sims/',
               aboutOpen: null,
           };
 },
 methods: {
   sendEmail() {
     this.email = 'joyOconell@gmail.com';
     this.message = 'Hey Solid Rock';


           }
       }

     }
     </script>

     <style>

     </style>
