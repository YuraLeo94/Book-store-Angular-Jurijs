import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-completed-dialog',
  templateUrl: './completed-dialog.component.html',
  styleUrls: ['./completed-dialog.component.less']
})
export class CompletedDialogComponent {

  constructor(public dialogRef: MatDialogRef<CompletedDialogComponent>) { }

  public onHomePage() {
    //TO DO https://trello.com/c/rx6OlIiP/17-implement-functionality-for-completed-dialog
    console.log('onHomePage');
    this.dialogRef.close();
  }

}
