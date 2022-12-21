function validateAddress() {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].value == "") {
            alert('Please fill up the form');
            return false;
        }
        else {
            var letters = /^[A-Za-z]+$/;
            if(elements[i].value.match(letters)) {
                alert('Thank you for your purchase!');
                return true;
              }
            else {
                alert('Please fil the form correctly');
                return false;
              }
        }
    }
}