import {Component, QueryList, ViewChildren} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";

export interface IconButtonPair {
  icon: string
  text: string
  categoryId: number
  documentScannings: DocumentScanning[]
}

export interface DocumentScanning {
  id: number
  name: string
}

export interface ApplicationDocument {
  fileName: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



}
