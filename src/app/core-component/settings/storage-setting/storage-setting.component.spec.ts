import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageSettingComponent } from './storage-setting.component';

describe('StorageSettingComponent', () => {
  let component: StorageSettingComponent;
  let fixture: ComponentFixture<StorageSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
