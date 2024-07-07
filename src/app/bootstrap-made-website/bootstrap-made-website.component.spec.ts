import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMadeWebsiteComponent } from './bootstrap-made-website.component';

describe('BootstrapMadeWebsiteComponent', () => {
  let component: BootstrapMadeWebsiteComponent;
  let fixture: ComponentFixture<BootstrapMadeWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapMadeWebsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapMadeWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
