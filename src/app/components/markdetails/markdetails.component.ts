import { Component, OnInit } from '@angular/core';
import { MarksheetService } from '../../services/marksheet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-markdetails',
  templateUrl: './markdetails.component.html',
  styleUrls: ['./markdetails.component.scss']
})
export class MarkdetailsComponent implements OnInit {
  public mark: Observable<any>;
  public marksId: string
 
  constructor(private route: ActivatedRoute,private marksheetservice: MarksheetService) { }

  ngOnInit() {
    this.marksId = this.route.snapshot.paramMap.get('id')
    this.mark = this.marksheetservice.getMarksDetails(this.marksId).valueChanges()
  }

}
