import { Product } from './types';

export const PRODUCTS: Product[] = [
  // --- Pokemon - English Packs ---
  {
    id: 'pk-en-1',
    name: 'Pokémon TCG: Scarlet & Violet - Twilight Masquerade Booster Pack',
    category: 'pokemon-english',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80', // Anime/gamer style cover
    description: 'Adventure awaits in the land of Kitakami! Uncover the mystery of the masked Legendary Pokémon Ogerpon, teams of new Loyal Three, and powerful ancient allies.',
    cardsPerPack: 10,
    releaseYear: '2024',
    stock: 120,
    rating: 4.8,
    featured: true
  },
  {
    id: 'pk-en-2',
    name: 'Pokémon TCG: Obsidian Flames Booster Pack',
    category: 'pokemon-english',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=600&auto=format&fit=crop&q=80',
    description: 'Hot embers illuminate the pitch-black night and sparks flare into an inferno as Charizard ex surges forth with newfound powers of darkness!',
    cardsPerPack: 10,
    releaseYear: '2023',
    stock: 85,
    rating: 4.9,
    featured: true
  },
  {
    id: 'pk-en-3',
    name: 'Pokémon TCG: Crown Zenith Booster Pack',
    category: 'pokemon-english',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80',
    description: 'Celebrate the Galarian Era with majestic Legendaries and gorgeous Galarian Gallery artwork containing secret rares that are highly sought after by collectors.',
    cardsPerPack: 10,
    releaseYear: '2023',
    stock: 42,
    rating: 4.9,
    featured: false
  },
  {
    id: 'pk-en-4',
    name: 'Pokémon TCG: 151 Booster Pack (English)',
    category: 'pokemon-english',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    description: 'Return to the very beginning with the original 151 Pokémon. Jump-start your collection with Mew ex, Alakazam ex, and beautiful illustration rares of the classic Kanto starters.',
    cardsPerPack: 10,
    releaseYear: '2023',
    stock: 35,
    rating: 5.0,
    featured: true
  },

  // --- Pokemon - Japanese Packs ---
  {
    id: 'pk-jp-1',
    name: 'Pokémon TCG: Shiny Treasure ex Booster Pack (Japanese)',
    category: 'pokemon-japanese',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80', // Colorful anime illustration
    description: 'The highly anticipated Japanese High Class Pack of 2023. Loaded with shiny Pokémon ex, secret illustration rares, and a guaranteed holographic card in every pack.',
    cardsPerPack: 10,
    releaseYear: '2023',
    stock: 90,
    rating: 4.9,
    featured: true
  },
  {
    id: 'pk-jp-2',
    name: 'Pokémon TCG: Mask of Change Booster Pack (Japanese)',
    category: 'pokemon-japanese',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=600&auto=format&fit=crop&q=80',
    description: 'Introduces the legendary Ogerpon in Japanese print. Known for its perfect silver borders, textured foils, and high pull rates of beautiful illustration cards.',
    cardsPerPack: 5,
    releaseYear: '2024',
    stock: 200,
    rating: 4.7,
    featured: false
  },
  {
    id: 'pk-jp-3',
    name: 'Pokémon TCG: 151 Booster Pack (Japanese)',
    category: 'pokemon-japanese',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1608889174637-3e6f66299b80?w=600&auto=format&fit=crop&q=80',
    description: 'The ultra-premium Japanese edition of Pokemon 151 featuring gorgeous Pokéball holographic patterns and highly coveted Erika’s Invitation and Charizard Masterball cards.',
    cardsPerPack: 7,
    releaseYear: '2023',
    stock: 28,
    rating: 5.0,
    featured: true
  },

  // --- One Piece - English Packs ---
  {
    id: 'op-en-1',
    name: 'One Piece TCG: Wings of the Captain [OP-06] Booster Pack',
    category: 'onepiece-english',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80', // Epic manga backdrop styling
    description: 'Focuses on Zoro and Sanji as the twin wings of Luffy. Elevate your Fishman and Thriller Bark pirate decks with extreme competitive additions.',
    cardsPerPack: 12,
    releaseYear: '2024',
    stock: 74,
    rating: 4.8,
    featured: true
  },
  {
    id: 'op-en-2',
    name: 'One Piece TCG: Awakening of the New Era [OP-05] Booster Pack',
    category: 'onepiece-english',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    description: 'Celebrating the 1st Anniversary of One Piece TCG! Features Monkey D. Luffy Gear 5 as a super-rare manga card design. A holy grail for collectors!',
    cardsPerPack: 12,
    releaseYear: '2023',
    stock: 19,
    rating: 5.0,
    featured: true
  },
  {
    id: 'op-en-3',
    name: 'One Piece TCG: Pillars of Strength [OP-03] Booster Pack',
    category: 'onepiece-english',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&auto=format&fit=crop&q=80',
    description: 'The third collection introduces the mighty Yellow color decks led by Big Mom Pirates and the CP9 agent Rob Lucci. Ideal for building multi-colored powerhouses.',
    cardsPerPack: 12,
    releaseYear: '2023',
    stock: 45,
    rating: 4.6,
    featured: false
  },

  // --- One Piece - Japanese Packs ---
  {
    id: 'op-jp-1',
    name: 'One Piece TCG: Two Legends [OP-08] Booster Pack (Japanese)',
    category: 'onepiece-japanese',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop&q=80',
    description: 'The ultra new Japanese expansion celebrating the legends Silvers Rayleigh and Gol D. Roger. Features pristine Japanese card texture and holographic shine.',
    cardsPerPack: 6,
    releaseYear: '2024',
    stock: 150,
    rating: 4.9,
    featured: true
  },
  {
    id: 'op-jp-2',
    name: 'One Piece TCG: 500 Years in the Future [OP-07] Booster Pack (Japanese)',
    category: 'onepiece-japanese',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80',
    description: 'Journey to the futuristic Egghead Island! Unlock advanced Vegapunk science cards, Jewelry Bonney cards, and gorgeous alternative art textures.',
    cardsPerPack: 6,
    releaseYear: '2024',
    stock: 180,
    rating: 4.7,
    featured: false
  },

  // --- Anime Action Figures ---
  {
    id: 'fig-1',
    name: 'Monkey D. Luffy Gear 5 "Gigant Edition" Figuarts ZERO',
    category: 'action-fig',
    anime: 'One Piece',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1559897200-b0ebb809f72e?w=600&auto=format&fit=crop&q=80', // Action figure focus lookalike
    description: 'Witness Luffy in his supreme warrior state of Liberation - Gear 5! Styled dynamically with dramatic translucent purple clouds and an expression of joyful laughter.',
    releaseYear: '2024',
    stock: 8,
    rating: 5.0,
    featured: true
  },
  {
    id: 'fig-2',
    name: 'Roronoa Zoro (San-Zen-Se-Kai) Ultimate Diorama',
    category: 'action-fig',
    anime: 'One Piece',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80',
    description: 'An exceptional PVC scale figure capturing Roronoa Zoro executing his signature Three Sword Style finisher with amazing green dragon aura effects.',
    releaseYear: '2023',
    stock: 12,
    rating: 4.9,
    featured: true
  },
  {
    id: 'fig-3',
    name: 'Son Goku (Ultra Instinct) Masterlise Ichibansho',
    category: 'action-fig',
    anime: 'Dragon Ball Z',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80', // Epic blue highlights
    description: 'Imported from Japan, this premium scale figure displays Gokus ultimate silver-haired zen form with meticulously ripped clothes and serious focus.',
    releaseYear: '2023',
    stock: 15,
    rating: 4.8,
    featured: false
  },
  {
    id: 'fig-4',
    name: 'Kakashi Hatake (Susanoo Version) G.E.M. Series',
    category: 'action-fig',
    anime: 'Naruto',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=80',
    description: 'Featuring dynamic translucent blue Ribs of Susanoo surrounding Kakashi. It boasts dual Mangekyo Sharingan eyes and the iconic Lightning Blade in hand.',
    releaseYear: '2024',
    stock: 4,
    rating: 4.9,
    featured: true
  },
  {
    id: 'fig-5',
    name: 'Satoru Gojo (Incommensurable Domain: Infinite Void) Pop Up Parade L',
    category: 'action-fig',
    anime: 'Jujutsu Kaisen',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    description: 'Showcases Satoru Gojo unmasking his blue eyes to release his legendary Infinite Void domain. Designed with a custom transparent dark base.',
    releaseYear: '2024',
    stock: 22,
    rating: 5.0,
    featured: false
  },
  {
    id: 'fig-6',
    name: 'Nezuko Kamado (Blood Demon Art) Figuarts Mini',
    category: 'action-fig',
    anime: 'Demon Slayer',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80',
    description: 'An adorable yet fierce chibi scale figure capturing Nezuko kamado igniting pink flames of her demonic power. Highly detailed hair and outfit detailing.',
    releaseYear: '2023',
    stock: 30,
    rating: 4.7,
    featured: false
  }
];

export const ANIME_CATEGORIES = [
  'All Anime',
  'One Piece',
  'Dragon Ball Z',
  'Naruto',
  'Demon Slayer',
  'Jujutsu Kaisen'
];
