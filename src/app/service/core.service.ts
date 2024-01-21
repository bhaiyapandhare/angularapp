import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor( private _snackBar: MatSnackBar) { }
  openSnackBar( msg: string, action:string) {
    this._snackBar.open(msg, action ,{
      duration: 2000,
      verticalPosition:`top`,
    });
  }
}
