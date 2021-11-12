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
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCardComponent } from './components/product-card/shopping-card/shopping-card.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductListComponent,
    TruncatePipe,
    ShoppingDialogComponent,
    ShoppingCartComponent,
    ShoppingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
