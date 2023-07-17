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
  onlineStore: boolean = false;
  ownerIdentity: boolean = true;
  businessProof: boolean = false;
  bankDetails: boolean = false;

  progressbar: number = 0;

  storeName!: any;
  businessName: string = '';
  storeAddress: string = '';
  storeID: string = '';

  aadhaarNumber: string = '';

  areStoreDetailsInputsValid: boolean = false;
  isAadhaarNumberValid: boolean = false;

  panName!: string;
  panNumber!: string;
  panUpload: File | null = null;
  frontFile: File | null = null;
  backFile: File | null = null;

  gstNumber!: string;
  companyPanNumber!: string;
  gstFile: File | null = null;
  companyPan: File | null = null;
  hallmarkFile: any | null = null;
  partnershipFile: any | null = null;
  coiFile: any | null = null;
  moaFile: any | null = null;
  llpFile: any | null = null;

  

  accountNumber!: string;
  // companyPanNumber!: string;
  chequeFile: any | null = null;

  formValues: any = {};

  business: Business[] = [
    { value: '1', viewValue: 'Wholesale' },
    { value: '2', viewValue: 'Retail' },
    { value: '3', viewValue: 'Manufacturing' },
  ];
  firm: Firm[] = [
    { value: '1', viewValue: 'Proprietorship' },
    { value: '2', viewValue: 'Partnership' },
    { value: '3', viewValue: 'Private Limited' },
    { value: '4', viewValue: 'Limited Liability Partnership' },
  ];
  constructor(public modalService: NgbModal) {}
  verify(content: any) {
    this.modalService.open(content, { centered: true });
  }
  onOtpChange(value: any) {
    console.log(value);
  }
  onSelectChange() {
    this.formValues = {};
  }
  selectedValue: string = this.firm[0].value;

  changeHandle(value: any) {
    this.selectedValue = value.target.value;
  }

  isFormValid(): boolean {
    console.log(this.gstFile);
    if (this.selectedValue === 'Partnership') {
      return (
        this.gstNumber &&
        this.companyPanNumber &&
        this.gstFile &&
        this.companyPan &&
        this.hallmarkFile &&
        this.partnershipFile
      );
    } else if (this.selectedValue === 'Proprietorship') {
      return (
        this.gstNumber &&
        this.companyPanNumber &&
        this.gstFile &&
        this.companyPan &&
        this.hallmarkFile
      );
    } else if (this.selectedValue === 'Private Limited') {
      return (
        this.gstNumber &&
        this.companyPanNumber &&
        this.gstFile &&
        this.companyPan &&
        this.hallmarkFile &&
        this.coiFile &&
        this.moaFile
      );
    } else if (this.selectedValue === 'Limited Liability Partnership') {
      return (
        this.gstNumber &&
        this.companyPanNumber &&
        this.gstFile &&
        this.companyPan &&
        this.hallmarkFile &&
        this.coiFile &&
        this.llpFile
      );
    } else return false;
  }

  selectedFile: File | null = null;

  onSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('Selected file:', file);
    }
  }
  removeFile(inputId: string) {
    console.log(inputId)
    if (inputId === 'front') {
      this.frontFile = null;
      console.log("removing front file");
    } else if (inputId === 'back') {
      this.backFile = null;
    } else if (inputId === 'pan') {
      this.panUpload = null;
    } else if (inputId === 'gst') {
      this.gstFile = null;
    } else if (inputId === 'companyPan') {
      this.companyPan = null;
    } else if (inputId === 'hallmark') {
      this.hallmarkFile = null;
    } else if (inputId === 'partnership') {
      this.partnershipFile = null;
    } else if (inputId === 'coi') {
      this.coiFile = null;
    } else if (inputId === 'moa') {
      this.moaFile = null;
    } else if (inputId === 'llp') {
      this.llpFile = null;
    } else if (inputId === 'cheque') {
      this.chequeFile = null;
    }
  }

  onFileSelected(event: any, inputId: string) {
    console.log("here",inputId,event)
    if (inputId === 'front') {
      console.log(event.target.files);
      const file: File = event.target.files[0];

      if (file) {
        this.frontFile = file;
        console.log(this.frontFile);
      }
    } else if (inputId === 'back') {
      const file: File = event.target.files[0];
      if (file) {
        this.backFile = file;
      }
    } else if (inputId === 'pan') {
      const file: File = event.target.files[0];
      if (file) {
        this.panUpload = file;
      }
    } else if (inputId === 'gst') {
      const file: File = event.target.files[0];
      if (file) {
        this.gstFile = file;
      }
    } else if (inputId === 'companyPan') {
      const file: File = event.target.files[0];
      if (file) {
        this.companyPan = file;
      }
    } else if (inputId === 'hallmark') {
      const file: File = event.target.files[0];
      if (file) {
        this.hallmarkFile = file;
      }
    } else if (inputId === 'partnership') {
      const file: File = event.target.files[0];
      if (file) {
        this.partnershipFile = file;
      }
    } else if (inputId === 'coi') {
      const file: File = event.target.files[0];
      if (file) {
        this.coiFile = file;
      }
    } else if (inputId === 'moa') {
      const file: File = event.target.files[0];
      if (file) {
        this.moaFile = file;
      }
    } else if (inputId === 'llp') {
      const file: File = event.target.files[0];
      if (file) {
        this.llpFile = file;
      }
    } else if (inputId === 'cheque') {
      const file: File = event.target.files[0];
      if (file) {
        this.chequeFile = file;
      }
    }
  }

  svgColor = 'url(#pattern0)';

  checkInputValues(value: any) {
    console.log(value.target.value);
    this.areStoreDetailsInputsValid =
      this.storeName !== '' &&
      this.storeID !== '' &&
      this.businessName !== '' &&
      this.storeAddress !== '';
    this.isAadhaarNumberValid = value.target.value.length === 12;
  }

  tab1click(content: any) {
    this.onlineStore = true;
    this.ownerIdentity = false;
    this.businessProof = false;
    this.bankDetails = false;
  }
  tab2click() {
    this.onlineStore = false;
    this.ownerIdentity = true;
    this.businessProof = false;
    this.bankDetails = false;

    this.progressbar += 25;
    this.svgColor = 'red'; // Update the color value to the desired color
  }
  tab3click() {
    this.onlineStore = false;
    this.ownerIdentity = false;
    this.businessProof = true;
    this.bankDetails = false;

    this.progressbar += 25;
  }
  tab4click() {
    this.onlineStore = false;
    this.ownerIdentity = false;
    this.businessProof = false;
    this.bankDetails = true;

    this.progressbar += 25;
  }
}
