import {MatSnackBar} from "@angular/material/snack-bar";
import {Component} from "@angular/core";
import {CustomizedSnackbarComponent} from "./customized-snackbar.component";

@Component({
    selector: 'multiline-snackbar',
    templateUrl: './multiline-snackbar.component.html',
    styleUrls: ['./multiline-snackbar.component.scss']
})
export class MultiLineComponent {
    constructor(private snackBar: MatSnackBar) { }
    ngOnInit() {
    }

    openSnackBar() {
      this.snackBar.openFromComponent(CustomizedSnackbarComponent, {
        data: 'Message\nMessage 2',
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 50000,
        panelClass: ['multiline-snackbar']
      })
    }
}
