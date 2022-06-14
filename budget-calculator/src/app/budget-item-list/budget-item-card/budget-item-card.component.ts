import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { budgetItem } from 'shared/New folder/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item!:budgetItem;
  @Output() xButtonClick:EventEmitter<void>=new EventEmitter<void>();
  @Output() cardClick:EventEmitter<void>=new EventEmitter<void>();

  constructor() {
 
   }

   onXButtonClick(){
    this.xButtonClick.emit();
   }

  ngOnInit(): void {
  }

  onCardClick(){
    this.cardClick.emit();
  }

}
