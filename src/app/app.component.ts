import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CV';
  lenguage: boolean = false;
  languageMessage: string = "";

  ngOnInit () {
    this.languageMessage = "Switch Language"
  }

  switchLanguage() {
    this.lenguage = !this.lenguage
    if (this.lenguage) {
      this.languageMessage = "Cambiar idioma"
    }
    if (!this.lenguage) {
      this.languageMessage = "Switch lenguage"
    }
  }
}
