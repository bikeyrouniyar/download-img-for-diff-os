import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  deviceInfo= null;

  constructor(public deviceService:DeviceDetectorService) {
    //this.epicFunction();
   }
   epicFunction(){ 
     console.log('hello');
     this.deviceInfo=this.deviceService.getDeviceInfo();
     const isMobile =this.deviceService.isMobile();
     const isTablet = this.deviceService.isTablet();
     const isDesktopDevice = this.deviceService.isDesktop();
     if(isMobile) return('ye to mobile hai');
     if(isTablet) return ('ye to tablet hai');
     if(isDesktopDevice) return ('ye to desktop hai'); 
   }

  ngOnInit() {
  this.epicFunction();
  }

}
