function validate() {

    let email = document.getElementById("email").value;

    if (email == "") {
        document.getElementById("msg").innerHTML =
        "Enter email";
    }
    else {
        document.getElementById("msg").innerHTML =
        "Submitted Successfully";
    }
}