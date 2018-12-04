import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
allUser: any;
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.getUser().subscribe((data: any) => {
      this.allUser = data;
  });
  }

}
