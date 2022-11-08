import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, /*TranslateModule*/],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(public loginS: LoginService, public localS: LocalStorageService, /*private translateS:TranslateModule*/) {

  }


  ngOnInit(): void {
  }
  public logout() {
    this.localS.remove("user");
    this.loginS.signOut();
  }




}
