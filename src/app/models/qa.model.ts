import {Post} from './post.model';

export interface QA extends Post{
     link: string;
     answer: string;
}