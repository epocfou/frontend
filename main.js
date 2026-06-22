$("#our_button").on("click", (e) => {
  axios.get("http://localhost:3000/f", {}).then((res) => {
    var d = res.data;
    for (var i = 0; i < d.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = d[i];
      $("#ul1").append(li);
    }
  });
});
