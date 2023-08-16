import { Component, Input } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-parent-folder',
  templateUrl: './parent-folder.component.html',
})
export class ParentFolderComponent {
  // @ts-ignore
  @Input() parentFolder: Folder;

}
