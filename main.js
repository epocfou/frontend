async function runit() {
  const any_maxi = document.getElementById("maxi");
  const response = await axios.get("http://127.0.0.1:3000/e");
  any_maxi.innerHTML = response.data;
}
