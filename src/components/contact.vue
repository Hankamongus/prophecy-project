<template>
    <div style="max-width: 100ch;">
       <h1 class="text-red-800" style="display: flex; width: 100%; justify-content: center; text-align: center;">
        <strong>{{ title }}</strong>&nbsp;
     </h1>
     </div>
<!--Header Image!!-->
<link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet">
  <link href="style.css" type="text/css" rel="stylesheet">
    <div style="display: flex; width: 100%; justify-content: center; margin-top: 50px; margin-bottom: 20px;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
        <img style="width: 100%; width: 300px; height: 220px; border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;" src="https://i.swncdn.com/media/800w/cms/CCOM/46076-old-church.800w.tn.webp">

        <img style="width: 100%; max-width: 300px; position: relative; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); border-radius: 0.375rem; transform: scale(1.35);" src="https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <img style="width: 100%; width: 300px; height: 220px; border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;" src="https://research.lifeway.com/wp-content/uploads/2021/05/church_plant_closures.jpg">
      </div>
    </div>
    <div class="z-6 p-10 bg-white/25 backdrop-blur rounded-lg border-2 space-y-8 ">
            <div class="flex justify-between text-2xl mb-5">
    <table>
                    <thead>
                        </thead>
                        <tbody class="bg-white/25 backdrop-clear divide-y rounded-lg content-justify-center">
                             <tr>
                                <!-- Row 1 cells -->
                                <td class="py-3 px-6 text-left"><img src="https://media.sermonaudio.com/images/speakers/thumbnail/23550-0001.png" alt="profile-pic" class="w-32 h-32 rounded-full"><a href="https://www.sermonaudio.com/sermoninfo.asp?SID=3424134534743" class="hover:underline cursor-pointer"><strong>Kyle Reeder <em>(Pastor)</em></strong></a></td>
                                <td class="py-3 px-6 text-right">(270) 978-2792</td>
                                 <!-- Add more cells if needed -->
                                </tr>

                                <tr>
                        <!-- Row 2 cells -->
                        <td class="py-4 px-6 text-left"><img src="https://media.sermonaudio.com/images/speakers/thumbnail/27721-0001.PNG"><a href="https://www.sermonaudio.com/saplayer/playpopup.asp?SID=39201422176297&lo=true" class="hover:underline cursor-pointer"> <strong>Charlie Lynch <em>(Elder)</em></strong></a></td>
                        <td class="py-4 px-6 text-right">(270) 564-0033</td>
                        <!-- Add more cells if needed -->
                    </tr>
                    <tr>
                        <!-- Row 2 cells -->
                        <td class="py-4 px-6 text-left"><img src="https://media.sermonaudio.com/images/speakers/thumbnail/24152-0001.png" alt="profile-pic" class="w-32 h-32 rounded-full"><a href="https://www.sermonaudio.com/search.asp?speakeronly=true&currsection=sermonsspeaker&keyword=Brian_Sims" class="hover:underline cursor-pointer"><strong>Brian Sims <em>(Elder)</em></strong></a></td>
                        <td class="py-4 px-6 text-right">(270) 205-6625</td>
                        <!-- Add more cells if needed -->
                    </tr>
                    <tr>
                        <!-- Row 2 cells -->
                        <td class="py-4 px-6 text-left"><img src="https://media.sermonaudio.com/images/speakers/thumbnail/29666-0001.png" alt="profile-pic" class="w-32 h-32 rounded-full"><a href="https://www.sermonaudio.com/search.asp?speakeronly=true&currsection=sermonsspeaker&keyword=Brent_Madding" class="hover:underline cursor-pointer"><strong>Brent Madding <em>(Elder)</em></strong></a></td>
                        <td class="py-4 px-6 text-right">(270) 970-1668</td>
                        <!-- Add more cells if needed -->
                    </tr>
                        <!-- Add more rows if needed -->
                    </tbody>
                </table>
            </div>
    </div>
  </template>

  <script>
  export default {
    data() {
        return {
            title: 'Contact Solid Rock Baptist church'
        }
    }
}
  </script>

  <style>

  </style>
