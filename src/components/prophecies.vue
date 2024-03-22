<template>

<!--Header Image!!-->

    <!--Bible verse header-->
    <div style="display: flex; width: 100%; justify-content: center; margin-top: 100px;">
        <p class="text-red-800 text-sm sm:text-xl md:text-2xl"><em><strong>{{ text1 }}</strong></em></p>
      </div>
      <div style="display: flex; width: 100%; justify-content: center;">
        <p class="text-red-800 text-sm sm:text-xl md:text-2xl"><em><strong>{{ text2 }}</strong></em></p>
      </div>
      <div style="display: flex; width: 100%; justify-content: center;">
        <p class="text-red-800 text-sm sm:text-xl md:text-2xl"><strong>{{ text3 }}</strong></p>
      </div>
<!--Speaker Profile-->
<div class="flex flex-col w-full justify-center py-20">
   <div class="">
      <div class="text-3xl font-serif mb-2">
       <a href="https://www.sermonaudio.com/saplayer/playpopup.asp?SID=1218231313312511" class="text-sky-700 hover:underline" target="_blank">{{ SermonTitle }}</a>
       <div  class="text-sm font-sans text-sky-700">
        <span>Dec 17, 2023</span>
        <span> || </span>
        <span>John 1:1-14</span>
       </div>
      </div>
      <div class="text-xs text-sky-700">
      <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Henry%20Arterburn/">
        <img src="https://cfl-mango.s3.amazonaws.com/uploads/downloads/henry-pastor-profile-2.jpg" class="rounded-full w-10 h-10 inline-flex hover:brightness-50" /><span class="ml-2 text-base text-sky-700 font-serif">{{ Name }}</span>
      </a>
     </div>
   </div>
<!-- top of the audio div -->


                <div class="flex items-center w-full justify-center py-4">
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
     <!---- <div style="display: flex; width: 100%; justify-content: center; margin-top: 1px; margin-bottom: 20px;">
        <form action="/search" method="get">
          <input type="text" name="q" placeholder="Search..." style="width: 300px; height: 40px; border-radius: 10px;">
          <input type="submit" value=" ">
        </form>
      </div> -->
    <div style= "width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 1rem; padding-bottom: 5rem;">
        <div style="max-width: 100ch; color: white;">


         <div class="z-6 p-16 bg-gray-500 dark:bg-gray-800 backdrop-blur rounded-lg border-4 border-sky-800 p-8 space-y-8 z-10 hover:border-sky-800 hover:border-4">
             <div class="flex justify-between text-sm md:text-2xl mb-5">
              <div class="text-black text-sm md:text-2xl mb-5"><strong>Prophecy:</strong></div>
              <div class="text-black sm:text-sm md:text-2xl mb-5"><strong>Descriptions:</strong></div>
              <div class="text-black text-sm md:text-2xl mb-5"><strong>Fulfillments:</strong></div>
            </div>
            <div v-for="p in prophecies" @click="selectProphecy(p)" class="flex justify-between space-x-4 space-y-1">
              <div class="text-slate-800 dark:text-white">{{ p.Prophecy }}</div>
              <div class="text-sky-800 hover:underline">{{ p.Descriptions }}</div>
              <div class="text-slate-800 dark:text-white">{{ p.Fulfillments }}</div>
            </div>
          </div>

    </div>
        <div v-if="selectedProphecy" @click="selectedProphecy = null" class="fixed w-full h-screen flex items-center justify-center bg-black/50 backdrop-blur z-50 top-0 left-0">
            <div @click.stop class="bg-white rounded-lg max-w-2xl">
                <div class="text-center mb-4">
                    <div class="text-lg mt-4 text-black"><strong>{{ selectedProphecy.Descriptions }}</strong></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-3 border rounded bg-gray-50">
                        <div class="center text-m text-black"><strong>Prophecy:</strong></div>
                        <div class="text-sm text-black">{{ selectedProphecy.prophecyScripture }}</div>
                        <div class="m-2 text-black">- {{ selectedProphecy.Prophecy }}</div>
                    </div>
                    <div class="p-2 border rounded bg-gray-50">
                        <div class="center text-m text-black"><strong>Fulfillment:</strong></div>
                        <div class="text-sm text-black">{{ selectedProphecy.fulfillmentScripture }}</div>
                        <div class="mt-2 text-black">- {{ selectedProphecy.Fulfillments }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-col flex w-full justify-center">
          <div class="flex w-full justify-center">
            <img src="https://cfl-mango.s3.amazonaws.com/uploads/downloads/proto-evangelium-transparent-bg.png" class="w-full max-w-md">
          </div>
     </div>

</template>

<script>
export default {
    data() {
        return {
            text1: '"Do not think that I have come to abolish the Law or the Prophets;',
            text2: 'I have not come to abolish them but to fulfill them."',
            text3:'(Mathew 5:17)',
            Name:'Henry Bradford Arterburn',
            SermonTitle:'The Glorious Incarnation',title: 'The one the Prophets Foretold',
            rating: [],
            progressBar: 0,
            isPlaying: false,
            prophecy: '',
            prophecies: [],
            positive: [],
            terms: false,
            audioSource: 'https://cfl-mango.s3.amazonaws.com/uploads/downloads/The%20Glorious%20Incarnation.mp3',
            selectedProphecy: null,
            prophecies:[
        {
            Prophecy: "Gen 3:15",
            Descriptions: "The Serpent Slaying Savior",
            Fulfillments: "Heb 2:14"
        },
        {
            Prophecy: "Gen 3:16",
            Descriptions: "The Seed of the women",
            Fulfillments: "Gal 4:4"
        },
        {
            Prophecy: "Gen 9:26-27",
            Descriptions: "Son and God of Shem",
            Fulfillments: "Luke 3:36"
        },
        {
            Prophecy: "Gen 12:24",
            Descriptions: "Seed of Abraham",
            Fulfillments: "Gal 3:8"
        },
        {
            Prophecy: "Gen 14:18",
            Descriptions: "A Second Melchizedek",
            Fulfillments: "Heb 6:20"
        },
        {
            Prophecy: "Gen 14:18",
            Descriptions: "King of Righousness",
            Fulfillments: "Heb 7:2"
        },
        {
            Prophecy: "Gen 14:18",
            Descriptions: "The Lord's Supper",
            Fulfillments: "Matt 26:26-29"
        },
        {
            Prophecy: "Gen 17:19",
            Descriptions: "Seed of Issac",
            Fulfillments: "Rom 9:7"
        },
        {
            Prophecy: "Gen 22:8",
            Descriptions: "The Lamb of God",
            Fulfillments: "John 1:29"
        },
        {
            Prophecy: "Gen 22:18",
            Descriptions: "Seed of Issac blesses the Nations",
            Fulfillments: "Gal 3:16"
        },
        {
            Prophecy: "Gen 26:2-5",
            Descriptions: "A Reddemer from Issac",
            Fulfillments: "Heb 11:18"
        },
        {
            Prophecy: "Gen 28:12",
            Descriptions: "A bridge to heaven",
            Fulfillments: "John 5:1"
        },
        {
            Prophecy: "Gen 49:10",
            Descriptions: "The seed of Jacob",
            Fulfillments: "Luke 3:34"
        },
        {
            Prophecy: "Gen 49:10",
            Descriptions: "The time of His coming",
            Fulfillments: "Luke 3:33"
        },
        {
            Prophecy: "Gen 49:10",
            Descriptions: "The Seed of Judah",
            Fulfillments: "John 17:3"
        },
        {
            Prophecy: "Gen 49:10",
            Descriptions: "Called: Shiloh or Sent",
            Fulfillments: "John 11:47"
        },
        {
            Prophecy: "Gen 49:10",
            Descriptions: "Unto Him obediance is Due",
            Fulfillments: "John 10:16"
        },
        {
            Prophecy: "Ex 3:13-15",
            Descriptions: "The Great I AM",
            Fulfillments: "John 4:26; 8:58"
        },
        {
            Prophecy: "Ex 12:5",
            Descriptions: "A Lamb without blemish",
            Fulfillments: "Heb 9:14; 1 Pet 1:19"
        },
        {
            Prophecy: "Ex 12:13",
            Descriptions: "The blood of the Lamb",
            Fulfillments:  "Rom 5:8"
        },
        {
            Prophecy: "Ex 12:21-27",
            Descriptions: "Christ is our Passover",
            Fulfillments: "1 Cor 5:7"
        },
        {
            Prophecy: "Ex 12:46",
            Descriptions: "Not a bone of the Lamb to be broken",
            Fulfillments: "John 19:31-36"
        },
        {
            Prophecy: "Ex 15:2",
            Descriptions: "His exaltation predicted as Yeshua",
            Fulfillments: "Acts 7:55-56"
        },
        {
            Prophecy: "Ex 15:11",
            Descriptions: "His Character-Holiness",
            Fulfillments: "Luke 1:35; Acts 4:27"
        },
        {
            Prophecy: "Ex 17:6",
            Descriptions: "The Spiritual Rock of Israel",
            Fulfillments:	"1 Cor 10:4"
        },
        {
            Prophecy: "Ex 33:19",
            Descriptions: "His Character-Merciful",
            Fulfillments: "Luke 1:72"
        },
        {
            Prophecy: "Lev 1:2-9",
            Descriptions: "His sacrifice a sweet smelling savor unto God",
            Fulfillments: "Eph 5:2"
        },
        {
            Prophecy: "Lev 14:11",
            Descriptions: "The leper cleansed-Sign to priesthood",
            Fulfillments: "5:12-14; Acts 6:7"
        },
        {
            Prophecy: "Lev 16:15-17",
            Descriptions: "Prefigures Christ's once-for-all death",
            Fulfillments: "Heb 9:7-14"
        },
        {
            Prophecy: "Lev 16:27",
            Descriptions: "Suffering outside the Camp",
            Fulfillments: "Matt 27:33; Heb 13:11-12"
        },
        {
            Prophecy: "Lev 17:11",
            Descriptions: "The Blood-the life of the flesh",
            Fulfillments: "Matt 26:28; Mark 10:45"
        },
        {
            Prophecy: "Lev 17:11",
            Descriptions: "It is the blood that makes atonement",
            Fulfillments: "Rom 3:23-24; 1 John 1:7"
        },
        {
            Prophecy: "Lev 23:36-37",
            Descriptions: "The Drink-offering, 'If any man thirst' ",
            Fulfillments:	"John 7:37"
        },
        {
            Prophecy: "Num 9:12",
            Descriptions: "Not a bone of Him broken",
            Fulfillments: "19:31-36"
        },
        {
            Prophecy: "Num 21:9",
            Descriptions: "The serpent/Christ liften up",
            Fulfillments: "John 3:14-18; 12:32"
        },
        {
            Prophecy: "Num 24:17",
            Descriptions: "Time: I shall see him, but not now",
            Fulfillments: "John 1:14; Gal 4:4"
        },
        {
            Prophecy: "Deut 18:15",
            Descriptions: "This is of a truth that prophet",
            Fulfillments: "John 6:14"
        },
        {
            Prophecy: "Deut 18:15-16",
            Descriptions: "Moses spoke of Me",
            Fulfillments: "John 5:45-47"
        },
        {
            Prophecy: "Deut 18:18",
            Descriptions: "Sent by the Father to speak His word",
            Fulfillments: "John 8:28-29"
        },
        {
            Prophecy: "Deut 18:19",
            Descriptions: "Whoever will not hear must bear his sin",
            Fulfillments: "Acts 3:22-23"
        },
        {
            Prophecy: "Deut 21:23",
            Descriptions: "Cursed is he that hangs on a tree",
            Fulfillments: "Gal 3:10-13"
        },
        {
            Prophecy: "Joshua 5:14-15",
            Descriptions: "The Captain of our soul",
            Fulfillments: "Heb 2:10"
        },
        {
            Prophecy: "Ruth 4:4-10",
            Descriptions: "Christ, our kinsman redeemer",
            Fulfillments: "1:3-7"
        },
        {
            Prophecy: "1 Sam 2:35",
            Descriptions: "A Faithful Priest",
            Fulfillments: "Heb 2:17; 3:1-3; 7:24-25"
        },
        {
            Prophecy: "1 Sam 2:10",
            Descriptions: "Shall be an anointed King to the Lord",
            Fulfillments: "Matt 28:18; John 12:15",
        },
        {
            Prophecy: "2 Sam 7:12",
            Descriptions: "David's Seed	Matt 1:1",
            Fulfillments: "Mat 1:1"
        },
        {
            Prophecy: "2 Sam 7:13",
            Descriptions: "His Kingdom is everlasting",
            Fulfillments: "2 Pet 1:11",
        },
        {
            Prophecy: "2 Sam 7:14",
            Descriptions: "The Son of God",
            Fulfillments: "Luke 1:32; Rom 1:3-4"
        },
        {
            Prophecy: "2 Sam 7:14",
            Descriptions: "David's house established forever",
            Fulfillments: "Luke 3:31; Rev 22:16"
        },
        {
            Prophecy: "2 Kg 2:11",
            Descriptions: "The bodily ascension to heaven illustrated",
            Fulfillments: "Luke 24:51"
        },
        {
            Prophecy: "1 Chr 17:11",
            Descriptions: "David's Seed",
            Fulfillments: "Matt 1:1; 9:27"
        },
        {
            Prophecy: "1 Chr 17:12-13",
            Descriptions: "To reign on David's throne forever",
            Fulfillments:	"Luke 1:32-33"
        },
        {
            Prophecy: "1 Chr 17",
            Descriptions: "I will be His Father and He MY SON",
            Fulfillments: "Heb 1:5"
        },
        {
            Prophecy: "Job 9:32-33",
            Descriptions: "The Mediator Betweeen God and Man",
            Fulfillments: "1 Tim 2:5"
        },
        {
            Prophecy: "Job 19:23-27",
            Descriptions: "The Resurrection predicted",
            Fulfillments: "John 5:24-29"
        },
        {
            Prophecy: "Psa 2:1-3",
            Descriptions: "The enmity of kings foreordained",
            Fulfillments: "Acts 4:25-28"
        },
        {
            Prophecy: "Psa 2:2",
            Descriptions: "The Titeled Anoited (Christ) pre given",
            Fulfillments: "John 1:41; Acts 2:36"
        },
        {
            Prophecy: "Psa 2:6",
            Descriptions: "His Character-Holiness",
            Fulfillments: "John 8:46; Rev 3:7"
        },
        {
            Prophecy: "Psa 2:6",
            Descriptions: "To own the title King",
            Fulfillments: "Matt 2:2"
        },
        {
            Prophecy: "Psa 2:7",
            Descriptions: "Declared the Beloved Son",
            Fulfillments: "Matt 3:17; Rom 1:4"
        },
        {
            Prophecy: "Psa 2:7-8",
            Descriptions: "The Crucifixion and Resurrection intimated",
            Fulfillments: "Acts 13:29-33"
        },
        {
            Prophecy: "Psa 2:8-9",
            Descriptions: "Rule the nations with a rod of iron",
            Fulfillments: "Rev 2:27; 12:5; 19:15"
        },
        {
            Prophecy: "Psa 2:12",
            Descriptions: "Life comes through faith in Him",
            Fulfillments: "John 20:31"
        },
        {
            Prophecy: "Psa 8:2",
            Descriptions: "The mouths of babes perfect His praise",
            Fulfillments: "Matt 21:16"
        },
        {
            Prophecy: "Psa 8:5-6",
            Descriptions: "His humiliation and exaltation",
            Fulfillments: "Heb 2:5-9"
        },
        {
            Prophecy: "Psa 9:7-10",
            Descriptions: "Judge the world in righteousness",
            Fulfillments: "Acts 17:31"
        },
        {
            Prophecy: "Psa 16:1",
            Descriptions: "Was not to see corruption",
            Fulfillments: "Acts 2:31; 13:35"
        },
        {
            Prophecy: "Psa 16:9-11",
            Descriptions: "Was to arise from the dead",
            Fulfillments: "John 20:9"
        },
        {
            Prophecy: "Psa 17:1-5",
            Descriptions: "The resurrection predicted",
            Fulfillments: "Luke 24:6"
        },
        {
            Prophecy: "Psa 18:2-3",
            Descriptions: "The horn of salvation",
            Fulfillments: "Luke 1:69-71"
        },
        {
            Prophecy: "Psa 22:1",
            Descriptions: "Forsaken because of sins of others",
            Fulfillments:	"2 Cor 5:21"
        },
        {
            Prophecy: "Psa 22:1",
            Descriptions: "ELOI ELOI LAMA SABATINI?",
            Fulfillments: "Matt 27:46"
        },
        {
                Prophecy: "Psa 22:2",
                Descriptions: "Darkness upon Calvary for three hours",
                Fulfillments:	"Matt 27:45"
        },
        {
            Prophecy: "Psa 22:7",
            Descriptions: "They scorn and mock Him.",
            Fulfillments: "Matt 27:39-44"
        },
        {
            Prophecy: "Psa 22:8",
            Descriptions: "He trusted in God, let Him deliver Him",
            Fulfillments: "Matt 27:43"
        },
        {
            Prophecy: "Psa 22:9-10",
            Descriptions: "Born the Savior",
            Fulfillments: "Luke 2:7"
        },
        {
                Prophecy: "Psa 22:12-13",
                Descriptions: "They seek His death",
                Fulfillments: 	"John 19:6"
        },
        {
            Prophecy: "Psa 22:14",
            Descriptions: "His blood poured out when they pierced His side",
            Fulfillments: "John 19:34"
        },
        {
            Prophecy: "Psa 22:1",
            Descriptions: "4-15	Suffered agony on Calvary",
            Fulfillments: "Mark 15:34-37"
        },
        {
            Prophecy: "Psa 22:1",
            Descriptions: "He thirsted",
            Fulfillments:	"John 19:28"
        },
        {
            Prophecy: "Psa 22:16",
            Descriptions: "They pierced His hands and His feet",
            Fulfillments: 	"John 19:34-37; 20:27"
        },
        {
            Prophecy: "Psa 22:17-18",
            Descriptions: "Stripped Him before the stares of men",
            Fulfillments: "Luke 23:34-35"
        },
        {
            Prophecy: "Psa 22:18.",
            Descriptions: "They parted His garments",
            Fulfillments: "John 19:23-24",
        },
        {
            Prophecy: "Psa 22:20-21",
            Descriptions: "He committed Himself to God",
            Fulfillments: "Luke 23:46"
        },
        {
            Prophecy: "Psa 22:20-21",
            Descriptions: "Satanic power bruising the Redeemer's heel",
            Fulfillments:	"Heb 2:14"
        },
        {
            Prophecy: "Psa 22:22",
            Descriptions: "His Resurrection declared",
            Fulfillments: "John 20:17"
        },
        {
            Prophecy: "Psa 22:27",
            Descriptions: "He shall be the governor of the nations",
            Fulfillments: "Col 1:16"
        },
        {
            Prophecy: "Psa 22:3",
            Descriptions: "It is finished",
            Fulfillments: "John 19:30; Heb 10:10-12; 14, 18"
        },
        {
            Prophecy: "Psa 23:1",
            Descriptions: "I am the Good Shepherd",
            Fulfillments:  "John 10:11; 1 Pet 2:25"
        },
        {
            Prophecy: "Psa 24:3",
            Descriptions: "His exaltation predicted",
            Fulfillments: "Acts 1:11; Phil 2:9"
        },
        {
            Prophecy: "Psa 30:3",
            Descriptions: "His resurrection predicted",
            Fulfillments: "Acts 2:32"
        },
        {
            Prophecy: "Psa 31:5",
            Descriptions: "Into Your hands I commit my spirit",
            Fulfillments: "Luke 23:46"
        },
        {
            Prophecy: "Psa 31:11",
            Descriptions: "His acquaintances fled from Him",
            Fulfillments: "Mark 14:5"
        },
        {
            Prophecy: "Psa 31:13",
            Descriptions: "They took counsel to put Him to death",
            Fulfillments: "Matt 27:1; John 11:5"
        },
        {
            Prophecy: "Psa 31:14-15",
            Descriptions: "He trusted in God, let Him deliver Him",
            Fulfillments: "Matt 27:4",
        },
        {
            Prophecy: "Psa 34:20",
            Descriptions: "Not a bone of Him broken",
            Fulfillments: "John 19:31-3"
        },
        {
            Prophecy: "Psa 35:1",
            Descriptions: "False witnesses rose up against Him",
            Fulfillments: "Matt 26:5"
        },
        {
            Prophecy: "Psa 35:19",
            Descriptions: "He was hated without a cause",
            Fulfillments: "John 15:2"
        },
        {
            Prophecy: "Psa 38:11",
            Descriptions: "His friends stood afar off",
            Fulfillments: "Luke 23:49"
        },
        {
            Prophecy: "Psa 38:12",
            Descriptions: "Enemies try to entangle Him by craft",
            Fulfillments: "Mark 14:1; Matt 22:15"
        },
        {
            Prophecy: "Psa 38:12-13",
            Descriptions: "Silent before Hisaccusers",
            Fulfillments: "Matt 27:12-1"
        },
        {
            Prophecy: "Psa 38:20",
            Descriptions: "He went about doing good",
            Fulfillments: "Acts 10:38"
        },
        {
            Prophecy: "Psa 40:2-5",
            Descriptions: "The joy of His resurrection predicted",
            Fulfillments: "John 20:20",
        },
        {
            Prophecy: "Psa 40:6-8",
            Descriptions: "His delight-the will of the Father",
            Fulfillments: "John 4:34; Heb 10:5-10"
        },
        {
            Prophecy: "Psa 40:9",
            Descriptions: "He was to preach the Righteousness in Israel",
            Fulfillments: "Matt 4:17"
        },
        {
            Prophecy: "Psa 40:14",
            Descriptions: "Confronted by adversaries in the Garden",
            Fulfillments: "John 18:4-6"
        },
        {
            Prophecy: "Psa 41:9",
            Descriptions: "Betrayed by a familiar friend",
            Fulfillments: "John 13:18"
        },
        {
            Prophecy: "Psa 45:2",
            Descriptions: "Words of Grace come from His lips",
            Fulfillments: "John 1:17; Luke 4:22"
        },
        {
            Prophecy: "Psa 45:6",
            Descriptions: "To own the title, God or Elohim",
            Fulfillments: "Heb 1:8"
        },
        {
            Prophecy: "Psa 45:7",
            Descriptions: "A special anointing by the Holy Spirit",
            Fulfillments: "Matt 3:16; Heb 1:9",
        },
        {
            Prophecy: "Psa 45:7-8",
            Descriptions: "Called the Christ (Messiah or Anointed)",
            Fulfillments: "Luke 2:1"
        },
        {
            Prophecy: "Psa 45:17",
            Descriptions: "His name remembered forever",
            Fulfillments: "Eph 1:20-21; Heb 1:8"
        },
        {
            Prophecy: "Ps 55:12-14",
            Descriptions: "Betrayed by a friend, not an enemy",
            Fulfillments: "John 13:1"
        },
        {
            Prophecy: "Ps 55:15",
            Descriptions: "Unrepentant death ofthe Betrayer",
            Fulfillments: "Matt 27:3-5; Acts 1:16-1"
        },
        {
            Prophecy: "Ps 68:18",
            Descriptions: "To give gifts to men",
            Fulfillments:  "Eph 4:7-16"
        },
        {
            Prophecy: "Ps 68:18",
            Descriptions: "Ascended into Heaven",
            Fulfillments: "Luke 24:5"
        },
        {
            Prophecy: "Ps 69:4",
            Descriptions: "Hated without a cause",
            Fulfillments: "John 15:2",
        },
        {
            Prophecy: "Psa 69:8",
            Descriptions: "A stranger to own brethren",
            Fulfillments: "John 1:11; 7:5"
        },
        {
            Prophecy: "Psa 69:9",
            Descriptions: "Zealous for the Lord's House",
            Fulfillments: "John 2:1"
        },
        {
            Prophecy: "Psa 69:14-20",
            Descriptions: "Messiah's anguish of soul before crucifixion",
            Fulfillments: "Matt 26:36-4"
        },
            {
                Prophecy: "Psa 69:20",
                Descriptions: "My soul is exceeding sorrowful",
                Fulfillments: "Matt 26:3"
            },
            {
                Prophecy: "Psa 69:21",
                Descriptions: "Given vinegar in thirst",
                Fulfillments: "Matt 27:3"
            },
            {
                Prophecy: "Psa 69:26",
                Descriptions: "The Savior given and smitten by God",
                Fulfillments: "John 17:4; 18:1"
            },
            {
                Prophecy: "Psa 72:10-11",
                Descriptions: "Great persons were to visit Him",
                Fulfillments: "Matt 2:1-1"
            },
            {
                Prophecy: "Psa 72:16",
                Descriptions: "The corn of wheat to fall into the Ground",
                Fulfillments: "John 12:24-2"
            },
            {
                Prophecy: "Psa 72:17",
                Descriptions: "Belief on His name will produce offspring",
                Fulfillments: "John 1:12-1"
            },
            {
                Prophecy: "Psa 72:17",
                Descriptions: "All nations shall be blessed by Him",
                Fulfillments: "Gal 3:8"
            },
            {
                Prophecy: "Psa 72:17",
                Descriptions: "All nations shall call Him blessed",
                Fulfillments: "John 12:13: Rev 5:8-1"
            },
            {
                Prophecy: "Psa 78:1-2",
                Descriptions: "He would teach in parables",
                Fulfillments: "Matt 13:34-35"
            },
            {
                Prophecy: "Psa 78:2",
                Descriptions: "To speak the Wisdom of God with authority",
                Fulfillments: "Matt 7:2",
            },
            {
                Prophecy: "Psa 80:17",
                Descriptions: "The Man of God's right hand",
                Fulfillments: "Mark 14:61-6"
            },
            {
                Prophecy: "Psa 88:",
                Descriptions: "The Suffering and Reproach of Calvary",
                Fulfillments: "Matt 27:26-5"
            },
            {
                Prophecy: "Ps 88:8",
                Descriptions: "They stood afar off and watched",
                Fulfillments: "Luke 23:4"
            },
            {
                Prophecy: "Ps 89:27",
                Descriptions: "Firstborn",
                Fulfillments: "Col 1:15-18"
            },
            {
                Prophecy: "Ps 89:27",
                Descriptions: "Emmanuel to be higher than earthly kings.",
                Fulfillments: "Luke 1:32-3"
            },
            {
                Prophecy: "Ps 89:35-37",
                Descriptions: "David's Seed, throne, kingdom endure forever",
                Fulfillments: "Luke 1:32-3"
            },
            {
                Prophecy: " Ps 89:36-37",
                Descriptions: "His character-Faithfulness",
                Fulfillments: "Rev 1:5; 19:1"
            },
            {
                Prophecy: "Ps 90:2",
                Descriptions: "He is from everlasting",
                Fulfillments: "John 1:1"
            },
            {
                Prophecy: "Psa 91:11-12",
                Descriptions: "11-12	Identified as Messianic, used to tempt Christ",
                Fulfillments: "Luke 4:10-11"
            },
            {
                Prophecy: "Psa 97:9",
                Descriptions: "His exaltation predicted",
                Fulfillments: "Acts 1:11; Eph 1:20"
            },
            {
                Prophecy: "Psa 100:5",
                Descriptions: "His character-Goodness",
                Fulfillments:	"Matt 19:16-17"
            },
            {
                Prophecy: "Psa 102:1-11",
                Descriptions: "The Suffering and Reproach of Calvary",
                Fulfillments:  "John 19:16-30"
            },
            {
                Prophecy: "Psa 102:25-27",
                Descriptions: "Messiah is the Preexistent Son",
                Fulfillments:  "Heb 1:10-12"
            },
            {
                Prophecy: "Psa 109:25",
                Descriptions: "Ridiculed",
                Fulfillments: "Matt 27:39"
            },
            {
                Prophecy: "Psa 110:1",
                Descriptions: "Son of David",
                Fulfillments:	"Matt 22:42-45"
            },
            {
                Prophecy: "Psa 110:1",
                Descriptions: "To ascend to the right-hand of the Father",
                Fulfillments: "Mark 16:19"
            },
            {
                Prophecy: "Psa 110:1",
                Descriptions: "David's son called Lord",
                Fulfillments: "Matt 22:44-45"
            },
            {
                Prophecy: "Ps 110:4",
                Descriptions: "A priest after Melchizedek's order",
                Fulfillments: "Heb 6:20"
            },
            {
                Prophecy: "Psa 112:4",
                Descriptions: "His character-Compassionate, Gracious, eternal",
                Fulfillments: "Matt 9:36"
            },
            {
                Prophecy: "Psa 118:17-18",
                Descriptions: ":17-18	Messiah's Resurrection assured",
                Fulfillments: "Luke 24:5-7; 1 Cor 15:20"
            },
            {
                Prophecy: "Psa 118:22-23",
                Descriptions: "The stone rejected is no foremsot",
                    Fulfillments: "Matt 21:42-43"
            },
            {
                Prophecy: "Psa 118:26a",
                Descriptions: "The Blessed One presented to Israel",
                Fulfillments: "Matt 21:9"
            },
            {
                Prophecy: "Psa 118:26b",
                Descriptions: "To come while Temple standing",
                Fulfillments: "Matt 21:12-15"
            },
            {
                Prophecy: "Psa 132:1",
                Descriptions: "The Seed of David (the fruit of His Body)",
                Fulfillments: "Luke 1:32; Act 2:30"
            },
            {
                Prophecy: "Psa 129:3",
                Descriptions: "He was scourged",
                Fulfillments: "Matt27:26"
            },
            {
                Prophecy: "Psa 138:1-6",
                Descriptions: ":The supremacy of David's Seed amazes kings",
                Fulfillments: "Matt 2:2-6"
            },
            {
                Prophecy: "Psa 147:3-6",
                Descriptions: "The earthly ministry of Christ described",
                Fulfillments: "Luke 4:18"
            },
            {
                Prophecy: "Prov 1:23",
                Descriptions: "He will send the Spirit of God",
                Fulfillments:  "John 16:7"
            },
            {
                Prophecy: "Prov 8:23",
                Descriptions: "Foreordained from everlasting",
                Fulfillments:  "Rev 13:8; 1 Pet 1:19-20"
            },
            {
                Prophecy: "Song 5:16",
                Descriptions: "The altogether lovely One",
                Fulfillments: "John 1:17"
            },
            {
                Prophecy: "Isa 2:3",
                Descriptions: "He shall teach all nations",
                Fulfillments: "John 4:25"
            },
            {
                Prophecy: "Isa 2:4",
                Descriptions: "He shall judge among the nations",
                Fulfillments:  "John 5:22",
            },
            {
                Prophecy: "Isa 6:1",
                Descriptions: "When Isaiah saw His glory",
                Fulfillments: "John 12:40-41"
            },
            {
                Prophecy: " Isa 6:8",
                Descriptions: "The One Sent by God",
                Fulfillments: "John 12:38-45",
            },
            {
                Prophecy: "Isa 6:9-10",
                Descriptions: "Parables fall on deaf ears",
                Fulfillments: "Matt 13:13-15"
            },
            {
                Prophecy: "Isa 6:9-12",
                Descriptions: "Blinded to Christ and deaf to His words",
                Fulfillments: "Acts 28:23-29",
            },
            {
                Prophecy: "Isa 7:14",
                Descriptions: "To be born of a virgin",
                Fulfillments: "Luke 1:35"
            },
            {
                Prophecy: "Isa 7:14",
                Descriptions: "To be Emmanuel-God with us",
                Fulfillments:  "Matt 1:18-23; 1 Tim 3:16"
            },
            {
                Prophecy: "Isa 8:8",
                Descriptions: "Called Emmanuel",
                Fulfillments:	"Matt 28:20",
            },
            {
                Prophecy: "Isa 8:14",
                Descriptions: "A stone of stumbling, a Rock of offense",
                Fulfillments:  "1 Pet 2:8"
            },
            {
                Prophecy: "Isa 9:1-2",
                Descriptions: "His ministry to begin in Galilee",
                Fulfillments: "Matt 4:12-17"
            },
            {
                Prophecy: "Isa 9:6",
                Descriptions: "A child born-Humanity",
                Fulfillments: "Luke 1:31"
            },
            {
                Prophecy: "Isa 9:6",
                Descriptions: "A Son given-Deity",
                Fulfillments: "Luke 1:32; John 1:14; 1 Tim 3:16",
            },
            {
                Prophecy: "Isa 9:6",
                Descriptions: "Declared to be the Son of God with power",
                Fulfillments: "Rom 1:3-4"
            },
            {
                Prophecy: "Isa 9:6",
                Descriptions: "The Wonderful One, Peleh",
                Fulfillments: "Luke 4:22",
            },
            {
                Prophecy: "Isa 9:6",
                Descriptions: "The Counselor, Yaatz",
                Fulfillments: "Matt 13:54",
            },
            {
                Prophecy: "Isa 9:6",
                Descriptions: "The Mighty God, El Gibor",
                Fulfillments: "1 Cor 1:24; Titus 2:3"
            },
            {
                Prophecy: "Isa 9:6",
                Descriptions: "The Everlasting Father, Avi Adth",
                Fulfillments: "John 8:58; 10:30"
            },
            {
                Prophecy: "Isa 9:6",
                Descriptions: "The Prince of Peace, Sar Shalom",
                Fulfillments: "John 16:33"
            },
            {
                Prophecy: "Isa 9:7",
                Descriptions: "To establish an everlasting kingdom",
                Fulfillments: "Luke 1:32-33"
            },
            {
                Prophecy: "Isa 9:7",
                Descriptions: "His Character-Just",
                Fulfillments:	"John 5:30"
            },
            {
                Prophecy: "Isa 9:7",
                Descriptions: "No end to his Government, Throne, and Peace",
                Fulfillments: "Luke 1:32-35"
            },
            {
                Prophecy: "Isa 11:1",
                Descriptions: "Called a Nazarene-the Branch, Netzer",
                Fulfillments: "Matt 2:23",
            },
            {
                Prophecy: "Isa 11:1",
                Descriptions: "A rod out of Jesse-Son of Jesse",
                Fulfillments: "Luke 3:23-32"
            },
            {
                Prophecy: "Isa 11:2",
                Descriptions: "Anointed One by the Spirit",
                Fulfillments: "Matt 3:16-17; Acts 10:38"
            },
            {
                Prophecy: "Isa 11:2",
                Descriptions: "His Character-Wisdom, Knowledge, et al",
                Fulfillments: "Col 2:3"
            },
            {
                Prophecy: "Isa 11:3",
                Descriptions: "He would know their thoughts",
                Fulfillments: "Luke 6:8; John 2:25"
            },
            {
                Prophecy: "Isa 11:4",
                Descriptions: "Judges with the sword of His mouth",
                Fulfillments: "Rev 2:16; 19:11"
            },
            {
                Prophecy: "Isa 11:5",
                Descriptions: "Character: Righteous & Faithful",
                Fulfillments: "Rev 19:11"
            },
            {
                Prophecy: "Isa 11:10",
                Descriptions: "The Gentiles seek Him",
                Fulfillments: "John 12:18-21"
            },
            {
                Prophecy: "Isa 12:2",
                Descriptions: "Called Jesus-Yeshua",
                Fulfillments: "Matt 1:21"
            },
            {
                Prophecy: "Isa 22:22",
                Descriptions: "The One given all authority to govern",
                Fulfillments: "Rev 3:7"
            },
            {
                Prophecy: "Isa 25:8",
                Descriptions: "The Resurrection predicted",
                Fulfillments: "1 Cor 15:54"
            },
            {
                Prophecy: "Isa 26:19",
                Descriptions: "His power of Resurrection predicted",
                Fulfillments: "Matt 27:50-54"
            },
            {
                Prophecy: "Isa 28:16",
                Descriptions: "The Messiah is the precious corner stone",
                Fulfillments: "Acts 4:11-12"
            },
            {
                Prophecy: "Isa 28:16",
                Descriptions: "The Sure Foundation",
                Fulfillments: "1 Cor 3:11; Matt 16:18"
            },
            {
                Prophecy: "Isa 29:13",
                Descriptions: "He indicated hypocritical obedience to His Word",
                Fulfillments: "Matt 15:7-9"
            },
            {
                Prophecy: "Isa 29:14",
                Descriptions: "The wise are confounded by the Word",
                Fulfillments: "1 Cor 1:18-31"
            },
            {
                Prophecy: "Isa 32:2",
                Descriptions: "A Refuge-A man shall be a hiding plac",
                Fulfillments: "Matt 23:37"
            },
            {
                Prophecy: "Isa 35:4",
                Descriptions: "He will come and save you",
                Fulfillments: "Matt 1:21"
            },
            {
                Prophecy: "Isa 35:5-6",
                Descriptions: "To have a ministry of miracles",
                Fulfillments: "Matt 11:2-6"
            },
            {
                Prophecy: "Isa 40:3-4",
                Descriptions: "Preceded by forerunner",
                Fulfillments: "John 1:23"
            },
            {
                Prophecy: "Isa 40:9",
                Descriptions: "Behold your God",
                Fulfillments: "John 1:36; 19:14"
            },
            {
                Prophecy: "Isa 40:10",
                Descriptions: "He will come to reward",
                Fulfillments: "Rev 22:12"
            },
            {
                Prophecy: "Isa 40:11",
                Descriptions: "A shepherd-compassionate life-giver",
                Fulfillments: "John 10:10-18"
            },
            {
                Prophecy: "Isa 42:1-4",
                Descriptions: "The Servant-as a faithful, patient redeemer",
                Fulfillments: "Matt 12:18-21"
            },
        ]
        }
    },
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
            audioElement.currentTime  += 15;
        }
       },
       skipBackward() {
        const audioElement = this.$refs.audio;
        if (audioElement) {
            audioElement.currentTime  -= 15;
       }
    },
       updateProgressBar() {
        const audioElement = this.$refs.audio;
        const currentTime = audioElement.currentTime
        const duration = audioElement.duration
        this.progressBar = (currentTime/duration)*100
       },
       handleClick() {
         console.log(this.$refs)
        },
        async selectProphecy(p) {
                let presponse = await fetch('https://api.churchandfamilylife.com/controllers/scripture/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    scripture: p.Prophecy,
                    plainText: true,
                    version:"nkjv"
                })
            })
            let fresponse = await fetch('https://api.churchandfamilylife.com/controllers/scripture/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    scripture: p.Fulfillments,
                    plainText: true,
                    version:"nkjv"
                })
            })
            p.prophecyScripture = await presponse.text()
            p.fulfillmentScripture = await fresponse.text()
            console.log('p.prophecyScripture', p.prophecyScripture)
            this.selectedProphecy = p
        }

    }
}
</script>

<style>
tbody {
    color: brown;
    border: 4px color goldenrod;
    margin: 10px;
    background: black;
}
h1 {
    color: red;
    width: 150px;
    margin: 5px;
    border: 10px;
    border-color: rgb(215, 3, 3);
    font-size: xx-large;
}

p {
    margin-left: 20xp;
    margin-right: 20xp;
    font-size: large;
}
audio-container{
    display: flex;
    align-items: center;
  }

  .profile-pic {
    width: 60px; /* Adjust the size of the profile picture */
    height: 60px;
    border-radius: 50%;
    margin-right: 10px; /* Adjust the spacing between the picture and the audio player */
  }
  body {
    transition: background-color 0.5s;
  }

  .container {
    text-align: center;
    padding: 50px;
  }

  .dark-mode {
    background-color: #333;
    color: #fff;
  }
</style>
