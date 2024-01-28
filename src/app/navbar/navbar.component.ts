import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showMenuMobile = false;

  itemsNav: Array<{link: string, name: string}> = [
    {link: '/user/login', name: 'Login'},
    {link: '/user/register', name: 'Register'},
    {link: '/article/list', name: 'Article List'},
    {link: '/article/create', name: 'Create Article'}
  ]
  toogleMenu() {
    this.showMenuMobile = !this.showMenuMobile;
  }
}
