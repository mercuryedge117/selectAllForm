import { Component, DoCheck } from '@angular/core';
import { FormService } from '../form.service';
import { ItemCheckList } from '../item-check-list';

@Component({
  selector: 'app-selected-value',
  imports: [],
  templateUrl: './selected-value.component.html',
  styleUrl: './selected-value.component.scss'
})
export class SelectedValueComponent implements DoCheck{
  itemList: ItemCheckList[] = [];
  filteredItemList: ItemCheckList[] = [];

  constructor(private fs: FormService) {

  }

  ngDoCheck() {
    this.filteredItemList = this.itemList.filter((item) => item.checked);
  }

  ngOnInit() {
    this.itemList = this.fs.checkItemList;
  }
}
