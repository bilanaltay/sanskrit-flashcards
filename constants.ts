import { Deck } from './types';

export const DECKS: Record<string, Deck> = {
  'sanskrit-basics': {
    id: 'sanskrit-basics',
    title: 'Sanskrit Sözlük',
    description: '500+ Kelime • Temel',
    version: 1,
    themeColor: 'from-[#fed9b7] to-[#f07e6e]',
    cards: [
      {
        id: 'sans-001',
        sanskrit: 'विद्या',
        transliteration: 'Vidya',
        meaning: 'Knowledge / Learning',
        type: 'Feminine',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34agmGuG-y1HS9IV-2aRmrrguxGIFkruqKucyS_wKmCOcQ0ayMeSHuYTsJy0_dHxuDyKjypOQ9E2uqoVRQ9Gj4zchVvKETJEwGbBKoPWK0Kvid2b46OnOxZwB6AbDiJkJycrMWpaCXxWvyqh1WrmfTItlyyoOKEUSDPD3AvSW1Fh95ZzES0hzu6VTytRmQEtyf_WnGas9jlne10nOd3RXbIHuPV0c5T9TMi6l-2qO9rnAQsKREeKxuQx2MkfsOI3Jg_EwZEAZ73E'
      },
      {
        id: 'sans-002',
        sanskrit: 'शान्ति',
        transliteration: 'Śānti',
        meaning: 'Peace / Tranquility',
        type: 'Feminine',
        imageUrl: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'sans-003',
        sanskrit: 'धर्म',
        transliteration: 'Dharma',
        meaning: 'Duty / Law',
        type: 'Masculine',
        imageUrl: 'https://images.unsplash.com/photo-1517840545241-c46b1c782782?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'sans-004',
        sanskrit: 'योग',
        transliteration: 'Yoga',
        meaning: 'Union / Connection',
        type: 'Masculine',
        imageUrl: 'https://images.unsplash.com/photo-1588286840104-44d471e98d89?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'sans-005',
        sanskrit: 'प्रेम',
        transliteration: 'Prema',
        meaning: 'Divine Love',
        type: 'Neutral',
        imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  'chakras': {
    id: 'chakras',
    title: 'Çakralar',
    description: '7 Enerji Merkezi • Teori',
    version: 1,
    themeColor: 'from-[#ffecd2] to-[#fcb69f]',
    cards: [
      {
        id: 'chakra-001',
        sanskrit: 'मूलाधार',
        transliteration: 'Mūlādhāra',
        meaning: 'Root Chakra',
        type: 'Neutral',
        imageUrl: 'https://images.unsplash.com/photo-1536623976984-13df877f88de?q=80&w=800&auto=format&fit=crop'
      },
      // Add more chakra cards here
    ]
  },
  'mudras': {
    id: 'mudras',
    title: 'Mudralar',
    description: 'El Yogasının Gücü',
    version: 1,
    themeColor: 'from-[#f6d365] to-[#fda085]',
    cards: [
      {
        id: 'mudra-001',
        sanskrit: 'ज्ञान मुद्रा',
        transliteration: 'Gyan Mudra',
        meaning: 'Mudra of Knowledge',
        type: 'Neutral',
        imageUrl: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  'asanas': {
    id: 'asanas',
    title: 'Asanalar',
    description: 'Temel Duruşlar',
    version: 1,
    themeColor: 'from-[#e6b980] to-[#eacda3]',
    cards: [
      {
        id: 'asana-001',
        sanskrit: 'पद्मासन',
        transliteration: 'Padmāsana',
        meaning: 'Lotus Pose',
        type: 'Neutral',
        imageUrl: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop'
      }
    ]
  }
};

// Backward compatibility helper if needed, basically alias to the first deck
export const SAMPLE_DECK = DECKS['sanskrit-basics'];