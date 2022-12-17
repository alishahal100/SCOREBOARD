let pointsHome= document.getElementById("home-points");
let pointsGuest= document.getElementById("guest-points")
console.log(pointsGuest);
console.log(pointsHome);
let point = 0;
let pooint =0;
function increment1(){
    pointsHome.textContent = point += 1
}
function increment2(){
    pointsHome.textContent = point += 2
}
function increment3(){
    pointsHome.textContent = point += 3
}
function incrementGuest1(){
    pointsGuest.textContent = pooint += 1
}
function incrementGuest2(){
    pointsGuest.textContent = pooint += 2
}
function incrementGuest3(){
    pointsGuest.textContent = pooint += 3
}