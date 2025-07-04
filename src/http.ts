export type quoteType = { status: string; author: string; quote: string };

export const getRandomQuote = async (): Promise<quoteType> => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/random-quote");

    if (!response.ok) {
      throw new Error("failed to fetch quote");
    }

    const quotes: quoteType = await response.json();
    return quotes;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      author: "check your internet connection",
      quote: "Failed to load quote",
    };
  }
};
