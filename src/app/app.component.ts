import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  items = "";
  order = "";
  id = "";
  index_value = "";
  todos: any;



  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.gettodos();
  }


  additems(obj: any) {
    this.dataService.addtodo(this.order, this.title).subscribe(data => {
      if (data) {
        alert("succcessfully added");
        this.gettodos();
      }
      this.order = "";
      this.title = "";
    }, (data) => {
      alert(data.error.message)
    })


  }

  
  delete(order: any) {
    this.dataService.deletetodo(order)
      .subscribe((data: any) => {
        if (data) {
          alert(data.message)
          this.gettodos();
        }

      }, (data: any) => {
        alert(data.error.message)

      })
  }



  passIndex(index: any, id: any, title: any) {
    this.index_value = index;
    if (this.index_value != id) {
      id = this.index_value + 1;
      this.dataService.updatetodo(id, title)
        .subscribe((data: any) => {
          if (data) {
            alert(data.message)

          }

        }, (data: any) => {
          alert(data.error.message)

        })

    }
    else if (this.index_value == id) {
      id = this.index_value + 1;
      this.dataService.updatetodo(id, title)
        .subscribe((data: any) => {
          if (data) {
            alert(data.message)

          }

        }, (data: any) => {
          alert(data.error.message)

        })

    }
  }



  gettodos() {
    this.dataService.getTodos()
      .subscribe((data: any) => {
        this.todos = data;
        console.log(this.todos);

      })
  }


  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex

      );

    }
  }
}
