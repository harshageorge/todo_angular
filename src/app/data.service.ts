import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }



  addtodo(order: any, title: any) {
    const data = {
      order: order,
      title: title
    }

    return this.http.post("http://localhost:9000/addtodo", data)
  }



  deletetodo(order: any) {

    return this.http.delete("http://localhost:9000/deletetodo/" + order)
  }



  getTodos() {
    return this.http.get("http://localhost:9000/gettodos/")

  }



  updatetodo(order: any, title: any) {

    const data = {
      order: order,
      title: title
    }
    return this.http.patch("http://localhost:9000/edittodo", data)
  }
}

