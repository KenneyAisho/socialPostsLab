import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: 'Grand Circus', thought: 'Grand Circus is great.' },
    { title: 'JavaScript', thought: 'JavaScript is intense' },
    { title: 'TypeScript', thought: 'TypeScript is even more intense' },
    {
      title: 'After Class',
      thought: 'After class, I enjoy going to the gym before I finish up my lab'
    }
  ];

  newPosts: Post = { title: '', thought: '' };

  addPost(): void {
    this.posts.push(this.newPosts);

    this.newPosts = {
      title: '',
      thought: ''
    };
  }

  removePost(index: number): void {
    let remove = this.posts[index];
    remove.title = '';
    remove.thought = '';
  }

  constructor() {}

  ngOnInit() {}
}
