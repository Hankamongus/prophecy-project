<template>
    <div style="max-width: 100ch;">
       <h1 class="text-red-800" style="display: flex; width: 100%; justify-content: center; text-align: center; margin-top: 100px;">
        <strong>{{ title }}</strong>&nbsp;
     </h1>
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
