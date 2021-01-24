import { Type } from '@angular/core';

export class MyAnimal {
    constructor(
        public type: Type<any>,
        public data: any) { }
}