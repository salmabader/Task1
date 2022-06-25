const player1 = new Plyr(document.getElementById('player1'));
player1.source = {
    type: 'video',
    sources: [
        {
            src: 'https://youtu.be/3l4fQoZh2DE',
            provider: 'youtube',
        },
    ],
};

document.getElementById('myIframe').style.display = "none";
// to show the subheadings in the first list
function showOrHideMenu1() {
    let menu = document.getElementById("submenu1");
    let icon = document.getElementById("collectionIcon");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        icon.className = "bi-collection";
    }
    else {
        menu.style.display = "none";
        icon.className = "bi-collection-fill";
    }
}

// to show the subheadings in the second list
function showOrHideMenu2() {
    let menu = document.getElementById("submenu2");
    let icon = document.getElementById("collectionIcon2");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        icon.className = "bi-collection";
    }
    else {
        menu.style.display = "none";
        icon.className = "bi-collection-fill";
    }
}

// handle the lock icon for menu
function sideMenu() {
    let sideMenu = document.getElementById("sideMenu");
    let icon = document.getElementById("lock");
    if (icon.className === "bi bi-unlock-fill") {
        icon.className = "bi bi-lock-fill";
        sideMenu.style.height = "540px";
        sideMenu.style.overflow = "auto";
    }
    else {
        sideMenu.style.overflow = "auto";
        sideMenu.style.height = "auto";
        icon.className = "bi bi-unlock-fill"
    }
    sideMenu.style.overflowX = "hidden";
}

// handle continue button
function goNext() {
    var ele = document.getElementsByClassName('active');
    if (ele[0].id == "20") {
        $('#continueBtn').hide();
    }
    let next = parseInt(ele[0].id) + 1;
    $('#' + next).click();
}

// handle the first list items
function selectedItem(item) {
    switch (item) {
        case "item1":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/3l4fQoZh2DE',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("1").classList.add("active");
            deselecteItems(1);
            break;

        case "item2":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/IS5wMv_ILXE',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("2").classList.add("active");
            deselecteItems(2);
            break;

        case "item3":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/6hloc6xhpa0',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("3").classList.add("active");
            deselecteItems(3);
            break;

        case "item4":
            player1.stop();
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "quiz1.html";
            document.getElementById("myIframe").height = "60%";
            document.getElementById("4").classList.add("active");
            deselecteItems(4);
            break;

        case "item5":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/j0zf-otH3cY',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("5").classList.add("active");
            deselecteItems(5);
            break;

        case "item6":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById("6").classList.add("active");
            document.getElementById('continueBtn').style.display = "block";
            deselecteItems(6);
            break;

        case "item7":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/inC-Q9LGQhE',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("7").classList.add("active");
            deselecteItems(7);
            break;

        case "item8":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/fxgcD7D2amY',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("8").classList.add("active");
            deselecteItems(8);
            break;

        case "item9":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById("9").classList.add("active");
            document.getElementById('continueBtn').style.display = "block";
            deselecteItems(9);
            break;

        case "item10":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            player1.stop();
            document.getElementById("10").classList.add("active");
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "map.html";
            document.getElementById("myIframe").height = "70%";
            deselecteItems(10);
            break;

        case "item11":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById("11").classList.add("active");
            document.getElementById('continueBtn').style.display = "block";
            deselecteItems(11);
            break;

        case "item12":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/6hloc6xhpa0',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("12").classList.add("active");
            deselecteItems(12);
            break;

        case "item13":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById('videos').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/IS5wMv_ILXE',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("13").classList.add("active");
            deselecteItems(13);
            break;

        case "item14":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById("14").classList.add("active");
            document.getElementById('continueBtn').style.display = "block";
            deselecteItems(14);
            break;

        case "item15":
            player1.stop();
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById("15").classList.add("active");
            document.getElementById('videos').style.display = "none";
            document.getElementById('myIframe').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById("myIframe").src = "component.html";
            document.getElementById("myIframe").height = "80%";
            deselecteItems(15);
            break;

        case "item16":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById("16").classList.add("active");
            document.getElementById('continueBtn').style.display = "block";
            deselecteItems(16);
            break;

        case "item17":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('continueBtn').style.display = "block";
            document.getElementById('videos').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/6hloc6xhpa0',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("17").classList.add("active");
            deselecteItems(17);
            break;

        case "item18":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById("18").classList.add("active");
            document.getElementById('continueBtn').style.display = "block";
            deselecteItems(18);
            break;

        case "item19":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('videos').style.display = "block";
            document.getElementById('continueBtn').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/IS5wMv_ILXE',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("19").classList.add("active");
            deselecteItems(19);
            break;

        case "item20":
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('myIframe').style.display = "none";
            document.getElementById('continueBtn').style.display = "none";
            document.getElementById('videos').style.display = "block";
            player1.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/6hloc6xhpa0',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById("20").classList.add("active");
            deselecteItems(20);
            break;
    }
}

function deselecteItems(order) {
    for (let i = 1; i <= 20; i++) {
        if (i == order) continue;
        document.getElementById(i).classList.remove("active");
    }

}