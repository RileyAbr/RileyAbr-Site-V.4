import { BlogParagraph } from './blog-paragraph';

export class BlogPost {
    id: number;
    title: string;
    tagline: string;
    date: string;
    abstract: string;
    mediaPath: string;
    bodyParagraphs: BlogParagraph[];
}