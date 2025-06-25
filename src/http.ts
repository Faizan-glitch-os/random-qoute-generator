const apiKey = import.meta.env.VITE_KEY;

export type quotesType = { quote: string; author: string; category: string };

export const getRandomQuote = async (): Promise<quotesType[]> => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch quote");
    }

    const quotes: quotesType[] = await response.json();
    return quotes;
  } catch (error) {
    console.log(error);
    return [];
  }
};
