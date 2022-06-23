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

document.getElementById('quizes').style.display = "none";
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

// handle the first list items
function selectedItem(item) {
    let id = "";
    switch (item) {
        case "item1":
            document.getElementById('quizes').style.display = "none";
            document.getElementById('videos').style.display = "block";
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
            document.getElementById("item1").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 1) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item2":
            document.getElementById('quizes').style.display = "none";
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
            document.getElementById("item2").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 2) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item3":
            document.getElementById('quizes').style.display = "none";
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
            document.getElementById("item3").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 3) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item4":
            document.getElementById('videos').style.display = "none";
            document.getElementById('quizes').style.display = "block";
            document.getElementById("quizes").src = "quiz1.html";
            document.getElementById("quizes").height = "60%";
            document.getElementById("item4").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 4) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item5":
            document.getElementById('quizes').style.display = "none";
            document.getElementById('videos').style.display = "block";
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
            document.getElementById("item5").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 5) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item6":
            document.getElementById("item6").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 6) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item7":
            document.getElementById('quizes').style.display = "none";
            document.getElementById('videos').style.display = "block";
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
            document.getElementById("item7").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 7) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item8":
            document.getElementById('quizes').style.display = "none";
            document.getElementById('videos').style.display = "block";
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
            document.getElementById("item8").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 8) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item9":
            document.getElementById("item9").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 9) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item10":
            document.getElementById("item10").classList.add("active");
            document.getElementById('videos').style.display = "none";
            document.getElementById('quizes').style.display = "block";
            document.getElementById("quizes").src = "map.html";
            document.getElementById("quizes").height = "70%";
            for (let i = 1; i <= 20; i++) {
                if (i == 10) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item11":
            document.getElementById("item11").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 11) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item12":
            document.getElementById('quizes').style.display = "none";
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
            document.getElementById("item12").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 12) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item13":
            document.getElementById('quizes').style.display = "none";
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
            document.getElementById("item13").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 13) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item14":
            document.getElementById("item14").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 14) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item15":
            document.getElementById("item15").classList.add("active");
            document.getElementById('videos').style.display = "none";
            document.getElementById('quizes').style.display = "block";
            document.getElementById("quizes").src = "component.html";
            document.getElementById("quizes").height = "80%";
            for (let i = 1; i <= 20; i++) {
                if (i == 15) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item16":
            document.getElementById("item16").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 16) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item17":
            document.getElementById('quizes').style.display = "none";
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
            document.getElementById("item17").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 17) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item18":
            document.getElementById("item18").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 18) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item19":
            document.getElementById('quizes').style.display = "none";
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
            document.getElementById("item19").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 19) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;

        case "item20":
            document.getElementById('quizes').style.display = "none";
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
            document.getElementById("item20").classList.add("active");
            for (let i = 1; i <= 20; i++) {
                if (i == 20) continue;
                id = "item" + i;
                document.getElementById(id).classList.remove("active");
            }
            break;
    }
}