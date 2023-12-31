import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Design Center';
  currentComponent: string = 'article-list';

  onShowedComponent(event: {content: string}) {
    this.currentComponent = event.content;
  }
}

