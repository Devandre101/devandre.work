import { Component } from '@angular/core';
//import {ResultsViewModel} from './results-view-model';
import {RESULTVIEWMODEL} from './mock-results';
import {COLUMSVIEWMODEL} from './mock-results';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work';

mockResultsData = RESULTVIEWMODEL;
mockColumnsData = COLUMSVIEWMODEL;


  
  //resultViewModel: ResultsViewModel; 


  

}
