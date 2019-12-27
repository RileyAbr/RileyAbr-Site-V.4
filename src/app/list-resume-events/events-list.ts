import { ResumeEvent } from './resume-event';
import { ResumeListing } from './resume-listing';

// New Event Template
/*
{
{
    id: 0,
    title: "",
    tagline: "",
    date: "",
    hasImage: false,
    mediaPath: "/assets/img/resume/",
    hasBodyContent: false,
    hasBullets: false,
    bullets:
        [
        ],
    desc:
        "",
    hasExternalLink: false,
    externalLink: "",
    externalLinkText: ""
},
*/


export const EVENTLIST: ResumeListing[] = [
    {
        year: "2017",
        events: [
            {
                id: 1,
                title: "Enrolled at North Dakota State University",
                tagline: "B.A. in Computer Science",
                date: "August 2017",
                hasImage: true,
                mediaPath: "/assets/img/ry/ry_bison.jpg",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Began my freshman year at NDSU as a Bachelor of Arts Computer Science student. As a B.A. student, I was required to take two years of a foreign language. I chose German. I also added a minor in Web Design.",
                hasExternalLink: true,
                externalLink: "https://bulletin.ndsu.edu/undergraduate/program-curriculum/computer-science/#majorbatext",
                externalLinkText: "Link to Degree Reqs"
            },
            {
                id: 2,
                title: "Joined NDSU Association of Computing Machinery (ACM)",
                tagline: "Student Org",
                date: "August 2017",
                hasImage: true,
                mediaPath: "/assets/img/studentorgs/ACM_Logo.PNG",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "NDSU's Association of Computing Machinery Chapter's mission is: To promote and increase the knowledge of science, design, development, construction, languages, and applications of modem computing hardware and software. To promote a greater interest in computing hardware and software and its applications. To provide a vehicle for communication amongst persons having interest in computer hardware and software.",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 3,
                title: "Joined Bison Robotics - VGDC",
                tagline: "Student Org",
                date: "August 2017",
                hasImage: true,
                mediaPath: "/assets/img/studentorgs/bisonrobotics.jpg",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Bison Robotics' mission is: \"to channel the energy and enthusiasm elicited by robotics through the rigorous process of engineering design. Members will apply engineering knowledge and principles in a structured approach to design and build competitive robots.\" Bison Robotics hosts many special interest groups dedicated towards specific development projects. The VGDC (Video Game Development Club) special interest group hosts lectures and competitions around game development.",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 4,
                title: "Joined NDSU Overwatch Club",
                tagline: "Student Org",
                date: "August 2017",
                hasImage: true,
                mediaPath: "/assets/img/studentorgs/ndsuoverwatch.jpg",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Joined as an early member to support esports growth on campus. Served as a fill-in player for one of the TESPA league matches. Also created the logo for the organization's competitive team, ULT-F4.",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 5,
                title: "Hired at NDSU Technology Learning & Media Center",
                tagline: "Learning Assistant",
                date: "October 2017",
                hasImage: true,
                mediaPath: "/assets/img/ry/ry_qbbsign.jpg",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Executed effective multitasking by managing multiple customers and daily projects",
                        "Maintained proficient technical skills to mentor a diverse student population with campus software including: Microsoft Office Suite, Adobe Creative Cloud, Blackboard, Turning Technologies, Audacity, Camtasia, iMovie, Wix, and Google Apps for Education"
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 6,
                title: "Competed in Bison Robotics 2017 Halloween Game Jam",
                tagline: "1st Place",
                date: "October 2017",
                hasImage: true,
                mediaPath: "/assets/img/portfolio/zerospace.png",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Competed in a VR and horror themed game jam for Halloween, put on by NDSU Bison Robotics VGDC. In it, I partnered with a student to develop a zero-gravity space exploration game. I served as a creative designer and primary level editor. We received 1st place. for our design. See \"Zero Space\" underneath \"Portfolio\" for more information.",
                hasExternalLink: true,
                externalLink: "/portfolio",
                externalLinkText: "Link to Project"
            },
            {
                id: 7,
                title: "Competed in NDSU ACM 2017 GameMaker Game Jam",
                tagline: "2nd Place",
                date: "October 2017",
                hasImage: true,
                mediaPath: "/assets/img/portfolio/combocrazy.png",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Competed in a game jam sponsored by the NDSU ACM revolving around GameMaker Studio 2. The 12 hour game jam concluded the six week tutorial series put on by ACM, pitting former classmates against each other. I developed a side-scrolling game with the gimmick of being able to choose your character's full moveset. For my design concept, I earned 2nd place in the competition. See \"Combo Crazy\" underneath \"Portfolio\" for more information.",
                hasExternalLink: true,
                externalLink: "/portfolio",
                externalLinkText: "Link to Project"
            },
            {
                id: 8,
                title: "Fall 2017 Dean's List Recipient",
                tagline: "3.0 or Higher GPA",
                date: "December 2017",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Completed fall 2017 semester with a 4.0 GPA."
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
        ]
    },
    {
        year: "2018",
        events: [
            {
                id: 1,
                title: "Competed in NDSU ACM 2018 Byte-le Royale AI Game Jam",
                tagline: "2nd Place",
                date: "January 2018",
                hasImage: true,
                mediaPath: "/assets/img/portfolio/dungeondelvers.png",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "The NDSU ACM Byte-le Royale is a 24 hour programming competition hosted by the ACM officers council. It is a challenge to build an AI capable of playing a game created by the ACM officers. For my team, I served as technical writer and lead strategist. Our AI was able to place 2nd for the 24 hour competition. See \"Dungeon Delvers AI\" under \"Portfolio\" for more information.",
                hasExternalLink: true,
                externalLink: "/portfolio",
                externalLinkText: "Link to Project"
            },
            {
                id: 2,
                title: "Volunteered at NDSU State Science Olympiad",
                tagline: "Write It, Do It Event Facilitator",
                date: "April 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "I served as an event facilitator for the event Write It Do It. I examined everyone's project and then graded each of them."
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 3,
                title: "Added New Minor",
                tagline: "Strategic Communication",
                date: "March 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "To build out my skillset and further develop my writing/researching skills, I added a minor in Strategic Communication to my degree plan. Within it, I will be taking a myriad of jouralism, PR, and advertising-oriented courses.",
                hasExternalLink: true,
                externalLink: "https://bulletin.ndsu.edu/undergraduate/program-curriculum/strategic-communication/#minortext",
                externalLinkText: "Link to Minor Reqs"
            },
            {
                id: 4,
                title: "Completed First Year of German Language",
                tagline: "1 of 2 Full Years",
                date: "May 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: false,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 5,
                title: "Promoted at NDSU Technology Learning & Media Center",
                tagline: "Media Specialist",
                date: "May 2018",
                hasImage: true,
                mediaPath: "/assets/img/resume/tlmcsign.JPG",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Demonstrated leadership ability through peer training, seminars, and projects",
                        "Promoted collaboration by connecting university departments to create new media",
                        "Maintained proficient technical skills to mentor a diverse student population with campus software",
                        "Showcased creativity when creating and hosting workshops to teach key technologies and tools"
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 6,
                title: "Spring 2018 Dean's List Recipient",
                tagline: "3.0 or Higher GPA",
                date: "May 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Completed spring 2018 semester with a 4.0 GPA."
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "", 
                externalLinkText: ""
            },
            {
                id: 7,
                title: "Completed Microsoft Office Certification",
                tagline: "Word 2016",
                date: "June 2018",
                hasImage: true,
                mediaPath: "/assets/img/resume/MOS_Word.png",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Certification earned from Microsoft Office Certification Program. Badge description via Microsoft: \"Microsoft Word 2016 Certification exam earners have a fundamental understanding of the Word environment and the ability to complete tasks independently. Earners demonstrated the principal features of Word 2016 by creating and editing a large project which can include professional-looking reports, multi-column newsletters, résumés, and business correspondence.\"",
                hasExternalLink: true,
                externalLink: "https://www.youracclaim.com/badges/1e64ed63-0c0c-4311-b704-6884774984a5/linked_in_profile",
                externalLinkText: "Link to Certificate"
            },
            {
                id: 8,
                title: "Completed Microsoft Office Certification",
                tagline: "PowerPoint 2016",
                date: "June 2018",
                hasImage: true,
                mediaPath: "/assets/img/resume/MOS_PowerPoint.png",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Certification earned from Microsoft Office Certification Program. Badge description via Microsoft: \"Microsoft PowerPoint 2016 Certification exam earners have a fundamental understanding of the PowerPoint environment and demonstrate the correct application of PowerPoint 2016. Earners are able to create, edit, and enhance PowerPoint presentations, including those for professional grade sales presentations, employee training, instructional materials, and kiosk slideshows. \"",
                hasExternalLink: true,
                externalLink: "https://www.youracclaim.com/badges/d10e56ef-400b-4a60-b40d-394c2d3938ea/linked_in_profile",
                externalLinkText: "Link to Certificate"
            },
            {
                id: 9,
                title: "Completed Microsoft Office Certification",
                tagline: "Excel 2016",
                date: "June 2018",
                hasImage: true,
                mediaPath: "/assets/img/resume/MOS_Excel.png",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Certification earned from Microsoft Office Certification Program. Badge description via Microsoft: \"Microsoft Excel 2016 Certification exam earners have a fundamental understanding of Excel 2016 and the ability to complete tasks independently. Earners have proven they can create and edit a workbook with multiple sheets, and use graphic elements to represent data visually including professional-looking budgets, financial statements, performance charts, and data-entry logs.\"",
                hasExternalLink: true,
                externalLink: "https://www.youracclaim.com/badges/461ff0f0-784e-49b5-be0a-f95ddc2972c3/linked_in_profile",
                externalLinkText: "Link to Certificate"
            },
            {
                id: 10,
                title: "Received Skateboard",
                tagline: "Time to Shred",
                date: "July 2018",
                hasImage: true,
                mediaPath: "/assets/img/ry/ry_skateboard2.jpg",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 11,
                title: "Reinstated NDSU League of Legends Club",
                tagline: "Student Org",
                date: "July 2018",
                hasImage: true,
                mediaPath: "/assets/img/studentorgs/lolclub2018.jpg",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "Approaching the previous officers and advisor for the student org, I was able to reinstate the League of Legends club on campus. I worked with university outlets to transfer ownership, and re-establish the organization. The mission of the new era of the League club is: \"...to provide students with ways to enjoy the game League of Legends both casually and competitively.\" Moving forward, the club aims for sustainable growth and to further the progress of esports within North Dakota higher education settings.", 
                hasExternalLink: true,
                externalLink: "https://myndsu.ndsu.edu/organization/lolclub",
                externalLinkText: "Link to Club Page"
            },
            {
                id: 12,
                title: "Elected President of NDSU League of Legends Club",
                tagline: "Student Org",
                date: "August 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Organized and hosted meetups, LAN parties, volunteering activities, and tournaments for players",
                        "Represented League of Legends Club by communicating with both NDSU and local gaming cafés",
                        "Prepared advertisements, PR materials and member outreach through social media channels",
                        "Compiled and edited clips from member submissions to create a celebratory end of year montage video"
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 13,
                title: "Continued Membership with NDSU ACM",
                tagline: "Student Org",
                date: "August 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: false,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 14,
                title: "Joined College of Science and Math Ambassadors",
                tagline: "Student Org",
                date: "September 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "The College of Science and Math Ambassadors describes their organization as: \"a selective organization that acts as a resource for the advancement of the college. Members work in an ambassadorial capacity between the college and students within the College, alumni of the College, and members of the community.\"",
                hasExternalLink: true,
                externalLink: "https://myndsu.ndsu.edu/organization/collegeofscienceandmathematicsambassadors",
                externalLinkText: "Link to Club Page"
            },
            {
                id: 15,
                title: "Hired at WEX Health",
                tagline: "Software Engineer Intern",
                date: "October 2018",
                hasImage: true,
                mediaPath: "/assets/img/ry/ry_wex_backpack.jpg",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Utilize C# and SQL skills to resolve incoming bug reports and feature requests",
                        "Work collaboratively in an Agile environment through weekly stand-ups, regular code reviews, and pair-programming",
                        "Display communication skills when facilitating information between customers and developers",
                        "Practice efficient development by performing individual and group testing on all code"
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 16,
                title: "Resigned at NDSU Technology Learning & Media Center",
                tagline: "Pursued Internship",
                date: "December 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: false,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 17,
                title: "Fall 2018 Dean's List Recipient",
                tagline: "3.0 or Higher GPA",
                date: "December 2018",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Completed fall 2018 semester with a 4.0 GPA."
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
        ]
    },
    {
        year: "2019",
        events: [
            {
                id: 1,
                title: "Volunteered at Discover NDSU",
                tagline: "College of Science and Math Ambassador",
                date: "February 2019",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "I volunteered with the College of Science and Math Ambassadors to provide the prospective students and their parents my personal experiences and advice alongside the advisors in the college."
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 2,
                title: "Completed Second Year of German Language",
                tagline: "2 of 2 Full Years",
                date: "May 2019",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: false,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 3,
                title: "Completed Web Design Minor",
                tagline: "1 of 2 Minors",
                date: "May 2019",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: false,
                hasBullets: false,
                bullets:
                    [
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 4,
                title: "Re-elected as NDSU League of Legends Club President",
                tagline: "Student Org",
                date: "May 2019",
                hasImage: true,
                mediaPath: "/assets/img/studentorgs/lolclub_s2019_firstmeeting.jpg",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Organize and host meetups, LAN parties, volunteering activities, and tournaments for players",
                        "Represent League of Legends Club by communicating with both NDSU and local gaming cafés",
                        "Prepare advertisements, PR materials and member outreach through social media channels",
                        "Compiled and edited clips from member submissions to create a celebratory end of year montage video"
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 5,
                title: "Spring 2019 Dean's List Recipient",
                tagline: "3.0 or Higher GPA",
                date: "May 2019",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "Completed spring 2019 semester with a 4.0 GPA."
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
            {
                id: 6,
                title: "Joined NDSU College of Engineering Ambassadors",
                tagline: "Student Org",
                date: "August 2019",
                hasImage: false,
                mediaPath: "/assets/img/",
                hasBodyContent: true,
                hasBullets: true,
                bullets:
                    [
                        "NDSU's Computer Science department became a part of the College of Engineering, giving me the opportunity to join their ambassador organization."
                    ],
                desc:
                    "",
                hasExternalLink: false,
                externalLink: "",
                externalLinkText: ""
            },
        ]
    },
]