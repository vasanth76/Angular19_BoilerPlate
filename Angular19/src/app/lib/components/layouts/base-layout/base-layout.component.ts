import { Component } from '@angular/core';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { FooterComponent } from '@lib/components/footer/footer.component';
import { HeaderComponent } from '@lib/components/header/header.component';

@Component({
  selector: 'app-base-layout',
  imports: [HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss'
})
export class BaseLayoutComponent {

}
