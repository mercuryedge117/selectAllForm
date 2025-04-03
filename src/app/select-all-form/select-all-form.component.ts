import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { ItemCheckList } from '../item-check-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-all-form',
  imports: [CommonModule, FormsModule],
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
    this.itemList.forEach((item)=> item.checked = !item.checked);
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
