import { Component, OnInit } from '@angular/core';
import { MarksheetService } from '../../services/marksheet.service';
import { GetService } from '../../services/get.service';
@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit {

  constructor(private marksheetservice: MarksheetService, private getservice: GetService) { }

  ngOnInit() {
    this.getservice.getmarks();
  }

  onSubmit() {
    if(this.marksheetservice.MarkForm.valid) {
      if(this.marksheetservice.MarkForm.get('id').value == null)
        this.marksheetservice.AddMarks(this.marksheetservice.MarkForm.value)
      else 
        this.marksheetservice.UpdateMarks(this.marksheetservice.MarkForm.value)
        this.marksheetservice.MarkForm.reset()
        this.marksheetservice.initializeFormGroup()
    
    }
  }

  onRemove(id: string) {
    this.marksheetservice.deleteMarks(id)
  }

}
