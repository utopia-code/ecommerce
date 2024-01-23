import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() changeContent = new EventEmitter<{content: string}>();
  currentComponent: string = 'article-list';
  showMenuMobile = false;

  itemsNav: Array<{link: string, component: string}> = [
    {link: 'article-list', component: 'Artículos'},
    {link: 'new-reactive', component: 'Nuevo artículo'},
  ]

  showComponent(componentName: string) {
    this.currentComponent = componentName;
    this.changeContent.emit({content: this.currentComponent});
  }

  isNavItemActive(componentName: string): boolean {
    return this.currentComponent === componentName;
  }

  toogleMenu() {
    this.showMenuMobile = !this.showMenuMobile;
  }
}
