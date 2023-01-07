const getTodos = async () => {
  const response = await fetch("todojson/oau.json");
  const data = await response.json;

  if (response.status !== 200) {
    throw new Error("kolewory");
  }

  return data;
};

getTodos()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err.message));

// fetch("./todojson/oau.json")
//   .then((response) => {
//     // console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
