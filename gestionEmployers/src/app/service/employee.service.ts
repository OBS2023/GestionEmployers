import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeData = new BehaviorSubject<any>(null);
  employeeData$ = this.employeeData.asObservable();

  setEmployeeData(data: any) {
    this.employeeData.next(data);
  }

  getEmployeeData(): Observable<any> {
    return this.employeeData$;
  }
}