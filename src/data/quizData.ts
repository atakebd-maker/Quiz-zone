import { QuizCategory } from '../types/quiz';

export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: 'world-geography',
    slug: 'world-geography',
    title: 'World Geography Quiz',
    description: 'Explore continents, rivers, mountain ranges, oceans, and geographical landmarks across the globe.',
    iconName: 'Globe',
    colorScheme: 'blue',
    featured: true,
    popular: true,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'geo-1',
        categoryId: 'world-geography',
        question: 'Which river is internationally recognized as the longest in the world by total length?',
        options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
        correctIndex: 1,
        explanation: 'The Nile River in Africa spans approximately 6,650 kilometers (4,132 miles), making it the longest river in the world.',
        interestingFact: 'The Nile flows northward through 11 different African nations before emptying into the Mediterranean Sea.'
      },
      {
        id: 'geo-2',
        categoryId: 'world-geography',
        question: 'What is the largest desert on Earth by total land area?',
        options: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctic Desert'],
        correctIndex: 3,
        explanation: 'A desert is defined by receiving less than 250 millimeters of precipitation per year. Antarctica covers 14.2 million square kilometers, making it the largest polar desert.',
        interestingFact: 'The Dry Valleys in Antarctica have not seen rain or snow for an estimated 2 million years!'
      },
      {
        id: 'geo-3',
        categoryId: 'world-geography',
        question: 'Which country spans the highest number of time zones, including its overseas territories?',
        options: ['Russia', 'United States', 'France', 'United Kingdom'],
        correctIndex: 2,
        explanation: 'Due to its numerous overseas regions and collectivities located around the world, France encompasses 12 standard time zones (13 during daylight saving).',
        interestingFact: 'Russia covers the most contiguous time zones on a single mainland landmass, with 11 consecutive zones.'
      },
      {
        id: 'geo-4',
        categoryId: 'world-geography',
        question: 'What is the deepest known oceanic trench on the planet?',
        options: ['Java Trench', 'Puerto Rico Trench', 'Mariana Trench', 'Tonga Trench'],
        correctIndex: 2,
        explanation: 'The Mariana Trench in the western Pacific Ocean reaches a maximum known depth of approximately 10,994 meters (36,070 feet) at the Challenger Deep.',
        interestingFact: 'Mount Everest could sit at the bottom of Challenger Deep and its summit would still be submerged under more than 2 kilometers of water.'
      },
      {
        id: 'geo-5',
        categoryId: 'world-geography',
        question: 'Which country possesses the longest continuous coastline in the world?',
        options: ['Australia', 'Canada', 'Indonesia', 'Norway'],
        correctIndex: 1,
        explanation: 'Canada holds the world record with over 202,080 kilometers (125,567 miles) of coastline bordering the Atlantic, Pacific, and Arctic oceans.',
        interestingFact: 'At a walking pace of 20 km per day, it would take a person roughly 27 years to walk the entire Canadian coastline.'
      },
      {
        id: 'geo-6',
        categoryId: 'world-geography',
        question: 'Lake Baikal, the deepest freshwater lake on Earth, is located in which country?',
        options: ['Mongolia', 'Russia', 'Kazakhstan', 'Canada'],
        correctIndex: 1,
        explanation: 'Lake Baikal in southern Siberia, Russia reaches depths of 1,642 meters (5,387 feet) and holds roughly 20% of Earth’s unfrozen surface freshwater.',
        interestingFact: 'Lake Baikal is also the oldest lake on Earth, estimated to be between 25 and 30 million years old.'
      }
    ]
  },
  {
    id: 'countries-capitals',
    slug: 'countries-capitals',
    title: 'Countries and Capitals Quiz',
    description: 'Test your mastery of national capitals, global governance centers, and sovereign states.',
    iconName: 'Building2',
    colorScheme: 'sky',
    featured: true,
    popular: true,
    difficulty: 'Beginner',
    questions: [
      {
        id: 'cap-1',
        categoryId: 'countries-capitals',
        question: 'What is the capital city of Japan?',
        options: ['Beijing', 'Tokyo', 'Seoul', 'Bangkok'],
        correctIndex: 1,
        explanation: 'Tokyo serves as the capital and political center of Japan, and anchor of the world’s most populous metropolitan area.',
        interestingFact: 'Tokyo was originally a small fishing village named Edo before becoming the imperial capital in 1868.'
      },
      {
        id: 'cap-2',
        categoryId: 'countries-capitals',
        question: 'Which city is the federal capital of Australia?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
        correctIndex: 2,
        explanation: 'Canberra was chosen as a compromise between rival candidate cities Sydney and Melbourne in 1908 and fully designed by architects Walter Burley Griffin and Marion Mahony Griffin.',
        interestingFact: 'The name Canberra is derived from an indigenous Ngunnawal word meaning "meeting place".'
      },
      {
        id: 'cap-3',
        categoryId: 'countries-capitals',
        question: 'What is the capital city of Canada?',
        options: ['Toronto', 'Montreal', 'Vancouver', 'Ottawa'],
        correctIndex: 3,
        explanation: 'Queen Victoria designated Ottawa as the capital of the Province of Canada in 1857 because of its central location between English and French populations and defensible position.',
        interestingFact: 'Ottawa’s Rideau Canal becomes the world’s largest naturally frozen ice skating rink each winter.'
      },
      {
        id: 'cap-4',
        categoryId: 'countries-capitals',
        question: 'What is the official capital of Brazil?',
        options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
        correctIndex: 2,
        explanation: 'Brasília was inaugurated in 1960 as a planned federal capital to promote development in Brazil’s interior, featuring an airplane-shaped master plan by Lúcio Costa.',
        interestingFact: 'Brasília was built in just 41 months between 1956 and 1960 under President Juscelino Kubitschek.'
      },
      {
        id: 'cap-5',
        categoryId: 'countries-capitals',
        question: 'Which city is the capital of Turkey?',
        options: ['Istanbul', 'Ankara', 'Izmir', 'Antalya'],
        correctIndex: 1,
        explanation: 'While Istanbul is Turkey’s largest commercial metropolis, Ankara was established as the modern republic’s capital in 1923 by Mustafa Kemal Atatürk.',
        interestingFact: 'Ankara is renowned for its historic Roman citadel and the mausoleum of Atatürk, the Anıtkabir.'
      },
      {
        id: 'cap-6',
        categoryId: 'countries-capitals',
        question: 'What is the capital city of Nigeria?',
        options: ['Lagos', 'Abuja', 'Kano', 'Ibadan'],
        correctIndex: 1,
        explanation: 'Abuja officially replaced Lagos as the capital of Nigeria in December 1991, chosen for its central geography and cultural neutrality.',
        interestingFact: 'Abuja’s skyline is dominated by Zuma Rock, an enormous 725-meter monolith sometimes called the "Gateway to Abuja".'
      }
    ]
  },
  {
    id: 'world-food',
    slug: 'world-food',
    title: 'World Food Quiz',
    description: 'Savor culinary traditions, exotic spices, heritage dishes, and gastronomic history from every continent.',
    iconName: 'UtensilsCrossed',
    colorScheme: 'indigo',
    popular: true,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'food-1',
        categoryId: 'world-food',
        question: 'Which spice is recognized as the most expensive in the world by weight?',
        options: ['Vanilla', 'Cardamom', 'Saffron', 'Cinnamon'],
        correctIndex: 2,
        explanation: 'Saffron is harvested by hand from the delicate stigmas of the Crocus sativus flower. It takes up to 75,000 flowers to produce a single pound of saffron.',
        interestingFact: 'Over 90% of the world’s saffron supply is cultivated and harvested in Iran.'
      },
      {
        id: 'food-2',
        categoryId: 'world-food',
        question: 'What country is the birthplace of the pastry known as the Croissant?',
        options: ['France', 'Austria', 'Switzerland', 'Belgium'],
        correctIndex: 1,
        explanation: 'The croissant is derived from the Austrian kipferl, which dates back to at least the 13th century in Vienna before being popularized in Paris in the 1830s.',
        interestingFact: 'The crescent shape was allegedly created by Viennese bakers to celebrate the defeat of Ottoman forces in 1683.'
      },
      {
        id: 'food-3',
        categoryId: 'world-food',
        question: 'What key ingredient gives traditional Japanese Kimchi or Miso its probiotic fermented base?',
        options: ['Fermented Soybeans', 'Barley Malt', 'Rice Bran', 'Kelp Powder'],
        correctIndex: 0,
        explanation: 'Traditional Japanese miso paste is created by fermenting soybeans with salt and kōji (the fungus Aspergillus oryzae).',
        interestingFact: 'Miso aging can range from a few weeks for mild white miso to over three years for rich, dark red miso.'
      },
      {
        id: 'food-4',
        categoryId: 'world-food',
        question: 'In Italian culinary law, authentic Neapolitan Pizza Margherita must feature which variety of cheese?',
        options: ['Parmigiano Reggiano', 'Gorgonzola', 'Mozzarella di Bufala Campana', 'Pecorino Romano'],
        correctIndex: 2,
        explanation: 'Authentic Pizza Napoletana certified by the AVPN requires certified fresh Mozzarella di Bufala Campana or Fior di Latte.',
        interestingFact: 'Pizza Margherita was reportedly created in 1889 by Raffaele Esposito to represent the colors of the Italian flag: red tomato, white mozzarella, and green basil.'
      },
      {
        id: 'food-5',
        categoryId: 'world-food',
        question: 'What is the primary ingredient in the Mediterranean spread known as Hummus?',
        options: ['Fava Beans', 'Lentils', 'Chickpeas', 'White Cannellini Beans'],
        correctIndex: 2,
        explanation: 'The Arabic word "hummus" literally translates to chickpeas (garbanzo beans), blended with tahini, lemon juice, garlic, and olive oil.',
        interestingFact: 'Chickpeas have been cultivated in the Middle East for more than 7,500 years.'
      },
      {
        id: 'food-6',
        categoryId: 'world-food',
        question: 'Which fruit is famous in Southeast Asia for its pungent aroma and rich, custard-like flesh?',
        options: ['Dragon Fruit', 'Durian', 'Jackfruit', 'Mangosteen'],
        correctIndex: 1,
        explanation: 'Known as the "King of Fruits", durian has a spiky husk and a notoriously strong sulfurous aroma that often gets it banned on public transit.',
        interestingFact: 'Despite its sharp scent, its custard-like flesh has complex flavors of sweet cream, caramel, and almond.'
      }
    ]
  },
  {
    id: 'general-knowledge',
    slug: 'general-knowledge',
    title: 'General Knowledge Quiz',
    description: 'A rich mixture of trivia covering culture, arts, famous inventions, world records, and common curiosities.',
    iconName: 'Compass',
    colorScheme: 'blue',
    featured: true,
    popular: true,
    difficulty: 'All Levels',
    questions: [
      {
        id: 'gk-1',
        categoryId: 'general-knowledge',
        question: 'Who painted the celebrated masterpiece "The Starry Night"?',
        options: ['Claude Monet', 'Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí'],
        correctIndex: 2,
        explanation: 'Vincent van Gogh created "The Starry Night" in June 1889 depicting the view from his asylum room in Saint-Rémy-de-Provence.',
        interestingFact: 'Van Gogh painted the nocturnal sky scene largely from memory during the daytime.'
      },
      {
        id: 'gk-2',
        categoryId: 'general-knowledge',
        question: 'How many keys are standard on a full-size acoustic piano keyboard?',
        options: ['76', '88', '92', '104'],
        correctIndex: 1,
        explanation: 'A standard full-size piano has 88 keys: 52 white keys for diatonic notes and 36 black keys representing accidentals.',
        interestingFact: 'Before the late 19th century, pianos had 85 keys until Steinway & Sons established the 88-key standard in the 1880s.'
      },
      {
        id: 'gk-3',
        categoryId: 'general-knowledge',
        question: 'Which element is represented by the chemical symbol "Au" on the periodic table?',
        options: ['Silver', 'Gold', 'Argon', 'Aluminum'],
        correctIndex: 1,
        explanation: 'The chemical symbol "Au" comes from the Latin word "Aurum", which translates poetically to "shining dawn".',
        interestingFact: 'All the gold ever mined in human history would fit into a single cube measuring just 22 meters on each side.'
      },
      {
        id: 'gk-4',
        categoryId: 'general-knowledge',
        question: 'What is the fastest land animal recorded in short sprinting bursts?',
        options: ['Pronghorn', 'Lion', 'Cheetah', 'Quarter Horse'],
        correctIndex: 2,
        explanation: 'The cheetah (Acinonyx jubatus) can achieve speeds between 97 and 113 km/h (60 to 70 mph) during hunting accelerations.',
        interestingFact: 'A cheetah can accelerate from 0 to 60 miles per hour in just 3 seconds, faster than most production sports cars.'
      },
      {
        id: 'gk-5',
        categoryId: 'general-knowledge',
        question: 'Which language holds the status of having the most native speakers worldwide?',
        options: ['English', 'Spanish', 'Mandarin Chinese', 'Hindi'],
        correctIndex: 2,
        explanation: 'Mandarin Chinese has over 900 million native first-language speakers, primarily throughout mainland China and Taiwan.',
        interestingFact: 'English remains the most widely spoken language overall when counting both native and second-language speakers.'
      },
      {
        id: 'gk-6',
        categoryId: 'general-knowledge',
        question: 'In which year did the Titanic sink on its maiden voyage across the Atlantic?',
        options: ['1905', '1912', '1918', '1923'],
        correctIndex: 1,
        explanation: 'The RMS Titanic struck an iceberg on the night of April 14, 1912, and sank in the early morning hours of April 15, 1912.',
        interestingFact: 'The shipwreck of Titanic lay undiscovered on the North Atlantic seabed until 1985, when Robert Ballard located it.'
      }
    ]
  },
  {
    id: 'science',
    slug: 'science',
    title: 'Science Quiz',
    description: 'Delve into the fundamental laws of physics, chemistry, thermodynamics, genetics, and modern discovery.',
    iconName: 'FlaskConical',
    colorScheme: 'cyan',
    featured: true,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'sci-1',
        categoryId: 'science',
        question: 'What is the speed of light in a vacuum, rounded to standard scientific units?',
        options: ['150,000 km/s', '299,792 km/s', '384,400 km/s', '1,080,000 km/s'],
        correctIndex: 1,
        explanation: 'The speed of light in a vacuum is universally denoted as "c" and exactly defined as 299,792,458 meters per second (approx. 300,000 km/s).',
        interestingFact: 'Light traveling from the Sun takes roughly 8 minutes and 20 seconds to reach the surface of the Earth.'
      },
      {
        id: 'sci-2',
        categoryId: 'science',
        question: 'Which gas is the most abundant by volume in Earth’s atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
        correctIndex: 2,
        explanation: 'Nitrogen makes up approximately 78.08% of Earth’s atmosphere, followed by oxygen at approximately 20.95%.',
        interestingFact: 'Pure nitrogen is chemically inert at standard room conditions because of its exceptionally strong triple covalent bond.'
      },
      {
        id: 'sci-3',
        categoryId: 'science',
        question: 'What organelle is famously known as the "powerhouse of the eukaryotic cell"?',
        options: ['Endoplasmic Reticulum', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'],
        correctIndex: 2,
        explanation: 'Mitochondria generate most of the cell’s chemical energy supply in the form of Adenosine Triphosphate (ATP) via cellular respiration.',
        interestingFact: 'Mitochondria contain their own unique circular DNA inherited almost exclusively from the maternal lineage.'
      },
      {
        id: 'sci-4',
        categoryId: 'science',
        question: 'What is the pH level of pure distilled neutral water at standard room temperature (25°C)?',
        options: ['5', '7', '9', '14'],
        correctIndex: 1,
        explanation: 'On the logarithmic pH scale, a value of 7 represents exact neutrality, where hydrogen ion and hydroxide ion concentrations are equal.',
        interestingFact: 'Because the scale is logarithmic, water with a pH of 6 is ten times more acidic than water with a pH of 7.'
      },
      {
        id: 'sci-5',
        categoryId: 'science',
        question: 'Which scientist formulated the Three Laws of Motion and the universal law of gravitation?',
        options: ['Galileo Galilei', 'Sir Isaac Newton', 'Albert Einstein', 'Johannes Kepler'],
        correctIndex: 1,
        explanation: 'Sir Isaac Newton published his landmark work "Philosophiae Naturalis Principia Mathematica" in 1687, defining the foundation of classical mechanics.',
        interestingFact: 'Newton also invented calculus (concurrently with Gottfried Leibniz) to solve the mathematical problems of planetary motion.'
      },
      {
        id: 'sci-6',
        categoryId: 'science',
        question: 'Absolute zero, the theoretical point where molecular motion ceases, is equal to what temperature?',
        options: ['0°C', '-100°C', '-273.15°C', '-459.67°C'],
        correctIndex: 2,
        explanation: 'Absolute zero corresponds to 0 Kelvin or -273.15° Celsius (-459.67° Fahrenheit).',
        interestingFact: 'At temperatures within billionths of a degree above absolute zero, matter enters a fifth state known as a Bose-Einstein Condensate.'
      }
    ]
  },
  {
    id: 'history',
    slug: 'history',
    title: 'History Quiz',
    description: 'Travel through ancient empires, historic revolutions, monumental treaties, and world-shaping events.',
    iconName: 'Landmark',
    colorScheme: 'blue',
    popular: true,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'hist-1',
        categoryId: 'history',
        question: 'In which year did the French Revolution begin with the storming of the Bastille?',
        options: ['1776', '1789', '1799', '1804'],
        correctIndex: 1,
        explanation: 'The storming of the Bastille fortress prison on July 14, 1789, ignited the French Revolution against the absolute monarchy of Louis XVI.',
        interestingFact: 'Bastille Day (July 14) remains France’s national holiday, celebrated every year with the oldest regular military parade in Europe.'
      },
      {
        id: 'hist-2',
        categoryId: 'history',
        question: 'Who was the first Emperor of a unified China, known for the Terracotta Army?',
        options: ['Kublai Khan', 'Qin Shi Huang', 'Emperor Wu of Han', 'Sun Yat-sen'],
        correctIndex: 1,
        explanation: 'Qin Shi Huang unified the warring states of China in 221 BC, standardizing currency, weights, measures, and the Chinese script.',
        interestingFact: 'More than 8,000 life-sized terracotta soldiers, chariots, and horses were buried with him to protect his tomb in the afterlife.'
      },
      {
        id: 'hist-3',
        categoryId: 'history',
        question: 'The ancient Library of Alexandria was located in which modern-day country?',
        options: ['Greece', 'Italy', 'Egypt', 'Turkey'],
        correctIndex: 2,
        explanation: 'The Great Library of Alexandria was founded in Egypt during the Ptolemaic dynasty around the 3rd century BC under Ptolemy II Philadelphus.',
        interestingFact: 'Scholars at the library were required to copy every manuscript entering the city by ship before returning the original or copy to travelers.'
      },
      {
        id: 'hist-4',
        categoryId: 'history',
        question: 'Which international treaty officially concluded the First World War in 1919?',
        options: ['Treaty of Paris', 'Treaty of Ghent', 'Treaty of Versailles', 'Treaty of Utrecht'],
        correctIndex: 2,
        explanation: 'The Treaty of Versailles was signed on June 28, 1919, in the Hall of Mirrors at the Palace of Versailles, formally ending World War I.',
        interestingFact: 'The treaty created the League of Nations, the predecessor to today’s United Nations.'
      },
      {
        id: 'hist-5',
        categoryId: 'history',
        question: 'Who led the famous March to the Sea in 1930 to protest the British colonial salt tax in India?',
        options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Subhas Chandra Bose', 'Bhagat Singh'],
        correctIndex: 1,
        explanation: 'Mahatma Gandhi led the 240-mile Salt March from Sabarmati Ashram to Dandi, initiating nationwide nonviolent civil disobedience against British colonial monopolies.',
        interestingFact: 'Over 60,000 Indians, including Gandhi, were imprisoned following the salt protest.'
      },
      {
        id: 'hist-6',
        categoryId: 'history',
        question: 'Which civilization constructed the ancient mountain citadel of Machu Picchu in Peru?',
        options: ['Mayan', 'Aztec', 'Inca', 'Olmec'],
        correctIndex: 2,
        explanation: 'Machu Picchu was built in the 15th century by the Inca Empire under Emperor Pachacuti high in the Andes mountains.',
        interestingFact: 'The stones were carved with such precision ("ashlar" masonry) that not even a knife blade can fit between the unmortared blocks.'
      }
    ]
  },
  {
    id: 'animals-nature',
    slug: 'animals-nature',
    title: 'Animals and Nature Quiz',
    description: 'Encounter the marvels of the animal kingdom, biodiversity, marine life, and remarkable natural adaptations.',
    iconName: 'PawPrint',
    colorScheme: 'teal',
    featured: true,
    difficulty: 'Beginner',
    questions: [
      {
        id: 'anim-1',
        categoryId: 'animals-nature',
        question: 'What is the largest living mammal currently on planet Earth?',
        options: ['African Bush Elephant', 'Colossal Squid', 'Blue Whale', 'Sperm Whale'],
        correctIndex: 2,
        explanation: 'The Blue Whale (Balaenoptera musculus) can reach lengths of up to 30 meters (100 feet) and weigh up to 200 tons.',
        interestingFact: 'A blue whale’s heart alone weighs about 400 pounds (180 kg)—roughly the size of a small golf cart!'
      },
      {
        id: 'anim-2',
        categoryId: 'animals-nature',
        question: 'How many hearts does an octopus possess?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctIndex: 2,
        explanation: 'An octopus has three hearts: two branchial hearts pump blood through the gills, while a systemic central heart pumps blood to the body.',
        interestingFact: 'Octopus blood is blue because it uses a copper-rich protein called hemocyanin rather than iron-rich hemoglobin to transport oxygen.'
      },
      {
        id: 'anim-3',
        categoryId: 'animals-nature',
        question: 'Which species of bird is capable of flying backwards as well as hovering in mid-air?',
        options: ['Swallow', 'Hummingbird', 'Swift', 'Kingfisher'],
        correctIndex: 1,
        explanation: 'Hummingbirds have specialized ball-and-socket shoulder joints that allow their wings to rotate 180 degrees, generating lift on both forward and backward strokes.',
        interestingFact: 'A hummingbird’s wings can flap up to 80 times per second, and its heart can beat over 1,200 times per minute.'
      },
      {
        id: 'anim-4',
        categoryId: 'animals-nature',
        question: 'What is the primary food source of the Giant Panda in the wild?',
        options: ['Eucalyptus Leaves', 'Bamboo Shoots', 'Acorns and Berries', 'Insects and Roots'],
        correctIndex: 1,
        explanation: 'Bamboo makes up over 99% of a wild giant panda’s diet. An adult panda consumes between 12 to 38 kilograms of bamboo every single day.',
        interestingFact: 'Pandas have a modified wrist bone that functions like an opposable thumb, helping them hold bamboo stems while chewing.'
      },
      {
        id: 'anim-5',
        categoryId: 'animals-nature',
        question: 'Which marine creature is the only known animal where the male carries and gives birth to offspring?',
        options: ['Clownfish', 'Seahorse', 'Sea Urchin', 'Manta Ray'],
        correctIndex: 1,
        explanation: 'In seahorses (genus Hippocampus), the female transfers her eggs into the male’s specialized brood pouch, where he fertilizes and carries them to term.',
        interestingFact: 'A male seahorse can give birth to anywhere from 5 to over 1,000 baby seahorses (called fry) in a single labor.'
      },
      {
        id: 'anim-6',
        categoryId: 'animals-nature',
        question: 'What is the collective noun for a group of flamingos?',
        options: ['Flamboyance', 'Murder', 'Pride', 'Parliament'],
        correctIndex: 0,
        explanation: 'A gathering of flamingos is known as a "flamboyance", fitting their vivid pink plumage and synchronized dance rituals.',
        interestingFact: 'Flamingos get their pink coloring from carotenoid pigments found in the algae and brine shrimp they consume.'
      }
    ]
  },
  {
    id: 'space-astronomy',
    slug: 'space-astronomy',
    title: 'Space and Astronomy Quiz',
    description: 'Venture into the cosmos: galaxies, black holes, solar systems, nebulae, and astrophysics.',
    iconName: 'Sparkles',
    colorScheme: 'sky',
    featured: true,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'space-1',
        categoryId: 'space-astronomy',
        question: 'Which planet in our solar system has the highest surface temperature?',
        options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
        correctIndex: 1,
        explanation: 'Although Mercury is closer to the Sun, Venus has a runaway greenhouse atmosphere of thick carbon dioxide and sulfuric acid clouds, trapping heat at a scorching 465°C (869°F).',
        interestingFact: 'Venus also rotates in retrograde (clockwise), meaning the Sun rises in the west and sets in the east.'
      },
      {
        id: 'space-2',
        categoryId: 'space-astronomy',
        question: 'What is the name of the supermassive black hole located at the center of the Milky Way galaxy?',
        options: ['Cygnus X-1', 'Sagittarius A*', 'Messier 87', 'Andromeda Core'],
        correctIndex: 1,
        explanation: 'Sagittarius A* (pronounced Sagittarius A-star) is the supermassive black hole at our galactic core, containing roughly 4.1 million times the mass of our Sun.',
        interestingFact: 'In May 2022, the Event Horizon Telescope collaboration unveiled the first direct image of Sagittarius A*.'
      },
      {
        id: 'space-3',
        categoryId: 'space-astronomy',
        question: 'How many planets in our solar system possess ring systems?',
        options: ['One (only Saturn)', 'Two', 'Four', 'Six'],
        correctIndex: 2,
        explanation: 'All four giant outer planets—Jupiter, Saturn, Uranus, and Neptune—possess ring systems, though Saturn’s are by far the largest and brightest.',
        interestingFact: 'Jupiter’s faint rings were only discovered in 1979 by NASA’s Voyager 1 spacecraft.'
      },
      {
        id: 'space-4',
        categoryId: 'space-astronomy',
        question: 'What is the closest major spiral galaxy to the Milky Way?',
        options: ['Triangulum Galaxy', 'Andromeda Galaxy', 'Sombrero Galaxy', 'Whirlpool Galaxy'],
        correctIndex: 1,
        explanation: 'The Andromeda Galaxy (M31) lies approximately 2.5 million light-years away from Earth and is on a gravitational collision course to merge with the Milky Way in 4.5 billion years.',
        interestingFact: 'On a dark, moonless night away from city lights, the Andromeda Galaxy is visible to the naked human eye.'
      },
      {
        id: 'space-5',
        categoryId: 'space-astronomy',
        question: 'Who was the first human being to journey into outer space?',
        options: ['Neil Armstrong', 'Yuri Gagarin', 'Alan Shepard', 'John Glenn'],
        correctIndex: 1,
        explanation: 'Soviet cosmonaut Yuri Gagarin made history on April 12, 1961, completing an orbit of Earth aboard the Vostok 1 capsule in 108 minutes.',
        interestingFact: 'Gagarin famously exclaimed "Poyekhali!" ("Let’s go!") as his rocket lifted off from the Baikonur Cosmodrome.'
      },
      {
        id: 'space-6',
        categoryId: 'space-astronomy',
        question: 'What celestial object in our solar system has the most volcanic activity?',
        options: ['Mars', 'Venus', 'Io (moon of Jupiter)', 'Titan (moon of Saturn)'],
        correctIndex: 2,
        explanation: 'Io, Jupiter’s innermost Galilean moon, has over 400 active volcanoes fueled by immense tidal heating from gravitational tug-of-war between Jupiter and nearby moons.',
        interestingFact: 'Io’s volcanic plumes can erupt sulfurous gas and silicates up to 500 kilometers into space!'
      }
    ]
  },
  {
    id: 'sports',
    slug: 'sports',
    title: 'Sports Quiz',
    description: 'Relive historic sports moments, Olympic milestones, iconic tournaments, and legendary athletes.',
    iconName: 'Trophy',
    colorScheme: 'blue',
    difficulty: 'Beginner',
    questions: [
      {
        id: 'sport-1',
        categoryId: 'sports',
        question: 'Which national team has won the most FIFA Men’s World Cup titles in soccer history?',
        options: ['Germany', 'Italy', 'Brazil', 'Argentina'],
        correctIndex: 2,
        explanation: 'Brazil holds the record with 5 FIFA World Cup championship titles (1958, 1962, 1970, 1994, and 2002).',
        interestingFact: 'Brazil is also the only country to have participated in every single FIFA World Cup tournament since its inception in 1930.'
      },
      {
        id: 'sport-2',
        categoryId: 'sports',
        question: 'In tennis, winning all four Grand Slam tournaments in a single calendar year is known as what?',
        options: ['The Triple Crown', 'A Calendar Grand Slam', 'The Masters Sweep', 'A Golden Slam'],
        correctIndex: 1,
        explanation: 'Achieving victories at the Australian Open, French Open, Wimbledon, and US Open in one calendar year is called a Calendar Grand Slam.',
        interestingFact: 'Steffi Graf achieved a "Golden Slam" in 1988 by winning all four Grand Slams plus Olympic gold in the same year.'
      },
      {
        id: 'sport-3',
        categoryId: 'sports',
        question: 'How long is an official standard marathon road race?',
        options: ['40.0 kilometers', '42.195 kilometers', '45.5 kilometers', '50.0 kilometers'],
        correctIndex: 1,
        explanation: 'An official marathon covers exactly 42.195 kilometers (26 miles and 385 yards), standardized during the 1908 London Olympic Games.',
        interestingFact: 'The 1908 standard was chosen so the race could start at Windsor Castle and finish right in front of the Royal Box at the stadium.'
      },
      {
        id: 'sport-4',
        categoryId: 'sports',
        question: 'Which athlete has won the most Olympic medals in history?',
        options: ['Usain Bolt', 'Michael Phelps', 'Larisa Latynina', 'Carl Lewis'],
        correctIndex: 1,
        explanation: 'American swimmer Michael Phelps won 28 Olympic medals (including an unprecedented 23 gold medals) across four Olympic Games.',
        interestingFact: 'In the 2008 Beijing Olympics, Phelps won 8 gold medals in a single Games, breaking Mark Spitz’s 1972 record.'
      },
      {
        id: 'sport-5',
        categoryId: 'sports',
        question: 'In basketball, how many points is a regular shot worth if made from behind the arc?',
        options: ['1', '2', '3', '4'],
        correctIndex: 2,
        explanation: 'A field goal made from beyond the designated three-point line is worth three points.',
        interestingFact: 'The NBA first introduced the three-point line in the 1979–1980 season.'
      },
      {
        id: 'sport-6',
        categoryId: 'sports',
        question: 'Which country hosted the first modern Olympic Games in 1896?',
        options: ['France', 'United Kingdom', 'Greece', 'United States'],
        correctIndex: 2,
        explanation: 'The first modern Olympic Games were held in Athens, Greece, in April 1896, paying homage to the ancient Greek Olympiads.',
        interestingFact: 'Winners in 1896 were awarded silver medals and olive branches; gold medals were introduced in the 1904 St. Louis Games.'
      }
    ]
  },
  {
    id: 'technology',
    slug: 'technology',
    title: 'Technology Quiz',
    description: 'Test your understanding of software engineering, computers, cybersecurity, the internet, and AI.',
    iconName: 'Cpu',
    colorScheme: 'indigo',
    featured: true,
    popular: true,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'tech-1',
        categoryId: 'technology',
        question: 'Who is widely celebrated as the world’s first computer programmer for writing an algorithm for Babbage’s Analytical Engine?',
        options: ['Alan Turing', 'Ada Lovelace', 'Grace Hopper', 'Charles Babbage'],
        correctIndex: 1,
        explanation: 'Ada Lovelace published the first algorithm intended for processing on Charles Babbage’s mechanical Analytical Engine in 1843.',
        interestingFact: 'Lovelace foresaw that computers could compose music and manipulate graphics, not just crunch numbers.'
      },
      {
        id: 'tech-2',
        categoryId: 'technology',
        question: 'What do the letters "HTTP" stand for in web internet architecture?',
        options: ['HyperText Transfer Protocol', 'High Technical Transfer Process', 'Hyperlink Text Testing Program', 'Home Terminal Transfer Packet'],
        correctIndex: 0,
        explanation: 'HTTP stands for HyperText Transfer Protocol, the foundational protocol used by the World Wide Web to transmit web pages.',
        interestingFact: 'Sir Tim Berners-Lee created HTTP along with HTML and URLs while working at CERN in 1989.'
      },
      {
        id: 'tech-3',
        categoryId: 'technology',
        question: 'In computer science, what is the time complexity of binary search on a sorted array of size N?',
        options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'],
        correctIndex: 1,
        explanation: 'Binary search halves the search space at every step, yielding logarithmic time complexity O(log N).',
        interestingFact: 'Searching through 1,000,000 sorted items using binary search takes at most 20 comparisons!'
      },
      {
        id: 'tech-4',
        categoryId: 'technology',
        question: 'Which computer scientist coined the term "compiler" and popularized machine-independent programming languages?',
        options: ['Margaret Hamilton', 'Rear Admiral Grace Hopper', 'Katherine Johnson', 'Barbara Liskov'],
        correctIndex: 1,
        explanation: 'Grace Hopper developed the first compiler (A-0 System) in 1952 and helped shape COBOL, proving code could be written in English-like statements.',
        interestingFact: 'She also popularized the term "debugging" after discovering a real moth trapped inside the Mark II relay computer in 1947.'
      },
      {
        id: 'tech-5',
        categoryId: 'technology',
        question: 'Which open-source operating system kernel was created by Linus Torvalds in 1991?',
        options: ['Unix', 'Linux', 'BSD', 'DOS'],
        correctIndex: 1,
        explanation: 'Linus Torvalds released the Linux kernel in 1991 as a free alternative to MINIX, which now powers the majority of global servers, supercomputers, and Android.',
        interestingFact: 'All 500 of the world’s top 500 fastest supercomputers run on Linux distributions.'
      },
      {
        id: 'tech-6',
        categoryId: 'technology',
        question: 'What does "SSD" stand for in computer storage hardware?',
        options: ['Solid State Drive', 'Silicon Storage Device', 'Synchronous Serial Disk', 'Static System Driver'],
        correctIndex: 0,
        explanation: 'Solid State Drive (SSD) uses NAND flash memory without moving mechanical parts, resulting in vastly faster read/write speeds than traditional HDDs.',
        interestingFact: 'SSDs use floating-gate transistors that retain electrical charge even when power is turned off.'
      }
    ]
  },
  {
    id: 'famous-places',
    slug: 'famous-places',
    title: 'Famous Places Quiz',
    description: 'Recognize world wonders, architectural icons, UNESCO World Heritage monuments, and sacred sanctuaries.',
    iconName: 'MapPin',
    colorScheme: 'sky',
    popular: true,
    difficulty: 'Beginner',
    questions: [
      {
        id: 'place-1',
        categoryId: 'famous-places',
        question: 'In which city is the Taj Mahal, the iconic ivory-white marble mausoleum, located?',
        options: ['New Delhi', 'Jaipur', 'Agra', 'Mumbai'],
        correctIndex: 2,
        explanation: 'The Taj Mahal was commissioned in 1631 by Mughal Emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal, on the banks of the Yamuna River in Agra.',
        interestingFact: 'The Taj Mahal’s marble appears to change color throughout the day, glowing soft pink in morning and golden milky under the moonlight.'
      },
      {
        id: 'place-2',
        categoryId: 'famous-places',
        question: 'Which ancient Wonder of the Ancient World is the only one still largely intact today?',
        options: ['Hanging Gardens of Babylon', 'Colossus of Rhodes', 'Great Pyramid of Giza', 'Lighthouse of Alexandria'],
        correctIndex: 2,
        explanation: 'The Great Pyramid of Giza, built around 2560 BC for Pharaoh Khufu, is the oldest and only surviving monument of the original Seven Wonders of the Ancient World.',
        interestingFact: 'The Great Pyramid was the tallest human-made structure in the world for over 3,800 years.'
      },
      {
        id: 'place-3',
        categoryId: 'famous-places',
        question: 'The Colosseum, an enormous stone amphitheater completed in 80 AD, stands in which European city?',
        options: ['Athens', 'Rome', 'Madrid', 'Florence'],
        correctIndex: 1,
        explanation: 'The Colosseum was built in Rome under Emperors Vespasian and Titus of the Flavian dynasty to hold up to 50,000 spectators.',
        interestingFact: 'The amphitheater had a massive canvas retractable awning called the Velarium, operated by Roman naval sailors to shade the crowd.'
      },
      {
        id: 'place-4',
        categoryId: 'famous-places',
        question: 'The ancient rock-cut city of Petra, featuring "The Treasury" carved into sandstone cliffs, is located in which nation?',
        options: ['Egypt', 'Jordan', 'Morocco', 'Lebanon'],
        correctIndex: 1,
        explanation: 'Petra was the thriving capital of the Nabataean kingdom established around the 4th century BC in southwestern Jordan.',
        interestingFact: 'Because of the rose-hued sandstone cliffs in which it is carved, Petra is often called the "Rose City".'
      },
      {
        id: 'place-5',
        categoryId: 'famous-places',
        question: 'What is the name of the famous 19th-century suspension bridge spanning the entrance to San Francisco Bay?',
        options: ['Brooklyn Bridge', 'Golden Gate Bridge', 'Tower Bridge', 'Sydney Harbour Bridge'],
        correctIndex: 1,
        explanation: 'The Golden Gate Bridge was opened in 1937, spanning the one-mile strait connecting San Francisco to Marin County.',
        interestingFact: 'The bridge’s signature color is officially titled "International Orange", selected because it enhances visibility in heavy sea fog.'
      },
      {
        id: 'place-6',
        categoryId: 'famous-places',
        question: 'Angkor Wat, the largest religious temple complex in the world, is situated in which country?',
        options: ['Thailand', 'Vietnam', 'Cambodia', 'Laos'],
        correctIndex: 2,
        explanation: 'Angkor Wat was built by King Suryavarman II in the early 12th century in Siem Reap, Cambodia, originally dedicated to the Hindu god Vishnu before transitioning into a Buddhist temple.',
        interestingFact: 'Angkor Wat is featured directly on Cambodia’s national flag.'
      }
    ]
  },
  {
    id: 'mathematics',
    slug: 'mathematics',
    title: 'Mathematics Quiz',
    description: 'Sharpen your mind with mental math, geometry, prime numbers, algebra, and mathematical puzzles.',
    iconName: 'Calculator',
    colorScheme: 'blue',
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'math-1',
        categoryId: 'mathematics',
        question: 'What is the only even prime number in mathematics?',
        options: ['0', '1', '2', '4'],
        correctIndex: 2,
        explanation: '2 is a prime number because its only positive divisors are 1 and 2. Any other even number is divisible by 2, making 2 the only even prime.',
        interestingFact: 'Primes are known as the "atoms" of mathematics because every integer greater than 1 can be uniquely factored into primes.'
      },
      {
        id: 'math-2',
        categoryId: 'mathematics',
        question: 'What is the sum of the interior angles of any planar triangle?',
        options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
        correctIndex: 1,
        explanation: 'In Euclidean geometry, the sum of the three interior angles of any triangle is always strictly equal to 180 degrees (π radians).',
        interestingFact: 'In non-Euclidean spherical geometry, a triangle drawn on a sphere can have interior angles summing to more than 180 degrees!'
      },
      {
        id: 'math-3',
        categoryId: 'mathematics',
        question: 'What is the mathematical constant Pi (π) rounded to four decimal places?',
        options: ['3.1412', '3.1416', '3.1428', '3.1492'],
        correctIndex: 1,
        explanation: 'The value of Pi begins 3.14159265... which rounds to 3.1416 at four decimal places.',
        interestingFact: 'Pi is an irrational and transcendental number, meaning its decimal digits never end and never settle into a repeating cycle.'
      },
      {
        id: 'math-4',
        categoryId: 'mathematics',
        question: 'In the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, ...), what is the next number?',
        options: ['11', '12', '13', '15'],
        correctIndex: 2,
        explanation: 'Each term in the Fibonacci sequence is the sum of the two preceding terms. Here, 5 + 8 = 13.',
        interestingFact: 'The ratio between successive Fibonacci numbers converges to the Golden Ratio (phi ≈ 1.618), frequently found in sunflower seeds and pinecones.'
      },
      {
        id: 'math-5',
        categoryId: 'mathematics',
        question: 'What is the square root of 256?',
        options: ['14', '16', '18', '24'],
        correctIndex: 1,
        explanation: '16 multiplied by 16 equals 256 (16² = 256).',
        interestingFact: '256 is also 2 to the 8th power (2^8), representing the exact number of distinct values an 8-bit byte can store.'
      },
      {
        id: 'math-6',
        categoryId: 'mathematics',
        question: 'What is the mathematical term for a polygon with eight sides?',
        options: ['Heptagon', 'Hexagon', 'Octagon', 'Nonagon'],
        correctIndex: 2,
        explanation: 'An octagon is an eight-sided geometric polygon. A regular octagon has equal interior angles of 135 degrees each.',
        interestingFact: 'The standard red STOP sign used in traffic across most of the world is shaped as a regular octagon.'
      }
    ]
  },
  {
    id: 'human-body',
    slug: 'human-body',
    title: 'Human Body Quiz',
    description: 'Discover the marvels of human anatomy, physiology, organs, circulation, and sensory systems.',
    iconName: 'Activity',
    colorScheme: 'cyan',
    popular: true,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'body-1',
        categoryId: 'human-body',
        question: 'What is the largest organ of the human body by surface area and weight?',
        options: ['Liver', 'Brain', 'Skin', 'Lungs'],
        correctIndex: 2,
        explanation: 'The integumentary system (the skin) is the body’s largest organ, covering approximately 2 square meters (22 square feet) and weighing about 3.6 to 5 kilograms.',
        interestingFact: 'Every minute, humans shed approximately 30,000 to 40,000 dead skin cells.'
      },
      {
        id: 'body-2',
        categoryId: 'human-body',
        question: 'How many bones are there in an average adult human skeletal system?',
        options: ['186', '206', '236', '300'],
        correctIndex: 1,
        explanation: 'An adult human skeleton consists of 206 bones. Infants are born with around 270 bones, many of which fuse together as the skeleton matures.',
        interestingFact: 'More than half of your 206 bones are located in your hands, wrists, feet, and ankles!'
      },
      {
        id: 'body-3',
        categoryId: 'human-body',
        question: 'Which chamber of the human heart pumps oxygen-rich blood into the aorta to the rest of the body?',
        options: ['Right Atrium', 'Right Ventricle', 'Left Atrium', 'Left Ventricle'],
        correctIndex: 3,
        explanation: 'The Left Ventricle has the thickest muscular wall in the heart because it must generate enough pressure to pump oxygenated blood throughout the entire systemic circulation.',
        interestingFact: 'A human heart beats over 100,000 times each day, pumping roughly 7,500 liters (2,000 gallons) of blood.'
      },
      {
        id: 'body-4',
        categoryId: 'human-body',
        question: 'What is the hardest substance in the entire human body?',
        options: ['Femur Bone', 'Tooth Enamel', 'Skull Cranium', 'Fingernail Keratin'],
        correctIndex: 1,
        explanation: 'Tooth enamel consists of roughly 96% minerals (mainly hydroxyapatite crystals), making it even harder than skeletal bones.',
        interestingFact: 'Unlike bones, tooth enamel contains no living cells and cannot regenerate once chipped or worn away.'
      },
      {
        id: 'body-5',
        categoryId: 'human-body',
        question: 'Which part of the brain controls voluntary muscle coordination, balance, and posture?',
        options: ['Cerebellum', 'Cerebrum', 'Brainstem', 'Hypothalamus'],
        correctIndex: 0,
        explanation: 'The cerebellum (Latin for "little brain") accounts for only 10% of total brain volume but contains roughly 50% of all neurons in the brain.',
        interestingFact: 'The cerebellum fine-tunes motor movements so you can ride a bicycle or play an instrument smoothly.'
      },
      {
        id: 'body-6',
        categoryId: 'human-body',
        question: 'What type of blood cells are primarily responsible for fighting infections and foreign pathogens?',
        options: ['Erythrocytes (Red)', 'Leukocytes (White)', 'Thrombocytes (Platelets)', 'Plasma Proteins'],
        correctIndex: 1,
        explanation: 'Leukocytes, or white blood cells, are key components of the immune system that identify, engulf, and neutralize harmful bacteria, viruses, and parasites.',
        interestingFact: 'White blood cells make up only about 1% of your total blood volume, but their count can spike rapidly during an infection.'
      }
    ]
  },
  {
    id: 'islamic-knowledge',
    slug: 'islamic-knowledge',
    title: 'Islamic Knowledge Quiz',
    description: 'Enrich your understanding of Islamic history, sacred texts, pillars of faith, and heritage.',
    iconName: 'Moon',
    colorScheme: 'teal',
    featured: true,
    difficulty: 'Intermediate',
    questions: [
      {
        id: 'islam-1',
        categoryId: 'islamic-knowledge',
        question: 'How many daily obligatory prayers (Salah) are prescribed for Muslims?',
        options: ['Three', 'Four', 'Five', 'Seven'],
        correctIndex: 2,
        explanation: 'Muslims perform five obligatory daily prayers: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night).',
        interestingFact: 'The obligation of the five daily prayers was gifted during the miraculous journey of Al-Isra wal-Mi’raj.'
      },
      {
        id: 'islam-2',
        categoryId: 'islamic-knowledge',
        question: 'How many chapters (Surahs) are there in the Holy Quran?',
        options: ['110', '114', '120', '128'],
        correctIndex: 1,
        explanation: 'The Holy Quran consists of 114 Surahs, beginning with Surah Al-Fatihah (The Opening) and concluding with Surah An-Nas (Mankind).',
        interestingFact: 'Surah Al-Baqarah is the longest Surah in the Quran with 286 verses, while Surah Al-Kawthar is the shortest with 3 verses.'
      },
      {
        id: 'islam-3',
        categoryId: 'islamic-knowledge',
        question: 'In which lunar Islamic month is the obligatory annual fasting of Ramadan observed?',
        options: ['7th month (Rajab)', '8th month (Sha’ban)', '9th month (Ramadan)', '12th month (Dhul-Hijjah)'],
        correctIndex: 2,
        explanation: 'Ramadan is the ninth month of the Islamic Hijri calendar, during which Muslims fast daily from true dawn (Fajr) until sunset (Maghrib).',
        interestingFact: 'The Quran was first revealed to Prophet Muhammad (peace be upon him) on Laylat al-Qadr during the month of Ramadan.'
      },
      {
        id: 'islam-4',
        categoryId: 'islamic-knowledge',
        question: 'What is the sacred city toward which Muslims face in all prayers (the Qiblah)?',
        options: ['Medina', 'Jerusalem', 'Makkah', 'Cairo'],
        correctIndex: 2,
        explanation: 'Muslims worldwide direct their prayers toward the Kaaba located inside the Masjid al-Haram in Makkah, Saudi Arabia.',
        interestingFact: 'Historically, Jerusalem (Bayt al-Maqdis) was the initial Qiblah before Allah commanded the change toward the Kaaba in Makkah.'
      },
      {
        id: 'islam-5',
        categoryId: 'islamic-knowledge',
        question: 'What is the second pillar of Islam, following the declaration of faith (Shahada)?',
        options: ['Zakat (Charity)', 'Salah (Prayer)', 'Sawm (Fasting)', 'Hajj (Pilgrimage)'],
        correctIndex: 1,
        explanation: 'The Five Pillars of Islam are: 1. Shahada (Declaration of Faith), 2. Salah (Prayer), 3. Zakat (Almsgiving), 4. Sawm (Fasting), and 5. Hajj (Pilgrimage).',
        interestingFact: 'Salah serves as a direct spiritual link and communion between the believer and the Creator throughout the day.'
      },
      {
        id: 'islam-6',
        categoryId: 'islamic-knowledge',
        question: 'Who was the first companion to accept Islam among adult free men and the first Caliph?',
        options: ['Umar ibn al-Khattab', 'Ali ibn Abi Talib', 'Abu Bakr as-Siddiq', 'Uthman ibn Affan'],
        correctIndex: 2,
        explanation: 'Abu Bakr as-Siddiq (RA) was the closest companion of Prophet Muhammad (peace be upon him) and served as the first Rightly Guided Caliph (Rashidun).',
        interestingFact: 'Abu Bakr was titled "As-Siddiq" (The Truthful) for his immediate and unwavering belief in the Prophet’s night journey.'
      }
    ]
  },
  {
    id: 'daily-quiz',
    slug: 'daily-quiz',
    title: 'Daily Quiz',
    description: 'A fresh, handpicked mix of trivia questions updated every day to test your daily streak and general intellect.',
    iconName: 'CalendarCheck',
    colorScheme: 'blue',
    featured: true,
    popular: true,
    difficulty: 'All Levels',
    questions: [
      {
        id: 'daily-1',
        categoryId: 'daily-quiz',
        question: 'What natural phenomenon creates the stunning northern and southern auroras?',
        options: ['Moonlight reflection on ice', 'Solar wind colliding with magnetosphere', 'Lightning in upper stratosphere', 'Volcanic dust scattering'],
        correctIndex: 1,
        explanation: 'Auroras occur when charged particles from solar wind collide with oxygen and nitrogen atoms in Earth’s magnetic field, emitting brilliant dancing lights.',
        interestingFact: 'Green auroras are produced by oxygen molecules roughly 100 kilometers high, while rare red auroras occur above 200 kilometers.'
      },
      {
        id: 'daily-2',
        categoryId: 'daily-quiz',
        question: 'Which country is credited with inventing paper in the 2nd century BC?',
        options: ['Egypt', 'China', 'Greece', 'India'],
        correctIndex: 1,
        explanation: 'Cai Lun, an official of the Han Dynasty in China, is credited with refining the papermaking process using mulberry bark, hemp, and rags around 105 AD.',
        interestingFact: 'Papermaking remained a closely guarded state secret in China for over 500 years before spreading along the Silk Road.'
      },
      {
        id: 'daily-3',
        categoryId: 'daily-quiz',
        question: 'Which planet possesses the largest moon relative to its own size in the solar system?',
        options: ['Earth (the Moon)', 'Jupiter (Ganymede)', 'Saturn (Titan)', 'Pluto (Charon)'],
        correctIndex: 3,
        explanation: 'Charon is roughly half the diameter of dwarf planet Pluto, creating a binary planetary system where both orbit a barycenter outside Pluto itself.',
        interestingFact: 'Because of tidal locking, the same face of Charon always points directly toward the same face of Pluto.'
      },
      {
        id: 'daily-4',
        categoryId: 'daily-quiz',
        question: 'What is the only bird species known to drink water through suction rather than tilting its head back?',
        options: ['Pigeon (and Dove)', 'Eagle', 'Crow', 'Pelican'],
        correctIndex: 0,
        explanation: 'Pigeons and doves drink water using peristalsis to pump water upwards like a straw, whereas almost all other birds must scoop water and tilt their heads back.',
        interestingFact: 'Pigeons can fly at speeds up to 90 mph and possess remarkable navigational magnetite in their beaks.'
      },
      {
        id: 'daily-5',
        categoryId: 'daily-quiz',
        question: 'In computer programming, what does the acronym "API" stand for?',
        options: ['Application Programming Interface', 'Automated Program Input', 'Advanced Protocol Integration', 'Application Parsing Identifier'],
        correctIndex: 0,
        explanation: 'An Application Programming Interface defines rules and mechanisms that allow distinct software programs to communicate with each other.',
        interestingFact: 'APIs allow websites to embed Google Maps, process payments securely, or retrieve weather forecasts in milliseconds.'
      },
      {
        id: 'daily-6',
        categoryId: 'daily-quiz',
        question: 'Which chemical element makes up roughly 70% of the Sun’s mass?',
        options: ['Helium', 'Hydrogen', 'Carbon', 'Oxygen'],
        correctIndex: 1,
        explanation: 'Hydrogen makes up about 73% of the Sun’s mass, continually fusing into helium under immense core temperatures and pressures.',
        interestingFact: 'Every second, the Sun converts 600 million tons of hydrogen into helium via nuclear fusion.'
      },
      {
        id: 'daily-7',
        categoryId: 'daily-quiz',
        question: 'Which world-famous landmark was originally constructed as the entrance arch for the 1889 World’s Fair?',
        options: ['Eiffel Tower', 'Arc de Triomphe', 'Brandenburg Gate', 'Statue of Liberty'],
        correctIndex: 0,
        explanation: 'The Eiffel Tower was designed by Gustave Eiffel’s engineering firm as the temporary centerpiece for the 1889 Exposition Universelle in Paris.',
        interestingFact: 'It was originally intended to be dismantled after 20 years, but was saved because it served as an invaluable radio telegraph antenna.'
      }
    ]
  },
  {
    id: 'fun-entertainment',
    slug: 'fun-entertainment',
    title: 'Fun and Entertainment Quiz',
    description: 'Test your knowledge on cinema classics, gaming legends, animated blockbusters, pop icons, and music.',
    iconName: 'Clapperboard',
    colorScheme: 'indigo',
    recentlyAdded: true,
    popular: true,
    difficulty: 'Beginner',
    questions: [
      {
        id: 'fun-1',
        categoryId: 'fun-entertainment',
        question: 'Which animated film was the first full-length feature produced entirely using computer-generated imagery (CGI)?',
        options: ['A Bug’s Life', 'Toy Story', 'Shrek', 'Monsters, Inc.'],
        correctIndex: 1,
        explanation: 'Pixar Animation Studios and Walt Disney Pictures released Toy Story in November 1995, pioneering the era of 3D computer-animated cinema.',
        interestingFact: 'Toy Story required 800,000 machine hours of computing power to render its 77 minutes of groundbreaking animation.'
      },
      {
        id: 'fun-2',
        categoryId: 'fun-entertainment',
        question: 'What is the best-selling video game of all time across all platforms, with over 300 million copies sold?',
        options: ['Tetris', 'Grand Theft Auto V', 'Minecraft', 'Wii Sports'],
        correctIndex: 2,
        explanation: 'Created by Markus "Notch" Persson and released in 2011, Minecraft has surpassed 300 million copies sold worldwide.',
        interestingFact: 'A standard Minecraft world generates a procedurally generated terrain that spans over 60 million blocks in diameter—larger than the surface of Neptune!'
      },
      {
        id: 'fun-3',
        categoryId: 'fun-entertainment',
        question: 'Who composed the iconic, Academy Award-winning film scores for Star Wars, Jaws, Indiana Jones, and Jurassic Park?',
        options: ['Hans Zimmer', 'John Williams', 'Ennio Morricone', 'Danny Elfman'],
        correctIndex: 1,
        explanation: 'John Williams has earned 54 Academy Award nominations, making him the most-nominated living person in Oscar history, second only to Walt Disney.',
        interestingFact: 'Williams composed the thrilling two-note shark motif for Jaws using just an alternating E and F on the tuba and double bass.'
      },
      {
        id: 'fun-4',
        categoryId: 'fun-entertainment',
        question: 'What was the first music video ever broadcast when MTV launched on cable television on August 1, 1981?',
        options: ['"Thriller" by Michael Jackson', '"Video Killed the Radio Star" by The Buggles', '"Bohemian Rhapsody" by Queen', '"Take On Me" by a-ha'],
        correctIndex: 1,
        explanation: 'MTV launched at 12:01 AM with the prophetic title "Video Killed the Radio Star" by British new wave group The Buggles.',
        interestingFact: 'The channel’s famous opening visuals showed Apollo 11 moon landing footage overlaid with the MTV logo.'
      },
      {
        id: 'fun-5',
        categoryId: 'fun-entertainment',
        question: 'In the Wizarding World of Harry Potter, what is the name of the high-speed golden sphere caught by the Seeker in Quidditch?',
        options: ['Quaffle', 'Bludger', 'Golden Snitch', 'Remembrall'],
        correctIndex: 2,
        explanation: 'Catching the Golden Snitch awards the Seeker’s team 150 points and officially ends the Quidditch match.',
        interestingFact: 'In lore, Snitches possess flesh memories: they remember the exact touch of the first person to handle them bare-handed.'
      },
      {
        id: 'fun-6',
        categoryId: 'fun-entertainment',
        question: 'Which legendary actor voiced the wise and mighty lion Mufasa in Disney’s 1994 animated classic "The Lion King"?',
        options: ['Morgan Freeman', 'James Earl Jones', 'Samuel L. Jackson', 'Keith David'],
        correctIndex: 1,
        explanation: 'James Earl Jones provided the iconic, resonant voice for King Mufasa in both the 1994 animated film and the 2019 CGI adaptation.',
        interestingFact: 'Jones is also famous for voicing the galactic villain Darth Vader in the Star Wars franchise.'
      }
    ]
  }
];

export function getCategoryById(id: string): QuizCategory | undefined {
  return QUIZ_CATEGORIES.find((c) => c.id === id || c.slug === id);
}

export function getAllCategories(): QuizCategory[] {
  return QUIZ_CATEGORIES;
}

export function getRandomQuiz(): QuizCategory {
  const categories = QUIZ_CATEGORIES.filter((c) => c.id !== 'daily-quiz');
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

export function getDailyQuizForDate(dateStr: string): { title: string; dateFormatted: string; questions: QuizCategory['questions'] } {
  // Deterministic seed based on date string e.g. "2026-10-31"
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  const absHash = Math.abs(hash);

  // Pool questions from all categories to create a balanced 7-question daily quiz
  const allQuestions = QUIZ_CATEGORIES.flatMap((c) => c.questions);
  const selectedQuestions: typeof allQuestions = [];
  const seenIds = new Set<string>();

  for (let i = 0; i < 7; i++) {
    const index = (absHash + i * 17) % allQuestions.length;
    let candidate = allQuestions[index];
    if (seenIds.has(candidate.id)) {
      // Find next unused
      for (let j = 0; j < allQuestions.length; j++) {
        const nextCandidate = allQuestions[(index + j) % allQuestions.length];
        if (!seenIds.has(nextCandidate.id)) {
          candidate = nextCandidate;
          break;
        }
      }
    }
    seenIds.add(candidate.id);
    selectedQuestions.push(candidate);
  }

  // Format date nicely
  const d = new Date(dateStr + 'T12:00:00');
  const dateFormatted = d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return {
    title: `Daily Quiz · ${dateFormatted}`,
    dateFormatted,
    questions: selectedQuestions
  };
}
