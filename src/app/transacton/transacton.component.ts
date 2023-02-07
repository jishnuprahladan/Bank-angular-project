import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transacton',
  templateUrl: './transacton.component.html',
  styleUrls: ['./transacton.component.css']
})
export class TransactonComponent {
  transactionData: any
  constructor(private ds:DataService) {

    this.transactionData = this.ds.gettransaction(this.ds.currentAcno)
    console.log(this.transactionData);

  }
}
