function isW(element){
    return element.result === "W";
    
}

function superbowlWin(objArray){
    let obj = objArray.find(o => o.result === "W");
    //console.log(obj);
    if (obj === undefined) return undefined;
    else return obj.year;
}
