import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mcs-filters',
  templateUrl: './mcs-filters.component.html',
  styleUrls: ['./mcs-filters.component.scss']
})
export class McsFiltersComponent implements OnInit {

  config = config;
  filterForm: FormGroup;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      mcSort: new FormControl([])
    });

    const initialMcSortValue = config.mcSortOptions[config.mcSortOptionsDefault].value;
    this.filterForm.get('mcSort').setValue(initialMcSortValue);
    this.onSelectMcSort({value: initialMcSortValue});
  }

  onSelectMcSort(event) {
    const mcSortValue = event.value;
    this.router.navigate(['/mcs/ch'], { queryParams: { mcSortValue } });
  }
}
