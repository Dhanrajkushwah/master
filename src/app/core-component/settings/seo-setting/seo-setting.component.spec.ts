import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEOSettingComponent } from './seo-setting.component';

describe('SEOSettingComponent', () => {
  let component: SEOSettingComponent;
  let fixture: ComponentFixture<SEOSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEOSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SEOSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
