import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello World version {{value}}</div>`,
})
export class AppComponent {
  value = '17.0';
}
