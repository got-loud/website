import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTypeSelectorComponent } from './portfolio-type-selector.component';

describe('PortfolioTypeSelectorComponent', () => {
  let component: PortfolioTypeSelectorComponent;
  let fixture: ComponentFixture<PortfolioTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTypeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
