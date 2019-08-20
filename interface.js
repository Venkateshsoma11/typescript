"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmazonPay = /** @class */ (function () {
    function AmazonPay() {
    }
    AmazonPay.prototype.pay = function (from, to, amount) {
        console.log("paying " + amount + " from " + from + " to " + to + " using amazon pay");
    };
    return AmazonPay;
}());
exports.AmazonPay = AmazonPay;
var GooglePay = /** @class */ (function () {
    function GooglePay() {
    }
    GooglePay.prototype.pay = function (from, to, amount) {
        console.log("paying " + amount + " from " + from + " to " + to + " using Google pay");
    };
    return GooglePay;
}());
exports.GooglePay = GooglePay;
var PaytmPay = /** @class */ (function () {
    function PaytmPay() {
    }
    PaytmPay.prototype.pay = function (from, to, amount) {
        console.log("paying " + amount + " from " + from + " to " + to + " using Paytm pay");
    };
    return PaytmPay;
}());
