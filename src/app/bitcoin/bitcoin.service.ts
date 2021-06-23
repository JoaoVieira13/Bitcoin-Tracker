import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Bitcoin } from '../models/bitcoin.model';

const KEY = 'NGEwOTljMjVhYmIwNGUzNWFkMzMwOThkZjkwYTg1YzQ';
const BASE_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private headers

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders ({
      'x-ba-key': KEY
    });
  }

  getBitcoinPrice(currency:string) {
    return this.http.get<Bitcoin>(`${BASE_URL}${currency}`,{headers:this.headers});
  }

}
