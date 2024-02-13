import { Component } from '@angular/core';
import { HeaderComponent } from '../../common-components/header/header.component';
import { FooterComponent } from '../../common-components/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
