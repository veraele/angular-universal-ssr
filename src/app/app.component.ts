import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-universal-app';
  text:any = '';

  constructor(private dataService: DataService) {}

  async callApi() {
    const response = await this.dataService.greeting(this.text);
    console.log('respuesta: ', response);
  }

}
