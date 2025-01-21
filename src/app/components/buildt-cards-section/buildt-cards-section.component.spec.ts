import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildtCardsSectionComponent } from './buildt-cards-section.component';

describe('BuildtCardsSectionComponent', () => {
  let component: BuildtCardsSectionComponent;
  let fixture: ComponentFixture<BuildtCardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildtCardsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildtCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
