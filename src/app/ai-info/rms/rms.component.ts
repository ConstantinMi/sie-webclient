import { Component, OnInit } from '@angular/core';
import { AiInfoService } from '../ai-info.service';
import { RezultatRMS } from './rezultatrms';

@Component({
  selector: 'app-rms',
  templateUrl: './rms.component.html',
  styleUrls: ['./rms.component.css'],
  providers: [AiInfoService]
})
export class RmsComponent implements OnInit {

  rez: RezultatRMS = {valoareFR: 'NECALCULAT', valoareCA: 'NECALCULAT', valoareRMS: 'NECALCULAT'};

  constructor(private aiInfoService: AiInfoService) { }

  ngOnInit() {
  }

  calculFondRulment() {
    // this.rez.valoareFR = 'Situatie financiare super super awdoadh';
    this.aiInfoService.obtinereFondRulment().subscribe(fr => {
      this.rez.valoareFR = fr.valoareFR;
    },
      err => {
        this.rez.valoareFR = 'EROARE LA CALCUL';
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

  calculRata() {
    // this.rez.valoareRMS = 'Super rata de marja';
    this.aiInfoService.obtinereRata().subscribe(fr => {
      this.rez.valoareRMS = fr.valoareRMS;
    },
      err => {
        this.rez.valoareRMS = 'EROARE LA CALCUL';
        console.log(err);
      });
  }

}
