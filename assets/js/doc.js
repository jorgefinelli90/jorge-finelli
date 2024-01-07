document.addEventListener('DOMContentLoaded', function () {
    var homeLink = document.querySelector('#menu li:nth-child(1) a');
    var aboutLink = document.querySelector('#menu li:nth-child(2) a');
    var infoLink = document.querySelector('#menu li:nth-child(3) a');
    var contactLink = document.querySelector('#menu li:nth-child(4) a');

    homeLink.addEventListener('mouseover', function () {
        showImage('https://www.elburgues.com/media/wysiwyg/lookbookss24-2/1-2.jpg');
    });
    homeLink.addEventListener('mouseout', function () {
        hideImage();
    });

    aboutLink.addEventListener('mouseover', function () {
        showImage('https://www.elburgues.com/media/wysiwyg/lookbookss24-2/2-2.jpg');
    });
    aboutLink.addEventListener('mouseout', function () {
        hideImage();
    });

    infoLink.addEventListener('mouseover', function () {
        showImage('https://www.elburgues.com/media/wysiwyg/lookbookss24-2/3-2.jpg');
    });
    infoLink.addEventListener('mouseout', function () {
        hideImage();
    });

    contactLink.addEventListener('mouseover', function () {
        showImage('https://www.elburgues.com/media/wysiwyg/lookbookss24-2/4-2.jpg');
    });
    contactLink.addEventListener('mouseout', function () {
        hideImage();
    });
});


document.addEventListener("touchstart", function () { }, true);