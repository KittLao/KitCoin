import { TestBed } from '@angular/core/testing';

import { BlockChainService } from './block-chain.service';

describe('BlockChainService', () => {
  let service: BlockChainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockChainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
