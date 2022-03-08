export let dTime = new Date();
let dd = dTime.getDate();
let mm = dTime.getMonth() + 1;
let yyyy = dTime.getFullYear();
let hh = dTime.getHours();
let min = dTime.getMinutes();
let sec = dTime.getSeconds();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;
if (hh < 10) hh = "0" + hh;
if (min < 10) min = "0" + min;
if (sec < 10) sec = "0" + sec;

dTime = dd + "/" + mm + "/" + yyyy + " " + hh + ":" + min + ":" + sec;
