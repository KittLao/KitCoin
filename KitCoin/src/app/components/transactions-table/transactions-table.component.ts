import { Component, OnInit, Input } from '@angular/core';
import { BlockChainService } from '../../services/block-chain.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Input()
  public transactions = [];

  constructor(public blockchainService: BlockChainService) { }

  ngOnInit() {
  }
}
