module.exports = function toReadable (number) {
    number = number.toString();
    number = number.replace([\, ]/g,'');
    if ( number != parseFloat(number)) return 'not a number';
    let x = number.indexOf('.');  
    if (x == -1) 
     x = number.length;
   if ( x > 15)  return 'big';
                             
}
