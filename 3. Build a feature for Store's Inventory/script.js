const items = {
  'item1': 10,
  'item2': 20,
  'item3': 30,
  'item4': 40,
};

const exchangeRate = 80;

const rupees = Object.entries(items).map(([key, value]) => {
    return { [key]: value * exchangeRate };
});

console.log(items);
console.log(rupees);

