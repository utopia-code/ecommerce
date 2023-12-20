import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() changeContent = new EventEmitter<{content: string}>();
  currentComponent: string = 'article-list';

  itemsNav: Array<{link: string, component: string}> = [
    {link: 'article-list', component: 'Artículos'},
    {link: 'new-template', component: 'Nuevo artículo template'},
    {link: 'new-reactive', component: 'Nuevo artículo reactivo'},
  ]

  showComponent(componentName: string) {
    this.currentComponent = componentName;
    this.changeContent.emit({content: this.currentComponent});
  }

  isNavItemActive(componentName: string): boolean {
    return this.currentComponent === componentName;
  }
}
