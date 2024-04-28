import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdoMalasiaDahboardComponent } from './bdo-malasia-dahboard.component';

describe('BdoMalasiaDahboardComponent', () => {
  let component: BdoMalasiaDahboardComponent;
  let fixture: ComponentFixture<BdoMalasiaDahboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BdoMalasiaDahboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BdoMalasiaDahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
