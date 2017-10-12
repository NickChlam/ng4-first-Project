import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { ServerComponent} from './server/server.component'
import { AppComponent } from './app.component';
import { WarningComponent } from './warningalert/warningalert.component';
import { SuccessComponent } from './Success/success.component';
import { ServersComponent } from './servers/servers.component';
import { UsernameComponent } from './username/username.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningComponent,
    SuccessComponent,
    ServersComponent,
    UsernameComponent ,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
