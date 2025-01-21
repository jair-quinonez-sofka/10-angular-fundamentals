import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltCardComponent } from './built-card.component';

describe('BuiltCardComponent', () => {
  let component: BuiltCardComponent;
  let fixture: ComponentFixture<BuiltCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
