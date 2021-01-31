function renderInventory(inventory) {
    var flatList = '';
    for (var i = 0; i < inventory.length; i++)
    {
        var brandName = inventory[i].name;
        var brandShoes = inventory[i].shoes;
        for (var j = 0; j < brandShoes.length; j++){
            var itemsDesc = brandShoes[j].name + ', ' + brandShoes[j].price;
            flatList += brandName + ', ' + itemsDesc + '\n';
        }
        
    }
    return flatList;
}

//Create helper functions if needed
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
renderInventory(currentInventory);
