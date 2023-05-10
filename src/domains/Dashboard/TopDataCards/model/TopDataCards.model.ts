export interface TopDataCardsBackendForm {
    name: string;
    investment: number;
    order: number;
    profit: number;
}

export interface OrderObject {
    name: string;
    order: number;
}

export interface TopDataCardsFrontendValues {
    orderArray: OrderObject[];
    orderTotal: number;
    earningTotal: number;
    incomeTotal: number;
}
