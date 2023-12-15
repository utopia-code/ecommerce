import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() changeContent = new EventEmitter<{content: string}>();
  currentComponent: string = 'article-list';
  navItemActive: string = 'article-list';

  showComponent(componentName: string) {
    this.currentComponent = componentName;
    this.navItemActive = componentName;
    this.changeContent.emit({content: this.currentComponent});
  }

  isNavItemActive(componentName: string): boolean {
    return this.navItemActive === componentName;
  }
}
