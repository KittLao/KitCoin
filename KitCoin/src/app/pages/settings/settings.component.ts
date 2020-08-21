import { Component, OnInit } from '@angular/core';
import { BlockChainService } from '../../services/block-chain.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public blockchain;

  constructor(private blockchainService: BlockChainService) {
    this.blockchain = blockchainService.blockchainInstance;
  }

  ngOnInit() {
  }
}