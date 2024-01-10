import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss']
})
export class CustomPageComponent {

constructor(private router : Router){

}

openDialog() {
  this.router.navigate(["super-admin/custompage/add"])
}
}
