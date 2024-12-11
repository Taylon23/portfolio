window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topo").style.display = "block";
        } else {
            document.getElementById("topo").style.display = "none";
        }
    }