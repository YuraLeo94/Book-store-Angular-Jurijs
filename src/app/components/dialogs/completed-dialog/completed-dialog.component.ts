import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-completed-dialog',
  templateUrl: './completed-dialog.component.html',
  styleUrls: ['./completed-dialog.component.less']
})
export class CompletedDialogComponent {

  constructor(public dialogRef: MatDialogRef<CompletedDialogComponent>) { }

  public onHomePage(): void {
    this.dialogRef.close();
  }

}
