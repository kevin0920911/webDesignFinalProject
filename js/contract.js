const form = document.getElementById("contactForm");
const button = document.getElementById("submitButton");
button.addEventListener("click",submit);
function submit(){
    let formdata = new FormData();
    formdata.append("time", new Date());
    formdata.append("name", form.elements.name.value);
    formdata.append("email", form.elements.email.value);
    formdata.append("phone", form.elements.phone.value);
    formdata.append("message", form.elements.message.value);

    const config = { method: "POST", body: formdata, redirect: "follow" };
    //call api
    fetch(
      "https://script.google.com/macros/s/AKfycbzrYHciGKMc-QDVnVLl_dutUvrWPaFFkBUHqdRl2ZIkGE5OsuZqHMl0WO0qqp0dPWEM/exec",
      config
    )
      .then((response) => {
        response.text();
      })
      .then((result) => {
        if (result === "success") {
          window.alert("Success!");
          location.reload();
        }
      })
      .catch((error) => {
        window.alert("Error!");
        location.reload();
      });
}