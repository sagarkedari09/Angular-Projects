import { UpdateEvent } from './../update-event';
import { Component, Input, OnInit } from '@angular/core';
import { budgetItem } from '../../../shared/New folder/budget-item-model';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  BudgetItem:budgetItem[]=new Array<budgetItem>();
  
  totalBudget:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem:budgetItem){
    this.BudgetItem.push(newItem);
    this.totalBudget+=newItem.amount;
  }

  deleteItem(item:budgetItem){
    let index=this.BudgetItem.indexOf(item);
    this.BudgetItem.splice(index,1);
    this.totalBudget-=item.amount;
  }

  updateItem(updateEvent:UpdateEvent){
    this.BudgetItem[this.BudgetItem.indexOf(updateEvent.old)]=updateEvent.new;
    this.totalBudget-=updateEvent.old.amount;//will lessen old value
    this.totalBudget+=updateEvent.new.amount;//will increase new value
  }
}
