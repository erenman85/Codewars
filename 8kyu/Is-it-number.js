// ❓Given a string s,
 //write a method (function) that will return true 
 //if its a valid single integer or floating number or false if its not.
 //✅SOLUTION:

 const isDigit = s => /^-?\d+(\.\d+)?$/.test(s);