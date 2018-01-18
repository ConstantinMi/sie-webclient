import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContService } from '../cont.service';
import { Cont } from '../cont';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cont-create',
  templateUrl: './cont-create.component.html',
  styleUrls: ['./cont-create.component.css'],
  providers: [ContService]
})
export class ContCreateComponent implements OnInit, OnDestroy {

  cod: string;
  cont: Cont;

  contForm: FormGroup;
  private sub: any;
  private tipuriCont: string[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private contService: ContService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.cod = params['cod'];
    });
    this.contForm = new FormGroup({
      cod: new FormControl('', Validators.required),
      denumire: new FormControl('', Validators.required),
      valoare: new FormControl(0.0, Validators.required),
      tipCont: new FormControl('', Validators.required)
    });

    if (this.cod) {
      this.contService.findByCod(this.cod).subscribe(
        cont => {
          this.contForm.patchValue({
            cod : cont.cod,
            denumire: cont.denumire,
            valoare: cont.valoare,
            tipCont: cont.tipCont
          });
        }, error => {
          console.log(error);
        }
      );
    }
    this.obtinereTipuriCont();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.contForm.valid) {
      let cont: Cont = new Cont(
        this.contForm.controls['cod'].value,
        this.contForm.controls['denumire'].value,
        this.contForm.controls['valoare'].value,
        this.contForm.controls['tipCont'].value
      );
      this.contService.saveCont(cont).subscribe();
    }
    this.contForm.reset();
    this.router.navigate(['/cont']);
  }

  redirectConturiPage() {
    this.router.navigate(['/cont']);
  }

  obtinereTipuriCont() {
    this.contService.getTipuriCont().subscribe(
      tipuriCont => {
        this.tipuriCont = tipuriCont;
        console.log(this.tipuriCont);
      },
      err => {
        console.log(err);
      }
    );
  }

}
