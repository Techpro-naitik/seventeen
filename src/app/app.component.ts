import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { HeaderComponent } from './common-components/header/header.component';
import { MainViewComponent } from './component/main-view/main-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'seventeen';
}
