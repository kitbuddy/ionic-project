import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderImgPage } from './slider-img.page';

describe('SliderImgPage', () => {
  let component: SliderImgPage;
  let fixture: ComponentFixture<SliderImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderImgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
