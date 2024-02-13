import { Component } from '@angular/core';
import { MainViewComponent } from '../../component/main-view/main-view.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  HeaderComponent,
    FooterComponent,
    MainViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
