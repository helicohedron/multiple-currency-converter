import { fetchCurrency } from './fetch-currency.js';

async function fetchAPI(input) {
  const currency = input[0].toLowerCase();

  const conversionsAPI = await fetchCurrency(currency);
  return conversionsAPI;
}

export async function convertAmount(userInput) {
  const result = await fetchAPI(userInput);
  const [fromCurr, toCurr, amount] = [...userInput];

  const calculatedAmount = toCurr.map((curr) => {
    curr = curr.toLowerCase();
    return ((result[fromCurr.toLowerCase()][curr]) * amount);
  });

  const convertedValues = {};
  toCurr.forEach((key, index) => {
    convertedValues[key] = calculatedAmount[index];
  });
  
  const output = [{date: result.date}];
  output.push(convertedValues);
  return output;
}



