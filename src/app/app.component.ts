import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        LayoutModule,
        PagesModule,
        RouterModule,
      ]
})
export class AppComponent {
  title = 'owen-angular';
}
