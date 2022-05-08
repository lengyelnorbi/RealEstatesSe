import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAdvertComponent } from './mod-advert.component';

describe('ModAdvertComponent', () => {
  let component: ModAdvertComponent;
  let fixture: ComponentFixture<ModAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
