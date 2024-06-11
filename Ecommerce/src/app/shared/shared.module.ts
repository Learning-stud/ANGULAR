// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    MatSnackBarModule
  ],
  exports: [
    FormsModule,
    MatSnackBarModule
  ]
})
export class SharedModule {}
