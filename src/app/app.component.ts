import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'CV';
  language = true;
  languageMessage = '';
  downloadMessage = '';

  constructor() {
  }

  ngOnInit(): void {
    this.languageMessage = 'Switch language';
    this.downloadMessage = 'Descargar como PDF';
  }

  switchLanguage(): void {
    this.language = !this.language;
    if (this.language) {
      this.languageMessage = 'Switch language';
      this.downloadMessage = 'Descargar como PDF';
    }
    if (!this.language) {
      this.languageMessage = 'Cambiar idioma';
      this.downloadMessage = 'Download as PDF';
    }
  }

}
