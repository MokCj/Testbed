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
  selector: 'file-manager',
  templateUrl: './file-manager-component.html',
  styleUrls: ['./file-manager-component.css']
})
export class FileManagerComponent {
  mCategoryList: IconButtonPair[] = []

  mCurrentDocument: ApplicationDocument[] = []

  isHovered = false
  currentCategoryIndex = 0
  isSubCategoryHovered = false

  constructor() {
    for(let x = 0; x < 4; x++) {
      let documentScannings: DocumentScanning[] = []
      for(let y = 0; y < 4; y++) {
        documentScannings.push({
          id: y,
          name: `Sub-folder ${x}.${y}`
        })
      }
      this.mCategoryList.push({
        icon: 'folder-open',
        text: `Category ${x}`,
        categoryId: x,
        documentScannings: documentScannings
      })
    }
    for(let x = 0; x < 4; x++) {
      this.mCurrentDocument.push({
        fileName: `Document ${x}`
      })
    }
  }

  currentDraggedItem: any;

  onDragStart(event: DragEvent, doc: any) {
    // Store the dragged data
    this.currentDraggedItem = doc;

    // Set the drag effect
    // @ts-ignore
    event.dataTransfer.effectAllowed = "move";
  }

  onDragEnd(event: DragEvent) {
    // Clear the dragged data
    this.currentDraggedItem = null;
  }

  onDrop(event: DragEvent, category: string, subCategory: string) {
    // The drop action was performed
    console.log(`Moved ${this.currentDraggedItem.fileName} to category: ${category}, subCategory: ${subCategory}`);

    // Prevent default to allow drop
    event.preventDefault();
  }

  onDragOver(event: DragEvent) {
    // Prevent default to allow drop
    event.preventDefault();
  }

  onCategoryMouseEnter(index: number) {
    if(this.isHovered && this.currentCategoryIndex === index) {
      this.isHovered = false
      this.currentCategoryIndex = -1
    } else {
      this.isHovered = true
      this.currentCategoryIndex = index
      this.isSubCategoryHovered = true
    }
  }


}
