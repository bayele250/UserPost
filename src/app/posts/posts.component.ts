import { Component, OnInit } from '@angular/core';
import {Posts} from './postmodel';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: any;
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getPost().subscribe((data: any) => {
      this.post = data;
  });
}


}
