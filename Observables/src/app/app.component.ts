import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
   activated = false;
   private userSubscription : Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userSubscription = this.userService.activatedEmitter.subscribe(didActivate =>{
      this.activated = didActivate;
    })
  }
  ngOnDestroy(){
   this.userSubscription.unsubscribe();
  }
}
