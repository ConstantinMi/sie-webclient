import { Component, OnInit } from '@angular/core';
import { Cont } from '../cont';
import { ContService } from '../cont.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cont-list',
  templateUrl: './cont-list.component.html',
  styleUrls: ['./cont-list.component.css'],
  providers: [ContService]
})
export class ContListComponent implements OnInit {

  private conturi: Cont[];

  constructor(private router: Router,
              private contService: ContService) { }

  ngOnInit() {
    this.obtinereConturi();
  }

  obtinereConturi() {
    this.contService.findAll().subscribe(
      conturi => {
        this.conturi = conturi;
      },
      err => {
        console.log(err);
      }
    );
  }

  redirectContNouPage() {
    this.router.navigate(['/cont/create']);
  }

  editContPage(cont: Cont) {
    if (cont)
      this.router.navigate(['/cont/edit', cont.cod]);
  }

}
