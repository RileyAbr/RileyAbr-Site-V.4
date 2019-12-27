import { BlogParagraph } from './blog-paragraph'; 
import { BlogPost } from './blog-post';

// New Blog Template
/*
    {
        id: 0,
        title: "",
        tagline: "",
        date: "",
        abstract: 
            "",
        mediaPath: "",
        bodyParagraphs: 
        [
            
        ]
    },
*/

// New Blog Paragraph Template
/*
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                ""
            },
*/

export const BLOGSLIST: BlogPost[] = [
    {
        id: 1,
        title: "\"Minimum Viable Gaming\"",
        tagline: "and the Evolution of Early-Access",
        date: "March 5th, 2019",
        abstract:
            "Piece developed for COMM 200: Intro to Media Writing. Explores the complex relationship between developers and players with the games-as-a-service model. Compares and contrasts Fallout 76 and Terraria to understand how community engagement helps make stellar titles stand out.",
        mediaPath: "/assets/img/blog/1/fallout4.jpg",
        bodyParagraphs: 
        [
            {
                hasSubheading: false,
                subheading: "",
                hasImage: true,
                mediaPath: "/assets/img/blog/1/fallout4.jpg",
                isItalic: true,
                text:
                "You’re hiked low in the grass, scouting around quietly. You spot a group of zombies – no more than 5 – aimlessly wandering nearby. You make each footstep count, avoiding their line-of-sight as you creep by.  As you pull out your newly-crafted bow-and-arrow, you watch in horror as the game engine stutters for a moment. Despair sets in as your character falls through the ground, killing them in the void under the game level. 5 hours have just gone to waste."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: true,
                text:
                "You paid $60 for this?"
            },
            {
                hasSubheading: true,
                subheading: "Alpha-Beta-Early-Access",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Shoddily crafted, survival/exploration games are nothing new to modern gamers. Ever since DayZ hit entertainment by storm in 2013, hundreds of bottom-barrel imitators and duplicators have been force-fed to shoppers and players everywhere. Steams introduction of Early Access titles in March of the same year has done nothing but enable poor products to reach consumers faster, with many other storefronts on consoles and PCs both followed suit. One can ask any gamer if they’ve made a regretful pre-purchase and nearly everyone would have a mistake that still plagues them (Mighty No. 9 still keeps me up at night)."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: true,
                mediaPath: "/assets/img/blog/1/steamstats.JPG",
                isItalic: false,
                text:
                "Indeed, Early Access titles seem to be a fantastic way to make cash for both AAA and indie developers; if you can make sales before a product is finished, why wouldn’t you? However, the get-rich-quick scheme of abysmal Early Access titles can only be the conman flavor of the month for so long, something new will have to replace it."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Enter: minimum viable product development."
            },
            {
                hasSubheading: true,
                subheading: "MVP, not PVP",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "If you aren’t from the tech background, minimum viable product development (MVP) may mean nothing to you. Coined by Frank Robinson of SyncDev in 2001, the premise of an MVP is simple: you create the lowest denominator product that creates a positive experience. Once it is received well, and your pocket is a bit heavier, you go back and reiterate again, improving it for new users."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "This might sound like what Early Access titles are, and the definition admittedly has plenty of overlap. MVP’s can slot nicely into the Early Access architecture offered by many marketplaces, but the distinction is in the execution. Early Access, as stated by Valve in their Steamworks documentation, is defined as: “Releasing a game in Early Access helps set context for prospective customers and provides them with information about your plans and goals before a ‘final’ release.” MVP’s on the other hand should have a completed project together that just fully satisfies the audience; think a perfect “5.5/10” game with an interesting premise or concept that would be fun with a second round of polish but doesn’t need it."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: true,
                mediaPath: "/assets/img/blog/1/f76vsterraria.jpg",
                isItalic: false,
                text:
                "Perhaps the best way to illustrate how MVP development can be used in video game development is with concrete examples of it being done, both poorly and excellently. For the poor example, we will dive into the raging radioactive wasteland that is Fallout 76. As for the yang to 76’s yin, we will touch on the “Minecraft-clone” transformed to indie gem Terraria. Both titles help illustrate the pitfalls and benefits MVP development brings, as well as illustrate the overall trend to these types of releases. Grab your canvas bag, because this will get spicy."
            },
            {
                hasSubheading: true,
                subheading: "Seventy-Six Deadly Sins",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Fallout 76 has had a… less than stellar launch. Once announced in June of 2018, it swept the Internet by storm in how exotic it was compared to previous titles developed by Todd and friends (multiplayer in a Bethesda game? What!?). However, as details emerged it became clear that 76 was going to be a more precarious investment for gamers. Details pried from the mouths of tight-lipped developers revealed that the title would take a step back from its series’ famed storytelling and character writing; instead YOU would be the characters!"
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "This premise worked well for 76, until the cracks started to seep through the scorched earth. The aging Creation Engine that game was built on struggled to deal with the added stress of multiplayer connectivity. Design elements of the title left players puzzling, as world felt empty without characters to interact with, the PVP system left more than a lot to be desired, and the entire game’s high-level content—launching Nukes—was conquered on the first day. But where Bethesda truly went wrong wasn’t in the game flaws, although much of the game design is damn confusing, but in the response to these issues and community criticisms."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "The first spark to the dumpster fire came with the bags from the collector’s editions of the game. Fans quickly found out they were nylon rather than canvas, and outrage erupted. Bethesda handles the issue by blaming a material shortage, an excuse that doesn’t satiate the let-down players. The game is patched multiple times in the two weeks following its release to try and smooth over frustrations with the many bugs and performance issues, but the tides of hate have already set in. Bethesda apologizes for its lack of communication again and again but continued to make the wrong choices at every turn. In response to the canvas bags Bethesda gives all players 500 atoms – an in-game currency microtransaction. But the cascade of poor PR is uncontrollable. Wrong move after wrong move continues: the drop rates of exclusive items are tuned down in December, Christmas items become available for ludicrous prices, players who contacted support regarding their nylons have their confidential information leaked out; Fallout 76 became a radioactive example of Murphey’s Law in action, crumbling throughout the Holiday season of 2018. It was an absolute dumpster fire."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "	These failures to control the experience and atmosphere around their product failed what could have been a successful minimum viable gaming product. Instead, Bethesda risked it all for a risky venture. In the months following 76’s release, physical sales were 1/5 of Fallout 4’s and digital were barely half. 76 is also the lowest rated Fallout series title to date: with most outlets giving it a score of less than 5/10 when averaged. Don’t get it twisted, Fallout 76 has been a failure every step of the way, and while Bethesda is trying to redeem themselves with the free atoms, re-shipping canvas bags, planning a major content update for this March and even giving away some of the original Fallout games to players; it may not be enough to save the series and developer’s authority."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Never-the-less, this horror story shouldn’t serve to dissuade the usefulness of MVP’s, or the fact this practice will dominate the gaming scene to come. MVP’s are a natural evolution of utilizing Early Access to its greatest potential, both for cons and for legitimate development (after all, 76 did still sell 1.4 million digital copies by the end of 2018). What proper MVP usage can do for developers beyond sales, though, is trust."
            },
            {
                hasSubheading: true,
                subheading: "Building (and Rebuilding) a 2D Terrain",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Terraria is a title that many gamers would consider one of their best purchases, a title they would trust. Terraria originally released for only $10 on Steam in 2011. At the time it was remarked as a 2D rip-off of Minecraft, with the building and crafting elements linking the series. This didn’t stop its popularity though, as it passed 200,000 sales within 9 days and over 400,000 in a month’s time. Diligent developers Re-Logic stuck through with their product, as their fanbase grew on forums, Steam, Twitter, and Reddit. Developers interacted with fans directly, not through PR corporate accounts, which helped foster a sense of communication and rapport. Re-Logic capitalized on the hype of hitting nearly half a million sales and announced their plans for continuing the game and adding new features. They stated: \"You've all helped build a great, huge community here dating back well before pre-release.\""
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Terraria took their outstanding reputation in stride, adding more and more major updates throughout time, inflating the amount of content and gameplay in the title astronomically. By the time Terraria hit version 1.3, it was a staple name in most gamer’s libraries and many more would pick it up each time it was on sale. Terraria has maintained support through 2018, with still more updates coming on the way. By now, Terraria is reported as having sold 27 million copies across all platforms they now support: PC, console, and mobile. Re-Logic has even been able to build on their success and community trust to put out two other titles, Pixel Piracy and Pixel Privateers. "
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "This is the prime example of how an MVP can succeed in game development, and what others will begin following up with now that platforms like Steam support Early Access so heavily. Studios should look to take their novel ideas and create performant first-crack into the marketplace. From here, proper communication from the actual development personalities on community interaction platforms build a trust that create life-long relations with customers. "
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "One last piece to note with MVP development is that it works wonders for small studios, but can be nearly too risky for large, established companies to do. Minimum viable products are usually done when there is not enough capital to establish a perfect product; large AAA developers like Bethesda should not be facing this issue. If they do decide to make the plunge into using MVP development as they Bethesda did with Fallout 76, they have to be able to deliver customer service and compassion that matches the reputation for perfection that customers expect from a Hollywood-tier entertainment titan."
            },
            {
                hasSubheading: true,
                subheading: "Does MVP = Most Valuable Player?",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Certain titles can pull themselves out MVP mediocrity Hell, like Final Fantasy XIV. Other’s fall, for they never quite delivered in the first place like DayZ the standalone game. And some continue to try and pull themselves together today, with relative success (No Man’s Sky has managed to fight its way back to being “Mixed” reviews on the Steam storefront). Whether Fallout 76 will manage to do the same remains up in the air, but for both Bethesda and any aspiring indie developer it is vital to understand what you are getting yourself into with minimum viable product development. After all, the entire reputation of West Virginia could be at stake. "
            },

        ]
    },
    {
        id: 2,
        title: "The Monetization of Gaming \"Moments\"",
        tagline: "or why everyone is playing Fortnite",
        date: "April 25th, 2019",
        abstract: 
            "Research editorial written for COMM 200: Intro to Media Writing. This piece is both an examination and a prediction of mainstream gaming--what drives certain genres and titles to be popular at any one time. In it, I am able to make ties to some of my favorite titles and delve into why they generate stories I still talk about today. I enjoyed making this editorial so much, I even created a video essay on the same topic (which you can find under my portfolio!)",
        mediaPath: "/assets/img/portfolio/moments.jpg",
        bodyParagraphs: 
        [
            {
                hasSubheading: false,
                subheading: "",
                hasImage: true,
                mediaPath: "/assets/img/portfolio/moments.jpg",
                isItalic: false,
                text:
                "Gaming, like all other entertainment media, has gone through periods of design or clichés. Traditional art went through Impressionism to Post-Impressionism, Literature hit a streak of young adult dystopian fiction, and Film was “plagued” by an infection of Zombie-themed thrillers. However, modern gaming’s biggest trend isn’t in a specific visual or aesthetic but rather in a feeling, in a visceral endorphin rush that keeps players coming back for more: moments."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "A moment can be defined simply: it is a snapshot of player success and victory. Moments encompass the abstract high-points from a game. They serve as the mental snap-shots that players share with each other online, on stream, and in person. Moments power the longevity to a game, and the modern gaming marketplace rewards those can cash in on the dopamine hits. "
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "The rise of moments can be traced back to the rise of multiplayer online gaming, as they are forged most easily in between competitiveness and relative randomness. The Call of Duty franchise kicked it off with the Game/Round Winning KillCam in Modern Warfare 2. This feature served as the pinnacle of what a gaming moment should do: capture a maneuver that makes the player feel awesome. By putting this literal game-winning play on display for every other person in the match, it forces players to pay attention and give respect where respect has been earned—with the final shot."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Many other shooters picked up on the KillCam given its perfection at grabbing gamer’s eyes and helping them show others their accomplishments. The gaming development scene chased after more opportunities to craft moments—consciously or not—into the 2000s. This is when many an MMO and MOBA title hit shelves, all eager to get players hooked for hours on end playing with their friends. While these games rarely had an innate moment capture mechanic (at least until Twitch and advanced GIF grabbers came along), they instead lent themselves to creating moments more often. The issue with a model like the KillCam is that it only occurs once a round, while the excitement pay-off can be huge-it requires commitment. MMOs and MOBAs are so chock-full of spells, effects, and interactions that they create those unique highs faster and more often than any others. This is why a title like League of Legends can stay relevant so long; it creates those stories and memories so efficiently."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "With the most modern trend in gaming no longer arena FPS’s or MOBAs, but instead Battle Royales, we can see the moment principle stretched to its limit. A Battle Royale game is nothing but a SIN wave of highs and lows between anticipation and off-the-wall action. Every encounter is unique from the player size and randomization, and players want more and more. The fast pace and pure player count in a match ensures SOMETHING will always happen; and if you die too early, just queue up for another leap off the Battle Bus. Players are incentivized to keep parachuting to the ground, grabbing guns, fighting each other, and repeating, until they as cool as the streamers they watch—until they have a highlight to record and “clip” to send to their Discord channel. And it works! Players keep rushing back to get that small moment of pure euphoria."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "It is impossible to try to use the ideas of moments to predict where gaming’s next big genre-rush will be, but it does provide insights into how we’ve arrived at PUBG, Fortnite, and Apex. Maybe the next title will be an even crazier roller-coaster of making the player feel as talented as Ninja, or maybe expanding tech like VR will enable every moment to feel wholly individual. Either way, wherever gaming heads next, be sure to notice it will come in a gradual social media takeover, as players post highlight after highlight online, until grabbing a moment of your own is the only thing anyone looks forward to. "
            }
        ]
    },
    {
        id: 3,
        title: "An 8-Bit Arguement for Art",
        tagline: "Video games can be more than just fun",
        date: "August 10th, 2019",
        abstract: 
            "This is a piece I've been working on for around two years now. I've written and re-written out the concept many times, reiterating my thoughts each time. The crux of the arguement is not one unfamilar to people in the entertainment industry--video games can contain deep and thoughtful messages--but this has been my take on introducing it in more academic settings. Therefore, the introductions/descriptions of some of the examples may seem contrived for gamers, but it should be helpful for those outside of the subculture. Original art courtesy of Jacob van Ruisdael, supplied by The Metropolitan Museum of Art, New York",
        mediaPath: "/assets/img/blog/3/pixelart.jpg",
        bodyParagraphs: 
        [
            {
                hasSubheading: false,
                subheading: "",
                hasImage: true,
                mediaPath: "/assets/img/blog/3/pixelart.jpg",
                isItalic: false,
                text:
                "Throughout history, each generation is always absolutely terrified of what emerges after their own time. We see it all throughout, with the Greek elders worried about the impact of literature on laziness; or the 15th century fears that the printing press would eliminate the human interaction associated with your news. Of course, moving into our more modern era these arguments arise from every direction: rock and roll, late-night talk shows, “demonic” trading card games. Each and every one of these developments or pieces of entertainment are initially reviled and embargoed, lamented for how dangerous and disgusting they are to our children. Of course, eventually the generation that is familiar with these pastimes mature and come to realize, hey, maybe they aren’t so bad after all. This is the dreaded cycle that plagues us as humans; we are often too terrified of new ideas that we cannot see the value in them, and within that we often miss the valuable stories and experiences that come with them."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Although, before we discuss more on the fear of new media, I feel it is necessary to define what media should do as a whole—as art. The idea of what “art” is can be most easily broken down into three parts. The first, is that art reflects the creator in some way. Whether it is a starving artist sharing their pain in the form of canvas, or a woman dreaming up a magical story while on a train ride, every piece of art traces back to the creator in some way. Perhaps in The Scream, we can see the internal mental breakdown of Mr. Munch; art is like a pleasant disease that takes a deep root in the creator. Secondly, art must present something—and mean something—to each consumer that indulges in it. A childhood story is best when it brings back a deep memory, and a piece of artwork that evokes a feeling or emotion in the receiver possesses power like nothing else in the world. At times, the author’s input and the receiver’s output may not necessarily align, but those small nuances in translation make each experience all the more personal. Third and finally, art must “capture” something, even if it’s not physical. To elaborate, art must retain and preserve an idea, a movement, an event, a time-period, an emotion, or even just a dream. Art serves as our oldest history lesson—as well as the most impactful. Overall, media is art on three different fronts: the artist, the curator, and the world. "
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "With these principles in mind, we can see just how art stretches itself across every medium. Physical art is of course the easiest, which actually contains an object or perspective frozen in time and open for interpretation. But we also have more mediums to showcase art, with the modern-day definition stretching to include all types of literature, music, and film. All of these positions are well deserved, but the examiner within myself can’t help but feel that something is missing, and we are missing out on the quality of a new medium—a medium that’s only young but technologically profound and innovative. "
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "To put it bluntly, we must stop ignoring videogames and their place as art."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "I can already hear the crimes of “hearsay!” ringing from accredited scholars everywhere, but allow the messenger to speak before he is shot. I believe the world, and the art-culture critiques of the world, are truly missing out by excluding interactive software from the conversation about art. The fears that come with a new technology or development are nothing new, but we must move past them to see the immense worth that this medium can—and has—already created! Therefore, I have hand-selected some of these most artful titles available that fit the three principals of art, to prove how videogames function as a medium and do so absolutely uniquely. In order to do so, we are going to be working under a metaphorical pretense that we have with us a perfect author, director, or creator (they can take the persona of a Stephen King or Quentin Tarantino type, whomever you prefer). Therefore, we are looking solely for experiences and stories that CANNOT be replicated by a book, film, or television series; each title must stand alone as to why videogames are great for art. I implore you to read on with an open mind, and move past your conception of basic arcade joysticks and coin slots: these titles are far beyond what you may be familiar with."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "The initial title I would like to bring to light is the title Dark Souls, developed by company FromSoftware, with producer Hidetaka Miyazaki at the helm. Dark Souls is a series acclaimed for its mechanical design and punishing gameplay—only we aren’t here to discuss those details. To summarize the story; Dark Souls is about the conflict between light and dark, only twisted a bit from normal. In the title, the gods and lords of the world were given the souls of light, while humans were given a single soul of dark, split into shards to create humanity. The gods used their power to create an age of fire, where civilization flourished under them. However, the humans that worshiped them grow weaker in the meantime, losing their humanity and becoming “hollow.” The power of the gods soon began to fade, and they will lose their power if the fire of the world is not rekindled.  Therefore, the main character, a miserable hollow—or the player—, must go on a journey to find gods of old, often slaying them in the process, until they find the source of the fire: either to reignite it or snuff it out. But this could just as easily be a stellar book with our metaphysical perfect narrator, what makes Dark Souls as a game—and art piece—unique?"
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Dark Souls relies intensively on minimalism to make its points; there are less than spoken words and conversations than the feature article in a newspaper editorial. Instead, most of the tale of Souls is inferred and discovered throughout the game. One of the largest places the story unfolds is actually in the simple three-four line descriptions of equipment the player collects as they travel—a detail many wouldn’t even realize. Furthermore, actually connecting that along with interlaid symbolism on doors and statues, as well as the placement and meaning of the bosses you fight, makes Dark Souls as much of a story as a treasure hunt. In fact, it took the fan base of the title nearly two years following its release to actually compose the epic tale together, which happens because this unique deliver style could only happen in a video game, where the details are for you to find, not absorb. This, however, ignores one of the greatest boons of the title and that is how it connects its narrative alongside the gameplay (so I suppose we are discussing the mechanics, now aren’t we?). As stated earlier, in Dark Souls humankind is regressing to a primal state, and literally losing their humanity. They are cursed as this happens and they die only to be born again as undead, in a never-ending cycle of loss. The player themselves experiences this first hand, as the game punishes the player for dying—which occurs often. Therefore, when the player eventually succumbs to their failure and preemptively quits the journey, they too have “hollowed,” just as the story describes. This meta-narrative is something that can only be gleamed from a videogame, walking away from a book or film doesn’t necessary instill a connection to the theme. Our first title Dark Souls shows what I believe is the strongest way videogames tell stories and experiences as art: with a minimalist approach relying on the player to ponder the minute details given, and also the meta-commentary that can be interwoven by the blend of player involvement—or gameplay—and narrative."
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Therefore, it is no surprise my second notch on the pole also is outstanding at both of those qualities: minimalism and meta-ism. This next title is Hotline Miami, developed by Dennaton Games, a small partnership of two designers. Hotline Miami, like Souls, is known for its immense difficulty, but also its extreme over the top violent aesthetic, all wrapped up in a 1980’s package theme package. Hotline Miami’s story is nearly as mythological as the previous, instead featuring an unknown protagonist named “Jacket,” who received messages on his answering machine with vague instructions for errands to run. These are assignments issues to Jacket to head to local sects of Russia Mafia activity and eliminate them all singlehandedly, with a lot of brutality along the way. In this the player hardly gets any information, but is thrown into the midst and expected to “ride or die,” trying to understand what’s going on. Details of the plot are unveiled in cryptic questions and riddles, aimed as much at the person behind the screen as the one on it. Events begin to lose their pacing and stop being coherent, all the while accompanied by bursts of white TV static. Eventually, the player learns much of this miss-matched narrative all took place within the protagonist mind while they were under comatose from a head wound, recovering just in time to take on the leader of the Russian Mafia. Again, we have to ask, what makes this unique?"
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Well of course we have the basis of the story itself, which throws the consumer in with little regard for their questions and begins to unravel as they progress, only the details become muddled overtime. This is nothing special, but the underlying is what changes things. While it sounds like a juicy violent chaos spree, Hotline Miami is actually a tale about the horrors of war, and how violence only leads to more violence and suffering. Throughout the minimalist plot painted prior, we learn that Jacket’s operations and assignments stem from his PTSD from his previous military career. Going untreated and unaided, he turned to back to violence in a world he couldn’t understand—one of Russia-America friendship. This information can only be gleamed from the bizarre questions, symbols painted throughout levels, and comparison of in-game and real-world dates throughout the title. Therefore, Hotline Miami again delivers a very minimal yet impact experience, asking the player to look for their secrets and refusing to answer any worries. In this, it shows how videogames often ask for the consumer to take an extra “step,” which only makes the story that much more impact and personal; you worked for it. Hotline Miami, also illustrates its meta-narrative them even more successfully than Dark Souls: that being that violence only brings violence. "
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "In the gameplay, you are put through rooms full of mafia men with little equipment or aid, forced to take them down with a myriad of makeshift weapons and brutal executions. At first the player is horrified and disgusted about what they must do to survive, but that is quickly forgotten. The difficulty in Miami is off the rails, and a single misstep from the player is all it takes to be forced back and restart the entire process again. Therefore, as player frustration builds, they ignore how vile and gory their actions are. They are no longer slowed down or pause as Jacket bashes in the skull of a Russian with a baseball bat, they are focused on the next around the next corner. In this all, the player grows blind to the violence around them through their own violent actions; they become the problem, while 80’s synth beats pump in their ears and the score counter begs them to continue their carnage for bonuses. When each level ends, a daunting yet chilling soundtrack is played, while the player and Jacket must wander back to the start. They go through their trail of blood they have left, and are forced to face their actions: a meta commentary on how violence takes control of us all and we don’t notice until it is much, much too late. Hotline Miami, shows us a lot about how violent we can be, as long as we get frustrated and given a direction. Again, this title also demonstrates how well a videogame can tell a story as art, utilizing minimalism and meta-narratives to make you ask yourself: “Do you like hurting people?”"
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "The last title I want to touch on is one that was quite the phenomenon, reaching cult-classic status soon after it was released. In fact, it was even give as a gift to the Pope during the year of mercy, as the title demonstrates forgiveness and the impact of our actions. This title is Undertale, released solely by Toby Fox in 2015. I consider Undertale to be the prime example of how videogame storytelling is best served, and you will soon know why. Again, a quick summary for the story, Undertale is all about choices and your own will. The main character is a human child who has fallen into an underground full of kooky and unique monsters, and must find their way to the surface again. Although along the way they—and the player—are given the choice of fighting their way out, or trying to find more peaceful resolutions to their conflict. The story features a variety of endings (themed “neutral,” “pacifist,” and “genocide.”) that create a wholly unique experience for each person who plays it. Obviously Undertale already succeeds due to the fact that most books or films will not have multiple endings, but can it go further?"
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Undertale is a very personal story, given that your actions directly influence the outcome and characters in the game. However, the title also holds a huge amount of literal depth; nearlty every action committed by the character has some eventual tie, or is brought up again by another character. This helps the whole world feel connected, and the consumer responsible for each good or bad action they choose. Undertale again features minimalist storytelling, but at this point the reader is surely familiar with the idea of picking up snippets and connecting them outside the bounds of the playing field. Undertale differs from most titles, however, as its meta-narrative is completely and utterly bonkers. One of the quirks in the game is something called ‘Determination,” which is said to be something wholly human in nature. When a human is “Determined,” they cannot be stopped by any monster, or other force for that matters. Unbeknownst to the player, this idea of Determination is what allows them to do every action in the game, including even just saving and reloading the game when you fail! "
            },
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Undertale is a very personal story, given that your actions directly influence the outcome and characters in the game. However, the title also holds a huge amount of literal depth; nearlty every action committed by the character has some eventual tie, or is brought up again by another character. This helps the whole world feel connected, and the consumer responsible for each good or bad action they choose. Undertale again features minimalist storytelling, but at this point the reader is surely familiar with the idea of picking up snippets and connecting them outside the bounds of the playing field. Undertale differs from most titles, however, as its meta-narrative is completely and utterly bonkers. One of the quirks in the game is something called ‘Determination,” which is said to be something wholly human in nature. When a human is “Determined,” they cannot be stopped by any monster, or other force for that matters. Unbeknownst to the player, this idea of Determination is what allows them to do every action in the game, including even just saving and reloading the game when you fail! "
            },
            {
                hasSubheading: true,
                subheading: "Final Thoughts",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                "Overall, videogames have a great deal of more merit than we give them credit. They are more than seemingly simple 0’s and 1’s, and deserve to have their recognition as art. It does seem strange to admit or accept, especially for those who are used to critiquing words and frames instead of pixels on a screen, but I digress, it is important for us to recognize their worth. We saw how just defining what art and media does for us as humanity changes our perspective on what art can be, then we explored together. Even with the overbearing pressure of our “perfect” narrator we still managed to find three titles: Dark Souls, Hotline Miami, and Undertale, which all prove the power of this storytelling technique. If there is anything I could do with this rather long essay, I hope it’s the recognition that every way we share a story or experience or lesson is valuable. I hope that videogames begin to receive better acclaim as art pieces, but we should maintain appreciate for any new media form that grows in the future. As we progress through life as critical thinkers, curators, and creators; we should remember to experience the story, not fixate on the box it is delivered in."
            },

        ]
    }
]