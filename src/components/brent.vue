<template>

    <div>
       <div>
            <h1 class="text-red-800 flex w-full justify-center items-center text-center mt-24 text-2xl md:text-3xl font-serif">
               <strong>{{ title }}</strong>&nbsp;
           </h1>
       </div>
       <Nav />
       <Elders />
    </div>
</template>

     <script>

import Nav from '../components/nav.vue'
import Elders from '../components/elders.vue'

export default {
  name: 'App',
  components: {
      Nav,
      Elders
  },
       data() {
           return {
               title: 'Brent Madding',
               aboutOpen: null,
               position: 'Elder',
               name: 'Brent Madding',
               email: 'brent.madding@example.com',
               phone: '(270) 970-1668',
               bio: 'Brent Madding, a devoted elder at Solid Rock Baptist Church in Benton, Kentucky, stands as a pillar of strength and integrity within both his church community and the broader Marshall County as its sheriff. With unwavering dedication, Brent fulfills his dual roles with grace and humility, embodying the values of service, justice, and compassion. Whether guiding the flock at the church or safeguarding the community as sheriff, Brents leadership is characterized by a profound sense of duty and a deep-rooted commitment to uplifting those around him. Through his exemplary service, Brent Madding exemplifies the essence of servant leadership, leaving a lasting legacy of faith, honor, and selflessness in Benton and beyond.',
               image: 'https://media.sermonaudio.com/images/speakers/thumbnail/29666-0001.png',
               sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brent%20Madding/',
               message: 'Hey Solid Rock',
               sendOpen: false,
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
