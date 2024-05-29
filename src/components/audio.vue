<template>
  <div>
    <div class="flex items-center w-full justify-center py-4">
        <button @click="skipBackward"
            class="flex items-center fill-current cursor-pointer self-center select-none mr-2 text-sky-700 hover:border-sky-800 bg-gray-800 hover:bg-white dark:bg-white dark:hover:bg-black border-1 hover:border-2 border-black ">
            <img src="https://cfl-mango.s3.amazonaws.com/uploads/downloads/skip-15-backward.png"
                class="w-full max-w-[1.4rem]" />
        </button>
        <button @click="playAudio"
            class="text-lg text-sky-700 uppercase font-bold font-serif rounded-full border-slate-600 hover:border-sky-800 bg-gray-800 hover:bg-white dark:bg-white hover:bg-ul-blue-700 dark:hover:bg-black border-1 hover:border-2 ">{{
        isPlaying ? 'Pause' : 'Play' }}</button>
        <audio ref="audio" :src="src" @timeupdate="updateProgressBar" class="hidden p-3 bg-black"></audio>
        <button @click="skipForward"
            class="flex items-center fill-current cursor-pointer self-center select-none ml-2 border-black hover:border-sky-800 text-sky-700 bg-gray-800 hover:bg-white dark:bg-white dark:hover:bg-black border-1 hover:border-2 ">
            <img src="https://cfl-mango.s3.amazonaws.com/uploads/downloads/skip-15.png"
                class="w-full max-w-[1.5rem]" />
        </button>
    </div>
    <div class="w-full my-6 sm:my-12">
        <div class="justify-center w-full flex items-center divide-x-[1px] divide-white dark:divide-black">
            <div class="w-full max-w-2xl h-2 ml-2 bg-slate-400 relative overflow-hidden rounded">
                <div :style="{ width: progressBar + '%' }" class="h-full bg-blue-600"></div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['src'],
    methods: {
        playAudio() {
            const audioElement = this.$refs.audio;
            if (this.isPlaying) {
                audioElement.pause();
            } else {
                audioElement.play();
            }
            this.isPlaying = !this.isPlaying;
        },
        skipForward() {
            const audioElement = this.$refs.audio;
            if (audioElement) {
                audioElement.currentTime += 15;
            }
        },
        skipBackward() {
            const audioElement = this.$refs.audio;
            if (audioElement) {
                audioElement.currentTime -= 15;
            }
        },
        updateProgressBar() {
            const audioElement = this.$refs.audio;
            const currentTime = audioElement.currentTime
            const duration = audioElement.duration
            this.progressBar = (currentTime / duration) * 100
        },
    }
}
</script>

<style>

</style>
