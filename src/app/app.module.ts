import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

// App is our top level component
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule.withServerTransition({ appId: 'angular-universal-webpack' }),
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule {

}
