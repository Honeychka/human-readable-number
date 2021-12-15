module.exports = function toReadable(number) {
    let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   
    if (number === 0){return 'zero'};
    number = number.toString();
    let n = number.split('');
    let str = '';
    
    for (let i = 0; i < number.length; i++) {
        if ((number.length - i) % 3 == 2) {
            if (n[i] == '1') {
                str += tn[(n[i + 1])] + ' ';
                i++;
            } else if (n[i] != '0') {
                str += tw[n[i] - 2] + ' ';
            }
        } else if (n[i] != '0') { 
            str += dg[n[i]] + ' ';
            if ((number.length - i) % 3 == 0) {str += 'hundred '};
        }
    }
    return str.trim(); 
}
