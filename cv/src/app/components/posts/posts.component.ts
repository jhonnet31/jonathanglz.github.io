import { GhostService } from './../../services/ghost.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any;
  constructor(private ghost:GhostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts()
  {
    this.ghost.getPosts().subscribe((posts:any)=>{
      console.log(posts);
      this.posts=posts.posts;

     });
  }

}
