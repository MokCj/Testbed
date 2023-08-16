import {Component, Inject} from "@angular/core";
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";

@Component({
  selector: 'customized-snackbar',
  templateUrl: './customized-snackbar.component.html',
  styles: [

  ]
})
export class CustomizedSnackbarComponent {

  mContent: string

  constructor(@Inject (MAT_SNACK_BAR_DATA) public content: string) {
    this.mContent = content
  }

}
