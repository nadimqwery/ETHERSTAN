import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/auth/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  previousUrl: string;
  constructor(private location: Location, private authService: AuthService) {
  }


  back() {
    this.location.back();
  }


}
