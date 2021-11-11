import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-dialog',
  templateUrl: './shopping-dialog.component.html',
  styleUrls: ['./shopping-dialog.component.less']
})
export class ShoppingDialogComponent {

  constructor(public dialogRef: MatDialogRef<ShoppingDialogComponent>) { }

  public onClose():void {
    this.dialogRef.close();
  }

  public onGoToCart():void {
    // TO DO https://trello.com/c/5GUVUqGA/18-implement-functionality-for-shopping-dialog
    console.log("onGoToCart");
  }

  public onContinueShop():void {
    // TO DO https://trello.com/c/5GUVUqGA/18-implement-functionality-for-shopping-dialog
    console.log("onContinueShop");
  }

}
