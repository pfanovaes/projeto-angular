import { Component, OnInit } from '@angular/core';
// import { APIService } from 'src/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login!: string;
  // senha!: string;

  // loginError:boolean = false;  

<<<<<<< HEAD
  constructor() { }
  // private api: APIService, private router: Router
=======
  // constructor(
  //   private api: APIService, 
  //   private router: Router
  //   ) { }
>>>>>>> 7d39112f38b88e86bd59e9b58e5b8789c328a6eb

  ngOnInit(): void {}

  // onSubmit(login: any, senha: any): void {
  //   this.api
  //     .getAuthorizationToken(login.value, senha.value)
  //     .subscribe((token) => {
  //       if (token) {
  //         this.api.setAuth(token);
<<<<<<< HEAD
=======
         
>>>>>>> 7d39112f38b88e86bd59e9b58e5b8789c328a6eb
  //         this.router.navigateByUrl('/board');
  //         this.loginError = false;
  //       } else {
  //         console.log('Não autorizado', login.value, senha.value);
  //         this.loginError = true;
  //         this.api.clearAuth()
  //       }
  //     });
  // }

}
