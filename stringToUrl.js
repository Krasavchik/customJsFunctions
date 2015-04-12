function stringToUrl(mystring){
    var specialChars = [
        [" |'","-"],
        ["à|á|ä|â","a"],
        ["é|è|ê|ë","e"],
        ["í|ì|ï|î","i"],
        ["ó|ô|ö|ò|õ","o"],
        ["ñ","n"],
        ["ú|ù|ü","u"],
        ["ÿ","y"]
    ];
    mystring = mystring.toLowerCase();

    for(var i = 0, x = specialChars.length; i < x; i++){
        var re = new RegExp(specialChars[i][0],"g");
        mystring = mystring.replace(re,specialChars[i][1]);
    }

    mystring = mystring.replace(/-{2,}/g, "-");

    while(mystring.slice(-1) == "-"){
        mystring = mystring.substring(0, mystring.length - 1);
    }

    return mystring;
}
