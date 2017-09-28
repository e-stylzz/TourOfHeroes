import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <md-toolbar color="primary">
            <md-toolbar-row>
                <span>{{title}}</span>
            </md-toolbar-row>
        </md-toolbar>
        <div id="container">
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: [ './app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes'
}
