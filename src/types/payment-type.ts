export type TPaymentOnline = {
    amount: number | undefined;
    bankCode: string;
    language: string;
};

export type TPaymentData = {
    orderId: string;
    data: TPaymentOnline;
};
