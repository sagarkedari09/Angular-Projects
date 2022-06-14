import { budgetItem } from '../../../shared/New folder/budget-item-model';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item:budgetItem=new budgetItem('',0);
  @Output() formSubmit: EventEmitter<budgetItem>=new EventEmitter<budgetItem>();
  isNewItem!:boolean;
  constructor() { }

  ngOnInit(): void {
    if(this.item){
      this.isNewItem=false;
    }else{
      this.isNewItem=true;
    }
    this.item=new budgetItem('',0);
    
  }

  
  onSubmit(form:NgForm){
    console.log(form);
    this.formSubmit.emit(form.value);
  }
}
