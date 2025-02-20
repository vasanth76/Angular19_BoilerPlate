import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@lib/services';
import { RouterOutlet } from '@angular/router';
import { BaseLayoutComponent } from "./lib/components/layouts/base-layout/base-layout.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, BaseLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAuthenticated$ = inject(AuthService).isAuthenticated$;
  title = 'boilerplatev19';
}
