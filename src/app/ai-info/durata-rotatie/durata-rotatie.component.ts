import { Component, OnInit } from '@angular/core';
import { AiInfoService } from '../ai-info.service';
import { RezultatDR } from './rezultatdr';

@Component({
  selector: 'app-durata-rotatie',
  templateUrl: './durata-rotatie.component.html',
  styleUrls: ['./durata-rotatie.component.css'],
  providers: [ AiInfoService ]
})
export class DurataRotatieComponent implements OnInit {

  rez: RezultatDR = {valoareNFR: 'NECALCULAT', valoareCA: 'NECALCULAT', valoareDR: 'NECALCULAT'};

  constructor(private aiInfoService: AiInfoService) { }

  ngOnInit() {
  }

  calculNecesarFondRulment() {
    this.aiInfoService.obtinereNecesarFondRulment().subscribe(fr => {
      this.rez.valoareNFR = fr.valoareNFR;
    },
      err => {
        this.rez.valoareNFR = 'EROARE LA CALCUL';
        console.log(err);
      });
  }

  calculCifraDeAfaceri() {
    // this.rez.valoareCA = 'Cifra de afaceri super buna';
    this.aiInfoService.obtinereCifraAfaceri().subscribe(fr => {
      this.rez.valoareCA = fr.valoareCA;
    },
      err => {
        this.rez.valoareCA = 'EROARE LA CALCUL';
        console.log(err);
      });
  }

  calculDurataRotatie() {
    // this.rez.valoareDR = 'Durata de rotatie excelenta';
    this.aiInfoService.obtinereDurataRotatie().subscribe(fr => {
      this.rez.valoareDR = fr.valoareDR;
    },
      err => {
        this.rez.valoareDR = 'EROARE LA CALCUL';
        console.log(err);
      });
  }

}
