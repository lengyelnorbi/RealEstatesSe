import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstInfComponent } from './real-est-inf.component';

describe('RealEstInfComponent', () => {
  let component: RealEstInfComponent;
  let fixture: ComponentFixture<RealEstInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
