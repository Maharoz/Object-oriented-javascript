var customerName = "John";
var accountBalance = 20000;
var isValid = true;

var object = null;
var x = 123;
var y=x;
y=465;
var s = "123";

document.write(typeof customerName + "<br/>")
document.write(typeof accountBalance + "<br/>")
document.write(typeof isValid + "<br/>")
document.write((object === null) + "<br/>")
document.write(typeof x + "<br/>")
document.write(y + "<br/>")
document.write(x==s);//true
document.write(x===s);//false