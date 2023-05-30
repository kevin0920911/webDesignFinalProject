const form = document.getElementById("contactForm");
const button = document.getElementById("submitButton");
button.addEventListener("click",submit);
function submit(){  
    let formdata = new FormData();
    formdata.append("time", new Date());
    formdata.append("name", form.elements.name.value);
    formdata.append("email", form.elements.email.value);
    formdata.append("phone", form.elements.phone.value.toString());
    formdata.append("message", form.elements.message.value);

    const config = { method: "POST", body: formdata, redirect: "follow" };
    //call api
    fetch(
      "https://script.google.com/macros/s/AKfycbxtDnfbk6h-azKNJHCj8ycOYtie65k0KxYn5NdwFBU57u0RAhlmc1Xmf8fYVw6Fv2KP/exec",
      config
    )
      .then((result) => {
        if (result.ok) {
          window.alert("Success!");
          location.reload();
        }
      })
      .catch((error) => {
        window.alert("Error! Please try again");
        location.reload();
      });
}