const apiKey = import.meta.env.KEY;

export type apiDataType = [{ qoute: string; author: string; category: string }];

export const GetRandomQoute = async () => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        " X-Api-key": apiKey,
      },
    });
    const quotes: apiDataType = await response.json();
    return quotes;
  } catch (error) {
    console.log(error);
  }
};
