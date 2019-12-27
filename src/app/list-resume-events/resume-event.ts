// New Event Template
/*
{
    id: 0,
    title: "",
    tagline: "",
    date: "",
    hasImage: false,
    mediaPath: "/assets/img/resume/",
    hasBodyContent: false;
    hasBullets: false,
    bullets:
        [
        ],
    desc:
        "",
    hasExternalLink: false,
    externalLink: "",
    externalLinkText: "",
},
*/

export class ResumeEvent {
    id: number;             
    title: string;
    tagline: string;
    date: string;
    hasImage: boolean;
    mediaPath: string;
    hasBodyContent: boolean;
    hasBullets: boolean; //determines if the event has a set of bulletpoints, like a job entry, or a full description
    bullets: string[];
    desc: string;
    hasExternalLink: boolean;
    externalLink: string;
    externalLinkText: string;
}