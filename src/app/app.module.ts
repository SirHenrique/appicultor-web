import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProdutorComponent } from './components/produtor/produtor.component';
import { ApiarioComponent } from './components/apiario/apiario.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { ColmeiaComponent } from './components/colmeia/colmeia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProdutorComponent,
    ApiarioComponent,
    RelatorioComponent,
    ColmeiaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    TabMenuModule,
    ProgressSpinnerModule,
    InputTextModule,
    DialogModule,
    TableModule,
    InputNumberModule,
    InputMaskModule,
    InputTextareaModule,
    CardModule,
    PanelModule,
    MenuModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    InputSwitchModule,
    RippleModule,
    ToastModule,
    DividerModule,
    AccordionModule,
    RadioButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
