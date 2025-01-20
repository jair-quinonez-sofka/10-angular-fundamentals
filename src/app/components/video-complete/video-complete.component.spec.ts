import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCompleteComponent } from './video-complete.component';

describe('VideoCompleteComponent', () => {
  let component: VideoCompleteComponent;
  let fixture: ComponentFixture<VideoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
