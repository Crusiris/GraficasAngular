import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Graficos
import { ChartsModule } from 'ng2-charts';

//componentes
import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { BarComponent } from './components/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
