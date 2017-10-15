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
alreadyCreated = false;

  constructor() {
   }

  ngOnInit() {
  }

  onCreateServer() {
    
    if ( this.servers.indexOf(this.serverName) === -1) {
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
        this.serverCreated = true;
        this.alreadyCreated = false;
        this.serverName = '';
    }
    else
    {
        //TODO ADD logic to show Server exists on UI
        this.alreadyCreated = true;
        this.serverCreated = false;
        this.serverName = "";
        
      
      console.log(this.servers.indexOf(this.serverName)); //TODO REMOVE
      console.log(this.serverName)                        //TODO REMOVE
      console.log(this.servers)                           //TODO REMOVE
    }
  }
  OnUpdateServerName(event:any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  removeServer(server) {
    let currIndex  = this.servers.indexOf(server)
    console.log(server)
    this.servers.splice(currIndex, 1)
    
    
  }
  allowEntry() {
    this.allowNewServer = true;   
  }
}
