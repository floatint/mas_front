import { Component, OnInit } from '@angular/core';
import { AnalysesService } from '../../services/analyses/analyses.service';
import { Analysis } from '../../entities/analysis';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderPageComponent implements OnInit {

  public analyses: Analysis[];
  
  constructor(private analysesService: AnalysesService) { }

  ngOnInit() {
    this.analysesService.getAnalyses().subscribe(data => this.analyses = data);
  }

}
