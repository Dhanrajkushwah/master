import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBrandSettingComponent } from './shared-brand-setting.component';

describe('SharedBrandSettingComponent', () => {
  let component: SharedBrandSettingComponent;
  let fixture: ComponentFixture<SharedBrandSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedBrandSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedBrandSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
