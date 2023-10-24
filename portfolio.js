function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "zebihaider123@gmail.com",
        Password: "Itachi4122@",
        To: "zebitiger456@gmail.com",
        From: document.querySelector('#email').value,
        Subject: "New Message From portfolio",
        Body: "Name: " + document.querySelector('#name').value + "<br> Email:" + document.querySelector('#email').value + "<br> Phone-No:" + document.querySelector('#ContactNo').value + "<br> Message:" + document.querySelector('#message').value
    }).then(
        message => alert("Message sent Successfully..")
    );
}