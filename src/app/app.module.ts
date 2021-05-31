import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { WhatsappComponent } from './shared/whatsapp/whatsapp.component';
import { SectionHomeComponent } from './complementoPagina/section-home/section-home.component';
import { SectionArticleComponent } from './complementoPagina/section-article/section-article.component';
import { SectionFooterComponent } from './complementoPagina/section-footer/section-footer.component';
import { SectionCardComponent } from './complementoPagina/section-card/section-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TerminosComponent,
    WhatsappComponent,
    SectionHomeComponent,
    SectionArticleComponent,
    SectionFooterComponent,
    SectionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
