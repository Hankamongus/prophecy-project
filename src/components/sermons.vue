<template>
    <div>
        <h1 class="text-red-800 flex w-full justify-center items-center text-center mt-20 text-2xl md:text-3xl">
          <strong>{{ title }}</strong>&nbsp;
        </h1>
    </div>

    <!--Sermon cols-->
    <div class="flex flex-col gap-4">
        <div v-for="person in people" :key="person" class="flex flex-col w-full justify-center p-8 bg-gray-500 dark:bg-gray-800 group border-sky-800 border-2 rounded-lg">

            <div class="text-lg sm:text-2xl md:text-3xl font-serif mb-1">
                <a :href="person.sermonAudio" class="text-sky-700 hover:underline" target="_blank">{{ person.sermonTitle }}</a>
                <div class="text-sm font-sans text-sky-700">
                    <span>{{ person.date }}</span>
                    <span> || </span>
                    <span>{{ text.scripture }}</span>
                </div>
            </div>

            <div class="text-xs text-sky-700">
                <a :href="person.sa">
                    <img :src="person.image" class="rounded-full w-10 h-10 inline-flex hover:brightness-50" target="_blank" /><span class="ml-2 text-base text-sky-700 font-serif">{{ person.name }}</span>
                </a>
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
          date: '',
          sermonAudio:'https://www.sermonaudio.com/solo/srbcaudio/sermons/31824114221364/'


        },
        {
          name: 'Charlie Lynch',
          sermonTitle: 'All is vanity',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/27721-0001.PNG',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Charley%20Lynch/',
          audioSource: 'https://cfl-mango.s3.amazonaws.com/uploads/downloads/The%20Glorious%20Incarnation.mp3',
          date: 'Feb 24 2024',
          sermonAudio:''

        },
        {
          name: 'Brent Madding',
          sermonTitle: 'Where Grace is reinging grace is training',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/29666-0001.png',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brent%20Madding/',
          audioSource: 'https://cfl-mango.s3.amazonaws.com/uploads/downloads/The%20Glorious%20Incarnation.mp3',
          date: '',
          sermonAudio:''

        },
        {
          name: 'Brian Sims',
          sermonTitle: 'Jesus Loses NONE',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/24152-0001.png',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brian%20Sims/',
          audioSource: 'https://cfl-mango.s3.amazonaws.com/uploads/downloads/The%20Glorious%20Incarnation.mp3',
          date: '',
          sermonAudio:''
        }
      ]
    }
  }
}
  </script>

  <style>

  </style>
