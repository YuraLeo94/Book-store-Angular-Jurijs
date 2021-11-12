import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TruncatePipe } from './shared/pipe/truncate.pipe';
import { ShoppingDialogComponent } from './components/dialogs/shopping-dialog/shopping-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CompletedDialogComponent } from './components/dialogs/completed-dialog/completed-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductListComponent,
    TruncatePipe,
    ShoppingDialogComponent,
    CompletedDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
