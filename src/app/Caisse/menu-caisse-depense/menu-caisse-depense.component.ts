import { Component } from '@angular/core';
import { EncryptionService } from 'src/app/SharedPages/EcrypteService/EncryptionService';

@Component({
  selector: 'app-menu-caisse-depense',
  templateUrl: './menu-caisse-depense.component.html',
  styleUrls: ['./menu-caisse-depense.component.css', '.../../../src/assets/css/MenuCard.css']
})
export class MenuCaisseDepenseComponent  {
  encryptedValue: string = '';
  constructor(private encryptionService: EncryptionService) {

  }
  NbreFactureFrsNonApprouver !: number;
  warningMessageFactFrs: any;
  HaveFactureFrsNonApprouver: boolean = false;
  GetFactureFrsNonApprouve() {
  

  }


  HaveFactureDiversNonApprouver: boolean = false;
  // GetFactureFrsNonApprouve() {
  //   this.depenseService.GetReglementFactureFrounisseurByEtatApprouvedLazy(1).subscribe((data: any) => {
  //     if (data.length > 0) {
  //       this.HaveFactureDiversNonApprouver = false;
  //     } else {
  //       this.HaveFactureDiversNonApprouver = true;
  //     }
  //   })
  // }


  HaveFacturePresNonApprouver: boolean = false;
  // GetFactureFrsNonApprouve() {
  //   this.depenseService.GetReglementFactureFrounisseurByEtatApprouvedLazy(1).subscribe((data: any) => {
  //     if (data.length < 0) {
  //       this.HaveFactureDiversNonApprouver = false;
  //     } else {
  //       this.HaveFactureDiversNonApprouver = true;
  //     }
  //   })
  // }

  nbreRegFactureFrsNonApprouver!: number;
  warningMessageRegFactFrs: any;
  HaveRegFactureFrsNonApprouver: boolean = false;
  GetRegFactureFrsNonApprouve() {
   
  }


  HaveRegFacturePresNonApprouver: boolean = false;
  // GetRegFacturePresNonApprouve() {
  //   this.depenseService.GetReglementFactureFrounisseurByEtatApprouvedLazy(1).subscribe((data: any) => {
  //     if (data.length < 0) {
  //       this.HaveRegFactureFrsNonApprouver = false;
  //     } else {
  //       this.HaveRegFactureFrsNonApprouver = true;
  //     }
  //   })
  // }



}