import {ResultsViewModel} from '../Models/results-view-model';
import {ColumnsViewmodel} from '../Models/columns-viewmodel';


export const RESULTVIEWMODEL: ResultsViewModel[] = [
    { id: 1, country: 'Austria', orderFreightSum: 7362 },
    { id: 2, country: 'Brazil', orderFreightSum: 9384 },
    { id: 3, country: 'Germany', orderFreightSum: 7485 },
    { id: 4, country: 'Ireland', orderFreightSum: 83939 },
    { id: 5, country: 'USA', orderFreightSum: 9334 }
  
  ];

  export const COLUMSVIEWMODEL: ColumnsViewmodel[]=[
    {id: 1, expression: 'Customer Coumtry', title: 'Customer Coumtry'},
    {id: 2, expression: 'Sum of Order Freight', title: 'Order Freight Sum'},

  ];