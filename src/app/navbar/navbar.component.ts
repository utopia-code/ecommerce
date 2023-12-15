import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() changeContent = new EventEmitter<{content: string}>();
  currentComponent: string = 'article-list';

  showComponent(currentComponent: string) {
    this.changeContent.emit({content: currentComponent});
  }
}
