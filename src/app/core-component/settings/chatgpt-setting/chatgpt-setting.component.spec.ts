import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgptSettingComponent } from './chatgpt-setting.component';

describe('ChatgptSettingComponent', () => {
  let component: ChatgptSettingComponent;
  let fixture: ComponentFixture<ChatgptSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatgptSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatgptSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
