import { Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';
import { AnimalComponent } from './animal/animal.component';

@Component({
  selector: 'farm',
  template: ``
})

export class FarmComponent implements OnInit {
  @Input() animals!: Array<Animal>;
  interval!: any;
  index = -1;

  constructor(
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.loadComponent();
    this.refresh();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.index = (this.index + 1) % this.animals.length;
    const animal = this.animals[this.index];

    const factory = this.resolver.resolveComponentFactory(AnimalComponent)
    this.vcRef.createComponent(factory)
    this.vcRef.clear();
    const componentRef = this.vcRef.createComponent(factory);
    componentRef.instance.breed = animal.breed;
    componentRef.instance.sound = animal.sound;
    componentRef.instance.image = animal.image;
  }

  refresh() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 26000);
  }
}