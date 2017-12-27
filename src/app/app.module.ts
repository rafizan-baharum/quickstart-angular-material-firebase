import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpModule} from '@angular/http';
import {MainLayout} from './main/main.layout';
import {environment} from '../environments/environment';
import {AngularFireDatabase} from 'angularfire2/database';
import {PostService} from '../services/post.service';
import {DashboardPage} from './dashboard/dashboard.page';
import {PostDetailPage} from './dashboard/post-detail.page';
import {VendorService} from '../services/vendor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    PostDetailPage,
    MainLayout,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ], // modules needed to run this module
  providers: [VendorService, PostService, AngularFireDatabase], // additional providers needed for this module
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
