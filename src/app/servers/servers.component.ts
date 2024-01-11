import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "server is not Cretead"


  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)

  }
  ngOnInit(): void {
      
  }
  onCreateServer(){
    this.serverCreationStatus = "server is created"
  }

}
