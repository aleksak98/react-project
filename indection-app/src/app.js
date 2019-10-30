let article = [
    {
        name: 'Ananas',
        price: [100, 60],
        type: 'Voce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        stanje: true,
        image:'img/ananas.jpg',
        url: 'proizvod/ananas.html'
    },
    {
        name: 'Salata',
        price: [170, 80],
        type: 'Povrce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        stanje: true,
        image:'img/7433f9ef76528311525cb2a341713f46_view_l.jpg',
        url: 'proizvod/salata.html'
    },
    {
        name: 'Orah',
        price: [35,20],
        type: 'Voce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        stanje: true,
        image:'img/orah-300x300.jpg',
        url: 'proizvod/orah.html'
    },
];

const onFormSubmit = (event) =>{
    event.preventDefault();
    const ime = event.target.elements.articleName.value;
    const articleMPC = event.target.elements.articleMPC.value;
    const articleVPC = event.target.elements.articleVPC.value;
    const radioType = event.target.elements.articleType.value;
    const area = event.target.elements.desc.value;
    const stanje = event.target.elements.articleStanje.value;
    const slika  = event.target.elements.slika.value;

    console.log(ime);
    console.log(articleMPC);
    console.log(articleVPC);
    console.log(radioType);
    console.log(area);
    console.log(stanje);
    console.log(slika);
    if(ime && articleMPC && articleVPC) {
        let newArticle = new Object();
        newArticle.name = ime;
        newArticle.price = [];
        newArticle.price[0] = parseInt(articleMPC);
        newArticle.price[1] = parseInt(articleVPC);
        newArticle.pricePDV = [];
        {article.map((article) => {
            article.pricePDV = pricePDV(article.price)
        })}
        if(radioType === 'voce'){
            newArticle.type = radioType;
        }else{
            newArticle.type = radioType;
        }
        newArticle.description = area;

        if(stanje){
            newArticle.stanje = true;
        }else{
            newArticle.stanje = false;
        }

        newArticle.image = slika;

        article.push(newArticle);
        event.target.elements.articleName.value = '';
        event.target.elements.articleVPC.value = '';
        event.target.elements.articleMPC.value = '';
        event.target.elements.slika.value = '';
        console.log(article);
    }
    renderProduct();
};


function pricePDV (product){
    var pricePDV = [];
    for (var i=0; i<product.length; i++){
        if (i==0){
            pricePDV[i] = product[i]*1.2;
        } else {
            pricePDV[i] = product[i]*0.8;
        }
    }
    return pricePDV;
}

// function listShopItem(product) {
//     var article = [];
//     for (var i=0; i<product.length; i++) {
//         product[i].pricePDV = pricePDV(product[i].price);
//         article[i] = <div>
//             <h1 class="productName">{product[i].name}</h1>
//             <img src={product[i].image} alt={'Picture of product'}/>
//             <p class="productType"><b>{product[i].type}</b></p>
//             <p>Maloprodajna cena:<b> {product[i].pricePDV[0]}</b></p>
//             <p>Veleprodajna cena:<b> {product[i].pricePDV[1]}</b></p>
//             <p><b>Opis:</b> {product[i].description}</p>
//             <a href="" target="_blank"><button>Saznaj vise</button></a>
//             </div>;
//     }
//     return article;
// }



// function listShopItem(product){
//     // var article = [];
//     {product.map((product) => {
//         return <div>
//              <h1 className="productName">{product.name}</h1>
//              <img src={product.image} alt={'Picture of product'}/>
//              <p className="productType"><b>{product.type}</b></p>
//              <p>Maloprodajna cena:<b> {product.price[0]}</b></p>
//              <p>Veleprodajna cena:<b> {product.price[1]}</b></p>
//              <p><b>Opis:</b> {product.description}</p>
//              <a href="" target="_blank">
//             <button>Saznaj vise</button></a>
//              </div>
//     })}
// }

function renderProduct() {
    const shop = (
        <div class='article'>
            {article.map((article) => {
                {article.pricePDV = pricePDV(article.price)}
                return <div>
                    <h4 className="productName">{article.name}</h4>
                    <img src={article.image} alt={'Picture of product'}/>
                    <p className="productType"><b>{article.type}</b></p>
                    <p>Maloprodajna cena:<b> {article.pricePDV[0]}</b></p>
                    <p>Veleprodajna cena:<b> {article.pricePDV[1]}</b></p>
                    <p><b>Opis:</b> {article.description}</p>
                    <a href="" target="_blank">
                        <button>Saznaj vise</button></a>
                </div>
            })}
        </div>
    );

    var getRoot = document.getElementById('root');
    ReactDOM.render(shop, getRoot);
}


function renderForm(){
    var form = (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='articleName' placeholder='Unesite ime proizvoda'/> <br />
                <input type='text' name='articleMPC' placeholder='Maloprodajna cena'/> <br />
                <input type='text' name='articleVPC' placeholder='Veleprodajna cena'/> <br />
                <input type='radio' name='articleType' value="voce" checked/>Voce
                <input type='radio' name='articleType' value="povrce"/>Povrce <br />
                <textarea name='desc' placeholder='Unesite opis proizvoda'> </textarea> <br />
                <input type='radio' name='articleStanje' value={true} checked/>Ima na stanju
                <input type='radio' name='articleStanje' value={false}/>Nema na stanju <br />
                <input type='text' name='slika' placeholder="Url adresa"/> <br />
                <button>Add article</button> <br />
            </form>
        </div>
    );

    var getRootForm = document.getElementById('rootForm');
    ReactDOM.render(form,getRootForm);
}

renderProduct();
renderForm();