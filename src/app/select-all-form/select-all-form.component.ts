import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { ItemCheckList } from '../item-check-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectedValueComponent } from '../selected-value/selected-value.component';

@Component({
  selector: 'app-select-all-form',
  imports: [CommonModule, FormsModule, SelectedValueComponent],
  templateUrl: './select-all-form.component.html',
  styleUrl: './select-all-form.component.scss'
})
export class SelectAllFormComponent {
  itemList: ItemCheckList[] = [];

  constructor(private fm: FormService) {
  }

  ngOnInit() {
    this.itemList = this.fm.checkItemList;
  }

  onCheckAllChange() {
    if (this.isAllChecked()) {
      this.itemList.forEach((item)=> item.checked = !item.checked);
    }
    else {
      this.itemList.forEach((item)=> item.checked = true);
    }
  }

  onClickClearAll() {
    this.itemList.forEach((item)=> item.checked = false);
  }

  isAllChecked() {
    return (
      this.itemList.length === this.itemList.filter((item) => item.checked).length
    );
  }
}
