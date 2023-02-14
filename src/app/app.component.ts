import { Component, destroyPlatform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-crud';

  msg: string = '';

  employees = [
    {'name': 'Tiago', position: 'Manager', email: 'tiago@gmail.com'},
    {'name': 'Juan', position: 'Designer', email: 'juan@gmail.com'},
    {'name': 'Pedro', position: 'Programmer', email: 'pedro@gmail.com'},
  ];

  model:any = {};
  model2:any = {};
  hideUpdate: boolean = true;

  addEmployee(): void{
    this.employees.push(this.model);
    this.msg = 'Added field';
  }
  
  deleteEmployee(i:any): void{
    var answer = confirm('Are you sure?');
    if(answer) {
      this.employees.splice(i, 1);
    }
    this.msg = 'Field removed';
  }
  
  myValue:any;
  editEmployee(i:any): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void{
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
    this.msg = 'Updated field';
  }

  closeAlert(){
    this.msg = '';
  }
}
