import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-component-loader',
  template: '<ng-container #dynamicComponentContainer></ng-container>',
})
export class DynamicComponentLoaderComponent implements AfterViewInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;

  @Input() component: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.loadComponent();
  }

  ngOnChanges() {
    this.loadComponent();
  }

  private loadComponent() {
    if (this.component && this.dynamicComponentContainer) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        this.component
      );
      this.dynamicComponentContainer.clear();
      const componentRef = factory.create(
        this.dynamicComponentContainer.parentInjector
      );
      this.dynamicComponentContainer.insert(componentRef.hostView);
    }
  }
}
