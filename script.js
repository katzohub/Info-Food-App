//'use strict'
const menu = [{

    id:	1,
    title:'Syrova',
    ingredients:'60g rajčinový základ,150g syr,1g oregano,',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:3,30€<br>veľká:5,7€'
    },
    {
    id:	2,
    title:'Štyri syry',
    ingredients:'60g rajčinový základ,40g mozzarela,40g niva,120g syr, 20g parmezán,1g oregano',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,90€<br>veľká:7,40€'
    },
    {
    id:	3,
    title:'Štyri Syry špacial',
    ingredients:'60g olivový olej,40g mozzarela ,40g niva,20g parmezán,20g olivy, 20g paradajka,60g prosciutto,120g syr ,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,40 €<br>veľká:8,6 €'
    },
    {
    id:	4,
    title:'Šesť syrov',
    ingredients:'60g rajčinový základ, 40g mozzarela, 40g niva , 120g syr, 20g parmezán,20g feta,20g korbačiky,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,20€<br>veľká:8,6€'
    },
    {
    id:	5,
    title:'Mozzarela s bazzalkou',
    ingredients:'60rajčinový základ,80g mozzarela, 100g parajka,100g pravá mozzarela,4g bazalka',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá: nepredáva sa<br>veľká:7,9€'
    },
    {
    id:	6,
    title:'Šunková',
    ingredients:'60rajčinový základ,100g šunka,120g syr, 1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,20€<br>veľká:6,3€'
    },
    {
    id:	7,
    title:'Šunkovo-šampionová,',
    ingredients:'60rajčinový základ, 80g šunka, 40g šampiňóni,120g syr, 1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,4€<br>veľká:6,7€'
    },
    {
    id:	8,
    title:'Šunkovo-kukuricová',
    ingredients:'60g rajčinový základ,80g šunka, 60g kukurica, 120g syr, 1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,40€<br>veľká:6,7€'
    },
    {
    id:	9,
    title:'Šunkovo-šopiňónová s kukuricou',
    ingredients:'60g rajčinový základ,80g šunka,30g šampiňóny,40g kukurica',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,90€<br>veľká:7,4€'
    },
    {
    id:	10,
    title:'Šunková so šampiňónmi,kukuricou a olivami',
    ingredients:'60g rajčinový základ,80g šunka,20g šampiňóny,30g kukurica,30g olivy,120g syr,1goregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,30€<br>veľká:7,8€'
    },
    {
    id:	11,
    title:'Šunková s ananásom',
    ingredients:'60g rajčinový základ,80g šunka,110g ananás,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'mala:4,5€<br>veľká:6,6€'
    },
    {
    id:	12,
    title:'Šunková s brokolicou',
    ingredients:'60g rajčinový základ,80g šunka,120g brokolica,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,6€<br>veľká:6,8€'
    },
    {
    id:	13,
    title:'Šunkovo-zeleninová',
    ingredients:'60g rajčinový základ,80g šunka,50g paprika, 50g paradajka,120g syr, 1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,8€<br>veľká:6,9€'
    },
    {
    id:	14,
    title: 'Šunková so salámou',
    ingredients:'60g rajčinový základ,80g šunka,50g saláma,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,9€<br>veľká:7,5€'
    },
    {
    id:	15,
    title: 'Salámová',
    ingredients:'60g rajčinový základ,60g saláma, 120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,60€<br>veľká:6,6€'
    },
    {
    id:	16,
    title: 'Klobása s vajíčkom',
    ingredients:'60g rajčinový základ,80g klobása,50g vajce,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,8e<br>veľká:7,00e'
    },
    {
    id:	17,
    title: 'Hriňovská',
    ingredients:'60g rajčinový základ,60g klobása,40g slanina,50g vajce,5g feferóny,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,3€<br>veľká:7,6€'
    },
    {
    id:	18,
    title: 'Hriňovská s cibuľou a smotanou',
    ingredients:'60g rajčinový základ,60g klobása,40g slanina,50g vajce, 5g feferóny, 20g cibuľa,30g smotana,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,50€<br>veľká:8,3€'
    },
    {
    id:	19,
    title: 'Bryndza a slanina',
    ingredients:'60g smotanový základ,125g bryndza,40g slanina,120g syr',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:nerobí sa<br>veľká:7,4€'
    },
    {
    id:	20,
    title: 'Bryndza a škvarky',
    ingredients:'60g smotanový základ,125g bryndza, 100g škvarky, 120g syr',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'mala:nerobí sa<br>veľká:7,4€'
    },
    {
    id:	21,
    title: 'Gazdovksa',
    ingredients:'60g rajčinový základ,60g klobása,100g kysla kapusta',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,90€<br>veľká:7,30€'
    },
    {
    id:	20,
    title: 'Bryndza a škvarky',
    ingredients:'60g smotanový základ,125g bryndza, 100g škvarky, 120g syr',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'mala:nerobí sa<br>veľká:7,4€'
    },
    {
    id:	21,
    title: 'Gazdovská',
    ingredients:'60g rajčinový základ,60g klobása,100g kyslá kapusta,40g slanina,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,9€<br>veľká:7,3€'
    },
    {
    id:	22,
    title: 'Mexická',
    ingredients:'60g rajčinový základ,50g sláma,80g fazuľa,20g cibuľa,5g čili,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,1<br>veľká:8,6€'
    },
    {
    id:	23,
    title: 'Mexická špecial',
    ingredients:'60g rajčinový základ,100gpikantné bravčové soté,5g čili,80g fazuľa,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,4€<br>veľká:8,9€'
    },
    {
    id:	24,
    title: 'Kuracia',
    ingredients:'60g rajčinový základ,100g kuracie prsia,120g syr, 1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,6€<br>veľká:7,2€'
    },
    {
    id:	25,
    title: 'Bolonská',
    ingredients:'60g rajčinový základ,200gmesová zmes,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,6€<br>veľká:6,9€'
    },
    {
    id:	26,
    title: 'Mäsová',
    ingredients:'60g rajčinový základ,60g šunka,30g soláma,30g klobása,40g slanina, 120g sr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'mala:5,5€<br>veľká:9,4€'
    },
    {
    id:	27,
    title: 'Prosciutto, mozzarela,olivy',
    ingredients:'60g rajčinový základ,60g prosciutto,30gmozzarella,30g olivy,30g kapary,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,8€<br>veľká:8,3€'
    },
    {
    id:	28,
    title: 'Prosciutto s brokolicou',
    ingredients:'60g rajčinový základ,60g prosciutto,80g brokolica,50g vajce,20g kapary,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,3€<br>veľká:8,00€'
    },
    {
    id:	29,
    title: 'Prosciutto s kuracím mäsom',
    ingredients:'60g rajčinový základ,60g prosciutto,80g kuracie mäso,50g vajce,5g feferóny,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,2€<br>veľká:9,20€'
    },
    {
    id:	30,
    title: 'Tuniaková',
    ingredients:'60g rajčinový základ,130g tuniak,30g cibuľa,120g syr,1g oregáno',
    allergens:'1,3,4,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:nerobí sa€<br>veľká:6,70€'
    },
    {
    id:	31,
    title: 'Morská',
    ingredients:'60g rajčinový základ,100g morské plody,120g syr,1g oregáno',
    allergens:'1,2,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,6€<br>veľká:6,90€'
    },
    {
    id:	32,
    title: 'Zeleninová s vajíčkom',
    ingredients:'60g rajčinový základ,40g paprika,40g paradajka,50g vajce,20g kapary,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,40€<br>veľká:6,5€'
    },
    {
    id:	33,
    title: 'Brokolicová',
    ingredients:'60g rajčinový základ,110g brokolica,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:3,90€<br>veľká:5,90€'
    },
    {
    id:	34,
    title: 'Štyri ročné obdobia',
    ingredients:'60g rajčinový základ,80g šunka,120g syr,10g niva,10g mozzarela,5g parmezán,10g paprika,10g paradajka,15g kukurica,25g vajce,20g klobása,2g feferóny,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:nerobí sa<br>veľká:8,60€'
    },
    {
    id:	35,
    title: 'Pizza VELVET',
    ingredients:'60g rajčinový základ,60g šunka,40g saláma,30g klobása,30g paradajka,50g vajce,5g feferóny,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,6€<br>veľká:8,90€'
    },
    {
    id:	36,
    title: 'Pizza VELVET ŠPECIAL',
    ingredients:'60g rajčinový základ,60g prosciutto,40g saláma,30g paradajka,20g kapary,20g niva,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,6€<br>veľká:8,6€'
    },
    {
    id:	37,
    title: 'Diabolská pizza',
    ingredients:'60g rajčinový základ,40g saláma,40g klobása,20g olivy,20g niva,5g feferóny,5g chilli,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:5,6€<br>veľká:8,60€'
    },
    {
    id:	38,
    title: 'Pizza KEBAB',
    ingredients:'60g rajčinový základ,60g paradjka,40g cibuľa,5g feferóny,100g kebab,120g syr,1g oregáno',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:nerobí sa€<br>veľká:9,50€'
    },
    {
    id:	39,
    title: 'Pizza ZAPEKANKA',
    ingredients:'60g rajčinový základ,200g hliva ústricová,120g syr,',
    allergens:'1,3,7',
    img: './img/future_pizza.jpeg',
    category:'Pizza',
    price:'malá:4,9€<br>veľká:7,80€'
    },
    {
    id:	40,
    title: 'Cestoviny - Penné s kuracím messom',
    ingredients:'300g cestoviny,1dc smotana 33%,80g kuracie meso,30g eidam',
    allergens:'1,3,7',
    img: './img/future_pasta.jpeg',
    category:'Cestoviny',
    price:'7,2€'
    },
    {
    id:	41,
    title: 'Cestoviny - Penné so štyrmi syrmi',
    ingredients:'300g cestoviny,1dc smotana 33%,10g niva,10g parmezán,30g eidam,10 mozzarela',
    allergens:'1,3,7',
    img: './img/future_pasta.jpeg',
    category:'Cestoviny',
    price:'7,0€'
    },
    {
    id:	42,
    title: 'Cestoviny - Penné s hubovou omáčkou',
    ingredients:'300g cestoviny,1dc smotana 33%,25g šampiňóny,30g eidam',
    allergens:'1,3,7',
    img: './img/future_pasta.jpeg',
    category:'Cestoviny',
    price:'6,8€'
    },
    {
    id:	43,
    title: 'Cestoviny - Penné s brokolicou',
    ingredients:'300g cestoviny,1dc smotana 33%,80g brokolica,30g eidam',
    allergens:'1,3,7',
    img: './img/future_pasta.jpeg',
    category:'Cestoviny',
    price:'6,8€'
    },
    {
    id:	44,
    title: 'Cestoviny - Špagety carbonara',
    ingredients:'300g špagety,1kss vajce,1dc smota 33%,50g slanina,30g parmezán',
    allergens:'1,3,7',
    img: './img/future_pasta.jpeg',
    category:'Cestoviny',
    price:'7,0€'
    },
    {
    id:	45,
    title: 'Cestoviny - Špagety s bolonskou omáčkou a syrom',
    ingredients:'300g špagety,120g mesová zmes,50g syr',
    allergens:'1,3,7',
    img: './img/future_pasta.jpeg',
    category:'Cestoviny',
    price:'6,1€'
    },
    {
    id:	46,
    title: 'Cestoviny - Špagety s kečupom a syrom',
    ingredients:'300g špagety,50g kečup,50g syr',
    allergens:'1,3,7',
    img: './img/future_pasta.jpeg',
    category:'Cestoviny',
    price:'5,3€'
    },
    {
    id:	47,
    title: 'Šalát - Alkazar',
    ingredients:'150g činska kapusta,50g paradajka,50g šunka,50g kukurica,50g vajce(1ks),50g syr,50g tatárska omáčka',
    allergens:'1,3,7',
    img: './img/future_salad.jpeg',
    category:'Salat',
    price:'6,2€'
    },
    {
    id:	48,
    title: 'Šalát - Šopský',
    ingredients:'100g paradajka,100g uhorka,50g cibuľa,50g paprika,100g feta syr,2cl olivový olej',
    allergens:'7',
    img: './img/future_salad.jpeg',
    category:'Salat',
    price:'6,0€'
    },
    {
    id:	49,
    title: 'Šalát - Tuniakový',
    ingredients:'130g tuniak,150g čínska kapusta,50g paprika,50g paradajka,50g olivy,50g ciuľa,provensálske korenie,2cl olivový olej',
    allergens:'4',
    img: './img/future_salad.jpeg',
    category:'Salat',
    price:'6,8€'
    },
    {
        img: './img/future_salad.jpeg',
    id:	50,
    title: 'Šalát - S kuracím messom',
    ingredients:'150g činska kapusta,80g kuracie meso,50g paprika,50g paradajka,50g olivy,50g cibuľa,provensálske korenie,2cl olivový olej',
    allergens:'Bez alergénov',
    img: './img/future_salad.jpeg',
    category:'Salat',
    price:'6,8€'
    },
    {
    id:	51,
    title: 'Šalát - S krevetami',
    ingredients:'150g činska kapusta,80g krevety,50g paprika,50g paradajka,50g olivy,50g cibuľa,provensálske korenie,2cl olivový olej',
    allergens:'2',
    img: './img/future_salad.jpeg',
    category:'Salat',
    price:'6,4€'
    },
   
    
];

const box = document.querySelector('.box');
const closeBtn = document.querySelector('.close');
const table = document.querySelector('.container-alergen');

const data = document.querySelector('.data');



const button = document.querySelector('.btn-nextPage');
const post = document.querySelector('.post');
const container = document.querySelector('.general-container');


const toggleBody = document.querySelector('.dark-body');


const oneButton  = document.querySelector('.one-button');
const twoButton  = document.querySelector('.two-button');




const navDark = document.querySelectorAll('.nav-dark');

window.addEventListener("DOMContentLoaded", function () {
display(menu);
});

function display(items) {
let displayMenu = items.map(function(item){
    
return `

<section class='${item.category}'>  
    <div class="container-pizza">
    <img class="pizza" src="${item.img}" alt="${item.title}">
    <article>
        <p class="pizza-text">
           <div class='id'>${item.id}.<strong>${item.title}</strong></div> 
           <br><span> alergény</span> =>${item.allergens}
           <br><span>ingriedencie</span> => ${item.ingredients}
           <br><span>cenník:</span><br>${item.price}              
        </p>
    </article>
    </div>
    </section>`
});
displayMenu = displayMenu.join('');
data.innerHTML = displayMenu;
const darkContainer = document.querySelectorAll('.container-pizza');
const darkPizza = document.querySelectorAll('.pizza');
twoButton.addEventListener('click',()=>{
    darkContainer.forEach(function (item) {
        item.classList.toggle('dark-container');       
    });
    darkPizza.forEach(function (item) {
        item.classList.toggle('dark-pizza');       
    });
})
oneButton.addEventListener('click',()=>{
    darkContainer.forEach(function (item) {
        item.classList.toggle('dark-container');       
    });
    darkPizza.forEach(function (item) {
        item.classList.toggle('dark-pizza');       
    });
})

};





button.addEventListener('click',() =>{
container.style.display = 'none';
post.style.display = 'block';
box.style.display = 'block';

});
twoButton.addEventListener('click',() =>{
    toggleBody.classList.toggle('dark-body');

navDark.forEach(function (item) {
    item.classList.toggle('nav-dark');       
});
oneButton.style.display = 'flex';
twoButton.style.display = 'none';

});

oneButton.addEventListener('click',()=>{
toggleBody.classList.toggle('dark-body');

navDark.forEach(function (item) {
    item.classList.toggle('nav-dark');       
});
oneButton.style.display = 'none';
twoButton.style.display = 'flex';

})


box.addEventListener('click',() =>{

post.style.display = 'none';
box.style.display = 'none';
table.style.display = 'flex'

});
closeBtn.addEventListener('click',() =>{

post.style.display = 'block';
box.style.display = 'block';
table.style.display = 'none'

});





function search_pizza() {
let input = document.getElementById('searchbar').value
input=input.toLowerCase();
let x = document.querySelectorAll("strong");
let all = document.querySelectorAll("section");	 
for ( let i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        all[i].style.display="none";
    }
    else {
        all[i].style.display="block";                 
    }
}
}


const allMenu = document.querySelector('.all-menu')
const pizzaMenu = document.querySelector('.pizza-menu');
const salatyMenu = document.querySelector('.salat-menu');
const cestovinyMenu = document.querySelector('.cestoviny-menu');


pizzaMenu.addEventListener('click', () =>{
const cestovinyClass = document.querySelectorAll('.Cestoviny');
const salatClass = document.querySelectorAll('.Salat');
const pizzaClass = document.querySelectorAll('.Pizza');


  for (let cestovinyClassy of cestovinyClass ) {
    cestovinyClassy.style.display = 'none';
  }
  for (let salatClassy of salatClass ) {
    salatClassy.style.display = 'none';
  }
  for (let pizzaClassy of pizzaClass ) {
    pizzaClassy.style.display = 'block';
  }
})
salatyMenu.addEventListener('click', () =>{
const cestovinyClass = document.querySelectorAll('.Cestoviny');
const pizzaClass = document.querySelectorAll('.Pizza');
const salatClass = document.querySelectorAll('.Salat');

  for (let cestovinyClassy of cestovinyClass ) {
    cestovinyClassy.style.display = 'none';
  }
  for (let pizzaClassy of pizzaClass ) {
    pizzaClassy.style.display = 'none';
  }
  for (let salatClassy of salatClass ) {
    salatClassy.style.display = 'block';
  }
})
cestovinyMenu.addEventListener('click', () =>{
const salatClass = document.querySelectorAll('.Salat');
const pizzaClass = document.querySelectorAll('.Pizza');
const cestovinyClass = document.querySelectorAll('.Cestoviny');

  for (let salatClassy of salatClass ) {
    salatClassy.style.display = 'none';
  }
  for (let pizzaClassy of pizzaClass ) {
    pizzaClassy.style.display = 'none';
  }
  for (let cestovinyClassy of cestovinyClass ) {
    cestovinyClassy.style.display = 'block';
  }
})
allMenu.addEventListener('click', () =>{
const salatClass = document.querySelectorAll('.Salat');
const pizzaClass = document.querySelectorAll('.Pizza');
const cestovinyClass = document.querySelectorAll('.Cestoviny');

  for (let salatClassy of salatClass ) {
    salatClassy.style.display = 'block';
  }
  for (let pizzaClassy of pizzaClass ) {
    pizzaClassy.style.display = 'block';
  }
  for (let cestovinyClassy of cestovinyClass ) {
    cestovinyClassy.style.display = 'block';
  }
})