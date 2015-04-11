function stringToUrl(mystring){
    var specialChars = [
        [" |'","-"],
        ["é|è|ê|ë","e"],
        ["à|á|ä","a"],
        ["í|ì|ï","i"],
        ["ó|ô|ö","o"],
        ["ú|ù|ü","u"],
        ["ñ","n"]
    ];
    for(var i = 0, x = specialChars.length; i < x; i++){
        var re = new RegExp(specialChars[i][0],"gi");
        mystring = mystring.replace(re,specialChars[i][1]);
    }
    while(mystring.slice(-1) == "-"){
        mystring = mystring.substring(0, mystring.length - 1);
    }
    return mystring;
};
