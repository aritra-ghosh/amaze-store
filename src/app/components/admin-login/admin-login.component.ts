import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

class Person {
  username: string = '';
  password: string = '';
}

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  person: Person;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.person = new Person();
  }

  ngOnInit(): void {
  }

  authenticateUser() {
    console.log(this.person);
    this.authService.authUser(this.person).subscribe((response: any) => {
      console.log(response);
      if (response) {
        if (response.success === false) {
          this.errorMessage = response.message;
        } else {
          sessionStorage.setItem('loggedIn', '1');
          this.router.navigateByUrl('/manage');
        }
      } else {
        this.errorMessage = 'Service not available!';
      }
    });
  }

}
