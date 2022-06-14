import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { budgetItem } from 'shared/New folder/budget-item-model';
@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item:budgetItem){ }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem:budgetItem){
    this.dialogRef.close(updatedItem);
  }
}
