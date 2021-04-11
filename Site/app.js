
function focusInputN1() {
    document.getElementById("Phone").classList.remove("l1");
    document.getElementById("Email").classList.remove("l1");
    document.getElementById("Subject").classList.remove("l2");
    document.getElementById("Message").classList.remove("l2");
    document.getElementById("Name").classList.add("l1");
}
function focusInputN2() {
    document.getElementById("Phone").classList.remove("l1");
    document.getElementById("Name").classList.remove("l1");
    document.getElementById("Subject").classList.remove("l2");
    document.getElementById("Message").classList.remove("l2");
    document.getElementById("Email").classList.add("l1");
}
function focusInputN3() {
    document.getElementById("Name").classList.remove("l1");
    document.getElementById("Email").classList.remove("l1");
    document.getElementById("Subject").classList.remove("l2");
    document.getElementById("Message").classList.remove("l2");
    document.getElementById("Phone").classList.add("l1");
}
function focusInputN4() {
    document.getElementById("Name").classList.remove("l1");
    document.getElementById("Email").classList.remove("l1");
    document.getElementById("Phone").classList.remove("l1");
    document.getElementById("Message").classList.remove("l2");
    document.getElementById("Subject").classList.add("l2");
}
function focusInputN5() {
    document.getElementById("Name").classList.remove("l1");
    document.getElementById("Email").classList.remove("l1");
    document.getElementById("Phone").classList.remove("l1");
    document.getElementById("Subject").classList.remove("l2");
    document.getElementById("Message").classList.add("l2");
}

function time() {
    var pics = ["images/john-barkiple-l090uFWoPaI-unsplash.jpg", "images/markus-spiske-kK7uPfb2YWU-unsplash.jpg", "images/christopher-gower-m_HRfLhgABo-unsplash.jpg"];
    var logos = ["logo1", "logo2", "logo3", "logo4", "logo5"];
    var i = 0;
    function coverChange() {
        if ( i == 1) {
            document.getElementById("" + logos[0] + "").style.backgroundImage = "linear-gradient(coral, white)";
            document.getElementById("" + logos[1] + "").style.backgroundImage = "linear-gradient(coral, black)";
        }
        else{
            document.getElementById("" + logos[0] + "").style.background = "transparent";
            document.getElementById("" + logos[1] + "").style.background = "transparent";
        }
        document.getElementById("logo0").style.transform = "translateY(0px)";
        document.getElementById("" + logos[0] + "").style.transform = "translateX(100px)";
        document.getElementById("" + logos[1] + "").style.transform = "translateX(100px)";
        document.getElementById("" + logos[2] + "").style.transform = "translateY(0px)";
        document.getElementById("" + logos[3] + "").style.transform = "translateY(120px)";
        document.getElementById("" + logos[4] + "").style.transform = "translateX(100px)";
        document.getElementById("logo2-text").style.color = "white";
        document.getElementById("logo5-text").style.color = "lightskyblue";

        document.getElementById("cover").style.backgroundImage = "url("+pics[i]+")";
        document.getElementById("cover").style.backgroundPosition = "center";
        i = ++i;
        if (i == pics.length) {
            document.getElementById("" + logos[0] + "").style.transform = "translateX(0px)";
            document.getElementById("" + logos[1] + "").style.transform = "translate(165px , -40px)";
            document.getElementById("logo2-text").style.color = "black";
            document.getElementById("" + logos[4] + "").style.transform = "translateY(-40px)";
            document.getElementById("logo5-text").style.color = "white";
            document.getElementById("logo0").style.transform = "translateY(100px)";
            document.getElementById("" + logos[2] + "").style.transform = "translateY(120px)";
            document.getElementById("" + logos[3] + "").style.transform = "translateY(0px)";
            i = 0;
        }
    }
    setInterval(coverChange, 3000);
}
function brandsHover() {
    var k = 0 ;
    function bh() {
        document.getElementById("aling").style.background = "transparent";
        document.getElementById("snajder").style.background = "transparent";
        document.getElementById("eti").style.background = "transparent";
        document.getElementById("tem").style.background = "transparent";
        if(k==0) {
            document.getElementById("aling").style.backgroundImage = "linear-gradient(coral, white)";
        }
        else if(k==1) {
            document.getElementById("snajder").style.backgroundImage = "linear-gradient(coral, white)";
        }
        else if(k == 2) {
            document.getElementById("tem").style.backgroundImage = "linear-gradient(coral, white)";
        }
        else if(k == 3) {
            document.getElementById("eti").style.backgroundImage = "linear-gradient(coral, white)";
        }
        k=++k;
        if (k==4) {
            k=0;
        }
    }
    setInterval(bh, 1000);
}


