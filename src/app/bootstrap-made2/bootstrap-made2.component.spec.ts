import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMade2Component } from './bootstrap-made2.component';

describe('BootstrapMade2Component', () => {
  let component: BootstrapMade2Component;
  let fixture: ComponentFixture<BootstrapMade2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapMade2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapMade2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
