import { TestBed } from '@angular/core/testing';
import { FarmService } from './farm.service';


describe('FarmService', () => {
  let service: FarmService

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
