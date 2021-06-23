import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import * as html2pdf from 'html2pdf.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild('spanishDiv', {static: false} ) spanishDiv!: ElementRef;
  @ViewChild('englishDiv', {static: false} ) englishDiv!: ElementRef;


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

  download( language: boolean ) {

    if (language === true) {



      // const doc = new jsPDF();

      // const specialElementHandlers = {
      //   '#editor': function (element: any, renderer: any) {
      //     return true;
      //   }
      // };

      const spanishDiv = this.spanishDiv.nativeElement;
      html2pdf(spanishDiv)

      // doc.html(spanishDiv, {
      //   callback: function (pdf) {
      //     var iframe = document.createElement('iframe');
      //     document.body.appendChild(iframe);
      //     iframe.src = pdf.output('datauristring');
      //   }
      // });
      // doc.save('Spanish-CV')

    } else {

      const doc = new jsPDF();

      const specialElementHandlers = {
        '#editor': function (element: any, renderer: any) {
          return true;
        }
      };

      const englishDiv = this.englishDiv.nativeElement;

      doc.html(englishDiv, {
        callback: function (pdf) {
          var iframe = document.createElement('iframe');
          document.body.appendChild(iframe);
          iframe.src = pdf.output('datauristring');
        }
      });
      doc.save('Spanish-CV')

    }

  }
}
