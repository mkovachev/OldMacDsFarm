import { TestBed } from '@angular/core/testing';
import { Animal } from '../models/animal.model';
import { FarmService } from './farm.service';

describe('FarmService', () => {
  let service: FarmService
  const custom = []
  const animal = new Animal('breed', 'sound', '')
  
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FarmService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  // describe("create function should add new animal into custom array", () => {
  //   return service.create(animal), result! => {
  //     expect(result.length).toBeGreaterThan(0);
  //   })
  // })

})
