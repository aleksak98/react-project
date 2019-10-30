//vezbanje, 1. deo react

// var user = {
//     ime:"Petar",
//     pozicija:"Manager",
//     godiste:15
// };
//
// // var template = <h1>Hello World!!!</h1>;
// // var getRoot = document.getElementById('root');
// // ReactDOM.render(template, getRoot);
//
//
// function getPosition(position){
//     if(position){
//         return position;
//     }else{
//         return 'nezaposlen';
//     }
// }
//
// var person3 = (
//     <div>
//         <h1>Ime: {user.ime}!</h1>
//         <p>Pozicija: {getPosition(user.pozicija)}</p>
//         <p>Godiste: {user.godiste + 3}</p>
//     </div>
// );
//
// var getRoot = document.getElementById('root');
// ReactDOM.render(person3, getRoot);
//
//
// function getPositionNew(position){
//     if(position){
//         return <p>Pozicija: {position}</p>
//     }else{
//         return <p>Osoba je nezaposlena.</p>
//     }
// }
//
// var person4 = (
//     <div>
//         <h1>Ime: {user.ime}!</h1>
//         {getPositionNew(user.pozicija)}
//         <p>Godiste: {user.godiste}</p>
//     </div>
// );
//
// var getRoot2 = document.getElementById('root2');
// ReactDOM.render(person4,getRoot2);
//
// var person5 = (
//     <div>
//         <h1>Ime: {user.ime ? user.ime : 'Anonimna osoba'}</h1>
//         {getPositionNew(user.pozicija)}
//         {(user.godiste && user.godiste >=18) && <p>Godiste: {user.godiste}</p>}
//     </div>
// );
//
// ReactDOM.render(person5,getRoot);
//
// var newUser = {
//     name:'Marko',
//     position:'General Manager',
//     age:35,
//     ocene:[5.00, 'odlican','primeren']
// };
//
// function prosecnaOcena(ocena){
//     if(ocena.length > 2){
//         return <div>
//             <p>Prosecna ocena je:{ocena[0]}</p>
//             <p>Ucenik je: {ocena[1]}</p>
//             <p>Vladanje: {ocena[2]}</p>
//         </div>
//     }
//     else{
//         return <p>Podaci su nepotpuni</p>;
//     }
// }
//
// ReactDOM.render(prosecnaOcena(newUser.ocene),getRoot);
//
// var person6 = (
//     <div>
//         <h1>Ime: {newUser.name ? newUser.name : 'Anonimna osoba'}</h1>
//         {getPositionNew(newUser.position)}
//         {(newUser.age && newUser.age >=18) && <p>Godina: {newUser.age}</p>}
//         <p>Prosecna ocena je: {newUser.ocene.length > 0 ? newUser.ocene[0] : 'Nije ocenjen'}</p>
//         {prosecnaOcena(newUser.ocene)}
//         <h2>Proba</h2>
//     </div>
// );
//
// ReactDOM.render(person6, getRoot);

// console.log('Da li radis?');
//
// var ime = 'Petar';
// var ime = 'Miki';
//
// console.log(ime);
//
// let ime2 = 'Petar';
// let ime2 = 'Miki';
//
// console.log(ime2);
//
// const ime3 = 'Petar';
// const ime3 = 'Miki';
//
// console.log(ime3);

//vise nacina za funkcije
// function kvadrat(x){
//     return x*x;
// }
// console.log(kvadrat(4));
//
// const kvadrat2 = function(x){
//     return x*x;
// };
// console.log(kvadrat2(4));
//
// const kvadrat3 = (x)=>{return x*x};
// console.log(kvadrat3(4));
//
// const kvadrat4 = (x)=> x*x;
// console.log(kvadrat4(8));
//
// //
// const add = ()=>{console.log('add');};
//
// let count = 0;
// const addOne = () =>{count++;renderNumber();};
// const minusOne = ()=>{count--;renderNumber()};
// const reset = ()=>{count=0;renderNumber()};
//
//
// const myId = 'myId';
//
// const renderNumber = () => {
//     const person = (
//         <div>
//             <p id={myId} className='ime-class'>{count}</p>
//             <button onClick={add}>1</button>
//             <button onClick={() => {console.log('9');}}>3</button>
//             <button onClick={addOne}>Add One</button>
//             <button onClick={minusOne}>Minus One</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//
//     const getRoot = document.getElementById('root');
//     ReactDOM.render(person,getRoot);
// };
//
// renderNumber();

let count = 0;
let visibility = false;
let app = {
    name: 'Mitar',
    options: []
};
const addOne = () => { count++; renderNumber() };
const minusOne = () => { count--; renderNumber() };
const reset = () => { count=2; renderNumber() };

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const option = e.target.elements.option.value;
    console.log(option);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        renderNumber();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderNumber();
};

const onMakeDecision = () => {
    const randNumber = Math.floor(Math.random() * app.options.length);
    console.log(randNumber);
    const i = app.options[randNumber];
    alert(i);
};

const toggleDiv = () => {
    visibility = !visibility;
    renderNumber();
};

var getRoot = document.getElementById('root');
const renderNumber = () => {
    const person6 = (
        <div>
            <p>{count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add</button>
            </form>
            {app.options.map((option) => {return <p id={option}>{option}</p>})}
            <button onClick={onRemoveAll}>Remove all</button>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>Sta da radim</button>
            <button onClick={toggleDiv}>{visibility ? 'Sakrij' : 'Prikazi'}</button>
            {visibility && (<p>Evo me</p>)}
        </div>
    );
    ReactDOM.render(person6, getRoot);
};

renderNumber();

//kreiranje komponenti i klasa

class Article {
    constructor(name='Nema ime',price=0){
        this.name = name;
        this.price = price;
        console.log(name,price);
    }
    showName(){
        return 'Naziv artikla: '+this.name;
    }
    showArticle(){
        return 'Naziv artikla: '+this.name+ ', Cena: '+this.price;
    }
}

const ananas = new Article('Ananas',150);
console.log(ananas.showName());
console.log(ananas.showArticle());
console.log(ananas);

class ArticleCategory extends Article{
    constructor(name,price,category){
        super(name,price);
        this.category = category;
    }
    showCategory(){
        let description = super.showArticle();
        description+=' Kategorija: '+this.category;
        return description;
    }
}

const orah = new ArticleCategory('Orah',150,'Voce');
console.log(orah.showCategory());