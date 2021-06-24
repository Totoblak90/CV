import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'CV';
  language: boolean = false;
  languageMessage: string = "";
  downloadMessage: string = "";

  constructor() {
  }

  ngOnInit () {
    this.languageMessage = "Switch Language"
    this.downloadMessage = "Download as PDF"
  }

  switchLanguage() {
    this.language = !this.language
    if (this.language) {
      this.languageMessage = "Cambiar idioma"
      this.downloadMessage = "Descargar como PDF"
    }
    if (!this.language) {
      this.languageMessage = "Switch language"
      this.downloadMessage = "Download as PDF"
    }
  }

}
