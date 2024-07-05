const step1 = document.querySelector(".container-1");
const step2 = document.querySelector(".container-2");
const step3 = document.querySelector(".container-3");

const emailadd = document.getElementById("email-address");
const verifyemail = document.getElementById("verify-email");
const inputs = document.querySelectorAll(".otp-grp input");
const emailsubmit = document.querySelector(".email-submit-btn");
const emailverifybtn = document.querySelector(".email-verify-btn");

window.addEventListener("load", () => {
    emailjs.init("service_t8neigc")
    step2.style.display = "none";
    step3.style.display = "none";
});

emailsubmit.addEventListener("click", () => {
    const serviceID = "service_t8neigc";
    const templateID = "template_udpq8b5";
    let templateParameter={
        from_name: "",
        OTP: "",
        massage:"",
        reply_to:emailadd.value,
    }

    emailjs.send(serviceID, templateID, templateParameter)
        .then((res, err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
});