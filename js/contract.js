const form = document.getElementById("contactForm");
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
      "#",
      config
    )
      .then((response) => response.text())
      .then((result) => {
        if (result === "success") {
          console.log("success");
          location.reload();
        }
      })
      .catch((error) => console.log("error", error));
}