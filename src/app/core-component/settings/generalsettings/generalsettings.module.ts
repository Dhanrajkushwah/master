import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralsettingsRoutingModule } from './generalsettings-routing.module';
import { GeneralsettingsComponent } from './generalsettings.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { BrandSettingComponent } from '../brand-setting/brand-setting.component';
import { SharedBrandSettingComponent } from '../shared-brand-setting/shared-brand-setting.component';
import { EmailSettingComponent } from '../email-setting/email-setting.component';
import { PusherSettingComponent } from '../pusher-setting/pusher-setting.component';
import { PaymentSettingComponent } from '../payment-setting/payment-setting.component';
import { RecaptchaSettingComponent } from '../recaptcha-setting/recaptcha-setting.component';
import { StorageSettingComponent } from '../storage-setting/storage-setting.component';
import { SEOSettingComponent } from '../seo-setting/seo-setting.component';
import { CacheSettingComponent } from '../cache-setting/cache-setting.component';
import { CookieSettingComponent } from '../cookie-setting/cookie-setting.component';
import { ChatgptSettingComponent } from '../chatgpt-setting/chatgpt-setting.component';


@NgModule({
  declarations: [
    GeneralsettingsComponent,
    BrandSettingComponent,
    SharedBrandSettingComponent,
    EmailSettingComponent,
    PusherSettingComponent,
    PaymentSettingComponent,
    RecaptchaSettingComponent,
    StorageSettingComponent,
    SEOSettingComponent,
    CacheSettingComponent,CookieSettingComponent,ChatgptSettingComponent
   

  ],
  imports: [
    CommonModule,
    GeneralsettingsRoutingModule,
    sharedModule
  ]
})
export class GeneralsettingsModule { }
