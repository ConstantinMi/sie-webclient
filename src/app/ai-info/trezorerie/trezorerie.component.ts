import { Component, OnInit } from '@angular/core';
import { AiInfoService } from '../ai-info.service';
import { Rezultat } from './rezultat';

@Component({
  selector: 'app-trezorerie',
  templateUrl: './trezorerie.component.html',
  styleUrls: ['./trezorerie.component.css'],
  providers: [AiInfoService]
})
export class TrezorerieComponent implements OnInit {

  constructor(private aiInfoService: AiInfoService) { }

  rez: Rezultat = {valoareFR: 'NECALCULAT', valoareNFR: 'NECALCULAT', valoareTRZ: 'NECALCULAT'};

  ngOnInit() {
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

  calculTrezorerie() {
    this.aiInfoService.obtinereValoareTrezorerie().subscribe(fr => {
      this.rez.valoareTRZ = fr.valoareTRZ;
    },
      err => {
        this.rez.valoareTRZ = 'EROARE LA CALCUL';
        console.log(err);
      });
  }
}
