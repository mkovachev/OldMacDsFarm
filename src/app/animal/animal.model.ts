import { Type } from '@angular/core';
import { Optional } from '@angular/core';


export class Animal {
    constructor(
        public data: any,
    ) { }

    type!: Type<any>
}