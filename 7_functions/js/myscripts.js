try {
    function homePage() {
        document.getElementById('go').innerHTML = "welcome to the Home Page"
    }

    function pageOne() {
        document.getElementById('go').innerHTML = " welcome to the Page 1 ."
    }

    function pageTwo() {
        document.getElementById('go').innerHTML = " welcome to the Page 2";
    }

} catch (error) {
    console.log(error);

}