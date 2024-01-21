import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EmpaddeditComponent } from '../empaddedit/empaddedit.component';
import { EmployeeService } from 'src/app/service/employee.service';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','dob','gender', 'education', 'company','experince','package','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(`MatPaginator`, {static:false}) paginator!: MatPaginator;
  @ViewChild(`MatSort`, {static:false}) sort!: MatSort;

  constructor(private dialog:MatDialog , private _empService:EmployeeService , private _coreService:CoreService) { }

  openAddEdit(){
   const dialogRef= this.dialog.open(EmpaddeditComponent)
   dialogRef.afterClosed().subscribe({
    next:(val)=> {
      if (val) {
        this.getEmp();
      }
    },
   })

  }
  ngOnInit() {
    this.getEmp()
  }

  getEmp(){
    this._empService.getEmployeeList().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
console.log(res);

      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id:number){
    this._empService.deleteEmployee(id).subscribe({
      next:(res)=> { 
        this._coreService.openSnackBar(`Employee deleted`,`done`);
        this.getEmp()
      },
      error: console.log,
    })

  }
  openEditForm(data:any){
    const dialogRef = this.dialog.open(EmpaddeditComponent, {
   data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=> {
        if (val) {
          this.getEmp();
        }
      },
     })

  }
}
