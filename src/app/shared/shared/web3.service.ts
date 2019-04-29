import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';

import { WindowRefService } from './window-ref.service';
import kontracttoken_artifacts from '../../../build/contracts/KontractToken.json'; 
import { Subject } from 'rxjs';


@Injectable()
export class Web3Service {

  public web3: Web3;
  public accounts: string[];
  public KontranctToken: any;

  public accountsObservable = new Subject<string[]>();

  constructor(private windowRef: WindowRefService) {
    this.setupMetacoinContract();
    this.refreshAccounts();
  }

  private async setupMetamaskWeb3() {

    if (!this.windowRef.nativeWindow) {
      throw new Error('Can not get the window');
    }
    if (!this.windowRef.nativeWindow.web3) {
      throw new Error('Not a metamask browser');
    }
    this.web3 = new Web3(this.windowRef.nativeWindow.web3.currentProvider);
  }

  private setupMetacoinContract() {
    this.setupMetamaskWeb3();
    this.KontranctToken = contract(kontracttoken_artifacts);
    this.KontranctToken.setProvider(this.web3.currentProvider);
  }

  public refreshAccounts() {
    this.web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        alert(`There was an error fetching your accounts.`);
        return;
      }

      // Get the initial account balance so it can be displayed.
      if (accs.length == 0) {
        alert(`Couldn't get any accounts! Make sure your Ethereum client is configured correctly.`);
        return;
      }

      if (!this.accounts || this.accounts.length != accs.length || this.accounts[0] != accs[0]) {
        console.log(`Observed new accounts`);
        this.accountsObservable.next(accs);
        this.accounts = accs;
      }
    });
  }
}
