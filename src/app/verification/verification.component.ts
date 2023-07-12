import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Business {
  value: string;
  viewValue: string;
}

interface Firm {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
  
})
export class VerificationComponent {
  onlineStore:boolean = true
  ownerIdentity:boolean = false
  businessProof:boolean = false
  bankDetails:boolean = false

  progressbar: number = 0

  storeName!:any;
  businessName: string = '';
  storeAddress: string = '';
  storeID: string = '';

  aadhaarNumber: string = '';

  areStoreDetailsInputsValid: boolean = false;
  isAadhaarNumberValid: boolean = false;
  
  panName!: string;
  panNumber!: string;
  panUpload!: string;
  frontFile!: File;
  backFile!: File;

  gstNumber!: string;
  companyPanNumber!: string;
  gstFile!: any;
  companyPan!: any;
  hallmarkFile!: any;
  partnershipFile!: any;
  coiFile!: any;
  moaFile!: any;
  llpFile!: any;

  
  formValues: any = {};

  business: Business[] = [
    {value: '1', viewValue: 'Wholesale'},
    {value: '2', viewValue: 'Retail'},
    {value: '3', viewValue: 'Manufacturing'},
  ];
  firm: Firm[] = [
    {value: '1', viewValue: 'Proprietorship'},
    {value: '2', viewValue: 'Partnership'},
    {value: '3', viewValue: 'Private Limited'},
    {value: '4', viewValue: 'Limited Liability Partnership'},
  ];
  constructor(public modalService: NgbModal,)
  {

  }
  verify(content:any){
    this.modalService.open(content,{centered:true})
  }
  onOtpChange(value:any){
    console.log(value)
  }
  onSelectChange() {
    this.formValues = {};
  }
  selectedValue: string=this.firm[0].value;

  changeHandle(value:any){
    this.selectedValue=value.target.value
  }

  isFormValid(): boolean {
    console.log(this.gstFile)
    if (this.selectedValue === 'Partnership') {
      return (
        this.gstNumber && 
        this.companyPanNumber &&
        this.gstFile && 
        this.companyPan && 
        this.hallmarkFile && 
        this.partnershipFile
      )
    } else if (this.selectedValue === 'Proprietorship'){
      return (
        this.gstNumber && 
        this.companyPanNumber &&
        this.gstFile && 
        this.companyPan && 
        this.hallmarkFile
      )
    } else if(this.selectedValue === 'Private Limited'){
      return (
        this.gstNumber && 
        this.companyPanNumber &&
        this.gstFile && 
        this.companyPan && 
        this.hallmarkFile &&
        this.coiFile &&
        this.moaFile
      )
    }
    else if(this.selectedValue === 'Limited Liability Partnership'){
      return (
        this.gstNumber && 
        this.companyPanNumber &&
        this.gstFile && 
        this.companyPan && 
        this.hallmarkFile &&
        this.coiFile &&
        this.llpFile
      )
    }
    else
    return false
  }



  onFileSelected(event: any, inputId: string) {
    const file = event.target.files[0];
    if (inputId === 'front') {
      this.frontFile = file;
    } else if (inputId === 'back') {
      this.backFile = file;
    }else if (inputId === 'pan') {
      this.panUpload = file;
    }else if (inputId === 'gst') {
      this.gstFile = file;
    }else if (inputId === 'companyPan') {
      this.companyPan = file;
    }else if (inputId === 'hallmark') {
      this.hallmarkFile = file;
    }else if (inputId === 'partnership') {
      this.partnershipFile = file;
    }else if (inputId === 'coi') {
      this.coiFile = file;
    }else if (inputId === 'moa') {
      this.moaFile = file;
    }else if (inputId === 'llp') {
      this.llpFile = file;
    }
  }

  svgColor = 'url(#pattern0)';

  
  
  checkInputValues(value:any) {
    console.log(value.target.value)
    this.areStoreDetailsInputsValid = this.storeName !== "" && this.storeID !== "" && this.businessName !== "" && this.storeAddress !== "";
    this.isAadhaarNumberValid = value.target.value.length === 12;  }
  
  tab1click(content:any){
    this.onlineStore=true;
    this.ownerIdentity = false;
    this.businessProof = false;
    this.bankDetails = false;
  }
  tab2click(){
    this.onlineStore=false;
    this.ownerIdentity = true;
    this.businessProof = false;
    this.bankDetails = false;

    this.progressbar += 25;
    this.svgColor = 'red'; // Update the color value to the desired color

  }
  tab3click(){
    this.onlineStore=false;
    this.ownerIdentity = false;
    this.businessProof = true;
    this.bankDetails = false;

    this.progressbar += 25;

  }
  tab4click(){
    

    this.onlineStore=false;
    this.ownerIdentity = false;
    this.businessProof = false;
    this.bankDetails = true;

    this.progressbar += 25;

  }


  
}
