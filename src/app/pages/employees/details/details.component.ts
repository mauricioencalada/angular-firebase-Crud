import { Employee } from './../../../shared/models/employee.interface';
import { Router,NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  navigationExtras: NavigationExtras={
    state:{
      value:null
    }
  }

  employee:Employee;
  constructor(private router:Router,private  employeesSvc:EmployeesService) {
    const navigation =this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state.value;
   }

  ngOnInit(): void {
    if (typeof this.employee  === 'undefined'){
    this.router.navigate(['list']);
    }
  }
  
  onGoToEdit():void{
    this.navigationExtras.state.value = this.employee;
    this.router.navigate(['edit'],this.navigationExtras);
  }

  async onGoToDelete(): Promise <void>{
    try { 
      await this.employeesSvc.onDeleteEmployees(this.employee?.id);
    alert('delete')
    this.onGoBackToList();
    } catch (error) {
      console.log(error);
    }
  }
  onGoBackToList():void{
    this.router.navigate(['list']);
  }

}
