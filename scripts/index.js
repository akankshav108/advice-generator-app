async function getData() {
    await fetch("https://api.adviceslip.com/advice", {
      method: "get",
      chache: "default",
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("id").innerHTML = data.slip.id;
        document.getElementById("advice-text").innerHTML = data.slip.advice;
      })
      .catch((err) => console.log("error : " + err));
  }
  getData();

  const getAdviceBtn = document.getElementById("get-advice-btn");

  getAdviceBtn.addEventListener("click", () => {
    getData();
  });