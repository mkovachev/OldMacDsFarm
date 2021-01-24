import { Type } from '@angular/core';

export class Animal {
    constructor(
        public type: Type<any>,
        public data: any) { }
}