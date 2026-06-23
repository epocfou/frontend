var innercount = 0;

$("#our_button").on("click", (e) => {
  axios.get("http://localhost:3000/g", {}).then((res) => {
    var d = res.data;
    for (var i = 0; i < d.length; i++) {
      var li = document.createElement("li");
      var image = document.createElement("img");
      image.src = d[i];
      li.appendChild(image);
      innercount++;
      $("#innercount").html(innercount);
      $("#ul1").append(li);
    }
  });
});
