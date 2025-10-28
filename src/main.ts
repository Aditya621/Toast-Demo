import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './component/app/app';

@Component({
  selector: 'app-root',
  template: `
    <app-main></app-main>
  `,
  imports: [AppComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
