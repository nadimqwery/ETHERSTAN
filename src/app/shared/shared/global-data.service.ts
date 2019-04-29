import { Injectable } from '@angular/core';


interface ShareObj {
  [id: string]: any;
}



@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  shareObj: ShareObj = {'KontractTokenAddress': '0x129eaaF3eFD6B63c3B1e2e1B25518a1C0f8631FB'

};

  constructor() { }
}
