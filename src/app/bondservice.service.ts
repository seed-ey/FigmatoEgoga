import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { DealTermModalData } from './deal-terms/modal-data';


@Injectable({
  providedIn: 'root'
})
export class BondserviceService {
  isEditing = false;
  modalDataArray: DealTermModalData[] = [];
  selectedUser: DealTermModalData | null = null;

  private apiUrl= 'http://localhost:3000/modalData'
  constructor(
    private http: HttpClient,
  ) { }

  
updateData(data: any) {
  return this.http.post<any>(`${this.apiUrl}`,data);
}

getModalData(){
  return this.http.get<any>(`${this.apiUrl}`)
}

saveEdit(id: number, updateData: any) {
  // this.isEditing = true;
  return this.http.put<any>(`${this.apiUrl}/${id}`, updateData);

}
deleteUser(id: number) {
  return this.http.delete<any>(`${this.apiUrl}/${id}`)
}
listarray = [{ "name": "ravi", "mark": "75" }]
  GetData() {
    return this.listarray;
  }
  SaveData(input: any) {
    this.listarray.push(input);
  }

  GetEmployee(){
   let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWludXNlciIsInJvbGUiOiJhZG1pbiIsIm5iZiI6MTY2MTgzOTg1NiwiZXhwIjoxNjYxODQxMDU2LCJpYXQiOjE2NjE4Mzk4NTZ9.UH-ANZN90QYmi8mUfnySLbfdCfMuSBnsKycAMqsgUPg'
    let head_obj=new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.get("https://localhost:44308/Employee",{headers:head_obj});
  }
  
}
