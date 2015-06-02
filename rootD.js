function rootD(s){
  s = s.split("/")[2];
  if(s.substring(0,4) == "www."){
    s = s.substr(4);
  }
  return s;
}
