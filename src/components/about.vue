<template>
  <div style="max-width: 100ch;">
       <h1 class="text-red-800" style="display: flex; width: 100%; justify-content: center; text-align: center;">
        <strong>{{ title }}</strong>&nbsp;
     </h1>
     </div>
<!--Header Image!!-->

    <div class="z-6 p-10 bg-white/25 backdrop-blur rounded-lg border-2 space-y-8 ">
            <div class="flex justify-between text-2xl mb-5">
                <div>{{ PurposeStatement }}</div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'About Solid Rock Baptist church',
            PurposeStatement: 'We love the Lord because He first loved us. Because we have been saved by the grace of the Lord Jesus Christ, our desire is to be nourished by His Word, transformed into His likeness, and useful for the spread of the Gospel. We are an age-integrated church where we gather whole families, singles, and all ages together for worship, teaching, prayer, and evangelism. Our mission is to bring glory to God as we equip the saints for worship, service, an evangelism. We hereby commit ourselves to the following principles and practices:  The Centrality of the Gospel – All activities and messages of the church have their source in the gospel of Christ, that sinners are justified by faith alone, that the righteousness of Christ is imputed to believers by God’s decree alone, and that this righteousness is the only righteousness that justifies and that faith that is true faith is evidenced by works. (1 Corinthians 15:1-4; Revelation 14:6-7) \  Expository Preaching – We believe that a steady diet of expositional preaching is the most effective way to build up the body of Christ. Preaching and teaching through books of the Bible will be the primary emphasis of this ministry (Deut 6:4-9; Ezra 7:10; Neh 8:1-12; Matt 4:4; 1 Tim 4:13; 2 Tim 3:14-4:5; Titus 1:3, 9; Heb 4:12; 1 Peter 1:22-2:3).  Fervent Prayer – Every aspect of the church’s life and ministry ought to be under girded with regular, fervent prayer. Elements of a godly prayer life (individually and corporately) include: adoration, confession, thanksgiving, and intercession (Neh 1; Psalm 51; Matt 6:5-15; Luke 19:46; Phil 1:3-11; Col 1:3-12; James 5:13-18).  Authentic Worship – Authentic worship of the living God is marked by biblical truth, personal and corporate genuineness and spiritual depth. Elements of worship include prayer, singing, Scripture reading and preaching and the Lord’s table (Psalm 24, 33, 42, 95; Isa 6:1-8; Matt 4:10; John 4:24; Rom 12:1-2; Heb 13:15; Rev 4-5; 1 Cor 11:23-34).  Loving Community – We will cultivate Christian love, rejoicing, unity and community in the family of God through mentoring relationships, benevolence and biblical instruction (Acts 2:44-47; 6:1-7; Eph 4:1-16; 1 Tim 5:3-8; 2 Tim 2:2; Titus 2:3-5; James 1:27).  Church Discipline – We will exercise biblical church discipline administered in a spirit of obedience and humility and believe that this practice protects the purity of the church and offers restoration to the wayward (Prov 28:13; Matt 5:23-24; 18:15-20; 1 Cor 5:6-8; 11:17-34; Gal 6:1-5; Eph 5:25-27).  Personal Evangelism – We will equip and send the church into the community to bring the message of the cross to our own households, neighborhoods, workplaces and the world (Matt 28:19-20; John 20:31; Acts 4:12; Rom 10:14-15; 1 Peter 3:15).  Church Planting – We will make intentional efforts to reach the world for Christ by praying, giving, going and planting as we rejoice in God’s plan to be a blessing to the nations. (Matt 28:19-20; Acts 13-14, 16-21).  The Sufficiency of Scripture – We will regard scripture as sufficient for life and godliness, so it must be consulted for all things. We will use it for reproof, correction, and instruction in righteousness to speak into the lives of those in the congregation.  The Regulative Principle – We will attempt to regulate church life by scripture alone recognizing that God has instituted in the Scriptures everything He requires for worship in the Church and that everything else is prohibited. Therefore, the only permissible elements of worship are those that are instituted by command, precept, or example or by good and necessary consequence and that whatever is not warranted by scripture is forbidden. This is another way of saying that Christ has authority over His church through the Word of God (Matt 16:18; Romans 1:16; 10:17.)'
        }
    }


}
</script>

<style>

</style>
