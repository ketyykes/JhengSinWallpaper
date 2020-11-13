let getHeader = document.getElementById("header");
// fetch('header.html').then(function (response) {
//     if (response.ok) {
//         console.log("hellowrold");
//         return response.text();
//     }
//     throw new Error('Network response was not ok.');
// }).then(function (text) {
//     getHeader.innerHTML = text;
// }).catch(function (error) {
//     console.log('SomethingError ', error.message);
// });
getHeader.innerHTML = `<nav class="navbar navbar-expand-md navbar-dark bg-primary">
<a class="navbar-brand" href="index.html">JhengSinWallpaper</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item" id="btn-pure-img">
            <a class="nav-link" href="manual.html">說明 <span class="sr-only">說明</span></a>
        </li>
        <li class="nav-item" id="btn-pure-img">
            <a class="nav-link" href="knowledge.html">知識家 <span class="sr-only">知識家</span></a>
        </li>
        <li class="nav-item" id="btn-pure-img">
            <a class="nav-link" href="pureImg.html">純圖片版 <span class="sr-only">純圖片版</span></a>
        </li>
        <li class="nav-item" id="btn-text-img">
            <a class="nav-link" href="textImg.html">文字版<span class="sr-only">文字版</span></a>
        </li>
        <li class="nav-item" id="btn-desktop-img">
            <a class="nav-link" href="desktopImg.html">桌布空白版<span class="sr-only">桌面空白版</span></a>
        </li>
        <li class="nav-item" id="btn-desktop-img">
            <a class="nav-link" href="randomWallpaper.html">隨機桌面給你<span class="sr-only">隨機桌面給你</span></a>
        </li>
    </ul>
</div>
</nav>`