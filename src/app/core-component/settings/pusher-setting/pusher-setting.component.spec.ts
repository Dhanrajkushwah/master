import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PusherSettingComponent } from './pusher-setting.component';

describe('PusherSettingComponent', () => {
  let component: PusherSettingComponent;
  let fixture: ComponentFixture<PusherSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PusherSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PusherSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
