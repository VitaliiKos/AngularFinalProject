import { Component, OnInit } from '@angular/core';

import {UserDetailService} from "../../services/user-detail.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetail : any

  constructor(private userDetailService:UserDetailService) { }

  ngOnInit(): void {
    this.userDetailService.getUserDetail().subscribe(value => {
      console.log(value)
      this.userDetail = value

    })
  }

  edit_profile() {

  }
}
