import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtcSecondPgComponent } from './dtc-second-pg.component';

describe('DtcSecondPgComponent', () => {
  let component: DtcSecondPgComponent;
  let fixture: ComponentFixture<DtcSecondPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtcSecondPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DtcSecondPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
