import { Component, OnInit } from '@angular/core';
import { McService } from 'src/app/services/mc.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-mc-editor-form',
  templateUrl: './mc-editor-form.component.html',
  styleUrls: ['./mc-editor-form.component.scss']
})
export class McEditorFormComponent implements OnInit {

  paramEdited_id: string;
  paramParent_id: string;
  editMode: boolean;

  constructor(
    private mcService: McService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.route.queryParamMap
    // .pipe(
    //   mergeMap(
    //     queryParams => {

      this.route.url.pipe(
        mergeMap(
          url => {
            switch (url[1].path) {
            case 'new':
              this.editMode = false;
              break;
            case 'edit':
              this.editMode = true;
              break;
            }
            return this.route.paramMap;
          }
        ),
        mergeMap(
          params => {
            if (this.editMode) {
              this.paramEdited_id = params.get('_id');
              return this.mcService.getMcById(this.paramEdited_id);
            } else {
              this.paramParent_id = params.get('parent_id');
            }
            console.log('paramMap', params);
            return of(null);
          }
        )
      )
      .subscribe(
        result => console.log('result', result);
      );
  }

}
