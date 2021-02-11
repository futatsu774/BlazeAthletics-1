import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminWriteData } from 'src/app/service/admin-write-data.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  adminLogin: FormGroup;
  date: string;
  errorMessage:string = null;


  constructor(private authService: AuthenticationService, private logAdminEntry: AdminWriteData, private router: Router) { }

  ngOnInit(){
    this.adminLogin = new FormGroup({

      "username": new FormControl(null,[Validators.required, Validators.email]),
      "password": new FormControl(null,[Validators.required])

      }
    );
  }

  onSubmit()
  {

    this.date = new Date().toUTCString();

    this.authService.login(this.adminLogin.value.username, this.adminLogin.value.password).subscribe
    (responseData => {
      console.log(responseData);
      this.logAdminEntry.logAdminEntry({date: "Admin logged in at " + this.date}).subscribe(response => {
        this.authService.isAdmin = true;
        this.router.navigate(['/dashboard-admin']);

        localStorage.setItem('adminData', JSON.stringify(this.authService.isAdmin));
      }, 
        error => {
          localStorage.removeItem('userData');
          this.errorHandling(error);
        });
    }, errorMessage =>{
      this.errorMessage = errorMessage;
    } 
  );
  }

  errorHandling(error: any)
  {
    switch(error.status)
    {
      case 401:
        this.errorMessage = "Unauthorized email or password";
        console.log(this.errorMessage);
    }
  }
}
