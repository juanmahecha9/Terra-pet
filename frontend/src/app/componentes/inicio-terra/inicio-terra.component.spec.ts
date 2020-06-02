import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTerraComponent } from './inicio-terra.component';

describe('InicioTerraComponent', () => {
  let component: InicioTerraComponent;
  let fixture: ComponentFixture<InicioTerraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioTerraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioTerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
