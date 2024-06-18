// 1108. Defanging an IP Address


// Given a valid (IPv4) "address", return a defanged version of that IP address.
// A defanged IP address replaces every "." with "[.]"









/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    let string = ""


    for(let i = 0; i < address.length; i++){

        if(address[i] == "."){
            string += "[" + address[i] + "]"
        }
        else{
            string += address[i]
        }
    }

    return string
};