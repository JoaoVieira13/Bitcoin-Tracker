import { Component, OnInit } from '@angular/core';
import { Bitcoin } from '../models/bitcoin.model';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage implements OnInit {
  currency: string ='EUR';
  bitcoin: Bitcoin;

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.getBitcoinPrice();
  }

  getBitcoinPrice(){
return this.bitcoinService.getBitcoinPrice(this.currency).subscribe(result => {
  this.bitcoin=result;
});
  }

}
