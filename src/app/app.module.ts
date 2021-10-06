import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import HttpClientModule from @anular/common/http in AppModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
