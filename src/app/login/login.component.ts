import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; //declaring my form//
  loading: boolean = false;
  submitted: boolean = false;

  public url = 'http://worldtimeapi.org/api/timezone/Asia/Kolkata';
  public kolkataList: Object;

  // loginForm: FormGroup;
  // loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router //parametrizing my form// // private formBuilder: FormBuilder, // private route: ActivatedRoute, // private router: Router
  ) {
    this.loginForm = this.formBuilder.group({});

    //initialization of form// for constructor
    // this.loginForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required], //jyotsana.gmail.com                                              //initialization inside ngOnIt()
      password: ['', Validators.required], //123456//
    });

    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  get fval() {
    return this.loginForm.controls; //email and password//

    ///getting form values//email and password
  }

  // onFormSubmit() {
  //   debugger;
  //   if (
  //     this.loginForm.value.email === 'admin@gmail.com' ||
  //     ('rjyotsana95.rai@gmail.com' &&
  //       this.loginForm.value.password === 'admin123') ||
  //     '1234567'
  //   ) {
  //     this.router.navigate(['forms']); //component
  //   } else {
  //     this.router.navigate(['login']);
  //   }
  // }

  // get fval() {
  //   return this.loginForm.controls;
  // }

  getKolkataTime() {
    debugger;
    return this.http.get(this.url).subscribe((Response) => {
      this.kolkataList = Response;
    });
  }

  onFormSubmit() {
    debugger;

    if (
      this.loginForm.value.email === 'admin@gmail.com' ||
      ('jyotsana@gmail.com' && this.loginForm.value.password === 'admin123') ||
      'jyotsana@123'
    ) {
    }
    // this.submitted = true;
    // stop here if form is invalid
    else {
      this.router.navigate(['login']);
    }

    // this.router.navigate(['homepage']);

    setTimeout(() => {
      //<<<---using ()=> syntax
      this.ngOnInit();
    }, 3000);
    this.getKolkataTime();
  }

  // onFormSubmit() {
  //   debugger;
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   this.authService.login(
  //     this.loginForm.value.email,
  //     this.loginForm.value.password
  //   ).valueOf;
  //   if (this.authService.isAuthenticate == true) {
  //     this.router.navigate(['forms']);
  //   } else if (this.authService.isAuthenticate == false) {
  //     // this.router.navigate(['homepage']);
  //     // setTimeout(() => {
  //     //   //<<<---using ()=> syntax
  //     //   this.ngOnInit();
  //     // }, 3000);
  //     // Swal.fire({
  //     //   icon: 'error',
  //     //   title: 'Oops...',
  //     //   text: 'Something went wrong!',
  //     //   footer: '<a href="">Why do I have this issue?</a>',
  //     // });
  //   }
  // }
}
