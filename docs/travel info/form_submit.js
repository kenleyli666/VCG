emailjs.init("vDlWKfh8uv4NgG5s6");

function sendEmail(name, email, phone, comment) {
    console.log("Sending email with:", name, email, phone, comment); // 調試輸出
    emailjs.send("DailyTravel123", "template_dailytravel", {
        name: name,
        email: email,
        phone: phone,
        comment: comment
    })
    .then(
        function(result) {
            console.log("Email sent successfully:", result); // 調試輸出
            alert("郵件已發送！");
        },
        function(error) {
            console.log("Failed to send email:", error); // 調試輸出
            alert("郵件發送失敗，請重試！");
        }
    );
}

var form = document.getElementById("myForm");
var nameInput = document.querySelector("input[name='name']");
var emailInput = document.querySelector("input[name='email']");
var phoneInput = document.querySelector("input[name='phone']");
var commentInput = document.querySelector("textarea[name='comment']");
var sendButton = document.querySelector("input[name='send']");

sendButton.addEventListener("click", function(event) {
    event.preventDefault();
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var comment = commentInput.value;
    console.log(name, email, phone, comment); // 調試輸出
    sendEmail(name, email, phone, comment);
});