let test = true;
const searchplayers = () => {
  // test = false;
  const val = document.getElementById("input-box").value.trim();
  console.log(val);
  fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${val}`)
    .then((res) => res.json())
    .then((data) => {
      displayPlayer(data.player);
    });
};
const displayPlayer = (players) => {
  const productPage = document.getElementById("player-page");
  players.forEach((player) => {
    const div = document.createElement("div");
    div.classList.add("player-box");
    div.innerHTML = `
    <img class="player-img" src="${player.strThumb}">
    <div class="player-text-box">
      <p class="player-name">Name: ${player.strPlayer}</p>
      <p class="player-country">countey: ${player.strNationality}</p>
      <p class="player-team">club: ${player.strTeam}</p>
      <p class="player-sport">sports: ${player.strSport}</p>
      <p class="player-salary">salary: ${player.strWage}</p>
    </div>
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-primary" onclick="addToCart('${player.strThumb}','${player.strPlayer}','${player.strNationality}','${player.strGender}')">Add to Cart</button>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onclick="SingleProducts('${player.idPlayer}')"
      >
        Details
      </button>
    </div>
  `;
    productPage.appendChild(div);
  });
};

const searchplayers1 = () => {
  // test = false;
  const val = "f";
  console.log(val);
  fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${val}`)
    .then((res) => res.json())
    .then((data) => {
      displayPlayer(data.player);
    });
};
if (test) {
  searchplayers1();
}

const addToCart = (img, name, country, gender) => {
  const totalCount = document.getElementById("count").innerText;
  if (totalCount == 11) {
    alert("Sorry Sir You have Already Pursed 11 player");
  } else {
    let convertCount = parseFloat(totalCount);
    convertCount = convertCount + 1;
    document.getElementById("count").innerText = convertCount;

    if (gender === "Male") {
      const totalCount = document.getElementById("count1").innerText;
      let convertCount = parseFloat(totalCount);
      convertCount = convertCount + 1;
      document.getElementById("count1").innerText = convertCount;
    } else {
      const totalCount = document.getElementById("count2").innerText;
      let convertCount = parseFloat(totalCount);
      convertCount = convertCount + 1;
      document.getElementById("count2").innerText = convertCount;
    }

    const container = document.getElementById("cart-container");
    const div = document.createElement("div");
    div.classList.add("cart-box");
    div.classList.add("player-box");
    div.innerHTML = `
      <img class="player-img" src="${img}">
      <div class="player-text-box">
        <p class="player-name">Name: ${name}</p>
        <p class="player-country">countey: ${country}</p>
      </div>
    `;
    container.appendChild(div);
  }
};
const SingleProducts = (id) => {
  fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      ``;
      singleProduct(data);
      console.log(data);
    });
};

const singleProduct = (item) => {
  // console.log(item.players[0].strPlayer);
  const DetailsContainer = document.getElementById("modal-body");
  // players.forEach((player) => {
  const div = document.createElement("div");
  div.classList.add("test-box");
  div.innerHTML = `
    <img class="player-img" src="${item.players[0].strThumb}">
    <div class="player-text-box">
      <p class="player-name">Name: '${item.players[0].strPlayer}'</p>
      <p class="player-country">countey: ${item.players[0].strNationality}</p>
      <p class="player-team">club: ${item.players[0].strTeam}</p>
      <p class="player-sport">sports: ${item.players[0].strSport}</p>
      <p class="player-salary">salary: ${item.players[0].strWage}</p>
    </div>
  `;
  DetailsContainer.appendChild(div);
  // // });
};
// const openModals=()=>{

// }

// const id = document.getElementById("id");
// const div = document.createElement("div");
// div.innerHTML = `
//   <button
//       type="button"
//       class="btn btn-primary"
//       data-bs-toggle="modal"
//       data-bs-target="#staticBackdrop"
//       onclick="Test()"
//     >
//       test
//   </button>
// `;
// id.appendChild(div);

// const Test = () => {
//   const testtt = document.getElementById("staticBackdropLabel");
//   testtt.innerText = "Hello";
// };
