import {Injectable} from '@angular/core';
import {Post} from './Post';

@Injectable()
export class PostService{
    getPosts():Promise<Post[]>{
        return Promise.resolve(POSTS);
    }   
}

export const POSTS = [
    {id : 1, title: "Post One", body:"This is Post ONE"},
    {id : 2, title: "Post Two", body:"This is Post TWO"},
    {id : 3, title: "Post Three", body:"This is Post THREE"},
    {id : 4, title: "Post Four", body:"This is Post FOUR"}
]