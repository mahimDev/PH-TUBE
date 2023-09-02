const assingment = async () => {
  const dataCollect = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const datatext = await dataCollect.json();
  const data = datatext.data;

  allTabBtn(data);
};

const allTabBtn = (data) => {
  const allTab = document.getElementById("all-tab-btn");
  data.forEach((btn) => {
    const creatBtn = document.createElement("div");
    creatBtn.innerHTML = `
        <button onclick="handleBtn(${btn.category_id})" id="btn-handle" class="border-0 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-red-500 to-yellow-500  hover:from-yellow-500 from-10% hover:to-orange-500 to-90% text-white">${btn.category}</button>
        `;

    allTab.appendChild(creatBtn);
  });
};

const cardDiv = async (click = 1000) => {
  const dataCollect = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${click}`
  );
  const datatext = await dataCollect.json();
  const cardData = datatext.data;
  // console.log(cardData);
  cardContainer(cardData);
};
const cardContainer = (data) => {
  const opss = document.getElementById("container-oops");
  if (data.length === 0) {
    opss.classList.remove("hidden");
  } else {
    opss.classList.add("hidden");
  }
  console.log(data);
  const allCard = document.getElementById("card-container");
  allCard.innerHTML = "";
  data.forEach((card) => {
    const totalsecond = card.others.posted_date;
    const total = parseInt(totalsecond);
    const totalminit = total / 60;
    const totalhours = totalminit / 60;
    const hourse = Math.floor(totalhours);
    const min = totalminit % 60;
    const minit = Math.floor(min);
    // console.log(minit)
    const showTime = `${hourse} hrs ${minit} min ago`;
    //  const min = minite.toFixed()
    // const hours = min / 60

    // const hor =hours.toFixed()

    // console.log(hourse)

    const creatCard = document.createElement("div");
    creatCard.innerHTML = `
        <div class="card hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 from-10% hover:to-red-500 to-90% text-black shadow-xl p-4">
        <div class="relative">
        <figure><img class="h-40 w-full" src="${
          card?.thumbnail
        }" alt="Shoes" /></figure>
        
          <p class="absolute right-2 bottom-2 rounded-lg bg-gray-800 p-1 text-white">${
            card.others.posted_date ? showTime : ""
          }</p>
       </div>
            <div class="card-body">
            <div class="flex gap-2 ">
            <img class="h-10 w-10 rounded-full" src="${
              card?.authors[0]?.profile_picture
            }" alt="">
            
          
              <div >
            <h2 class=" font-bold">${card.title}</h2>
              <div class=" flex ">
              <p>${card?.authors[0]?.profile_name}</p>
              ${
                card?.authors[0]?.verified
                  ? '<img class="ml-3 w-5 h-5" src="./veri.png" alt="">'
                  : ""
              }
            </div>
            <p>${card?.others.views}</p>
          
            </div>
            </div>
            </div> 
          </div>
        `;
    allCard.appendChild(creatCard);
  });
};

const handleBtn = (click) => {
  cardDiv(click);
};

cardDiv();
assingment();
