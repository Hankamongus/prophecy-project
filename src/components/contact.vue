<template>
     <div>
        <h1 class="text-red-800 flex w-full justify-center items-center text-center mt-20 text-2xl md:text-3xl">
        <strong>{{ title }}</strong>&nbsp;
    </h1>
  </div>
 <div class="w-full grid grid-cols-1 md:grid-cols-2 px-8 gap-4 md:gap-8">

    <div v-for="person in people" :key="person" class="group left-0 ml-0 z-10 p-16  rounded-lg border-2 space-y-8 w-full h-full hover:h-screen bg-gray-500 dark:bg-gray-800 border-sky-800 mb-4">
    <div class="profile-section mt-0 flex flex-col items-center"> <!-- Modified this line -->
        <a :href="person.sa">
            <img class="profile-picture hover:brightness-50 rounded-full border-2 border-sky-800" :src="person.image" alt="Profile Picture">
        </a>
        <a :href="person.sa" class="text-4xl font-bold text-sky-700 mb-4 hover:underline hover:text-sky-700 hover:underline mt-0">{{ person.name }}</a>
        <ul class="text-lg text-black list-disc list-inside">
            <li class="mb-2">{{ person.title }}</li>
            <li class="flex items center">
                <a :href="`mailto:${person.email}?subject=Hey ${person.name}`" class="text-black hover:text-sky-700 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8 mt-4 bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                        </a>
                        <a :href="`mailto:${person.email}?subject=Hey ${person.name}`" class="text-black hover:text-sky-800 underline">{{ person.name }}</a></li>
            <li class="flex items-center">
                <a :href="`tel:${person.phone}`">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="h-6 w-6 mt-4 bi bi-telephone-outbound text-black hover:text-sky-800" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </a>
                        <a :href="`tel:${person.phone}`" class="text-black hover:text-sky-800 underline">{{ person.phone }}</a>
                    </li>
        </ul>
        <div class="mt-4 font-bold">About</div>
        <div class="hidden group-hover:block">{{ person.bio }}</div>
    </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Contact Solid Rock Baptist church',
      people: [
        {
          title: 'Pastor',
          name: 'Kyle Reeder',
          email: 'kyle.reeder@example.com',
          phone: '(270) 978-2792',
          bio: 'Pastor Kyle Reeder, a devoted shepherd in Benton, Kentucky, leads his congregation with unwavering dedication rooted in Reformed Baptist theology. Born and raised in Benton, Pastor Kyle`s spiritual journey began with a profound encounter that ignited his passion for faith. Now, as the pastor of a vibrant church, he guides his flock with humility and empathy, offering wisdom drawn from Scripture and the transformative power of redemption. Beyond the pulpit, Pastor Kyle`s engagement in the community reflects his commitment to service, partnering with local organizations and extending a helping hand to those in need. His ministry embodies the spirit of servant leadership, inspiring others with his compassionate mentorship and unwavering belief in the redeeming grace of God.',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/23550-0001.png',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Kyle%20Reeder/'
        },
        {
          title: 'Elder',
          name: 'Charlie Lynch',
          email: 'charlie.lynch@example.com',
          phone: '(270) 564-0033',
          bio: 'Charlie Lynch, an esteemed elder at Solid Rock Baptist Church in Benton, Kentucky, brings a wealth of knowledge and devotion to his role, coupled with a unique proficiency in Biblical Greek. With a heart dedicated to deepening understanding and fostering spiritual growth, Charlies fluency in Biblical Greek enriches the congregations study of scripture and strengthens their connection to the teachings of the Bible. His commitment to serving the church community is characterized by his passion for sharing the wisdom and insights gleaned from his linguistic expertise, guiding fellow believers on a journey of discovery and enlightenment. Through his leadership and linguistic acumen, Charlie Lynch leaves an indelible mark on Solid Rock Baptist Church, empowering its members to delve deeper into their faith and engage more profoundly with the sacred texts that form the foundation of their beliefs.',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/27721-0001.PNG',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Charley%20Lynch/'
        },
        {
          title: 'Elder',
          name: 'Brent Madding',
          email: 'brent.madding@example.com',
          phone: '(270) 970-1668',
          bio: 'Brent Madding, a devoted elder at Solid Rock Baptist Church in Benton, Kentucky, stands as a pillar of strength and integrity within both his church community and the broader Marshall County as its sheriff. With unwavering dedication, Brent fulfills his dual roles with grace and humility, embodying the values of service, justice, and compassion. Whether guiding the flock at the church or safeguarding the community as sheriff, Brents leadership is characterized by a profound sense of duty and a deep-rooted commitment to uplifting those around him. Through his exemplary service, Brent Madding exemplifies the essence of servant leadership, leaving a lasting legacy of faith, honor, and selflessness in Benton and beyond.',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/29666-0001.png',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brent%20Madding/'
        },
        {
          title: 'Elder',
          name: 'Brian Sims',
          email: 'brian.sims@example.com',
          phone: '(270) 205-6625',
          bio: 'Brian Sims serves as an esteemed elder at Solid Rock Baptist Church in Benton, Kentucky, embodying a steadfast commitment to the congregations spiritual growth and well-being. With a heart devoted to service, Brian tirelessly advocates for the churchs mission, imparting wisdom and guidance drawn from his deep-rooted faith. Through his dedicated leadership, Brian fosters a nurturing environment where individuals can flourish in their relationship with God and each other, making an indelible impact on the community and exemplifying the churchs values of compassion, integrity, and grace.',
          image: 'https://media.sermonaudio.com/images/speakers/thumbnail/24152-0001.png',
          sa: 'https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brian%20Sims/'
        }
      ]
    }
  }
}
</script>


  <style>

  </style>
