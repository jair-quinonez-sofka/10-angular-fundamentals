import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageSectionComponent } from './card-image-section.component';

describe('CardImageSectionComponent', () => {
  let component: CardImageSectionComponent;
  let fixture: ComponentFixture<CardImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardImageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
