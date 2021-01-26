import { TestBed } from '@angular/core/testing';
import { Animal } from '../models/animal.model';
import { FarmService } from './farm.service';
import { mocked } from 'ts-jest/utils';

describe('FarmService', () => {
  let service: FarmService
  const custom = []
  const animal = new Animal('', '', '')

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FarmService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should have create function', () => {
    expect(service.create).toBeTruthy()
  })

  it('should have allMyFarm function', () => {
    expect(service.allMyFarm).toBeTruthy()
  })

  it('should have allCustom function', () => {
    expect(service.allCustom).toBeTruthy()
  })

})
