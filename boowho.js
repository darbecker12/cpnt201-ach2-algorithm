function booWho(bool) {
  if(typeof(bool)==="boolean"){
    console.log("true");
    return true
  }
  console.log("false");
  return false;
}

booWho(false);