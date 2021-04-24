const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
//ищу элемент по его ID
 const ulIngredientsEl = document.getElementById('ingredients')
// создаю массив, прохожу по элементам массива ингредиентов, в память записываю лишки с текстом, возвращаю их
const listLi = ingredients.map(ingr => {
    let li = document.createElement('li');
    li.textContent = ingr
    return li
})
//записывю массив в хтмл
ulIngredientsEl.append(...listLi);