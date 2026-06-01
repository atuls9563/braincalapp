import {Post} from './post.model';

export interface Trick extends Post{
    link: string;
    video: string;
    expression: string;
}