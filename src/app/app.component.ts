

import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { Event, Router, NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import { IdleTimer } from "./admin/core/service/idletime.service";
import { TokenCookieService } from "./admin/core/service/token-storage-cookies.service";
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from "@angular/material/snack-bar";
import { Subscription } from "rxjs";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [IdleTimer], // Add the service as a provider
})
export class AppComponent implements OnInit, OnDestroy {

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }
  
  currentUrl: string;
  horizontalPosition: MatSnackBarHorizontalPosition = "end";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  private routerEventsSubscription: Subscription; // Add this line
  private currentUser: any;

  constructor(
    private tokenCookieService: TokenCookieService,
    private snackBar: MatSnackBar,
    private idleTimer: IdleTimer, // Inject the service in the constructor

    private router: Router,
    private route: ActivatedRoute
  ) {
    this.snackBar.dismiss();
    this.routerEventsSubscription = this.router.events.subscribe(
      (routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.currentUrl = routerEvent.url.substring(
            routerEvent.url.lastIndexOf("/") + 1
          );
        }

        if (routerEvent instanceof NavigationEnd) {
          this.currentUser = this.tokenCookieService.getUser();
          
          // if (this.currentUser !== null && this.currentUser !== undefined) {
          //   this.idleTimer.start({
          //     timeout: 60 * 5, // Set the timeout to 3 minutes
          //     onTimeout: () => {
          //       // Perform the action to be executed on timeout
          //       this.logout();
          //     },
          //   });
          // }
          
        }

        window.scrollTo(0, 0);
      }
    );
  }

  ngOnInit(): void {
    
  }

  logout = () => {
    this.tokenCookieService.signOut().subscribe(
      (res) => {
        console.log("res: ", res);
        if (res) {
          this.router.navigate(["/authentication/signin"]);
          localStorage.clear();
          this.router.navigate([this.route.snapshot.url.join('/')]);
          this.snackBar.open(
            "Your session has ended: please sign in to resume!",
            "X",
            {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 60000,
              
              panelClass: ["snackbar-danger", "login-snackbar"],
            }
          );

          console.log("Session timed out!");
        }
      },
      (err) => {
        console.log(err);
        
      }
    );
  };

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }
}
