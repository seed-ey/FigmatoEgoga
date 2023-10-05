export interface DealTermModalData {
    dealType: string;
    commonReference: string;
    counterParty: string;
    direction: string;
    tradeDate: string;
    startDate: string;
    quantity: number;
    nominal: string;
    amount: string;
    cleanPrice: number;
    dirtyPrice: string;
    currentYield: string;
    price: string;
    consideration: string,
    tradingBook: string;
    investmentType: string;
    processAction: string;
    id?:number;
    boughtAtDiscPrem: string;
    discountPremium: string;
    interestBoughtSold: string;
    interestBoughtSoldAdj: string;
    interestAccrued: string;
    interestAccruedAdj: string;
    discPremAmortized: number;
    discPremUnamortized: string;
    dailyInterestAmount: string;
    dailyAmortizationAmount: number;

    bondIssuer: string;
    maturityDate: string;
    tenor: string;
    dayCountBasis: string;
    couponRate: string;
    lastCouponDate: string;
    nextCouponDate: number;
    nextCouponAmount: string;
    daysInCurrentAccrual: string;
    
    dealStatus: string;
    counterPartyReference: string;
    dealingoMethod: string;
    deliveryType: string;
    broker: string;
    brokerCommission: string;
    brokerReference: string;
    portfolio: string;
    dealNote: string;
    confirmationRequired: string;
    dealer: string;
  }
  