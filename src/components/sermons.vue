<template>
    <div>
        <span class="text-red-800 flex w-full justify-center items-center text-center mt-24 text-2xl md:text-3xl mb-24 font-serif">
          <strong>{{ title }}</strong>&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
        </svg>
    </span>
    </div>

    <!--Sermon cols-->
    <div class="flex flex-col gap-4 ">
        <div v-for="person in people" :key="person" class="w-3/4 sm:w-full group bg-slate-700 rounded-lg backdrop-blur shadow-lg backdrop-blur flex flex-col justify-center  rounded-lg mb-20">
            <div class="w-9/10 sm:w-auto p-8 relative translate-x-10 -translate-y-10 bg-slate-800 mb-2 backdrop-blur rounded-lg border-sky-800 p-8 space-y-8 z-10">

            <div class="text-lg sm:text-2xl md:text-3xl font-serif mb-1">
                <div class="text-xs text-sky-700">
                <div class="flex content justify-left">
                    <div>
                      <a :href="person.sa">
                            <img :src="person.image" class="border-2 border-sky-800 rounded-full w-12 h-12 sm:w-14 sm:h-14 inline-flex hover:brightness-50" target="_blank" />
                        <p class="ml-2 text-base text-sky-700 font-serif hover:border-b">{{ person.name }}</p>
                      </a>
                    </div>
                   <div>
                    <span><a :href="person.sermonAudio" class="text-sky-700 text-xl sm:text-3xl hover:text-sky-600 hover:border-b" target="_blank">{{ person.sermonTitle }}</a></span>
                </div>
            </div>
                <div class="text-sm sm:text-lg font-sans text-red-900">
                    <span>{{ person.date }}</span>
                    <span class="ml-2 mr-2 text-slate-400"> || </span>
                    <span>{{ person.text }}</span>
                </div>
            </div>
        </div>
            </div>


            <div class="hidden group-hover:block">
                <div class="flex items-center w-full justify-center py-2">
                    <button @click="skipBackward" class="flex items-center fill-current cursor-pointer self-center select-none mr-2 text-sky-700 hover:border-sky-800 bg-gray-800 hover:bg-white dark:bg-white dark:hover:bg-black border-1 hover:border-2 border-black ">
                        <img src="https://cfl-mango.s3.amazonaws.com/uploads/downloads/skip-15-backward.png" class="w-full max-w-[1.4rem]"/>
                    </button>
                    <button @click="playAudio" class="text-lg text-sky-700 uppercase font-bold font-serif rounded-full border-slate-600 hover:border-sky-800 bg-gray-800 hover:bg-white dark:bg-white hover:bg-ul-blue-700 dark:hover:bg-black border-1 hover:border-2 ">{{ isPlaying ? 'Pause' : 'Play' }}</button>
                    <audio ref="audio" :src="audioSource" @timeupdate="updateProgressBar" class="hidden p-3 bg-black"></audio>
                    <button @click="skipForward" class="flex items-center fill-current cursor-pointer self-center select-none ml-2 border-black hover:border-sky-800 text-sky-700 bg-gray-800 hover:bg-white dark:bg-white dark:hover:bg-black border-1 hover:border-2 ">
                        <img src="https://cfl-mango.s3.amazonaws.com/uploads/downloads/skip-15.png" class="w-full max-w-[1.5rem]"/>
                    </button>
                </div>

                <div class="w-full my-6 sm:my-12">
                    <div class="justify-center w-full flex items-center divide-x-[1px] divide-white dark:divide-black">
                        <div class="w-full max-w-2xl h-2 ml-2 bg-slate-400 relative overflow-hidden rounded">
                            <div :style="{ width: progressBar + '%'}" class="h-full bg-blue-600"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

  <script>
  export default {
      data() {
          return {
              title: 'Messages from SRBC',
              selectedtext: null,
              text: [
                {
                    scripture: 'Genesis 3:16'
                }
              ],
              people: [
        {
          name: 'Kyle Reeder',
          sermonTitle: 'A Prayer and An Apeal',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/23550-0001.png',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Kyle%20Reeder/',
          audioSource: 'https://cfl-mango.s3.amazonaws.com/uploads/downloads/The%20Glorious%20Incarnation.mp3',
          date: 'Jan, 1st, 2024',
          text: 'Hebrews 2:1-5',
          sermonAudio:'https://www.sermonaudio.com/solo/srbcaudio/sermons/31824114221364/'


        },
        {
          name: 'Charlie Lynch',
          sermonTitle: 'All is vanity',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/27721-0001.PNG',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Charley%20Lynch/',
          audioSource: 'https://cfl-mango.s3.amazonaws.com/uploads/downloads/The%20Glorious%20Incarnation.mp3',
          date: 'Feb 24, 2024',
          text: 'Hebrews 2:1-5',
          sermonAudio:''

        },
        {
          name: 'Brent Madding',
          sermonTitle: 'Where Grace is reinging grace is training',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/29666-0001.png',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brent%20Madding/',
          audioSource: 'https://cfl-mango.s3.amazonaws.com/uploads/downloads/The%20Glorious%20Incarnation.mp3',
          date: 'Jan, 1st, 2024',
          text: 'Hebrews 2:1-5',
          sermonAudio:''

        },
        {
          name: 'Brian Sims',
          sermonTitle: 'Jesus Loses None',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/24152-0001.png',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brian%20Sims/',
          audioSource: 'https://cfl-mango.s3.amazonaws.com/uploads/downloads/The%20Glorious%20Incarnation.mp3',
          date: 'Jan, 1st, 2024',
          text: 'Hebrews 2:1-5',
          sermonAudio:''
        }
      ]
    }
  }
}
  </script>

  <style>

  </style>
