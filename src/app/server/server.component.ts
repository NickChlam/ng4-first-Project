import { Component } from '@angular/core';
import {ServersComponent} from '../servers/servers.component';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]

})

export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = "offline";
    name: ServersComponent;
    server = '';
    
    constructor () {
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
        
    }
    getServiceStatus() {
        
        return this.serverStatus;
        
    }
    getColor() {
        
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}

