import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Vérification que les mots de passe correspondent
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // onSubmit() {
  //   if (this.signupForm.valid) {
  //     this.userService.signup(this.signupForm.value).subscribe(
  //       response => {
  //         console.log('Inscription réussie :', response);
  //         alert('Inscription réussie !');
  //       },
  //       error => {
  //         console.error('Erreur lors de l\'inscription :', error);
  //         alert('Échec de l\'inscription. Veuillez réessayer.');
  //       }
  //     );
  //   }
  // }
  onSubmit() {
    console.log('Attempting to sign up user:',this.signupForm.value);

    // Appel au UserService pour l'inscription
    this.userService.signup(this.signupForm.value).subscribe(
      (data) => {
        console.log('Signup with success');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup failed', error);
      }
    );
  }

}
