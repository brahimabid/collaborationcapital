import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderExempleRealisationComponent } from './slider-exemple-realisation.component';

describe('SliderExempleRealisationComponent', () => {
  let component: SliderExempleRealisationComponent;
  let fixture: ComponentFixture<SliderExempleRealisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderExempleRealisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderExempleRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
