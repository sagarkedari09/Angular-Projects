import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { budgetItem } from '../../../shared/New folder/budget-item-model';
import { MatDialog } from '@angular/material/dialog';
import { TitleStrategy } from '@angular/router';
import { UpdateEvent } from '../update-event';
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})



export class BudgetItemListComponent implements OnInit {

 

  @Input() budgetItems:budgetItem[]=[];
  @Output() delete:EventEmitter<budgetItem>=new EventEmitter<budgetItem>();
  @Output() update:EventEmitter<UpdateEvent>=new EventEmitter<UpdateEvent>();
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item:budgetItem){
    this.delete.emit(item);
  }

  onCardClicked(item:budgetItem){
    const dialogRef=this.dialog.open(EditItemModalComponent,{
      width:'100rem',
      data:item
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.update.emit({
          old:item,
          new:result
        });
      }
    })
  }
}
  