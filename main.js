const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];
const colori =[
      'red',
      'blue',
      'green',
  ];
const iconsContainer = document.getElementById('icone');

 


const gettype = (array) =>{
    const types= []
    array.forEach((element) =>{
        if(!types.includes(element.type)){
            types.push(element.type)
        }
    })
    return types;
}
const colora = (array, colors) => {
    console.log(array,colors );
    const types= gettype(icons);
    console.log(types);
    const coloredArray= array.map((element) => {
        const indextype= types.indexOf(element.type);
        element.color= colors[indextype];
        return element;
    })
    console.log(coloredArray);
    return coloredArray;
}
const colorato = colora(icons,colori) ;
console.log(colorato);

const stampa = (array, container) =>{
    container.innerHTML="";
    array.forEach((element) =>{
        const {  name, color } = element;
        container.innerHTML +=`
    
        <div class="riquadro"> 
        <i class="fas fa-${name} ridimensiona" style ="color:${color}"></i>
        <div class= "nome-icona"> ${name.toUpperCase()}</div>
        </div>
        `;
    })

}
console.log(stampa(colorato,iconsContainer));