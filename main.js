async function runit() {
  const response = await axios.get("http://127.0.0.1:3000/a");
  console.log(response.data);
  arr = response.data;
  var lis = document.getElementById("ul1");
  for (var i = 0; i < response.data.length; i++) {
    var list = document.createElement("li");
    list.innerHTML = response.data[i];
    lis.appendChild(list);
  }
}
runit();
function funct() {
  var te = document.getElementById("textarea1");
  axios.post("http://127.0.0.1:3000/b", { value1: te.value });
  te.value = "";
}
