async function apiCall(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function appendArticles(articles, main) {
  //add append logic here
  articles.forEach((el) => {
    let { image, publishedAt, title } = el;
    let div = document.createElement("div");
    let divBox = document.createElement("div");
    divBox.addEventListener("click", () => {
      console.log(el);
      localStorage.setItem("news", JSON.stringify(el));
      window.open("news.html", "_self");
    });
    divBox.setAttribute("class", "card");
    let img = document.createElement("img");
    img.src = image;
    let h2 = document.createElement("h2");
    h2.innerText = title;
    let p = document.createElement("p");
    p.innerText = publishedAt;
    div.append(h2, p);
    divBox.append(img, div);
    main.append(divBox);
  });
}

export { apiCall, appendArticles };
