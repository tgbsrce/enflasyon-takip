import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [MatInputModule, CommonModule, MatIconModule, DragDropModule],
  providers: [],
  declarations: [DialogComponent],
  exports: [DialogComponent, DragDropModule],
})
export class DialogModule {}
