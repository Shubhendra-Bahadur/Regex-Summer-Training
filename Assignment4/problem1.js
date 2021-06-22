function hourFormatter(time) {
    let AMPM = time.slice(-2);
    let timeFmt = time.slice(0, -2).split(":");
    if (AMPM === "AM" && timeFmt[0] === "12") {
        timeFmt[0] = "00";
    } else if (AMPM === "PM") {
        // everything with PM can just be mod'd and added with 12 - the max will be 23
        timeFmt[0] = (timeFmt[0] % 12) + 12
    }  
    document.getElementsByClassName('outputDate').value = timeFmt.join(":");
    console.log(document.getElementsByClassName('outputDate').value);
    console.log(timeFmt.join(":"));
}
var time=prompt('Enter Time')
hourFormatter(time);