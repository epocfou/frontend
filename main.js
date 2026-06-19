$("#our_button").on("click", (e) => {
  axios
    .get("http://localhost:3000/koof", {
      params: {
        name: "victor",
      },
    })
    .then((res) => {
      $(".random_name").html(res.data);
    });
});
