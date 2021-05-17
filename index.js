const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

let commentField = document.querySelector("#commentField");
let nameField = document.querySelector("#nameField");
let emailField = document.querySelector("#emailField");
let phoneField = document.querySelector("#phoneField");

function buyPrimaryItem() {
    var text = "Tôi muốn mua sản phẩm MTH2-Max với số lượng: ";
    commentField.value += text;
    commentField.focus();
}

function buySecondaryItem() {
    var text = "Tôi muốn mua sản phẩm MTH2 với số lượng: ";
    commentField.value += text;
    commentField.focus();
}

document
    .getElementById("orderForm")
    .addEventListener("submit", function (event) {
        let params = {
            name: nameField.value,
            email: emailField.value,
            phone: phoneField.value,
            message: commentField.value,
        };
        event.preventDefault();
        emailjs.send("gmailduong", "contact_form", params).then(
            function () {
                window.location.replace("./thankyou.html");
            },
            function (error) {
                console.log("FAILED...", error);
            }
        );
    });
