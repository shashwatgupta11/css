import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtcComponent } from './dtc.component';

describe('DtcComponent', () => {
  let component: DtcComponent;
  let fixture: ComponentFixture<DtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
