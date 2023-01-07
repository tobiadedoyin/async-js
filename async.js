const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        //console.log(request.responseText);
      } else if (request.readyState === 4) {
        reject("unavailable at the moment");
        //console.log("couldnot load the data");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};
getTodos("todojson/oau.json")
  .then((data) => {
    console.log("1 promised reolved:", data);
    return getTodos("todojson/fedepe.json");
  })
  .then((data) => {
    console.log("2 promise resolved: ", data);
    return getTodos("todojson/decastack.json");
  })
  .then((data) => {
    console.log("3 promise resolved: ", data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
