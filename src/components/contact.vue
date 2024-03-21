<template>
     <div style="max-width: 100ch;">
        <h1 class="text-red-800 flex w-full justify-center items-center text-center mt-20 text-2xl md:text-3xl">
        <strong>{{ title }}</strong>&nbsp;
    </h1>
  </div>
 <div class="w-full grid grid-cols-1 md:grid-cols-2 px-8 gap-4 md:gap-8">

    <div v-for="person in people" :key="person" class="group left-0 ml-0 z-10 p-16  rounded-lg border-2 space-y-8 w-full h-full hover:h-screen bg-gray-500 border-sky-800 mb-4">
    <div class="profile-section mt-0 flex flex-col items-center"> <!-- Modified this line -->
        <a :href="person.sa">
            <img class="profile-picture hover:brightness-50 rounded-full border-2 border-sky-800" :src="person.image" alt="Profile Picture">
        </a>
        <a :href="person.sa" class="text-4xl font-bold text-sky-700 mb-4 hover:underline hover:text-sky-700 hover:underline mt-0">{{ person.name }}</a>
        <ul class="text-lg text-black list-disc list-inside">
            <li class="mb-2">{{ person.title }}</li>
            <li class="mb-2">Email: <a :href="`mailto:${person.email}?subject=Hey ${person.name}`" class="text-black hover:text-sky-800 underline">{{ person.name }}</a></li>
            <li>Phone: <a :href="`tel:${person.phone}`" class="text-black hover:text-sky-800 underline">{{ person.phone }}</a></li>
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
