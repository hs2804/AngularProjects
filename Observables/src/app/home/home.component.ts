import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscriptionObject: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstSubscriptionObject = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
       const customObservable = Observable.create(observer => {
           let count = 0;
           setInterval(() =>{
             observer.next(count);
            //  if(count == 2) {
            //    observer.complete();
            //  }
             if(count > 3) {
               observer.error(new Error('Error Occured!'));
             }
             count++;
           },1000);
       });
       this.firstSubscriptionObject = customObservable.subscribe(data =>{
         console.log(data);
       },error =>{
         console.log(error.message);
       }, () =>{
         console.log('Completed!');
       })
  }
  ngOnDestroy(){
    this.firstSubscriptionObject.unsubscribe();
    }

}
