import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No Server was created';
serverName = '';
serverCreated = false;
servers = ['TestServer me', 'TestServer 2', ' TestServer 3'];

  constructor() {
   }

  ngOnInit() {
  }

  onCreateServer() {
    
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  OnUpdateServerName(event:any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  removeServer(server: number) {
    this.servers.pop();
  }
  allowEntry() {
    this.allowNewServer = true;   
  }
}
