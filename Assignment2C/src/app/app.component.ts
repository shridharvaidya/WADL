import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration_form';
  getValues(val:any)
  {
    document.write("name"+val['user']);
    document.write("<br>");
    document.write("age"+val['age']);
    document.write("<br>");
    document.write("city"+val['city']);
    console.log(val);
  }
}
