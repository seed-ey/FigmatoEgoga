import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserData } from '../auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  userd: UserData = new UserData();
        // firstName :string = '' ;
        // lastName: string = '' ;
        // email: string = '' ;
        // password: string = '';
        // role: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,

  ){
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['user', Validators.required],
    });  }
  
 

  onSignup() {
    this.authService.postData(this.userd).subscribe((response) => {
      debugger
      console.log('Signup successful!', response);
      this.router.navigate(['login']);
    },
    (error) => {
     // console.error('Error during signup:', error);
    }
  
    );
  }
  
}
