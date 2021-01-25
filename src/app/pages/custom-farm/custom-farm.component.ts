import { Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
import { CustomAnimal } from 'src/app/models/custom-animal.model';

@Component({
  selector: 'app-custom-farm',
  template: ``
})

export class CustomFarmComponent {
  @Input() animals!: Array<CustomAnimal>;
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

    // const factory = this.resolver.resolveComponentFactory(animal.type)
    // this.vcRef.createComponent(factory)
    // this.vcRef.clear();

    // const componentRef = this.vcRef.createComponent(factory);
    // componentRef.instance.data = animal.data;
  }

  refresh() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 30000);
  }
}
