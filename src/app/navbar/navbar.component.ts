import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showMenuMobile = false;

  // itemsNav: Array<{link: string, component: string}> = [
  //   {link: 'article-list', component: 'Artículos'},
  //   {link: 'new-reactive', component: 'Nuevo artículo'},
  // ]
  toogleMenu() {
    this.showMenuMobile = !this.showMenuMobile;
  }
}
