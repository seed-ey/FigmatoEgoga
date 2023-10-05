import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
}
