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
  servername :string = ""
  servercreated = false
  username :string = ""
  servers = ['template' ,"template2"]
  


  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)

  }
  ngOnInit(): void {
      
  }
  onCreateServer(){
    this.serverCreationStatus = "server is created"
    this.servercreated = true
    this.servers.push(this.servername)
  }

  onupdateserver(event:Event){
    this.servername = (<HTMLInputElement>event.target).value
    

  }

  resetbtn(){
    this.username = ""
  }
 

}
