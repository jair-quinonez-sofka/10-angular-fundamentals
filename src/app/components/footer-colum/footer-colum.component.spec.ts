import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColumComponent } from './footer-colum.component';

describe('FooterColumComponent', () => {
  let component: FooterColumComponent;
  let fixture: ComponentFixture<FooterColumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterColumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
