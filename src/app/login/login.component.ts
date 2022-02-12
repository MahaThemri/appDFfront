import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { claimService } from '../claim.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="" ;
  pswd:string="";
  message:any


  constructor(private service : claimService,private router : Router ) { }

  ngOnInit(): void {
  }

  doLogin(){
    let response = this.service.login(this.username,this.pswd)
    response.subscribe(data=>{
      this.message=data;
      this.router.navigate(['/details'])
    })
  }
}
