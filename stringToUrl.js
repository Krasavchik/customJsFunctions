function stringToUrl(mystring){
    var specialChars = [
        ["[ '()\/.&]","-"],
        ["[àáäâã@]","a"],
        ["[éèêë]","e"],
        ["[íìïî]","i"],
        ["[óôöòõ]","o"],
        ["œ","oe"],
        ["[ñ]","n"],
        ["[úùü]","u"],
        ["[ÿ]","y"]
    ];
    mystring = mystring.toLowerCase();

    for(var i = 0, x = specialChars.length; i < x; i++){
        var re = new RegExp(specialChars[i][0],"gi");
        mystring = mystring.replace(re,specialChars[i][1]);
    }

    mystring = mystring.replace(/-{2,}/g, "-");

    while(mystring.slice(-1) == "-"){
        mystring = mystring.substring(0, mystring.length - 1);
    }

    return mystring;
}
