import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { email: '', password: '' };

  onSubmit() {
    console.log('Formulaire soumis avec :', this.user);
    alert('Connexion réussie !');
  }

}
