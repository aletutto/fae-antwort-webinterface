"use strict";

window.onload = function() {
    var url = new URL(location.href);
    var nachrichtId = url.searchParams.get("nachricht");

    document.getElementById("ja").onclick = function () {
        sendAntwort(nachrichtId, "JA")
        location.href = "ja.html";
    };

    document.getElementById("nein").onclick = function () {
        sendAntwort(nachrichtId, "NEIN")
        location.href = "nein.html";
    };
}

var sendAntwort = function (nachrichtId, typ) {
    var xhr = new XMLHttpRequest();
    var post_url = 'http://localhost:8081/team3/level-2/nachricht/' + nachrichtId + '/antwort';
    xhr.open("POST", post_url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        typ: typ
    }));
}