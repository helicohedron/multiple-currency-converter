export async function fetchCurrency (fromCurrency) {
  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.min.json`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    if (!response.ok) throw new Error(data);
    
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
}