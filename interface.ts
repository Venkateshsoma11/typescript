export interface Payment{
    pay(from:string,to:string,amount:number):void;
}

export class AmazonPay implements Payment{
    pay(from: string, to: string, amount: number): void {
        console.log(`paying ${amount} from ${from} to ${to} using amazon pay`)
    }
    
}

export class GooglePay{
    pay(from: string, to: string, amount: number): void {
        console.log(`paying ${amount} from ${from} to ${to} using Google pay`)
    }
}
class PaytmPay implements Payment{
        pay(from: string, to: string, amount: number): void {
            console.log(`paying ${amount} from ${from} to ${to} using Paytm pay`)
        }
        
    }

