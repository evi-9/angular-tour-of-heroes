import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './hero-dialog.component.html',
  standalone: true,
  imports: [ MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {
 
  constructor(@Inject(MAT_DIALOG_DATA) public hero: Hero) {}
}