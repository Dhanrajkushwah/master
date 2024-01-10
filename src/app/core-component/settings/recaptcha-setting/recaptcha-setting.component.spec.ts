import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchaSettingComponent } from './recaptcha-setting.component';

describe('RecaptchaSettingComponent', () => {
  let component: RecaptchaSettingComponent;
  let fixture: ComponentFixture<RecaptchaSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecaptchaSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecaptchaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
