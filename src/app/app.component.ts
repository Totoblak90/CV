import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public title: string = 'CV';
  public language: boolean = true;
  public languageMessage: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.languageMessage = 'Switch language';
  }

  public switchLanguage(): void {
    this.language = !this.language;
    if (this.language) {
      this.languageMessage = 'Switch language';
    }
    if (!this.language) {
      this.languageMessage = 'Cambiar idioma';
    }
  }

}
