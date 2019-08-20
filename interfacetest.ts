import {Payment,GooglePay} from "./interface"

const payment:Payment = new GooglePay();
payment.pay("Vishnu","mahesh",45000)