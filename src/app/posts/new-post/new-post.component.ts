import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/users/user.service';
import { Posts } from '../postmodel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post: Posts;
  constructor(private userService: UserService, private toaster: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form != null)
    form.reset();
    this.post = {
    Title: '',
    Body: '',
  }
  }
  OnSubmit(form: NgForm){
    this.userService.addPost(form.value).subscribe((data: any) => {
      if (data.Succeeded == true) {
        this.resetForm(form);
        this.toaster.success('New Post added Successfully!');
        
      }
      else
      this.toaster.error("Error occured");
      
    });
  }
}
