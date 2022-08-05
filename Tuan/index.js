if (typeof(localStorage) !== "undefined") {
    console.info("Trình duyệt của bạn có hỗ trợ Local Storage");
} else {
    console.info("Trình duyệt của bạn không hỗ trợ Local Storage");
}

if (typeof(sessionStorage) !== "undefined") {
    console.info("Trình duyệt của bạn có hỗ trợ Session Storage");
} else {
    console.info("Trình duyệt của bạn không hỗ trợ Session Storage");
}




localStorage.setItem('users', 'Phước');

localStorage.setItem('users', 'Hà');

localStorage.removeItem('users', 'Phước');

localStorage.clear('users');




setTimeout(a, 1000);

function a() {
    document.getElementById("1").innerHTML = "How could I be so blind for all this time?"
}

setTimeout(b, 2000);

function b() {
    document.getElementById("2").innerHTML = "Now that I've realized, it's plain to see"
}

setTimeout(c, 3000);

function c() {
    document.getElementById("3").innerHTML = "Always it's you who gives me just the words"
}

setTimeout(d, 4000);

function d() {
    document.getElementById("4").innerHTML = "I need to hear, you give me reason to live"
}

setTimeout(e, 5000);

function e() {
    document.getElementById("5").innerHTML = "So long, goodbye"
}