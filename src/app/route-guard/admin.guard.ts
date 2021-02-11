import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthenticationService } from "../service/authentication.service";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate
{
    constructor(private authService: AuthenticationService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree > | Observable<boolean | UrlTree>
    {
        
        if(this.authService.isAdmin)
        {
            return true;
        }

        return this.router.createUrlTree(['/login-admin']);
        
    }
}