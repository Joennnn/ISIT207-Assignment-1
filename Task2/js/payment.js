function validatePayment() {
    var elements = document.getElementsByTagName("input");

    for (var i = 0; i < elements.length; i++) {
        if(elements[i].value == "") {
            alert('Please fill up the form');
            return false;
        }
        else {
            alert('Thank you for your purchase!');
            return true;
        }
    }
} 
