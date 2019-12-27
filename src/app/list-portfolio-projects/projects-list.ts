import { PortfolioProject } from './portfolio-project';

// New Project Template
/*
{
    id: 0,
    title: "",
    mediaPath: "",
    previewLine1: "",
    previewLine2: "",
    longDesc:
        "",
    techUsed: "",
    modalMediaPath: "",
    modalIsImage: false,
    hasExternalLink: false,
    externalLink: "",
    hasGithHubRepo: false,
    gitHubLink: ""
},
*/


export const PROJECTLIST: PortfolioProject[] = [
    {
        id: 1,
        title: "Tower of Terror",
        mediaPath: "/assets/img/portfolio/towerofterror.png",
        previewLine1: "CSCI 160 Project",
        previewLine2: "Text-Adventure Java Game",
        longDesc:
            "Old school text-based adventure game built in Java. Players must traverse the tower by issuing commands on the command line. In the tower, lies items to help the player defeat monsters they encounter.",
        techUsed: "Java",
        modalMediaPath: "/assets/video/portfolio/towerofterror_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 2,
        title: "Shakespearean Insult Generator",
        mediaPath: "/assets/img/portfolio/shakesinsult.png",
        previewLine1: "Shakespearean Insult Generator",
        previewLine2: "For Writing &amp; Prose",
        longDesc:
            "A Java Swing GUI project that generates Old English insults. Built to practice creating GUI elements and assist a student with writing projects.",
        techUsed: "Java, Java Swing GUI forms",
        modalMediaPath: "/assets/video/portfolio/shakesinsult_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/Shakespeare-Insult-Generator"
    },
    {
        id: 3,
        title: "College Ethlete",
        mediaPath: "/assets/img/portfolio/collegeethlete.PNG",
        previewLine1: "CSCI 160 Project",
        previewLine2: "Atari \"Camel\"-Like Game",
        longDesc:
            "A decision making command-line game based on Camel, a title on the original Atari. In this version, the college student has to balance their university life while attempting to make it on an eSports team. Each game day cycle, the student can choose from a variety of activities that affect their core stats: Rank, Skill, Exposure, Grades, Attendance, and Motivation. These activities are also affected by daily modifiers, which influence their strength. If any of these fall too low, the student fails in their journey to stardom. If the student manages to keep life in balance and become signed with a team, they win!",
        techUsed: "Java",
        modalMediaPath: "/assets/video/portfolio/collegeethlete_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 4,
        title: "Roll a Ball",
        mediaPath: "/assets/img/portfolio/rollaball.png",
        previewLine1: "Demo Unity Project",
        previewLine2: "",
        longDesc:
            "A project branched from one of the beginning Unity tutorials. In my branch, I added in new power-ups, including one that boosts the players speed akin to a Mushroom from Mario Kart. Also available in this branch are ramps which the player can use to jump around the map.",
        techUsed: "Unity, C#",
        modalMediaPath: "/assets/img/portfolio/previews/rollaball_preview.png",
        modalIsImage: true,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 5,
        title: "Craigslist Redesign",
        mediaPath: "/assets/img/portfolio/craigs.PNG",
        previewLine1: "COMM 260 Project",
        previewLine2: "Full Website Relaunch from Strategy to Surface",
        longDesc:
            "A long-form study into the flaws of Craigslist's website design and a full redesign concept. Developed as a group project going through every plane of the Garrett's 5 Planes of User Experience, from Strategy to Surface level. Personas, scenarios, site requirements, market research, and wireframes are combined to illustrate a deep-dive into Craigslist's users, as well as an understanding of the core problems of the site.",
        techUsed: "Xtensio, Balsamiq, Word, Slack",
        modalMediaPath: "/assets/img/portfolio/previews/craigs_preview.PNG",
        modalIsImage: true,
        hasExternalLink: true,
        externalLink: "https://www.dropbox.com/s/yqcdt0t2jy160l7/COMM%20200%20Craigslist%20Overhaul.pdf?dl=0",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 6,
        title: "Smile lottie Animation",
        mediaPath: "/assets/img/portfolio/smile.png",
        previewLine1: "Lottie Practice Project",
        previewLine2: "Adobe After Effects animation generated in browser",
        longDesc:
            "An animation built in After Effects and exported for web use. Created using the lottie plugin developed by AirBnB for converting AE project files into SVG animations.",
        techUsed: "After Effects, bodymovin AE plugin + lottie plugin, JavaScript, HTML, CSS",
        modalMediaPath: "/assets/video/portfolio/smile_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 7,
        title: "QuickQlock",
        mediaPath: "/assets/img/portfolio/quickqlock.PNG",
        previewLine1: "JS Utility Project",
        previewLine2: "Customizable In-Browser Clock",
        longDesc:
            "A webpage built to keep track of time while working on assignments. All time-tracking and customization is built with vanilla JavaScript. Works perfect in a second monitor.",
        techUsed: "HTML, CSS, JavaScript",
        modalMediaPath: "/assets/video/portfolio/quickqlock_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 8,
        title: "Java Breakout",
        mediaPath: "/assets/img/portfolio/breakout.png",
        previewLine1: "CSCi 160 Project",
        previewLine2: "\"Breakout\" Mock Game",
        longDesc:
            "A breakout style game built in Java. All collisions and physics are programmed in vanilla Java. The game features bricks that take multiple hits to break, power-ups that fall towards the paddle, and an obstacle to block shots. The game is able to track high scores between plays, to see who can break the most bricks!",
        techUsed: "Java",
        modalMediaPath: "/assets/video/portfolio/breakout_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 9,
        title: "Flickity Smiley Carousel",
        mediaPath: "/assets/img/portfolio/flickity.png",
        previewLine1: "Flickity Practice Project",
        previewLine2: "Mobile Friendly \"Sticky\"  SVG Carousel",
        longDesc:
            "An SVG animation carousel built with lottie animations combined with the Flickity JavaScript library. All carousel cells are responsive, and slide nice and smooth on any touch device.",
        techUsed: "JavaScript, lottie, HTML, CSS",
        modalMediaPath: "/assets/video/portfolio/flickity_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 10,
        title: "Combo Crazy",
        mediaPath: "/assets/img/portfolio/combocrazy.png",
        previewLine1: "NDSU ACM 2017 GameMaker Game Jam",
        previewLine2: "2nd Place",
        longDesc:
            "A side scroller built for the 2017 NDSU ACM GameMaker Game Jam. The game features a customizable combo system where the player can select individual moves to piece together a move set. Along the level, there are plenty of jumping and combat challenges before ending with a mini-boss. As a proof of concept for the game jam, it earned 2nd place.",
        techUsed: "GameMaker Studio 2",
        modalMediaPath: "/assets/video/portfolio/combocrazy_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "https://rileyabr.github.io/combocrazy/combocrazy.html",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/Combo-Crazy"
    },
    {
        id: 11,
        title: "Dungeon Delvers AI",
        mediaPath: "/assets/img/portfolio/dungeondelvers.png",
        previewLine1: "NDSU ACM 2018 Byte-le Royale",
        previewLine2: "2nd Place",
        longDesc:
            "AI developed for the first ever NDSU ADC Byte-le Royale. The AI was built to manage resources for a party of adventurers, as well as to decide which moves they would use in combat. Within the Dungeon Delvers game, the AI had to maneuver around procedural traps, puzzles, and encounters with different monsters--all with their own AI. In between dungeon runs, the AI determined the best upgrades for the party. My team placed 2nd with our design, with me serving as technical writer and lead strategist.",
        techUsed: "python",
        modalMediaPath: "/assets/img/portfolio/previews/dungeondelvers_preview.png",
        modalIsImage: true,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/Byte-le-Royale-AI-2018"
    },
    {
        id: 11,
        title: "Zero Space",
        mediaPath: "/assets/img/portfolio/zerospace.png",
        previewLine1: "NDSU Bison Robotics 2017 Halloween Game Jam",
        previewLine2: "1st Place",
        longDesc:
            "Virtual realty space-climbing experience built for a 12 hour game jam. Created to evoke the horror of being stranded in the middle of space, alone. Players can maneuver across a broken space station via handholds, picking up objects along their way. They also have a pair of long-range grappling hooks, set to a timer. The player succeeds upon reaching another space ship at the end of the course.",
        techUsed: "Unity, C#, Blender, SourceTree",
        modalMediaPath: "/assets/video/portfolio/zerospace_clip.mp4",
        modalIsImage: false,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: false,
        gitHubLink: "https://github.com/RileyAbr/Zero-Space"
    },
    {
        id: 13,
        title: "Restaurant POS Ordering GUI",
        mediaPath: "/assets/img/portfolio/161pos.png",
        previewLine1: "CSCI 161 Project",
        previewLine2: "POS System for Processing Food Orders",
        longDesc:
            "Java-based application for managing and order items at a mock restaurant. Practice in using most efficient custom data structures to achieve optimal performance. Created as a group final-project, in which I acted as the product manager and UI developer.",
        techUsed: "Java, Slack",
        modalMediaPath: "/assets/img/portfolio/previews/161pos_preview.JPG",
        modalIsImage: true,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/csci161_restaurantPOS"
    },
    {
        id: 14,
        title: "NDSU Campus Police Lip-Sync Video",
        mediaPath: "/assets/img/portfolio/NDSUUPDlipsync.jpg",
        previewLine1: "Campus Police Lip-Sync Challenge",
        previewLine2: "88K Total Views",
        longDesc:
            "Lip-Sync video created in collaboration with NDSU Campus Police. Created as part of the 2018 police department lip-sync challenge. Supported the officers with guidence on filming and shooting the footage. Afterwards, I served as sole editor and animator for all the gathered footage. Following posting to the university police department Facebook page, the video has received over 88K views. Once the lip-sync campaign was finished, the officers sent their thanks via a big box of Sandy's Donuts.",
        techUsed: "Premiere Pro, After Effects",
        modalMediaPath: "/assets/video/portfolio/NDSUUPDlipsync_clip.mp4",
        modalIsImage: false,
        hasExternalLink: true,
        externalLink: "https://www.facebook.com/NDSUPoliceDept/videos/2093850437608343/",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 15,
        title: "NDSU Libraries Website Redesign",
        mediaPath: "/assets/img/portfolio/NDSUlibrary.jpg",
        previewLine1: "NDSU Libraries 2018 Redesign",
        previewLine2: "Assisted Library Web Developer",
        longDesc:
            "Served as a part of the 2018 NDSU Libraries redesign committee, under Jason Bedsaul, through COMM 363: Advanced Web Design. Through Garrett's 5 Planes of User Experience, as well as the 7 Deadly Sins of web design, I produced wireframes and mock-ups to assist with rebuilding the libraries page following industry UI and UX standards. The Research Guides page on the website was my main priority for the project.",
        techUsed: "Xtensio, Photoshop, Illustrator, Slack",
        modalMediaPath: "/assets/img/portfolio/previews/NDSUlibrary_preview.JPG",
        modalIsImage: true,
        hasExternalLink: true,
        externalLink: "https://library.ndsu.edu/guides",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 16,
        title: "Schedule Studio Site",
        mediaPath: "/assets/img/portfolio/csci213.JPG",
        previewLine1: "ASP.NET Advising Appointment Site",
        previewLine2: "Front-End Developer and Designer",
        longDesc:
            "ASP.NET site built to accommodate and house student advising appointments. Built using C# ASP.NET validation and markup, with a combination of built-in styles and customized styles. Users can login as either students or advisors, view their schedule, set up new appointments, and email others to communicate. The majority of the data is stored in a dashboard upon login, which pulls data through LINQ queries to display.",
        techUsed: "C#, ASP.NET, CSS, JavaScript, VSTFS, Slack",
        modalMediaPath: "/assets/img/portfolio/previews/csci213_preview.JPG",
        modalIsImage: true,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/csci213_scheduleStudio"
    },
    {
        id: 17,
        title: "NDSU QuickStart Tutorial Videos",
        mediaPath: "/assets/img/portfolio/quickstart.jpg",
        previewLine1: "Intructional Series for Incoming Students",
        previewLine2: "Founder and Lead Designer",
        longDesc:
            "Tutorial series for essential campus technologies--such as Blackboard and Office 365--for incoming NDSU students. Served as founder and lead designer for the project in the summer prior to the 2018 academic year for the NDSU Technology Learning & Media Center (TLMC). Created scripts, animations, and recordings for each tutorial. Also compiled a master style guide document, and pre-baked assets. The video series continues through student employees at the TLMC, who utilize the style sheet to continue producing tutorials for new software.",
        techUsed: "Camtasia, After Effects, Office, Blackboard",
        modalMediaPath: "/assets/video/portfolio/quickstarts_clip.mp4",
        modalIsImage: false,
        hasExternalLink: true,
        externalLink: "https://www.youtube.com/channel/UCJebYqPyOEUNWziEp6px5xQ/playlists",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/TLMC-QuickStart-Videos"
    },
    {
        id: 18,
        title: "EDUC 853 Taxonomy",
        mediaPath: "/assets/img/portfolio/educ853.jpg",
        previewLine1: "Single Page Multi-Venn Diagram",
        previewLine2: "Programming Tutor and Creative Feedback",
        longDesc:
            "Single page website hosting an interactive multi-Venn diagram. The Venn diagram holds the results of a graduate research project over learning modalities and VARK learning styles. Built alongside an NDSU graduate student for EDUC 853. Site is composed on top of a large SVG composition, and backed by Bootstrap elements. Served as programming assistant and creative feedback.",
        techUsed: "Illustrator, Bootstrap, SCSS",
        modalMediaPath: "/assets/video/portfolio/educ853_clip.mp4",
        modalIsImage: false,
        hasExternalLink: true,
        externalLink: "https://andrearichardtaxonomy.github.io/",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/andrearichardtaxonomy/andrearichardtaxonomy.github.io"
    },
    {
        id: 19,
        title: "Video Game \"Moments\" Feature Story",
        mediaPath: "/assets/img/portfolio/moments.jpg",
        previewLine1: "Video Essay Feature Story",
        previewLine2: "Produced for COMM 200",
        longDesc:
            "Video essay feature story developed for COMM 200: Intro to Media Writing. Original story drafted as a long-form feature story, then an editorial, and finally a video essay. The video breaks down the recent trend of \"moments\" in modern gaming--the phenomenon by which gamers are put into heart-pumping environments more often. The essay delves into this trend through gaming history, with highlights in modern popular streaming platform games, such as Fortnite and League of Legends.",
        techUsed: "Premiere Pro, After Effects",
        modalMediaPath: "/assets/video/portfolio/moments_clip.mp4",
        modalIsImage: false,
        hasExternalLink: true,
        externalLink: "https://youtu.be/0xHDnd1c2MA",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 20,
        title: "Quizicool: Quiz Taking Site",
        mediaPath: "/assets/img/portfolio/quizicool.JPG",
        previewLine1: "Angular Studying and Entertainment Website",
        previewLine2: "Front-End Developer and Designer",
        longDesc:
            "Quizicool is a quiz taking entertainment and study site, focused on cross-platform responsiveness and easy UX. It was built as a group collaboration between myself and two other students for CSCI 366: Database Systems. The entire site is built in Angular for the front-end and is running PHP for back-end database connections and validation. The database itself runs on PostgreSQL. For this project, I acted as the primary front-end developer and designer; I came up with the aesthetic, branding, and code behind Quizicool's UI and layout. I also served as the Angular FAQ, and helped assist the back-end developer with their data connections as needed.",
        techUsed: "Angular, PHP, PostgreSQL, Bootstrap, SCSS, Trello, Discord",
        modalMediaPath: "/assets/video/portfolio/quizicool_clip.mp4",
        modalIsImage: false,
        hasExternalLink: true,
        externalLink: "http://students.cs.ndsu.nodak.edu/~dacolema/quizicool/",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/wylyandrews/QuiziCool"
    },
    {
        id: 21,
        title: "Pixeled Brewing Co. Redesign",
        mediaPath: "/assets/img/portfolio/pixeledbrewing.jpg",
        previewLine1: "80's Themed \"Barcade\" Website",
        previewLine2: "Front-End Developer, Designer, Angular Assist",
        longDesc:
            "Website built as a full site redesign for the Pixeled Brewing Co. bar-arcade in Fargo, ND. The site's major requirements were: easy to update content pages and a killer 80's vibe. Using Angular, my group was able to succeed on both fronts for the client. The site was created as a group collaboration for CSCI 313: Advanced Software Development, in which I worked as the aesthetic designer, front-end developer, and Angular point-of-contact. I was responsible for the conceptualization, wireframes, and eventually front-end code to bring the Outrun landscape to life behind the site. The site is also focused on being lightweight and mobile-friendly, so one can access info about Fargo's coolest bar-arcade anywhere.",
        techUsed: "Angular, PHP, PostgreSQL, Firebase Database, Bootstrap, SCSS, Trello, Slack",
        modalMediaPath: "/assets/video/portfolio/pixeledbrewing_clip.mp4",
        modalIsImage: false,
        hasExternalLink: true,
        externalLink: "https://pixelarcade313.web.app/",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/313pixelbuilders"
    },
    //Removed while looking for a new host
    // { 
    //     id: 22,
    //     title: "The Half-Pipe Skateboarding Blog",
    //     mediaPath: "/assets/img/portfolio/halfpipe.jpg",
    //     previewLine1: "Skateboarding Blog and Learning Resource",
    //     previewLine2: "Built in Wordpress for COMM 261",
    //     longDesc:
    //         "Blog and instructional site centered around skateboarding-focused on new skateboarders. Developed in WordPress with an emphasis on modifying core child themes and minimal plugins. ",
    //     techUsed: "Angular, PHP, PostgreSQL, Firebase Database, Bootstrap, SCSS, Trello, Slack",
    //     modalMediaPath: "/assets/video/portfolio/halfpipe_clip.mp4",
    //     modalIsImage: true,
    //     hasExternalLink: false,
    //     externalLink: "",
    //     hasGithHubRepo: true,
    //     gitHubLink: "https://github.com/RileyAbr/The-Half-Pipe"
    // },
    {
        id: 23,
        title: "NDSU League of Legends Club Year 18-19 Montage",
        mediaPath: "/assets/img/portfolio/lolclub18-19.jpg",
        previewLine1: "Montage of Member-Submitted Highlights",
        previewLine2: "Sole Editor and Animator",
        longDesc:
            "Celebratory montage video from NDSU League of Legends Club for the academic year 2018-2019. Clips were gathered from club member submissions (up to three per member), and compiled together into one film reel. Featured members stretch across all levels of play, including clips submitted by NDSU LoL Club's Master division player. Montage plays are set to a music score, and certain clips feature additional editing for atmosphere or laughs.",
        techUsed: "Premiere Pro, After Effects",
        modalMediaPath: "/assets/video/portfolio/lolclub18-19_clip.mp4",
        modalIsImage: false,
        hasExternalLink: true,
        externalLink: "https://youtu.be/kFGYHQXG34U",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 24,
        title: "Section 9 Brand Reposition Plan",
        mediaPath: "/assets/img/portfolio/section9brand.jpg",
        previewLine1: "Analysis and Strategy for Brand Reposition",
        previewLine2: "Researcher, Interviewer, and Writer",
        longDesc:
            "Combination brand analysis and year-long repositioning plan for Fargo eSport and PC gaming center: Section 9. Created for COMM 375: Principles of Strategic Communications. Worked with a partner for researching, writing and interviewing.",
        techUsed: "Office, Likealyzer, Facebook, Twitter, Instagram",
        modalMediaPath: "/assets/img/portfolio/previews/section9brand_preview.jpg",
        modalIsImage: true,
        hasExternalLink: true,
        externalLink: "https://www.dropbox.com/s/dhx67yga0i7nsws/Section%209%20Brand%20Analysis%20and%20Reposition%20Plan.pdf?dl=0",
        hasGithHubRepo: false,
        gitHubLink: ""
    },
    {
        id: 25,
        title: "Calcuplayer",
        mediaPath: "/assets/img/portfolio/calcuplayer.jpg",
        previewLine1: "Mathematics with Minigames",
        previewLine2: "Calculator with a twist in GML",
        longDesc:
            "An app combining calculator function with \"WarioWare\" style minigames between each key-press. Developed to practice with game design as well as to create a full-fledged deliverable with GameMaker Studio 2. Minigames are launched whenever a number key is selected on the calculator interface, up to one at a time. All numbers have a unique minigame task associated with their value--ranging from catching balls in a bucket to driving a race car to playing rock, paper, scissors. Minigames are played with either a keyboard or mouse, depending on the selected level.",
        techUsed: "GameMaker Studio 2",
        modalMediaPath: "/assets/video/portfolio/calcuplayer_clip.mp4",
        modalIsImage: false,
        hasExternalLink: true,
        externalLink: "https://rileyabr.github.io/calcuplayer/calcuplayer.html",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/Calcuplayer"
    },
    {
        id: 26,
        title: "LEC Countdown",
        mediaPath: "/assets/img/portfolio/leccountdown.jpg",
        previewLine1: "Modular Clock App",
        previewLine2: "Stylized off the LEC League",
        longDesc:
            "A clock/timer visualizer in the style of the League European Championship. Created to practice following design principles from a large company and to show my appreciated to the new design for the LEC. Consists of a single-page web app that mirrors the LEC loading screen between tournament matches, with additional customizations available for users to experiment with.",
        techUsed: "EmberJS, SCSS, JavaScript, Photoshop",
        modalMediaPath: "/assets/img/portfolio/leccountdown.jpg",
        modalIsImage: true,
        hasExternalLink: false,
        externalLink: "",
        hasGithHubRepo: true,
        gitHubLink: "https://github.com/RileyAbr/Lec-Countdown-Clock"
    },

]