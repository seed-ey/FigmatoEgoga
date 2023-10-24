import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserData } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 constructor(
   private auth: AuthService,
   private router: Router,

 ){}
userd: UserData = new UserData();
  email:string = '';
  password: string = '';
  findAll(){
    this.auth.findAll().subscribe((data)=>{
      console.log("llllllllllllllllll",data);
    })
  }
  ngOnInit(): void {
    this.findAll();
  }

  login() {
    this.auth.login(this.userd.email, this.userd.password).subscribe(response => {
      console.log("2222222222",this.userd);
      this.router.navigate(['body']);

    });
  }
}
