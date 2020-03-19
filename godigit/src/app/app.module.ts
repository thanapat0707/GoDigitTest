import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    NzDividerModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzTableModule,
    NgZorroAntdModule
} from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './page/find/find.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgPipesModule } from 'ngx-pipes';
import { MainComponent } from './page/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData( en );
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppService } from './app.service';
import { InsertModalComponent } from './page/insert-modal/insert-modal.component';
import { CompleteComponent } from './modal/complete/complete.component';

@NgModule( {
    declarations: [
        AppComponent,
        routingComponent,
        InsertModalComponent,
        CompleteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SidebarModule,
        HttpClientModule,
        NzDividerModule,
        NzLayoutModule,
        NzIconModule,
        NzMenuModule,
        BrowserAnimationsModule,
        NzTableModule,
        FilterPipeModule,
        NgPipesModule,
        NgbModule,
        NgZorroAntdModule,
        AppRoutingModule,
    ],
    providers: [
        AppService,
        CustomerService,
        MainComponent,
        { provide: NZ_I18N, useValue: en_US } ],
    bootstrap: [ AppComponent ],
    entryComponents: [CompleteComponent]
} )

export class AppModule {
}
