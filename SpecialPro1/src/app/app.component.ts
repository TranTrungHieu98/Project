import { Component } from '@angular/core';
import {PostService} from './services/post.service';
import {Post} from './services/Post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PostService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpecialPro1';
  posts: Post[];
  constructor(private _postService:PostService){
     this._postService.getPosts().then(
        posts => {this.posts = posts}
     );
  }
}
