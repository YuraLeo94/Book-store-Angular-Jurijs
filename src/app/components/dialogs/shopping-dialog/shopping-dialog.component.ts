import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-dialog',
  templateUrl: './shopping-dialog.component.html',
  styleUrls: ['./shopping-dialog.component.less']
})
export class ShoppingDialogComponent implements OnInit {

  faTimes = faTimes;

  constructor(public dialogRef: MatDialogRef<ShoppingDialogComponent>) { }

  public ngOnInit(): void {
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onGoToCart() {
    // TO DO https://trello.com/c/5GUVUqGA/18-implement-functionality-for-shopping-dialog
    console.log("onGoToCart");
  }

  public onContinueShop() {
    // TO DO https://trello.com/c/5GUVUqGA/18-implement-functionality-for-shopping-dialog
    console.log("onContinueShop");
  }

}
