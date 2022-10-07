import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatInputModule, CommonModule, MatIconModule, DragDropModule, FormsModule, MatButtonModule],
  providers: [],
  declarations: [DialogComponent],
  exports: [DialogComponent, DragDropModule],
})
export class DialogModule {}
