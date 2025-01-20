import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialVideoComponent } from './partial-video.component';

describe('PartialVideoComponent', () => {
  let component: PartialVideoComponent;
  let fixture: ComponentFixture<PartialVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartialVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
