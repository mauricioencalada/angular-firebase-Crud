import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 
  employee$ =this.employeesSvc.employees
  navigationExtras: NavigationExtras={
    state:{
      value:null
    }
  }

    constructor(private router : Router,private  employeesSvc:EmployeesService) { }

  ngOnInit(): void {
  }

  onGoToEdit(item:any):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'],this.navigationExtras);
  }
  
  onGoToSee(item:any):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'],this.navigationExtras);
  }

   async onGoToDelete(empId:string): Promise <void>{
    try { 
      await this.employeesSvc.onDeleteEmployees(empId);
    alert('delete')
    } catch (error) {
      console.log(error);
    }
  }
}
