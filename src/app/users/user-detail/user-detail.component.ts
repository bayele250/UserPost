import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(private userService: UserService, private route:ActivatedRoute) { }
  id: number;

  ngOnInit() {

    let p=this.route.params.subscribe(params=>{this.id=+params['id'];});
    this.userService.getUserById(this.id).subscribe((data: any) => {
      this.user = data;
      debugger;
  });
  }
}
