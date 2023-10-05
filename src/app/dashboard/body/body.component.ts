import { Component, OnInit, TemplateRef,} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DealTermModalData } from 'src/app/deal-terms/modal-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  isDropdownVisible = false;
  bsModalRef!: BsModalRef;
  activeButton: string | null = null;
  modalDataArray: DealTermModalData[] = [];

  
  bondShow = {
    listItem1:true,
    listItem2:false,
    listItem3:false,
    listItem4:false
   }
   modalData: DealTermModalData = {
    dealType: '',
    commonReference: '',
    counterParty: '',
    direction: '',
    tradeDate: '',
    startDate: '',
    quantity: 0,
    nominal: '',
    amount: '',
    cleanPrice: 0,
    dirtyPrice: '',
    currentYield: '',
    price: '',
    consideration: '',
    tradingBook: '',
    investmentType: '',
    processAction: '',

    boughtAtDiscPrem: '',
    discountPremium: '',
    interestBoughtSold: '',
    interestBoughtSoldAdj: '',
    interestAccrued: '',
    interestAccruedAdj: '',
    discPremAmortized: 0,
    discPremUnamortized: '',
    dailyInterestAmount: '',
    dailyAmortizationAmount: 0,

    bondIssuer: '',
    maturityDate: '',
    tenor: '',
    dayCountBasis: '',
    couponRate: '',
    lastCouponDate: '',
    nextCouponDate: 0,
    nextCouponAmount: '',
    daysInCurrentAccrual: '',

    dealStatus: '',
    counterPartyReference: '',
    dealingoMethod: '',
    deliveryType: '',
    broker: '',
    brokerCommission: '',
    brokerReference: '',
    portfolio: '',
    dealNote: '',
    confirmationRequired: '',
    dealer: '',
  };
  editedUser: any;


   displayDealResult() {

    this.bondShow.listItem1 = true

    this.bondShow.listItem2 = false

    this.bondShow.listItem3 = false

    this.bondShow.listItem4 = false

  }

  displayImpliedResult() {

    this.bondShow.listItem1 = false

    this.bondShow.listItem2 = true

    this.bondShow.listItem3 = false

    this.bondShow.listItem4 = false

  }

  displaySecurityResult() {

    this.bondShow.listItem1 = false

    this.bondShow.listItem2 = false

    this.bondShow.listItem3 = true

    this.bondShow.listItem4 = false


  }

  displayAuxiliaryResult() {

    this.bondShow.listItem1 = false

    this.bondShow.listItem2 = false

    this.bondShow.listItem3 = false

    this.bondShow.listItem4 = true


  }
  constructor(private modalService: BsModalService, private router: Router,private route: ActivatedRoute,) {}

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
    console.log(this.modalDataArray);
  }

  closeModal() {
    this.bsModalRef.hide();
  }

toggleDropdown(type: string):void {
    if (type === 'menu' || type === 'section') {
      this.isDropdownVisible = !this.isDropdownVisible;
    }
  }
   setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }
  
 
  ngOnInit() {
    this.isDropdownVisible = true;
    this.route.queryParams.subscribe(params => {
     
      if (params['editedUser']) {
       this.editedUser = JSON.parse(params['editedUser']) as DealTermModalData;
       console.log("---------",this.editedUser)
      // this.modalForm = this.formBuilder.group({
      // modelData:[this.editedUser.modelData]
      }
});
  }

  onSubmit(action: string) {
    if (action === 'Submit') {
      console.log('Form data submitted:', this.modalData);
      this.modalDataArray.push({ ...this.modalData });
      this.bsModalRef.hide();
    } else if (action === 'Cancel') {
      this.bsModalRef.hide();
    }
  }
 
  dealTerms: boolean = true;
  impliedTerms: boolean = false;
  securityDetails: boolean = false;
  ancilliaryService: boolean = false
  setDataForButton(buttonId: string) {
    if (buttonId === 'button1') {
      this.activeButton = buttonId;
      this.dealTerms = true;
      this.impliedTerms = false;
      this.securityDetails = false;
    } else if (buttonId === 'button2') {
      this.activeButton = buttonId;
      this.impliedTerms = true;
      this.dealTerms = false;
      this.securityDetails = false;
    } else if (buttonId === 'button3') {
      this.activeButton = buttonId;
      this.securityDetails = true;
      this.impliedTerms = false;
      this.dealTerms = false;
    } else if (buttonId === 'button4') {
      this.activeButton = buttonId;
      this.ancilliaryService =true;
      this.securityDetails = false;
      this.impliedTerms = false;
      this.dealTerms = false;
  }
}

}
