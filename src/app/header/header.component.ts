import {Component} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles:[`

  a{
    margin:5px;
    padding:10px;
  }`]
})

export class HeaderComponent {
  collapsed = true;

}
