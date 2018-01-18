import { Component, OnInit } from '@angular/core';
import { RezultatRNFR } from './rezultatrnfr';
import { AiInfoService } from '../ai-info.service';

@Component({
  selector: 'app-rnfr',
  templateUrl: './rnfr.component.html',
  styleUrls: ['./rnfr.component.css'],
  providers: [AiInfoService]
})
export class RnfrComponent implements OnInit {

  rez: RezultatRNFR = {valoareFR: 'NECALCULAT', valoareNFR: 'NECALCULAT', valoareRFNFR: 'NECALCULAT'};

  constructor(private aiInfoService: AiInfoService) { }

  ngOnInit() {
  }

  calculRNFR() {
    this.aiInfoService.obtinereRNFR().subscribe(fr => {
      this.rez.valoareRFNFR = fr.valoareRFNFR;
    },
      err => {
        this.rez.valoareRFNFR = 'EROARE LA CALCUL';
        console.log(err);
      });
  }

  calculFondRulment() {
    // this.rez.valoareFR = 'Situatie financiare super super';
    this.aiInfoService.obtinereFondRulment().subscribe(fr => {
      this.rez.valoareFR = fr.valoareFR;
    },
      err => {
        this.rez.valoareFR = 'EROARE LA CALCUL';
        console.log(err);
      });
  }

  calculNecesarFondRulment() {
    // this.rez.valoareNFR = 'Situatie financiar nu foarte super super';
    console.log('TrezorerieComponent! In calculNecesarFondRulment');
    this.aiInfoService.obtinereNecesarFondRulment().subscribe(fr => {
      this.rez.valoareNFR = fr.valoareNFR;
    },
      err => {
        this.rez.valoareNFR = 'EROARE LA CALCUL';
        console.log(err);
      });
  }



}
