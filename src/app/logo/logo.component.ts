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
     //this.deviceInfo=this.deviceService.getDeviceInfo();
     //const isMobile =this.deviceService.isMobile();
    //  const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
     //console.log(this.deviceInfo);
     
    // if(isMobile) return true;
     //else if(isTablet) return ('ye to tablet hai');
      if(isDesktopDevice) return true;
     
   }

  ngOnInit() {
  this.epicFunction()
  this.iosFunction();
  }

  iosFunction(){
    if(navigator.vendor != null && navigator.vendor.match(/Apple Computer, Inc./) && 
    navigator.userAgent.match(/iPhone/i) ) 

   {
      
       return true;

   }
   else return false;
  }

}
