import { Injectable } from '@angular/core';
import { BlockChain } from 'blockchain/src/BlockChain';
import EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockChainService {
  public blockchainInstance : BlockChain;
  
  public walletKeys: Array<IWalletKey>;

  constructor() {
    this.blockchainInstance = new BlockChain();
    this.walletKeys = [];
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('Kit Lao');
    this.generateWalletKeys();
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  addressIsFromCurrentUser(address) {
    return address === this.walletKeys[0].publicKey;
  }

  generateWalletKeys() {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });

    console.log(this.walletKeys);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}
