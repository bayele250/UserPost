import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../posts/postmodel';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly userUrl = 'https://jsonplaceholder.typicode.com/users';
  readonly postUrl='https://jsonplaceholder.typicode.com/posts';
  post: Posts;
  constructor(private http: HttpClient) { 

  }

  getUser(){
    return  this.http.get(this.userUrl);
  }

  getUserById(id: number){
    return this.http.get(this.userUrl+"/"+id.toString());
  }
  addPost(post: Posts)
  {
    return this.http.post(this.postUrl, post);
  }

  getPost(){
    return  this.http.get(this.postUrl);
  }
}
