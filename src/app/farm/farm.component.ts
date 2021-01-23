import { Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Animal } from '../animal/animal.model';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  @Input() animals!: Array<Animal>;
  interval!: any;
  index = -1;

  constructor(
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.loadComponent();
    this.refresh();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  async loadComponent() {

    this.index = (this.index + 1) % this.animals.length;
    const animal = this.animals[this.index];

    const factory = this.resolver.resolveComponentFactory(animal.type)
    this.vcRef.createComponent(factory)
    this.vcRef.clear();

    const componentRef = this.vcRef.createComponent(factory);
    componentRef.instance.data = animal.data;
  }

  async refresh() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 28000);
  }
}
