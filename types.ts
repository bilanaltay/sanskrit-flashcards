export interface Card {
  id: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  type: string; // e.g., "Feminine", "Masculine"
  imageUrl: string;
}

export interface Deck {
  id: string;
  title: string;
  cards: Card[];
}

export interface StudyState {
  currentCardIndex: number;
  shuffledOrder: number[]; // Array of indices pointing to the original deck
  isFlipped: boolean;
  deckId: string;
}