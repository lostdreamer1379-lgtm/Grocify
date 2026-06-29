

// Application Data Store
const appData = {
  user: {
    name: "Alex Johnson",
    firstName: "Alex",
    lastName: "Johnson", 
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    budgetLimit: 2500,
    currentSpent: 1850,
    streak: 7,
    theme: "light"
  },
  

  pantryItems: [
    {id: 1, name: "Tomatoes", quantity: 3, unit: "pieces", expiry: "2 days", status: "warning", category: "vegetables", emoji: "🍅", image: "https://images.unsplash.com/photo-1546470427-6da9a95ad086?w=300&h=200&fit=crop"},
    {id: 2, name: "Rice", quantity: 2, unit: "kg", expiry: "6 months", status: "good", category: "grains", emoji: "🍚", image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=300&h=200&fit=crop"},
    {id: 3, name: "Milk", quantity: 1, unit: "L", expiry: "1 day", status: "critical", category: "dairy", emoji: "🥛", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop"},
    {id: 4, name: "Onions", quantity: 5, unit: "pieces", expiry: "1 week", status: "good", category: "vegetables", emoji: "🧅", image: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=200&fit=crop"},
    {id: 5, name: "Bread", quantity: 1, unit: "loaf", expiry: "3 days", status: "warning", category: "grains", emoji: "🍞", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop"},
    {id: 6, name: "Chicken", quantity: 500, unit: "g", expiry: "2 days", status: "warning", category: "protein", emoji: "🍗", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=200&fit=crop"},
    {id: 7, name: "Spinach", quantity: 250, unit: "g", expiry: "2 days", status: "warning", category: "vegetables", emoji: "🥬", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=200&fit=crop"},
    {id: 8, name: "Cheese", quantity: 200, unit: "g", expiry: "1 week", status: "good", category: "dairy", emoji: "🧀", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop"},
    {id: 9, name: "Pasta", quantity: 500, unit: "g", expiry: "1 year", status: "good", category: "grains", emoji: "🍝", image: "https://images.unsplash.com/photo-1551892374-ecf8845ffa4c?w=300&h=200&fit=crop"},
    {id: 10, name: "Yogurt", quantity: 200, unit: "g", expiry: "5 days", status: "good", category: "dairy", emoji: "🥛", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop"}
  ],

  recipes: [
    {
      id: 1,
      name: "Gobi Manchurian (Gravy)",
      cuisine: "Indo-Chinese",
      time: 40, // minutes
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Dairy-Free", "Nut-Free"],
      
      image: "https://cdn.tasteatlas.com/images/dishes/cba6279ae21445539df7e5f35b063bcb.jpg?mw=1300",
      calories: 420,
      servings: 4,
      ingredients: [
        "Cauliflower florets",
        "Cornflour",
        "All-purpose flour",
        "Soy sauce",
        "Tomato ketchup",
        "Chili sauce",
        "Garlic",
        "Ginger",
        "Onion",
        "Capsicum",
        "Spring onions",
        "Salt",
        "Oil",
        "Water"
      ],
      instructions: [
        "Blanch cauliflower florets in hot water for 3-4 minutes and drain.",
        "Mix cornflour, flour, salt, and water to make a thick batter; coat florets and deep fry until golden brown.",
        "In a pan, heat oil and sauté garlic, ginger, onions, and capsicum.",
        "Add soy sauce, tomato ketchup, chili sauce, and a little water to form gravy.",
        "Mix in fried cauliflower pieces and toss well.",
        "Simmer for 2-3 minutes, garnish with spring onions, and serve hot."
      ],
    },
    {
      id: 2,
      name: "Chicken Manchurian (Dry)",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
      
      image: "https://tastypics.s3.us-west-1.amazonaws.com/a30f207304f8461eb193319491847e7e.jpg",
      calories: 480,
      servings: 4,
      ingredients: [
        "Boneless chicken cubes",
        "Cornflour",
        "Egg",
        "Soy sauce",
        "Chili sauce",
        "Garlic",
        "Ginger",
        "Capsicum",
        "Onion",
        "Vinegar",
        "Salt",
        "Oil",
        "Pepper"
      ],
      instructions: [
        "Marinate chicken with soy sauce, salt, pepper, cornflour, and egg; rest for 15 minutes.",
        "Deep fry marinated chicken pieces until golden and crispy.",
        "In a wok, heat oil and sauté garlic, ginger, onions, and capsicum.",
        "Add soy sauce, chili sauce, and vinegar; stir well.",
        "Toss fried chicken in the sauce until evenly coated.",
        "Garnish with spring onions and serve hot as a starter."
      ],
    },
    {
      id: 3,
      name: "Veg Hakka Noodles",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Nut-Free", "Low-Fat"],
      
      image: "https://desihut.ca/wp-content/uploads/2022/09/Veg-Hakka-Noodles-The-Chutney-Life-4-1.jpeg",
      calories: 380,
      servings: 3,
      ingredients: [
        "Hakka noodles",
        "Cabbage",
        "Carrot",
        "Capsicum",
        "Onion",
        "Spring onions",
        "Soy sauce",
        "Vinegar",
        "Chili sauce",
        "Pepper",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Boil noodles until al dente, drain, and toss with a little oil to prevent sticking.",
        "Heat oil in a wok and sauté onions, carrots, cabbage, and capsicum on high heat.",
        "Add soy sauce, vinegar, chili sauce, salt, and pepper; mix well.",
        "Toss in cooked noodles and stir-fry for 2-3 minutes on high flame.",
        "Garnish with spring onions and serve hot."
      ],
    },
    {
      id: 4,
      name: "Chilli Paneer (Gravy)",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Nut-Free", "Dairy-Free"],
    
      image: "https://i0.wp.com/foodtrails25.com/wp-content/uploads/2022/10/Chilli-Paneer-featured.jpg?fit=1200%2C1200&ssl=1",
      calories: 450,
      servings: 4,
      ingredients: [
        "Paneer cubes",
        "Cornflour",
        "Soy sauce",
        "Tomato ketchup",
        "Chili sauce",
        "Capsicum",
        "Onion",
        "Garlic",
        "Ginger",
        "Spring onions",
        "Salt",
        "Oil",
        "Water"
      ],
      instructions: [
        "Coat paneer cubes with cornflour and shallow fry until golden.",
        "Heat oil in a wok and sauté garlic, ginger, onions, and capsicum.",
        "Add soy sauce, tomato ketchup, chili sauce, and a little water to form a gravy.",
        "Add fried paneer cubes and toss well.",
        "Simmer for 2–3 minutes, garnish with spring onions, and serve hot with rice or noodles."
      ],
    },
    {
      id: 5,
      name: "Schezwan Fried Rice (Veg)",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "quick", "experimental"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["Vegan", "Nut-Free", "Low-Fat"],
    
      image: "https://spiceit.in/wp-content/uploads/2022/05/veg-schezwan-fried-rice.jpg",
      calories: 420,
      servings: 3,
      ingredients: [
        "Cooked rice",
        "Schezwan sauce",
        "Carrot",
        "Capsicum",
        "Cabbage",
        "Spring onions",
        "Soy sauce",
        "Vinegar",
        "Garlic",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "Heat oil in a wok and sauté finely chopped garlic and spring onion whites.",
        "Add chopped vegetables and stir-fry on high heat for 2–3 minutes.",
        "Add schezwan sauce, soy sauce, vinegar, salt, and pepper.",
        "Toss in the cooked rice and mix until evenly coated with sauces.",
        "Garnish with spring onion greens and serve hot."
      ],
    },
    {
      id: 6,
      name: "Dragon Chicken",
      cuisine: "Indo-Chinese",
      time: 40,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://www.lolacovington.com/wp-content/uploads/2020/06/Dragon-Chicken-Recipe.jpg",
      calories: 480,
      servings: 4,
      ingredients: [
        "Boneless chicken strips",
        "Cornflour",
        "Egg",
        "Soy sauce",
        "Chili sauce",
        "Ginger-garlic paste",
        "Cashews",
        "Dry red chilies",
        "Capsicum",
        "Onion",
        "Vinegar",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Marinate chicken with cornflour, egg, soy sauce, salt, and chili sauce; rest for 20 minutes.",
        "Deep fry chicken strips until crispy and set aside.",
        "In a wok, heat oil and fry cashews and dry red chilies until aromatic.",
        "Add garlic, onion, and capsicum; stir-fry on high flame.",
        "Add sauces and a splash of vinegar; mix well.",
        "Toss in fried chicken and coat with sauce evenly.",
        "Garnish with spring onions and serve immediately."
      ],
    },
    {
      id: 7,
      name: "Veg Spring Roll (Fried)",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://myfoodstory.com/wp-content/uploads/2022/06/Veg-Spring-Rolls-3-720x720.jpg",
      calories: 300,
      servings: 6,
      ingredients: [
        "Spring roll wrappers",
        "Cabbage",
        "Carrot",
        "Capsicum",
        "Noodles (optional)",
        "Soy sauce",
        "Salt",
        "Pepper",
        "Cornflour paste",
        "Oil"
      ],
      instructions: [
        "Heat oil in a pan and sauté cabbage, carrot, and capsicum for 2–3 minutes.",
        "Add soy sauce, salt, and pepper; mix well and cool the filling.",
        "Place filling on a wrapper, roll tightly, and seal edges with cornflour paste.",
        "Deep fry in hot oil until golden and crisp.",
        "Serve hot with chili sauce or ketchup."
      ],
    },
    {
      id: 8,
      name: "American Chopsuey (Veg)",
      cuisine: "Indo-Chinese",
      time: 45,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "leisurely", "international"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/veg-american-chopsuey-recipe042.jpg",
      calories: 480,
      servings: 3,
      ingredients: [
        "Hakka noodles",
        "Cabbage",
        "Capsicum",
        "Carrot",
        "Onion",
        "Tomato ketchup",
        "Soy sauce",
        "Vinegar",
        "Cornflour",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "Boil noodles until just cooked, drain, and deep-fry until crispy; set aside.",
        "In a pan, heat oil and sauté onions and vegetables.",
        "Add tomato ketchup, soy sauce, vinegar, salt, and pepper.",
        "Mix cornflour slurry and cook until the sauce thickens.",
        "Pour the hot tangy sauce over crispy fried noodles and serve immediately."
      ],
    },
    {
      id: 9,
      name: "Sweet Corn Soup (Veg)",
      cuisine: "Indo-Chinese",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Low-Sodium", "Nut-Free"],
    
      image: "https://aartimadan.com/wp-content/uploads/2020/12/sweet-corn-soup.jpg",
      calories: 180,
      servings: 3,
      ingredients: [
        "Sweet corn kernels",
        "Carrot",
        "Cabbage",
        "Cornflour",
        "Water or vegetable stock",
        "Salt",
        "Pepper",
        "Soy sauce (optional)",
        "Spring onions"
      ],
      instructions: [
        "Boil sweet corn with a little water and blend half of it into a coarse paste.",
        "Add the paste and whole kernels to a pot with chopped vegetables and stock.",
        "Bring to a simmer, then add cornflour slurry to thicken.",
        "Season with salt, pepper, and a dash of soy sauce if desired.",
        "Garnish with spring onion greens and serve warm."
      ],
    },
    {
      id: 10,
      name: "Chicken Lollipop",
      cuisine: "Indo-Chinese",
      time: 40,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://tse4.mm.bing.net/th/id/OIP.8RvjxTHU_AfUPjB4oCEpvwHaEK?pid=Api&P=0&h=180",
      calories: 460,
      servings: 4,
      ingredients: [
        "Chicken lollipop pieces",
        "Cornflour",
        "All-purpose flour",
        "Ginger-garlic paste",
        "Red chili sauce",
        "Soy sauce",
        "Vinegar",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "Marinate chicken lollipops with sauces, ginger-garlic paste, and flours for 30 minutes.",
        "Heat oil and deep fry until crisp and golden brown.",
        "For extra flavor, toss fried lollipops in chili sauce and soy sauce mixture before serving.",
        "Garnish with spring onions and serve with schezwan sauce."
      ],
    },
    {
      id: 11,
      name: "Paneer 65",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Easy",
      mood: ["energetic", "hearty", "quick", "familiar"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Nut-Free"],
    
      image: "https://i.ytimg.com/vi/8dJ5dzWk7pg/maxresdefault.jpg",
      calories: 400,
      servings: 3,
      ingredients: [
        "Paneer cubes",
        "Cornflour",
        "All-purpose flour",
        "Ginger-garlic paste",
        "Curd",
        "Red chili powder",
        "Soy sauce",
        "Curry leaves",
        "Green chilies",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Make a batter with curd, cornflour, flour, chili powder, and soy sauce.",
        "Coat paneer cubes in batter and deep fry until crispy.",
        "In a pan, heat oil and sauté curry leaves and green chilies.",
        "Toss fried paneer in this tempering and serve hot."
      ],
    },
    {
      id: 12,
      name: "Baby Corn Manchurian",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://img-global.cpcdn.com/recipes/8d754b978d9419b4/1200x630cq70/photo.jpg",
      calories: 360,
      servings: 4,
      ingredients: [
        "Baby corn",
        "Cornflour",
        "All-purpose flour",
        "Soy sauce",
        "Tomato ketchup",
        "Chili sauce",
        "Garlic",
        "Capsicum",
        "Onion",
        "Spring onions",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Parboil baby corn and cut into bite-sized pieces.",
        "Coat with flour mixture and deep fry until crisp.",
        "In a wok, sauté garlic, onion, and capsicum in oil.",
        "Add sauces, salt, and a little water to make a glaze.",
        "Toss in fried baby corn and cook for 2 minutes.",
        "Garnish with spring onions and serve hot."
      ],
    },
    {
      id: 13,
      name: "Chicken Momo (Steamed)",
      cuisine: "Indo-Chinese",
      time: 45,
      difficulty: "Medium",
      mood: ["calm", "light", "leisurely", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Fat", "Nut-Free"],
    
      image: "https://png.pngtree.com/background/20250606/original/pngtree-steamed-chicken-momo-dumplings-with-dipping-sauce-picture-image_16626914.jpg",
      calories: 320,
      servings: 4,
      ingredients: [
        "Minced chicken",
        "All-purpose flour",
        "Onion",
        "Garlic",
        "Ginger",
        "Green chilies",
        "Soy sauce",
        "Salt",
        "Pepper",
        "Oil",
        "Water"
      ],
      instructions: [
        "Prepare dough with flour, water, and a pinch of salt; rest for 20 minutes.",
        "Mix minced chicken with chopped onions, garlic, ginger, green chilies, soy sauce, salt, and pepper.",
        "Roll dough into thin circles, fill with chicken mixture, and seal tightly.",
        "Steam momos in a steamer for 10–12 minutes until cooked through.",
        "Serve hot with spicy chili-garlic chutney."
      ],
    },
    {
      id: 14,
      name: "Singapore Noodles (Veg)",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "quick", "international"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://thepeskyvegan.com/wp-content/uploads/2020/09/vegan-singapore-noodles-tofu-close-up.jpg",
      calories: 410,
      servings: 3,
      ingredients: [
        "Vermicelli noodles",
        "Carrot",
        "Cabbage",
        "Bell peppers",
        "Spring onions",
        "Soy sauce",
        "Curry powder",
        "Vinegar",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Boil vermicelli noodles until soft; drain and set aside.",
        "Heat oil in a wok and sauté vegetables on high heat.",
        "Add curry powder, soy sauce, vinegar, and salt; stir well.",
        "Add noodles and toss until evenly coated with sauce and spices.",
        "Serve hot, garnished with spring onions."
      ],
    },
    {
      id: 15,
      name: "Chilli Garlic Noodles (Veg)",
      cuisine: "Indo-Chinese",
      time: 25,
      difficulty: "Easy",
      mood: ["energetic", "hearty", "quick", "familiar"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["Nut-Free", "Vegan", "Low-Fat"],
    
      image: "https://kaijuphile.com/wp-content/uploads/2025/02/IVGND1100-HAKKA-NOODLES-CHILI-GARLIC-VEG.jpg",
      calories: 380,
      servings: 3,
      ingredients: [
        "Hakka noodles",
        "Garlic",
        "Red chilies",
        "Spring onions",
        "Soy sauce",
        "Vinegar",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "Boil noodles until al dente; drain and drizzle a little oil to prevent sticking.",
        "In a wok, heat oil and sauté minced garlic and red chilies until aromatic.",
        "Add soy sauce, vinegar, salt, and pepper.",
        "Toss in noodles and stir-fry on high flame for 2–3 minutes.",
        "Garnish with chopped spring onions and serve hot."
      ],
    },
    {
      id: 16,
      name: "Mushroom Chilli",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Low-Fat", "Nut-Free"],
    
      image: "https://1.bp.blogspot.com/-x5n9UNMSd0c/Ue_04aUb6yI/AAAAAAAABfg/XvWQeDxcKZk/s1600/_DSC6860.JPG",
      calories: 370,
      servings: 4,
      ingredients: [
        "Button mushrooms",
        "Cornflour",
        "Soy sauce",
        "Tomato ketchup",
        "Chili sauce",
        "Onion",
        "Capsicum",
        "Garlic",
        "Ginger",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Clean and halve mushrooms, coat with cornflour, and shallow fry until golden.",
        "Heat oil in a wok and sauté garlic, ginger, onions, and capsicum.",
        "Add sauces, salt, and a splash of water to form a thick glaze.",
        "Toss fried mushrooms in the sauce and stir-fry for 2–3 minutes.",
        "Garnish with spring onions and serve hot."
      ],
    },
    {
      id: 18,
      name: "Honey Chilli Potato",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Easy",
      mood: ["energetic", "hearty", "quick", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://images.slurrp.com/prodarticles/soj5826pti.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75",
      calories: 380,
      servings: 3,
      ingredients: [
        "Potato fingers",
        "Cornflour",
        "All-purpose flour",
        "Soy sauce",
        "Tomato ketchup",
        "Chili sauce",
        "Honey",
        "Sesame seeds",
        "Garlic",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Coat potato fingers in cornflour mixture and deep fry until golden and crisp.",
        "Heat oil in a wok and sauté minced garlic until fragrant.",
        "Add sauces, honey, and a little water to form a sticky glaze.",
        "Toss fried potatoes in the sauce until coated evenly.",
        "Sprinkle sesame seeds and serve hot."
      ],
    },
    {
      id: 19,
      name: "Manchow Soup (Chicken)",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Medium",
      mood: ["calm", "light", "quick", "familiar"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Fat"],
    
      image: "https://maharajaroyaldining.com/wp-content/uploads/2024/03/Chicken-Manchow-Soup-3-600x600.webp",
      calories: 250,
      servings: 3,
      ingredients: [
        "Shredded chicken",
        "Cabbage",
        "Carrot",
        "Garlic",
        "Ginger",
        "Soy sauce",
        "Chili sauce",
        "Pepper",
        "Cornflour",
        "Chicken stock",
        "Spring onions",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Heat oil and sauté garlic and ginger until fragrant.",
        "Add shredded chicken and stir-fry for 2–3 minutes.",
        "Add chopped vegetables and sauté briefly.",
        "Pour in chicken stock, sauces, salt, and pepper; simmer for 5 minutes.",
        "Add cornflour slurry to thicken slightly.",
        "Garnish with spring onions and serve hot with crispy noodles."
      ],
    },
    {
      id: 20,
      name: "Drums of Heaven",
      cuisine: "Indo-Chinese",
      time: 45,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://i.pinimg.com/originals/e2/c3/cb/e2c3cb3558ab854267dab9129a82bd35.jpg",
      calories: 480,
      servings: 4,
      ingredients: [
        "Chicken lollipops",
        "Cornflour",
        "All-purpose flour",
        "Ginger-garlic paste",
        "Soy sauce",
        "Chili sauce",
        "Vinegar",
        "Pepper",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Marinate chicken lollipops with sauces, flours, and spices for 30 minutes.",
        "Deep fry until golden brown and crisp.",
        "In a wok, heat oil and toss fried lollipops in a spicy chili-garlic sauce.",
        "Coat evenly and garnish with spring onions before serving hot."
      ],
    },
    {
      id: 21,
      name: "Crispy Chilli Baby Corn",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Easy",
      mood: ["energetic", "hearty", "quick", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://myfoodstory.com/wp-content/uploads/2022/04/Crispy-Babycorn-Chilli-4-1-500x500.jpg",
      calories: 360,
      servings: 3,
      ingredients: [
        "Baby corn",
        "Cornflour",
        "All-purpose flour",
        "Soy sauce",
        "Chili sauce",
        "Tomato ketchup",
        "Onion",
        "Capsicum",
        "Garlic",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Blanch and slice baby corn; coat in cornflour batter and deep fry until crisp.",
        "In a wok, heat oil and sauté garlic, onion, and capsicum.",
        "Add sauces and toss fried baby corn until coated well.",
        "Serve immediately, garnished with spring onions."
      ],
    },
    {
      id: 22,
      name: "Veg Fried Momos",
      cuisine: "Indo-Chinese",
      time: 40,
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://thumbs.dreamstime.com/b/fried-momos-traditional-dumpling-food-nepal-fried-momos-traditional-dumpling-food-nepal-served-schezwan-195488603.jpg",
      calories: 320,
      servings: 4,
      ingredients: [
        "All-purpose flour",
        "Cabbage",
        "Carrot",
        "Onion",
        "Garlic",
        "Soy sauce",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Prepare dough with flour, water, and a pinch of salt; rest for 20 minutes.",
        "Mix shredded vegetables with garlic, soy sauce, and salt for the filling.",
        "Shape and seal momos; steam for 5 minutes to set shape.",
        "Deep fry until golden and crisp.",
        "Serve hot with spicy schezwan chutney."
      ],
    },
    {
      id: 23,
      name: "Chicken Schezwan Fried Rice",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://i.ytimg.com/vi/8YB2UTlxc4k/maxresdefault.jpg",
      calories: 470,
      servings: 3,
      ingredients: [
        "Cooked rice",
        "Boneless chicken",
        "Schezwan sauce",
        "Soy sauce",
        "Vinegar",
        "Garlic",
        "Capsicum",
        "Spring onions",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "Cook chicken pieces with soy sauce and salt; shred lightly.",
        "Heat oil in a wok and sauté garlic and spring onion whites.",
        "Add chicken, schezwan sauce, soy sauce, vinegar, and stir-fry briefly.",
        "Add cooked rice, salt, and pepper; toss on high heat for 2–3 minutes.",
        "Garnish with spring onions and serve piping hot."
      ],
    },
    {
      id: 24,
      name: "Garlic Prawns",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://www.marionskitchen.com/wp-content/uploads/2021/08/20201119_Garlic-Butter-Prawns-11-scaled-e1628864662428.jpg",
      calories: 420,
      servings: 3,
      ingredients: [
        "Prawns",
        "Garlic",
        "Soy sauce",
        "Chili flakes",
        "Butter",
        "Spring onions",
        "Pepper",
        "Lemon juice",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Clean and devein prawns, then pat dry.",
        "Heat oil and butter in a wok; sauté chopped garlic until fragrant.",
        "Add prawns, soy sauce, chili flakes, salt, and pepper.",
        "Stir-fry on high heat for 3–4 minutes until prawns turn pink and tender.",
        "Finish with lemon juice and spring onions. Serve hot."
      ],
    },
    {
      id: 25,
      name: "Hot & Sour Soup (Veg)",
      cuisine: "Indo-Chinese",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["Low-Fat", "Gluten-Free"],
    
      image: "https://aartimadan.com/wp-content/uploads/2020/11/hot-and-sour-soup.jpg?is-pending-load=1",
      calories: 180,
      servings: 3,
      ingredients: [
        "Carrot",
        "Cabbage",
        "Mushrooms",
        "Garlic",
        "Ginger",
        "Soy sauce",
        "Vinegar",
        "Chili sauce",
        "Pepper",
        "Cornflour",
        "Vegetable stock",
        "Salt"
      ],
      instructions: [
        "Heat oil and sauté garlic and ginger until aromatic.",
        "Add finely chopped vegetables and stir-fry briefly.",
        "Pour in vegetable stock, soy sauce, vinegar, and chili sauce.",
        "Simmer for 5–6 minutes, then add cornflour slurry to thicken.",
        "Season with salt and pepper; serve hot with spring onion garnish."
      ],
    },
    {
      id: 26,
      name: "Veg Manchurian Dry",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://1.bp.blogspot.com/-UwrL-ddeLEg/XgzKdoC3a0I/AAAAAAAAAB4/Wls9E8lFUMEcVDzPcPr9D9_ToVwZi4J7wCLcBGAsYHQ/s400/cabbage-manchurian.jpg",
      calories: 360,
      servings: 3,
      ingredients: [
        "Cabbage",
        "Carrot",
        "Capsicum",
        "Garlic",
        "Soy sauce",
        "Chili sauce",
        "Tomato ketchup",
        "Cornflour",
        "All-purpose flour",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Mix grated vegetables with cornflour, flour, and salt to form balls.",
        "Deep fry until golden brown and crisp.",
        "In a wok, sauté garlic, onion, and capsicum.",
        "Add sauces and toss fried balls until evenly coated.",
        "Garnish with spring onions and serve immediately."
      ],
    },
    {
      id: 27,
      name: "Paneer Schezwan Dry",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Easy",
      mood: ["energetic", "hearty", "quick", "experimental"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Nut-Free"],
    
      image: "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1597291988127-8IHXN2HPKXDA82RIZJIJ/Chilli-Garlic-Paneer-1-1.jpg",
      calories: 400,
      servings: 3,
      ingredients: [
        "Paneer cubes",
        "Schezwan sauce",
        "Soy sauce",
        "Capsicum",
        "Onion",
        "Garlic",
        "Cornflour",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "Coat paneer cubes in cornflour and shallow fry until crisp.",
        "Heat oil, sauté garlic and onions until translucent.",
        "Add schezwan sauce, soy sauce, and toss in fried paneer.",
        "Stir-fry on high heat for 2–3 minutes and serve hot with spring onions."
      ],
    },
    {
      id: 28,
      name: "Chicken 65",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj4IToB1rYOK7gZVizwWtX6PAJvi9oXPprDzNYG_h8RrKVvEHhqLFb_mrim2oCB4M2cDKIOxC5KyoM4NZDrQKxoI4nbXmchD1qc8wBCXgJPADhwke1ZCkWu6MLDlj8okEwOurD-PDQaZs/s2048/chicken+65+4.JPG",
      calories: 450,
      servings: 4,
      ingredients: [
        "Boneless chicken",
        "Cornflour",
        "Rice flour",
        "Yogurt",
        "Ginger-garlic paste",
        "Red chili powder",
        "Curry leaves",
        "Mustard seeds",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Marinate chicken pieces with yogurt, flours, and spices for 30 minutes.",
        "Deep fry until crisp and golden.",
        "Temper mustard seeds and curry leaves in oil and toss fried chicken in it.",
        "Serve hot as an appetizer or side dish."
      ],
    },
    {
      id: 29,
      name: "Egg Fried Rice",
      cuisine: "Indo-Chinese",
      time: 25,
      difficulty: "Easy",
      mood: ["quick", "hearty", "familiar", "energetic"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://stretchrecipes.com/wp-content/uploads/2025/01/16.-Indian-Egg-Fried-Rice.jpg",
      calories: 380,
      servings: 3,
      ingredients: [
        "Cooked rice",
        "Eggs",
        "Garlic",
        "Spring onions",
        "Soy sauce",
        "Pepper",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Heat oil in a wok and scramble eggs lightly; set aside.",
        "Add garlic and sauté until golden.",
        "Add cooked rice, soy sauce, pepper, and salt; toss well.",
        "Add scrambled eggs and spring onions; mix and serve hot."
      ],
    },
    {
      id: 30,
      name: "Thread Paneer",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Nut-Free"],
    
      image: "https://myfoodstory.com/wp-content/uploads/2021/09/Thread-Paneer-3.jpg",
      calories: 420,
      servings: 3,
      ingredients: [
        "Paneer cubes",
        "Cornflour",
        "Rice noodles (thin variety)",
        "Soy sauce",
        "Ginger-garlic paste",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "Marinate paneer cubes with soy sauce, ginger-garlic paste, salt, and pepper.",
        "Coat each paneer cube lightly with cornflour.",
        "Wrap thin rice noodles around each cube to form a 'threaded' layer.",
        "Deep fry until golden and crisp.",
        "Serve hot with chili garlic sauce or schezwan dip."
      ],
    },
    {
      id: 31,
      name: "Chilli Fish (Gravy)",
      cuisine: "Indo-Chinese",
      time: 40,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://res.cloudinary.com/gagan/image/upload/h_450,w_600,f_auto,q_auto/v1666787519/preset_folder/ohoflfklkwckyamkidat.jpg",
      calories: 450,
      servings: 4,
      ingredients: [
        "Boneless fish fillets",
        "Cornflour",
        "Soy sauce",
        "Chili sauce",
        "Tomato ketchup",
        "Garlic",
        "Onion",
        "Capsicum",
        "Vinegar",
        "Spring onions",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Coat fish cubes with cornflour, salt, and pepper; deep fry until golden.",
        "In a wok, sauté garlic, onion, and capsicum.",
        "Add soy sauce, chili sauce, and tomato ketchup.",
        "Add fried fish pieces, toss in sauce, and add a splash of water for gravy.",
        "Simmer for 2–3 minutes, garnish with spring onions, and serve hot."
      ],
    },
    {
      id: 32,
      name: "Veg Balls in Hot Garlic Sauce",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://i.ytimg.com/vi/ec7xzXp6NV8/maxresdefault.jpg",
      calories: 380,
      servings: 3,
      ingredients: [
        "Cabbage",
        "Carrot",
        "Capsicum",
        "Garlic",
        "Ginger",
        "Cornflour",
        "All-purpose flour",
        "Soy sauce",
        "Chili sauce",
        "Tomato ketchup",
        "Spring onions",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Mix grated vegetables with flours and salt to form small balls.",
        "Deep fry until crisp and golden.",
        "In a wok, sauté garlic and ginger, add sauces and little water to make gravy.",
        "Add the fried veg balls, simmer for 2–3 minutes, and garnish with spring onions.",
        "Serve hot with rice or noodles."
      ],
    },
    {
      id: 33,
      name: "Crispy Fried Wontons (Veg)",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Nut-Free", "Low-Fat"],
    
      image: "https://khinskitchen.com/wp-content/uploads/2020/08/crispy-wonton.jpg",
      calories: 280,
      servings: 6,
      ingredients: [
        "Wonton wrappers",
        "Cabbage",
        "Carrot",
        "Spring onions",
        "Soy sauce",
        "Pepper",
        "Cornflour paste",
        "Oil"
      ],
      instructions: [
        "Prepare stuffing by mixing finely chopped veggies, soy sauce, and pepper.",
        "Place small portions in wrappers, fold and seal with cornflour paste.",
        "Deep fry in hot oil until crisp and golden.",
        "Serve hot with sweet chili sauce or schezwan dip."
      ],
    },
    {
      id: 34,
      name: "Lemon Coriander Soup (Veg)",
      cuisine: "Indo-Chinese",
      time: 20,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Gluten-Free", "Heart-Healthy"],
    
      image: "https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2020/02/Lemon-Coriander-Soup-1.jpg?fit=800%2C532&ssl=1",
      calories: 150,
      servings: 3,
      ingredients: [
        "Coriander leaves",
        "Lemon juice",
        "Garlic",
        "Ginger",
        "Carrot",
        "Cornflour",
        "Vegetable stock",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Heat oil, sauté garlic and ginger briefly.",
        "Add chopped carrot and vegetable stock, simmer for 5–6 minutes.",
        "Add cornflour slurry to slightly thicken.",
        "Add lemon juice, coriander, salt, and pepper.",
        "Serve warm and fresh."
      ],
    },
    {
      id: 35,
      name: "Burnt Garlic Fried Rice (Veg)",
      cuisine: "Indo-Chinese",
      time: 25,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "quick", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Low-Fat", "Vegan", "Nut-Free"],
    
      image: "https://www.madhuseverydayindian.com/wp-content/uploads/2020/06/burnt-garlic-veg-fried-rice-recipe.jpg",
      calories: 400,
      servings: 3,
      ingredients: [
        "Cooked rice",
        "Garlic (finely chopped)",
        "Spring onions",
        "Soy sauce",
        "Pepper",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Heat oil and fry chopped garlic until dark brown and crisp.",
        "Add spring onion whites and sauté briefly.",
        "Add cooked rice, soy sauce, salt, and pepper.",
        "Toss on high flame until evenly mixed.",
        "Garnish with fried garlic and spring onion greens; serve hot."
      ],
    },
    {
      id: 36,
      name: "Kung Pao Paneer",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Nut-Free"],
    
      image: "https://images.hindustantimes.com/img/2021/11/22/550x309/kung_pao_paneer_1637589573545_1637589587307.jpg",
      calories: 420,
      servings: 3,
      ingredients: [
        "Paneer cubes",
        "Soy sauce",
        "Chili sauce",
        "Vinegar",
        "Garlic",
        "Capsicum",
        "Onion",
        "Roasted peanuts",
        "Cornflour",
        "Sugar",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Fry paneer cubes until light golden and set aside.",
        "In a wok, heat oil and sauté garlic, onion, and capsicum.",
        "Add soy sauce, chili sauce, vinegar, sugar, and salt; mix well.",
        "Toss in paneer cubes and roasted peanuts.",
        "Cook on high heat for 2–3 minutes and serve hot."
      ],
    },
    {
      id: 37,
      name: "Date Pancakes with Ice Cream",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Nut-Free"],
    
      image: "https://img.taste.com.au/HwrP2ffn/w720-h480-cfill-q80/taste/2020/04/may20_sticky-date-pancakes-with-ice-cream-160786-1.jpg",
      calories: 380,
      servings: 4,
      ingredients: [
        "Dates (chopped)",
        "Honey",
        "All-purpose flour",
        "Milk",
        "Butter",
        "Vanilla ice cream",
        "Sugar",
        "Oil"
      ],
      instructions: [
        "Mix flour, milk, and sugar to make a smooth pancake batter.",
        "Cook pancakes on a greased pan until golden on both sides.",
        "Prepare a filling of chopped dates and honey.",
        "Roll pancakes with the date filling and drizzle honey on top.",
        "Serve warm with a scoop of vanilla ice cream."
      ],
    },
    {
      id: 38,
      name: "Veg Soft Noodles",
      cuisine: "Indo-Chinese",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Nut-Free"],
    
      image: "https://www.cookwithkushi.com/wp-content/uploads/2021/09/best_veg_noodles_recipe.jpg",
      calories: 350,
      servings: 3,
      ingredients: [
        "Boiled noodles",
        "Carrot",
        "Cabbage",
        "Capsicum",
        "Onion",
        "Soy sauce",
        "Pepper",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Heat oil and sauté onions and garlic until fragrant.",
        "Add sliced vegetables and stir-fry for 2–3 minutes.",
        "Add noodles, soy sauce, salt, and pepper.",
        "Toss well to coat evenly and serve hot."
      ],
    },
    {
      id: 39,
      name: "Chicken Talumein Soup",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Fat"],
    
      image: "https://theindianclaypot.com/content/images/size/w1200/wp-content/uploads/2017/09/talumien-soup-smaller.jpg",
      calories: 250,
      servings: 3,
      ingredients: [
        "Boneless chicken",
        "Boiled noodles",
        "Carrot",
        "Cabbage",
        "Garlic",
        "Ginger",
        "Soy sauce",
        "Chicken stock",
        "Pepper",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Boil chicken and shred finely.",
        "Heat oil in a pot, sauté garlic, ginger, and vegetables.",
        "Add chicken stock, soy sauce, salt, and pepper; simmer for 5 minutes.",
        "Add shredded chicken and noodles.",
        "Simmer for 2–3 minutes and serve hot."
      ],
    },
    {
      id: 40,
      name: "Stir-Fried Greens in Garlic Sauce",
      cuisine: "Indo-Chinese",
      time: 20,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "experimental"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegan", "Low-Fat", "Heart-Healthy"],
    
      image: "https://images.squarespace-cdn.com/content/v1/624fa63d5ba99559345806e6/2b0b039c-66c6-45b3-b458-1abbb3efa995/Stir_Fried_Greens_FINAL_GRADED_67645e919b12432e590b303456de6e74.jpg",
      calories: 180,
      servings: 2,
      ingredients: [
        "Bok choy or spinach",
        "Garlic",
        "Soy sauce",
        "Cornflour",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "Heat oil and sauté garlic until golden and aromatic.",
        "Add greens and stir-fry on high heat for 2–3 minutes.",
        "Add soy sauce, pepper, and a splash of cornflour slurry.",
        "Cook briefly and serve warm."
      ],
    },
    {
      id: 41,
      name: "Fish in Black Bean Sauce",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb"],
    
      image: "https://i2.wp.com/angsarap.net/wp-content/uploads/2014/04/fish-in-black-bean-sauce-wide.jpg",
      calories: 430,
      servings: 3,
      ingredients: [
        "Fish fillets",
        "Fermented black beans",
        "Garlic",
        "Ginger",
        "Soy sauce",
        "Onion",
        "Capsicum",
        "Cornflour",
        "Vinegar",
        "Salt",
        "Oil"
      ],
      instructions: [
        "Marinate fish with soy sauce, vinegar, and cornflour; shallow fry lightly.",
        "Sauté garlic and ginger in oil, add onion and capsicum.",
        "Add fermented black beans and sauces.",
        "Toss fried fish into the sauce and cook for 2–3 minutes.",
        "Serve hot with steamed rice."
      ],
    },
    {
      id: 42,
      name: "Triple Schezwan Rice",
      cuisine: "Indo-Chinese",
      time: 40,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["Low-Fat", "Nut-Free"],
    
      image: "https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/sanjeev-kapoor/media/media_files/HooFFFKza3X6B32YfcVi.JPG",
      calories: 480,
      servings: 3,
      ingredients: [
        "Cooked rice",
        "Boiled noodles",
        "Schezwan sauce",
        "Vegetables (carrot, cabbage, capsicum)",
        "Soy sauce",
        "Vinegar",
        "Garlic",
        "Salt",
        "Pepper",
        "Oil"
      ],
      instructions: [
        "In a wok, heat oil and sauté garlic and mixed vegetables.",
        "Add schezwan sauce, soy sauce, vinegar, salt, and pepper.",
        "Toss in noodles and rice; stir-fry on high flame.",
        "Garnish with spring onions and serve with crispy fried egg (optional)."
      ],
    },
        
    
    {
      id: 43,
      name: "Chicken Clear Soup",
      cuisine: "Indo-Chinese",
      time: 20,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "High-Protein", "Low-Sodium"],
      image: "https://www.whiskaffair.com/wp-content/uploads/2016/08/Clear-Chicken-Soup-2-3.jpg",
      calories: 150,
      servings: 2,
      ingredients: [
        "Chicken breast",
        "Garlic",
        "Ginger",
        "Carrots",
        "Spring onions",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Boil chicken with garlic, ginger, and vegetables until tender.",
        "Strain and shred chicken pieces.",
        "Simmer the broth with shredded chicken, salt, and pepper.",
        "Serve hot with chopped spring onions."
      ],
    },
    
    {
      id: 44,
      name: "Chicken Fried Wontons",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["Nut-Free", "Dairy-Free"],
      image: "http://rasamalaysia.com/wp-content/uploads/2015/01/chicken_wontons7.jpg",
      calories: 420,
      servings: 4,
      ingredients: [
        "Chicken mince",
        "Garlic",
        "Soy sauce",
        "Chili flakes",
        "Wonton wrappers",
        "Oil for frying"
      ],
      instructions: [
        "Mix minced chicken with garlic, soy sauce, and chili flakes.",
        "Place a spoon of filling on each wonton wrapper and fold tightly.",
        "Heat oil in a wok over medium-high heat.",
        "Fry wontons until golden brown and crisp.",
        "Drain excess oil and serve hot with chili sauce."
      ],
    },
    
    {
      id: 45,
      name: "Paneer Satay",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Nut-Free"],
      image: "https://www.awesomecuisine.com/wp-content/uploads/2016/04/Paneer-Satay.jpg",
      calories: 380,
      servings: 3,
      ingredients: [
        "Paneer cubes",
        "Soy sauce",
        "Chili sauce",
        "Garlic paste",
        "Bell peppers",
        "Oil"
      ],
      instructions: [
        "Marinate paneer cubes in soy sauce, chili sauce, and garlic paste for 20 minutes.",
        "Thread paneer and bell peppers onto skewers.",
        "Grill or pan-fry the skewers until golden brown.",
        "Serve hot with peanut dip or spicy sauce."
      ],
    },
    
    {
      id: 46,
      name: "Crispy Spinach and Corn",
      cuisine: "Indo-Chinese",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Nut-Free"],
      image: "https://img.freepik.com/premium-photo/platter-spinach-corn-fritters-with-crispy-uhd-wallpaper-stock-photographic-image_853645-74257.jpg",
      calories: 280,
      servings: 3,
      ingredients: [
        "Baby spinach",
        "Sweet corn",
        "Cornflour",
        "Salt",
        "Chili flakes",
        "Oil"
      ],
      instructions: [
        "Blanch spinach leaves and pat dry.",
        "Mix corn and spinach with cornflour, salt, and chili flakes.",
        "Fry until crispy and golden.",
        "Serve immediately as a crunchy appetizer."
      ],
    },
    
    {
      id: 47,
      name: "Cauliflower Pepper Salt",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Nut-Free"],
      image: "https://i.pinimg.com/originals/b2/04/1c/b2041c12f1f50c77a62135a94c519c1e.jpg",
      calories: 350,
      servings: 4,
      ingredients: [
        "Cauliflower florets",
        "Black pepper",
        "Salt",
        "Garlic",
        "Soy sauce",
        "Cornflour",
        "Oil"
      ],
      instructions: [
        "Blanch cauliflower florets and coat them with cornflour.",
        "Fry until crispy and keep aside.",
        "In a wok, sauté garlic in oil and add soy sauce and pepper.",
        "Add fried cauliflower, toss well, and serve hot."
      ],
    },
    
    {
      id: 48,
      name: "Golden Fried Prawns",
      cuisine: "Indo-Chinese",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://tse3.mm.bing.net/th/id/OIP.oqNl3c5BCQS2fnZX2FpIhAHaEL?pid=Api&P=0&h=180",
      calories: 410,
      servings: 3,
      ingredients: [
        "Prawns",
        "Cornflour",
        "Egg",
        "Salt",
        "White pepper",
        "Oil for frying"
      ],
      instructions: [
        "Clean and devein prawns.",
        "Coat prawns with cornflour, beaten egg, and pepper.",
        "Deep-fry until golden brown.",
        "Serve hot with sweet chili sauce."
      ],
    },
    
    {
      id: 49,
      name: "Thread Chicken",
      cuisine: "Indo-Chinese",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Nut-Free"],
      image: "https://i.pinimg.com/originals/23/8f/21/238f2105ec644fdab4bbbca7d6e7c6f6.jpg",
      calories: 430,
      servings: 4,
      ingredients: [
        "Boneless chicken strips",
        "Noodles (uncooked)",
        "Soy sauce",
        "Garlic",
        "Cornflour",
        "Oil"
      ],
      instructions: [
        "Marinate chicken with soy sauce, garlic, and cornflour.",
        "Wrap each piece with thin noodles.",
        "Deep fry until golden and crisp.",
        "Serve with spicy dip or schezwan sauce."
      ],
    },
    {
      id: 50,
      name: "Idli Sambar",
      cuisine: "South Indian",
      time: 30,
      difficulty: "Easy",
      mood: ["light", "familiar", "quick"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Low-Fat"],
      image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
      calories: 280,
      servings: 4,
      ingredients: ["Rice", "Urad Dal", "Tamarind", "Drumsticks", "Toor Dal", "Mustard Seeds"],
      instructions: [
        "Soak rice and dal, grind, and ferment batter overnight",
        "Steam batter into soft idlis",
        "Cook sambar with tamarind, dal, and vegetables",
        "Serve hot idlis with sambar and chutney"
      ],
    },
    
    {
      id: 51,
      name: "Hyderabadi Biryani",
      cuisine: "South Indian",
      time: 60,
      difficulty: "Hard",
      mood: ["hearty", "energetic", "leisurely"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein"],
      image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
      calories: 650,
      servings: 4,
      ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Mint", "Fried Onions", "Spices"],
      instructions: [
        "Marinate chicken with yogurt and spices for 2 hours",
        "Cook partially boiled rice and layer with chicken",
        "Seal pot and cook on dum for 20 minutes",
        "Garnish with fried onions and mint before serving"
      ],
    },
    
    {
      id: 52,
      name: "Aloo Paratha",
      cuisine: "North Indian",
      time: 25,
      difficulty: "Easy",
      mood: ["comfort", "familiar", "moderate"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "No Added Sugar"],
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg",
      calories: 400,
      servings: 2,
      ingredients: ["Wheat Flour", "Potatoes", "Green Chilies", "Cumin", "Butter", "Salt"],
      instructions: [
        "Boil and mash potatoes with spices",
        "Knead dough with wheat flour and water",
        "Stuff potato mixture and roll out parathas",
        "Cook on tawa with butter and serve hot"
      ],
    },
    
    {
      id: 53,
      name: "Chettinad Chicken Curry",
      cuisine: "South Indian",
      time: 45,
      difficulty: "Hard",
      mood: ["hearty", "experimental", "leisurely"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://butfirstchai.com/wp-content/uploads/2023/01/chicken-chettinad-curry-recipes.jpg",
      calories: 520,
      servings: 4,
      ingredients: ["Chicken", "Coconut", "Black Pepper", "Curry Leaves", "Onion", "Spices"],
      instructions: [
        "Dry roast spices and grind to paste",
        "Cook onions and tomatoes with paste",
        "Add chicken pieces and simmer until tender",
        "Garnish with curry leaves and serve hot"
      ],
    },
    
    {
      id: 54,
      name: "Dal Tadka",
      cuisine: "North Indian",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Heart-Healthy", "Low-Fat"],
      image: "https://pipingpotcurry.com/wp-content/uploads/2025/03/Dal-Tadka-Recipe-Piping-Pot-Curry.jpg",
      calories: 310,
      servings: 3,
      ingredients: ["Toor Dal", "Garlic", "Onion", "Cumin", "Ghee", "Tomatoes"],
      instructions: [
        "Boil dal with turmeric and salt until soft",
        "Prepare tempering with ghee, garlic, and cumin",
        "Mix tempering into dal and simmer for 5 minutes",
        "Garnish with coriander and serve with rice"
      ],
    },
    
    {
      id: 55,
      name: "Pesarattu",
      cuisine: "South Indian",
      time: 30,
      difficulty: "Medium",
      mood: ["light", "experimental", "moderate"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Gluten-Free"],
      image: "https://cdn1.foodviva.com/static-content/food-images/andhra-recipes/pesarattu/pesarattu.jpg",
      calories: 290,
      servings: 3,
      ingredients: ["Green Gram", "Ginger", "Green Chilies", "Onion", "Salt", "Oil"],
      instructions: [
        "Soak green gram overnight and grind into smooth batter",
        "Add chopped onions and chilies",
        "Spread batter on hot tawa and drizzle oil",
        "Cook until crisp and serve with chutney"
      ],
    },
    
    {
      id: 56,
      name: "Rogan Josh",
      cuisine: "North Indian",
      time: 55,
      difficulty: "Hard",
      mood: ["hearty", "energetic", "leisurely"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rogan_Josh_Kashmiri.jpg/1200px-Rogan_Josh_Kashmiri.jpg",
      calories: 600,
      servings: 4,
      ingredients: ["Mutton", "Yogurt", "Kashmiri Red Chili", "Onions", "Garlic", "Ginger"],
      instructions: [
        "Marinate mutton with yogurt and spices",
        "Cook onions and garlic until browned",
        "Add marinated mutton and simmer until tender",
        "Serve hot with steamed rice or naan"
      ],
    },
    
    {
      id: 57,
      name: "Upma",
      cuisine: "South Indian",
      time: 15,
      difficulty: "Easy",
      mood: ["light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Nut-Free"],
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/upma-recipe.jpg",
      calories: 220,
      servings: 2,
      ingredients: ["Rava", "Onion", "Mustard Seeds", "Green Chilies", "Curry Leaves", "Water"],
      instructions: [
        "Roast rava until fragrant",
        "Sauté onions and chilies in oil",
        "Add water and salt, bring to boil",
        "Mix rava gradually and stir until thick",
        "Serve hot with coconut chutney"
      ],
    },
    
    {
      id: 58,
      name: "Kadai Paneer",
      cuisine: "North Indian",
      time: 35,
      difficulty: "Medium",
      mood: ["comfort", "familiar", "moderate"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Gluten-Free"],
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg",
      calories: 410,
      servings: 3,
      ingredients: ["Paneer", "Bell Peppers", "Onions", "Tomatoes", "Spices", "Oil"],
      instructions: [
        "Sauté onions, tomatoes, and capsicum with spices",
        "Add paneer cubes and toss well",
        "Simmer for 5 minutes and serve with roti or rice"
      ],
    },
    
    {
      id: 59,
      name: "Vegetable Pulao",
      cuisine: "South Indian",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "light", "moderate"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgm8JhTl9fVGX7qKnZp1EHYZ3asCVUwEDbg&s",
      calories: 360,
      servings: 4,
      ingredients: ["Basmati Rice", "Mixed Vegetables", "Ghee", "Bay Leaf", "Spices", "Salt"],
      instructions: [
        "Wash and soak rice for 15 minutes",
        "Sauté whole spices in ghee",
        "Add vegetables and fry briefly",
        "Mix rice, add water, and cook until fluffy",
        "Serve with raita or curry"
      ],
    },
    {
      id: 60,
      name: "Pongal",
      cuisine: "South Indian",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Gluten-Free"],
      image: "https://static.toiimg.com/thumb/59366396.cms?imgsize=1167787&width=800&height=800",
      calories: 320,
      servings: 3,
      ingredients: ["Rice", "Moong Dal", "Pepper", "Cumin", "Ghee", "Cashews"],
      instructions: [
        "Roast moong dal lightly and mix with rice",
        "Pressure cook with water until soft",
        "Temper pepper, cumin, and cashews in ghee",
        "Add tempering to pongal and mix well"
      ],
    },
    
    {
      id: 61,
      name: "Malai Kofta",
      cuisine: "North Indian",
      time: 45,
      difficulty: "Hard",
      mood: ["hearty", "familiar", "leisurely"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7mQYF2Y0ySsJ1-kjMovWnyFqXE5kfDLm8w&s",
      calories: 480,
      servings: 3,
      ingredients: ["Paneer", "Potatoes", "Cream", "Tomatoes", "Cashews", "Spices"],
      instructions: [
        "Make kofta balls from paneer and potatoes, fry until golden",
        "Blend tomatoes and cashews into smooth gravy",
        "Simmer gravy with spices and cream",
        "Add koftas before serving and garnish with coriander"
      ],
    },
    
    {
      id: 62,
      name: "Bisibele Bath",
      cuisine: "South Indian",
      time: 35,
      difficulty: "Medium",
      mood: ["comfort", "hearty", "moderate"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0OB72CB2Q77WoNLJ4aIi5ViA4SSNN6QJyYg&s",
      calories: 400,
      servings: 4,
      ingredients: ["Rice", "Toor Dal", "Tamarind", "Vegetables", "Bisibele Powder", "Ghee"],
      instructions: [
        "Cook rice and dal together until soft",
        "Add tamarind pulp and bisibele masala",
        "Mix in sautéed vegetables and simmer 10 minutes",
        "Drizzle with ghee and serve hot"
      ],
    },
    
    {
      id: 63,
      name: "Bhindi Masala",
      cuisine: "North Indian",
      time: 25,
      difficulty: "Easy",
      mood: ["light", "familiar", "quick"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Carb", "Low-Fat"],
      image: "https://www.natashamohan.com/wp-content/uploads/2025/07/masala-bhindi-dry-recipe-scaled.jpg",
      calories: 230,
      servings: 2,
      ingredients: ["Ladyfinger", "Onion", "Tomato", "Cumin", "Spices", "Oil"],
      instructions: [
        "Wash and dry bhindi, chop into pieces",
        "Sauté onions and tomatoes with spices",
        "Add bhindi and cook until tender",
        "Serve with roti or paratha"
      ],
    },
    
    {
      id: 64,
      name: "Fish Curry (Kerala Style)",
      cuisine: "South Indian",
      time: 40,
      difficulty: "Medium",
      mood: ["hearty", "experimental", "moderate"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4zSRr1_V6fLoa6cD6czKAvUu0qvqiy4dCA&s",
      calories: 460,
      servings: 3,
      ingredients: ["Fish", "Coconut Milk", "Tamarind", "Curry Leaves", "Chili Powder", "Garlic"],
      instructions: [
        "Marinate fish with chili and turmeric",
        "Prepare curry with coconut milk and tamarind",
        "Add fish pieces and simmer until cooked",
        "Garnish with curry leaves and serve hot"
      ],
    },
    
    {
      id: 65,
      name: "Chana Masala",
      cuisine: "North Indian",
      time: 35,
      difficulty: "Medium",
      mood: ["comfort", "familiar", "moderate"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "No Added Sugar"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnqYPeXZqkBjMrjA8Aae0hPHrGZFoExmm5A&s",
      calories: 390,
      servings: 3,
      ingredients: ["Chickpeas", "Tomatoes", "Onions", "Ginger", "Garlic", "Spices"],
      instructions: [
        "Soak chickpeas overnight and cook until soft",
        "Prepare masala base with onions, tomatoes, and spices",
        "Add chickpeas and simmer until thick",
        "Serve with roti or rice"
      ],
    },
    
    {
      id: 66,
      name: "Curd Rice",
      cuisine: "South Indian",
      time: 15,
      difficulty: "Easy",
      mood: ["calm", "light", "quick"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Probiotic", "Gluten-Free", "Low-Fat"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHDJGtkGdBwIqlyrST57oZWWI0xdnvrAn5w&s",
      calories: 250,
      servings: 3,
      ingredients: ["Rice", "Curd", "Curry Leaves", "Mustard Seeds", "Ginger", "Salt"],
      instructions: [
        "Cook rice and let it cool slightly",
        "Mix curd, salt, and rice together",
        "Temper mustard seeds, curry leaves, and ginger",
        "Pour over curd rice and mix gently"
      ],
    },
    
    {
      id: 67,
      name: "Matar Paneer",
      cuisine: "North Indian",
      time: 30,
      difficulty: "Medium",
      mood: ["comfort", "familiar", "moderate"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Heart-Healthy"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YxsB0Jh58_p4y-5Vy7KOSHtl6p1CJVLfZA&s",
      calories: 380,
      servings: 3,
      ingredients: ["Paneer", "Green Peas", "Tomatoes", "Onions", "Spices", "Oil"],
      instructions: [
        "Sauté onions and tomatoes with spices",
        "Add peas and cook until soft",
        "Mix in paneer cubes and simmer for 10 minutes",
        "Serve with rice or chapati"
      ],
    },
    
    {
      id: 68,
      name: "Lemon Rice",
      cuisine: "South Indian",
      time: 20,
      difficulty: "Easy",
      mood: ["light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Low-Fat"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SWaAYZEgQLQ7QEGbNcIN0kKUKrTwt9oNAw&s",
      calories: 300,
      servings: 3,
      ingredients: ["Rice", "Lemon Juice", "Mustard Seeds", "Curry Leaves", "Green Chilies", "Oil"],
      instructions: [
        "Cook rice and let it cool slightly",
        "Heat oil and temper mustard seeds and curry leaves",
        "Add chilies, lemon juice, and salt",
        "Mix with rice and serve"
      ],
    },
    
    {
      id: 69,
      name: "Baingan Bharta",
      cuisine: "North Indian",
      time: 35,
      difficulty: "Medium",
      mood: ["comfort", "familiar", "moderate"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Low-Carb", "Low-Fat"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1IGgnCb8iO4_bXY7_Isoq-sAyj7yIH6urA&s",
      calories: 330,
      servings: 3,
      ingredients: ["Eggplant", "Onion", "Tomatoes", "Garlic", "Spices", "Oil"],
      instructions: [
        "Roast eggplant until soft and peel skin",
        "Mash and mix with sautéed onions and tomatoes",
        "Add spices and cook for 10 minutes",
        "Serve with roti or paratha"
      ],
    },
    {
      id: 70,
      name: "Masala Dosa",
      cuisine: "South Indian",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "light", "moderate", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGx3JuVap3prbRpq-an5sVvyoVcqFgNGvmPA&s",
      calories: 370,
      servings: 3,
      ingredients: ["Rice", "Urad Dal", "Potatoes", "Onion", "Mustard Seeds", "Curry Leaves"],
      instructions: [
        "Prepare fermented batter with rice and dal",
        "Cook potato filling with onions and spices",
        "Spread batter into thin dosa and stuff with potato mix",
        "Serve with chutney and sambar"
      ],
    },
    
    {
      id: 71,
      name: "Rajma Chawal",
      cuisine: "North Indian",
      time: 40,
      difficulty: "Easy",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-P48i1KPqdmyxA_0WlOw9EnA9VwMCnNZE_w&s",
      calories: 420,
      servings: 3,
      ingredients: ["Kidney Beans", "Onions", "Tomatoes", "Ginger", "Garlic", "Rice"],
      instructions: [
        "Soak rajma overnight and pressure cook until soft",
        "Prepare masala with onions, tomatoes, and spices",
        "Mix cooked rajma and simmer",
        "Serve with steamed rice"
      ],
    },
    
    {
      id: 72,
      name: "Medu Vada",
      cuisine: "South Indian",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3puRpdVWMLH2ksiAZ88fvA8ANoDCSYCkEw&s",
      calories: 280,
      servings: 4,
      ingredients: ["Urad Dal", "Black Pepper", "Curry Leaves", "Onion", "Oil", "Salt"],
      instructions: [
        "Soak urad dal and grind into smooth batter",
        "Add spices and shape into vadas",
        "Deep fry until golden brown",
        "Serve with sambar and chutney"
      ],
    },
    
    {
      id: 73,
      name: "Paneer Butter Masala",
      cuisine: "North Indian",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaC7LMJUEXRfzp4xCKvvc8RhDMmE6SYQHxUA&s",
      calories: 460,
      servings: 3,
      ingredients: ["Paneer", "Butter", "Tomatoes", "Cream", "Spices", "Onion"],
      instructions: [
        "Blend tomatoes into smooth puree",
        "Cook with butter, cream, and spices",
        "Add paneer cubes and simmer for 10 minutes",
        "Serve with naan or rice"
      ],
    },
    
    {
      id: 74,
      name: "Rasam",
      cuisine: "South Indian",
      time: 20,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Low-Fat", "Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdbsXlie6iHYLltFdooPuLUclYfCNLRat7Q&s",
      calories: 180,
      servings: 3,
      ingredients: ["Tamarind", "Tomatoes", "Garlic", "Mustard Seeds", "Curry Leaves", "Spices"],
      instructions: [
        "Boil tamarind with tomatoes and rasam powder",
        "Add tempered mustard and curry leaves",
        "Simmer for 10 minutes",
        "Serve hot with rice"
      ],
    },
    
    {
      id: 75,
      name: "Aloo Gobi",
      cuisine: "North Indian",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Low-Fat", "Dairy-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuTfOsOouCmfi8PYQmlVPp6J7jduS4NQLAQ&s",
      calories: 300,
      servings: 3,
      ingredients: ["Potatoes", "Cauliflower", "Onion", "Turmeric", "Ginger", "Oil"],
      instructions: [
        "Sauté onions, add potatoes and cauliflower",
        "Add spices and cook until vegetables are tender",
        "Garnish with coriander and serve"
      ],
    },
    
    {
      id: 76,
      name: "Chettinad Veg Kurma",
      cuisine: "South Indian",
      time: 40,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ows710yetDvUoO0f9n8vSl5wfMTC4WW76g&s",
      calories: 380,
      servings: 4,
      ingredients: ["Mixed Vegetables", "Coconut", "Curry Leaves", "Fennel Seeds", "Spices"],
      instructions: [
        "Grind coconut and spices into paste",
        "Cook vegetables with masala until soft",
        "Simmer and serve with appam or rice"
      ],
    },
    
    {
      id: 77,
      name: "Dal Makhani",
      cuisine: "North Indian",
      time: 45,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Heart-Healthy"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IycwOGOm-DwDTK1j70UZpW2Dmgb8S_T72w&s",
      calories: 420,
      servings: 4,
      ingredients: ["Black Lentils", "Kidney Beans", "Tomatoes", "Cream", "Butter", "Spices"],
      instructions: [
        "Soak lentils overnight and pressure cook",
        "Prepare rich masala with tomatoes and butter",
        "Simmer lentils in gravy for 20 minutes",
        "Serve with rice or naan"
      ],
    },
    
    {
      id: 78,
      name: "Prawn Curry (Goan Style)",
      cuisine: "South Indian",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUpItiRP9qRdvc61RW4DSZhKKCAQavf33hA&s",
      calories: 480,
      servings: 3,
      ingredients: ["Prawns", "Coconut Milk", "Tamarind", "Red Chilies", "Curry Leaves"],
      instructions: [
        "Marinate prawns with spices",
        "Prepare curry base with coconut milk and tamarind",
        "Add prawns and simmer",
        "Serve with steamed rice"
      ],
    },
    
    {
      id: 79,
      name: "Palak Paneer",
      cuisine: "North Indian",
      time: 30,
      difficulty: "Medium",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Heart-Healthy"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklSAViSn4N1KLj0hLyGRI3Da0eeymqtLhnQ&s",
      calories: 350,
      servings: 3,
      ingredients: ["Spinach", "Paneer", "Garlic", "Cream", "Spices", "Onion"],
      instructions: [
        "Blanch spinach and puree",
        "Cook with onions, garlic, and spices",
        "Add paneer cubes and simmer briefly",
        "Serve warm with roti or rice"
      ],
    },
    {
      id: 80,
      name: "Chole Bhature",
      cuisine: "North Indian",
      time: 45,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "No Added Sugar"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcLbGXiQ5ETXtODsegICYDtKn9yj4QLjayg&s",
      calories: 550,
      servings: 3,
      ingredients: ["Chickpeas", "All-Purpose Flour", "Tomatoes", "Onions", "Ginger", "Spices"],
      instructions: [
        "Soak and cook chickpeas until soft",
        "Knead dough for bhature, roll out and deep fry",
        "Prepare spicy chickpea curry with tomatoes and spices",
        "Serve hot bhature with chole"
      ],
    },
    
    {
      id: 81,
      name: "Appam with Stew",
      cuisine: "South Indian",
      time: 40,
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Low-Fat"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLT4VD7ESLwAcl9nyT-71m0Rwknb3-3YDVkA&s",
      calories: 320,
      servings: 3,
      ingredients: ["Rice Flour", "Coconut Milk", "Yeast", "Vegetables", "Cardamom", "Curry Leaves"],
      instructions: [
        "Prepare fermented batter for appam",
        "Cook soft appams in a special pan",
        "Prepare mild vegetable stew with coconut milk and spices",
        "Serve appam with vegetable stew"
      ],
    },
    
    {
      id: 82,
      name: "Paneer Tikka",
      cuisine: "North Indian",
      time: 50,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Gluten-Free", "Low-Carb"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmIjOOwbDo4bP6PpvRpahlkyfpPyKjX-ycw&s",
      calories: 400,
      servings: 3,
      ingredients: ["Paneer", "Yogurt", "Spices", "Bell Peppers", "Onion", "Lemon Juice"],
      instructions: [
        "Marinate paneer and vegetables in spiced yogurt",
        "Skewer and grill paneer until charred",
        "Serve with mint chutney"
      ],
    },
    
    {
      id: 83,
      name: "Chettinad Pepper Chicken",
      cuisine: "South Indian",
      time: 55,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "experimental"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb", "Dairy-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqZ_f0gCcfeNr9es5s8nro3NeLD6K9gW1w&s",
      calories: 520,
      servings: 4,
      ingredients: ["Chicken", "Black Pepper", "Curry Leaves", "Onions", "Mustard Seeds", "Spices"],
      instructions: [
        "Dry roast spices and grind to a paste",
        "Cook onions and mustard seeds, add paste",
        "Add chicken and cook until tender",
        "Garnish with curry leaves and serve hot"
      ],
    },
    
    {
      id: 84,
      name: "Methi Thepla",
      cuisine: "North Indian",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Heart-Healthy", "No Added Sugar"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uy5SxKFfkP0VUuLg6-yj2AJtWSAP3kabGA&s",
      calories: 290,
      servings: 3,
      ingredients: ["Whole Wheat Flour", "Fenugreek Leaves", "Yogurt", "Spices", "Oil", "Salt"],
      instructions: [
        "Knead dough with wheat flour, methi leaves, and spices",
        "Roll into thin flatbreads",
        "Cook on tawa until golden brown",
        "Serve with yogurt or pickle"
      ],
    },
    
    {
      id: 85,
      name: "Curd Rice with Pomegranate",
      cuisine: "South Indian",
      time: 20,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Probiotic", "Gluten-Free", "Low-Fat"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Oz2KFrYXuHZCpPIqqaB2_xfqf604xL_rqQ&s",
      calories: 260,
      servings: 3,
      ingredients: ["Rice", "Curd", "Mustard Seeds", "Green Chilies", "Pomegranate Seeds", "Curry Leaves"],
      instructions: [
        "Cook rice and cool slightly",
        "Mix rice with fresh curd and salt",
        "Temper mustard seeds, chilies, and curry leaves in oil",
        "Add tempering and pomegranate seeds to rice"
      ],
    },
    
    {
      id: 86,
      name: "Kofta Curry",
      cuisine: "North Indian",
      time: 50,
      difficulty: "Hard",
      mood: ["calm", "hearty", "leisurely", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb", "Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHKRNqQpIc7cvpKlj2pjPFLs4NyWFNNQhlw&s",
      calories: 450,
      servings: 4,
      ingredients: ["Paneer", "Potatoes", "Onion", "Tomatoes", "Cream", "Spices"],
      instructions: [
        "Prepare kofta balls from paneer and potatoes, deep fry",
        "Make a rich tomato-based gravy with spices",
        "Add cream and simmer",
        "Add kofta and cook for 10 minutes"
      ],
    },
    
    {
      id: 87,
      name: "Vegetable Kurma",
      cuisine: "South Indian",
      time: 35,
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Gluten-Free", "Low-Fat", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DmTF-nBy3xfqp2dSbiW79IRFz9xaxwPtHg&s",
      calories: 360,
      servings: 4,
      ingredients: ["Mixed Vegetables", "Coconut", "Onion", "Green Chilies", "Spices", "Ginger"],
      instructions: [
        "Grind coconut and spices into a paste",
        "Cook vegetables and add the paste",
        "Simmer until thick and flavorful",
        "Serve with appam or rice"
      ],
    },
    
    {
      id: 88,
      name: "Nihari",
      cuisine: "North Indian",
      time: 120,
      difficulty: "Hard",
      mood: ["tired", "hearty", "leisurely", "experimental"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIH94FgWhEZn_rgvBidiBhHLEPkpaQLuHUwg&s",
      calories: 650,
      servings: 4,
      ingredients: ["Mutton", "Wheat Flour", "Ginger", "Garlic", "Spices", "Yogurt"],
      instructions: [
        "Slow cook mutton with spices and yogurt for hours",
        "Prepare thick nihari gravy with wheat flour",
        "Combine meat and gravy, simmer until tender",
        "Serve hot with naan or rice"
      ],
    },
    
    {
      id: 89,
      name: "Tom Kha Soup (Indian Style)",
      cuisine: "South Indian",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "international"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Dairy-Free", "Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3alcGLVHXu90pqFoc6RtI9F20VoU2sRQ5A&s",
      calories: 200,
      servings: 3,
      ingredients: ["Coconut Milk", "Lemongrass", "Mushrooms", "Green Chilies", "Ginger", "Lime Juice"],
      instructions: [
        "Boil coconut milk with lemongrass and spices",
        "Add mushrooms and simmer",
        "Season with lime juice and green chilies",
        "Serve hot as a light, aromatic soup"
      ],
    },
    {
      id: 90,
      name: "Malabar Parotta",
      cuisine: "South Indian",
      time: 45,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["All"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0F4RyPn10dvMZ6XTJvcEuf2sTjVbOxR3ew&s",
      calories: 470,
      servings: 4,
      ingredients: ["All-Purpose Flour", "Oil", "Salt", "Water"],
      instructions: [
        "Prepare dough with flour, salt, and water",
        "Roll into thin sheets, fold and roll again",
        "Cook on hot tawa with oil until golden",
        "Serve hot with chutney or curry"
      ],
    },
    
    {
      id: 91,
      name: "Gulab Jamun",
      cuisine: "North Indian",
      time: 45,
      difficulty: "Medium",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTo6k3apnsXT4B3gUFBVKwv1HYDUOUwgn8g&s",
      calories: 450,
      servings: 4,
      ingredients: ["Milk Powder", "Flour", "Sugar", "Cardamom", "Rose Water", "Ghee"],
      instructions: [
        "Prepare dough from milk powder and flour",
        "Shape into small balls and deep fry till golden",
        "Soak fried balls in warm sugar syrup flavoured with cardamom and rose water",
        "Serve warm or cold"
      ],
    },
    
    {
      id: 92,
      name: "Lemon Sevai",
      cuisine: "South Indian",
      time: 18,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Low-Fat"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSec9w3q7VfsOBPgAvioAKuB5AEtC0uAEBsZA&s",
      calories: 260,
      servings: 3,
      ingredients: ["Rice Vermicelli", "Lemon Juice", "Mustard Seeds", "Green Chilies", "Curry Leaves", "Peanuts"],
      instructions: [
        "Roast and cook rice vermicelli",
        "Tempered mustard seeds, chilies, and curry leaves in oil",
        "Mix lemon juice and roasted peanuts with vermicelli",
        "Serve warm"
      ],
    },
    
    {
      id: 93,
      name: "Sundal",
      cuisine: "South Indian",
      time: 15,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Gluten-Free", "Low-Carb"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijTU7ws6hw7DfsPmshGOhfxEdcvwHHp2RvA&s",
      calories: 280,
      servings: 3,
      ingredients: ["Chickpeas", "Mustard Seeds", "Curry Leaves", "Green Chilies", "Lemon Juice", "Salt"],
      instructions: [
        "Boil chickpeas until tender",
        "Tempered mustard seeds and curry leaves in oil",
        "Mix chickpeas with tempering, salt, and lemon juice",
        "Serve as healthy snack"
      ],
    },
    
    {
      id: 94,
      name: "Bhutta (Roasted Corn)",
      cuisine: "North Indian",
      time: 15,
      difficulty: "Easy",
      mood: ["energetic", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs87_RpUrfoZjGCpWorZJNePmh50mQBEZvCw&s",
      calories: 180,
      servings: 2,
      ingredients: ["Corn on the Cob", "Butter", "Chili Powder", "Lemon", "Salt"],
      instructions: [
        "Roast corn over open flame or grill",
        "Spread butter, sprinkle chili powder and salt",
        "Squeeze fresh lemon juice",
        "Serve hot as street style snack"
      ],
    },
    
    {
      id: 95,
      name: "Modak",
      cuisine: "South Indian",
      time: 60,
      difficulty: "Medium",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx84F8RVl4Fuj7rXLYxV1_Ppo8oli_1ma8kw&s",
      calories: 290,
      servings: 4,
      ingredients: ["Rice Flour", "Jaggery", "Grated Coconut", "Cardamom Powder", "Ghee"],
      instructions: [
        "Prepare dough with rice flour and hot water",
        "Prepare filling with grated coconut and jaggery",
        "Shape dough into dumplings with filling",
        "Steam modaks until cooked and serve"
      ],
    },
    
    {
      id: 96,
      name: "Litti Chokha",
      cuisine: "North Indian",
      time: 60,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "experimental"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Low-Fat", "Gluten-Free"],
      image: "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/0ddba193-7e55-406e-8bdc-216489268884/img_8374.jpg",
      calories: 480,
      servings: 4,
      ingredients: ["Whole Wheat Flour", "Sattu", "Mustard Oil", "Garlic", "Potatoes", "Tomatoes"],
      instructions: [
        "Prepare dough and sattu stuffing with spices",
        "Shape littis and bake or fry",
        "Prepare chokha with mashed potatoes, tomatoes, and mustard oil",
        "Serve litti with chokha"
      ],
    },
    
    {
      id: 97,
      name: "Kesari Bath",
      cuisine: "South Indian",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3igifCT0sRw-MLBHTJC1Qs1ymc51V_uQItA&s",
      calories: 300,
      servings: 3,
      ingredients: ["Semolina", "Sugar", "Ghee", "Saffron", "Cardamom", "Cashews"],
      instructions: [
        "Roast semolina in ghee",
        "Boil sugar syrup with saffron and cardamom",
        "Add semolina to syrup gradually and cook",
        "Garnish with cashews and serve hot"
      ],
    },
    
    {
      id: 98,
      name: "Sarson Ka Saag",
      cuisine: "North Indian",
      time: 60,
      difficulty: "Medium",
      mood: ["calm", "hearty", "leisurely", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["Low-Carb", "Low-Fat"],
      image: "https://www.pankajbhadouria.com/wp-content/uploads/sarson-ka-saag-makke-ki-roti.jpg",
      calories: 320,
      servings: 4,
      ingredients: ["Mustard Greens", "Spinach", "Green Chilies", "Ginger", "Maize Flour", "Ghee"],
      instructions: [
        "Cook mustard greens and spinach till soft",
        "Blend with spices and maize flour",
        "Simmer with ghee until thick",
        "Serve hot with makki roti"
      ],
    },
    
    {
      id: 99,
      name: "Mulaku Curry",
      cuisine: "South Indian",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["Low-Fat", "Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KxDJj7BmCN6bO60XVMW20MGJmmxcI-RoeA&s",
      calories: 250,
      servings: 3,
      ingredients: ["Green Chilies", "Coconut", "Curry Leaves", "Mustard Seeds", "Garlic", "Tamarind"],
      instructions: [
        "Grind coconut, garlic, and spices into a paste",
        "Cook green chilies with tamarind and tempering",
        "Add coconut paste and simmer",
        "Serve hot with rice"
      ],
    },
    {
      id: 100,
      name: "Ilish Macher Jhol",
      cuisine: "Bengali",
      time: 40,
      difficulty: "Medium",
      mood: ["hearty", "familiar", "moderate", "comfort"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein"],
      image: "https://i.pinimg.com/736x/6d/89/2d/6d892d499ef59f266b9be530b7c6e199.jpg",
      calories: 420,
      servings: 4,
      ingredients: ["Hilsa fish", "Mustard oil", "Turmeric", "Green chilies", "Nigella seeds", "Salt"],
      instructions: [
        "Clean the Hilsa pieces and marinate with turmeric and salt",
        "Heat mustard oil and lightly fry the fish pieces, remove and set aside",
        "Add nigella seeds and green chilies to the oil",
        "Add turmeric water and salt, then add the fish pieces",
        "Simmer for 8–10 minutes and serve hot with rice"
      ],
    },
    
    {
      id: 101,
      name: "Chingri Malai Curry (Prawn in Coconut Milk)",
      cuisine: "Bengali",
      time: 45,
      difficulty: "Medium",
      mood: ["comfort", "international", "moderate", "energetic"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://i.pinimg.com/736x/fd/aa/40/fdaa40930c6d4c97603032a19ee0f156.jpg",
      calories: 480,
      servings: 4,
      ingredients: ["Prawns", "Coconut milk", "Onions", "Ginger-garlic paste", "Turmeric", "Mustard oil"],
      instructions: [
        "Clean and devein prawns, marinate with turmeric and salt",
        "Fry lightly in mustard oil and remove",
        "In the same pan, sauté onions and ginger-garlic paste",
        "Add coconut milk, salt, and turmeric",
        "Add prawns and simmer for 10 minutes until creamy"
      ],
    },
    
    {
      id: 102,
      name: "Kosha Mangsho (Bengali Mutton Curry)",
      cuisine: "Bengali",
      time: 90,
      difficulty: "Hard",
      mood: ["hearty", "comfort", "leisurely", "familiar"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://i.pinimg.com/736x/e9/a5/92/e9a592bc11a55224937245014387e1d0.jpg",
      calories: 620,
      servings: 4,
      ingredients: ["Mutton", "Onions", "Ginger-garlic paste", "Yogurt", "Mustard oil", "Spices", "Salt"],
      instructions: [
        "Marinate mutton with yogurt, salt, and spices for 1 hour",
        "Fry onions until golden, add ginger-garlic paste and spices",
        "Add marinated mutton and cook on low heat for 1.5 hours",
        "Add little water and simmer until meat is tender",
        "Serve hot with luchi or rice"
      ],
    },
    
    {
      id: 103,
      name: "Shorshe Ilish (Hilsa in Mustard Sauce)",
      cuisine: "Bengali",
      time: 35,
      difficulty: "Medium",
      mood: ["calm", "familiar", "moderate", "comfort"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein"],
      image: "https://i.pinimg.com/736x/e2/8a/8e/e28a8e812a8bda21198877008eddc279.jpg",
      calories: 430,
      servings: 4,
      ingredients: ["Hilsa fish", "Mustard paste", "Green chilies", "Mustard oil", "Turmeric", "Salt"],
      instructions: [
        "Make mustard paste and mix with turmeric and salt",
        "Marinate fish with the mixture for 10 minutes",
        "Heat mustard oil, add green chilies, and slide in the fish",
        "Add water and simmer for 10 minutes",
        "Serve hot with steamed rice"
      ],
    },
    
    {
      id: 104,
      name: "Aloo Posto (Potatoes in Poppy Seed Sauce)",
      cuisine: "Bengali",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Low-Sodium"],
      image: "https://i.pinimg.com/736x/59/20/cc/5920cccbd8d72ab407614aa8cb21d239.jpg",
      calories: 310,
      servings: 3,
      ingredients: ["Potatoes", "Poppy seeds", "Green chilies", "Mustard oil", "Salt"],
      instructions: [
        "Soak poppy seeds and grind into a paste",
        "Fry diced potatoes in mustard oil",
        "Add poppy seed paste and salt",
        "Add water and cook until potatoes are soft",
        "Serve with steamed rice"
      ],
    },
    
    {
      id: 105,
      name: "Luchi",
      cuisine: "Bengali",
      time: 25,
      difficulty: "Easy",
      mood: ["energetic", "hearty", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Nut-Free"],
      image: "https://i.pinimg.com/736x/1d/4e/ad/1d4ead979c2003b2ee684a4d665d1cb9.jpg",
      calories: 220,
      servings: 4,
      ingredients: ["Refined flour", "Salt", "Oil", "Water"],
      instructions: [
        "Knead flour with salt and water into soft dough",
        "Roll into small circles",
        "Deep fry in hot oil until puffed and golden",
        "Serve hot with aloo tarkari or cholar dal"
      ],
    },
    
    {
      id: 106,
      name: "Cholar Dal",
      cuisine: "Bengali",
      time: 35,
      difficulty: "Easy",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Gluten-Free"],
      image: "https://i.pinimg.com/736x/22/e4/59/22e459bd50860a3373f137c00c391836.jpg",
      calories: 280,
      servings: 4,
      ingredients: ["Chana dal", "Coconut pieces", "Ginger", "Bay leaf", "Cumin seeds", "Ghee", "Salt"],
      instructions: [
        "Soak chana dal for 1 hour and boil until soft",
        "Fry coconut pieces in ghee",
        "Add cumin, bay leaf, and ginger paste",
        "Add boiled dal, salt, and simmer for 10 minutes",
        "Serve with luchi or rice"
      ],
    },
    
    {
      id: 107,
      name: "Dhokar Dalna",
      cuisine: "Bengali",
      time: 60,
      difficulty: "Medium",
      mood: ["hearty", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Gluten-Free"],
      image: "https://i.pinimg.com/736x/6b/63/d5/6b63d5719c0ebbab7e8deada7792a5e6.jpg",
      calories: 400,
      servings: 4,
      ingredients: ["Chana dal", "Onions", "Tomatoes", "Spices", "Oil", "Salt"],
      instructions: [
        "Soak and grind chana dal, then steam and cut into cubes",
        "Fry dhoka pieces till golden",
        "Prepare gravy with tomatoes, onions, and spices",
        "Add fried dhokas and simmer for 5–10 minutes"
      ],
    },
    
    {
      id: 108,
      name: "Shukto",
      cuisine: "Bengali",
      time: 40,
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Low-Sodium"],
      image: "https://i.pinimg.com/736x/f5/74/a5/f574a57959ace66d131a2e3a23644c69.jpg",
      calories: 260,
      servings: 4,
      ingredients: ["Bitter gourd", "Raw banana", "Drumsticks", "Potatoes", "Milk", "Mustard seeds", "Ghee"],
      instructions: [
        "Cut and boil vegetables slightly",
        "Prepare a light gravy with mustard paste and milk",
        "Add vegetables and simmer until tender",
        "Finish with a drizzle of ghee"
      ],
    },
    
    {
      id: 109,
      name: "Begun Bhaja",
      cuisine: "Bengali",
      time: 20,
      difficulty: "Easy",
      mood: ["light", "quick", "familiar", "calm"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Carb", "Gluten-Free"],
      image: "https://i.pinimg.com/736x/fb/d7/48/fbd748e963c717afe8bcdc343e21b794.jpg",
      calories: 180,
      servings: 2,
      ingredients: ["Eggplant", "Turmeric", "Salt", "Mustard oil"],
      instructions: [
        "Slice eggplant and marinate with turmeric and salt",
        "Heat mustard oil in a pan",
        "Fry slices till golden brown on both sides",
        "Serve with rice and dal"
      ],
    },
    
    {
      id: 110,
      name: "Macher Matha Diye Dal",
      cuisine: "Bengali",
      time: 50,
      difficulty: "Medium",
      mood: ["hearty", "comfort", "moderate", "familiar"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein"],
      image: "https://i.pinimg.com/736x/68/49/f1/6849f162c08ccbf7a8950cd489049642.jpg",
      calories: 450,
      servings: 4,
      ingredients: ["Fish head", "Moong dal", "Onions", "Ginger", "Spices", "Mustard oil"],
      instructions: [
        "Fry fish head in mustard oil till golden",
        "Boil moong dal until soft",
        "Add fried fish head and spices to dal",
        "Simmer for 10 minutes and serve hot"
      ],
    },
    
    {
      id: 111,
      name: "Bhetki Paturi",
      cuisine: "Bengali",
      time: 40,
      difficulty: "Medium",
      mood: ["calm", "familiar", "moderate", "comfort"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://i.pinimg.com/1200x/22/87/f0/2287f0c312b2bbd01d179a6cbf453c0e.jpg",
      calories: 390,
      servings: 4,
      ingredients: ["Bhetki fillets", "Mustard paste", "Banana leaves", "Green chilies", "Mustard oil", "Salt"],
      instructions: [
        "Marinate fish with mustard paste, salt, and mustard oil",
        "Wrap in banana leaves and tie with thread",
        "Steam or pan-cook for 15–20 minutes",
        "Serve hot with rice"
      ],
    },
      {
        id: 112,
        name: "Pabda Macher Jhal",
        cuisine: "Bengali",
        time: 35,
        difficulty: "Medium",
        mood: ["hearty", "familiar", "moderate", "comfort"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/736x/51/25/8a/51258a936a273ab413e4178cb5219244.jpg",
        calories: 410,
        servings: 4,
        ingredients: ["Pabda fish", "Mustard paste", "Green chilies", "Turmeric", "Mustard oil", "Salt"],
        instructions: [
          "Clean and marinate fish with salt and turmeric",
          "Heat mustard oil and lightly fry fish pieces",
          "Prepare mustard paste and add with green chilies and turmeric",
          "Add water, simmer and cook the fish for 10 minutes",
          "Serve hot with steamed rice"
        ],
      },
    
      {
        id: 113,
        name: "Mochar Ghonto",
        cuisine: "Bengali",
        time: 50,
        difficulty: "Medium",
        mood: ["calm", "light", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/45/e5/37/45e537ac4a29008e49af71267650f08f.jpg",
        calories: 280,
        servings: 4,
        ingredients: ["Banana flower", "Potatoes", "Coconut", "Spices", "Mustard oil"],
        instructions: [
          "Clean and chop banana flower, boil slightly",
          "Fry potatoes, add grated coconut and spices",
          "Add banana flower and cook until soft",
          "Serve with rice"
        ],
      },
    
      {
        id: 114,
        name: "Potoler Dolma",
        cuisine: "Bengali",
        time: 45,
        difficulty: "Medium",
        mood: ["comfort", "moderate", "familiar", "calm"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/11/ce/a6/11cea6c0912774203a871a7689666a90.jpg",
        calories: 340,
        servings: 4,
        ingredients: ["Pointed gourd", "Paneer or minced meat", "Spices", "Onions", "Mustard oil"],
        instructions: [
          "Scoop out seeds from potol and stuff with filling",
          "Fry lightly in mustard oil",
          "Prepare gravy with onions and spices",
          "Add stuffed potols and simmer for 10 minutes"
        ],
      },
    
      {
        id: 115,
        name: "Enchorer Dalna (Raw Jackfruit Curry)",
        cuisine: "Bengali",
        time: 50,
        difficulty: "Medium",
        mood: ["hearty", "comfort", "moderate", "familiar"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/96/ab/1c/96ab1ce3f9480835b9ddb871fed6e994.jpg",
        calories: 370,
        servings: 4,
        ingredients: ["Raw jackfruit", "Onions", "Tomatoes", "Spices", "Mustard oil"],
        instructions: [
          "Boil raw jackfruit and cut into cubes",
          "Fry with spices, onions, and tomatoes",
          "Add water and cook until tender",
          "Serve with rice"
        ],
      },
    
      {
        id: 116,
        name: "Kathi Roll (Chicken)",
        cuisine: "Bengali",
        time: 30,
        difficulty: "Medium",
        mood: ["energetic", "international", "quick", "comfort"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/1200x/60/7e/b2/607eb272e2c7806bb4803625d04ea607.jpg",
        calories: 460,
        servings: 2,
        ingredients: ["Chicken", "Roti", "Onions", "Spices", "Eggs", "Oil"],
        instructions: [
          "Cook marinated chicken with spices",
          "Prepare egg-coated rotis",
          "Stuff with chicken, onions, and sauces",
          "Roll and serve hot"
        ],
      },
    
      {
        id: 117,
        name: "Mughlai Paratha",
        cuisine: "Bengali",
        time: 35,
        difficulty: "Medium",
        mood: ["hearty", "international", "moderate", "comfort"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/1200x/6b/3b/2e/6b3b2e883e16754d29671005d46bdefb.jpg",
        calories: 550,
        servings: 2,
        ingredients: ["Flour", "Eggs", "Minced meat or paneer", "Spices", "Oil"],
        instructions: [
          "Prepare dough and roll out paratha",
          "Add filling of eggs and meat",
          "Fold and shallow fry till golden",
          "Serve with salad or ketchup"
        ],
      },
    
      {
        id: 118,
        name: "Ghugni",
        cuisine: "Bengali",
        time: 35,
        difficulty: "Easy",
        mood: ["calm", "comfort", "moderate", "familiar"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Low-Fat"],
        image: "https://i.pinimg.com/736x/79/ea/f4/79eaf4b3d56268b665e1cc5eec8a5694.jpg",
        calories: 290,
        servings: 4,
        ingredients: ["Yellow peas", "Onions", "Tomatoes", "Spices", "Tamarind", "Oil"],
        instructions: [
          "Soak peas overnight and boil until soft",
          "Sauté onions, tomatoes, and spices",
          "Add peas and tamarind water",
          "Cook until thick and serve"
        ],
      },
    
      {
        id: 119,
        name: "Telebhaja",
        cuisine: "Bengali",
        time: 25,
        difficulty: "Easy",
        mood: ["light", "quick", "familiar", "comfort"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Nut-Free"],
        image: "https://i.pinimg.com/736x/84/83/ed/8483ed0f79b66a85737cff9d44d262c6.jpg",
        calories: 310,
        servings: 4,
        ingredients: ["Onion", "Potato", "Gram flour", "Salt", "Oil"],
        instructions: [
          "Slice vegetables and dip in gram flour batter",
          "Deep fry until crispy and golden",
          "Serve with puffed rice or tea"
        ],
      },
    
      {
        id: 120,
        name: "Jhalmuri",
        cuisine: "Bengali",
        time: 10,
        difficulty: "Easy",
        mood: ["light", "quick", "energetic", "familiar"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["Low-Fat", "Nut-Free"],
        image: "https://i.pinimg.com/736x/26/e9/06/26e9069990f2dd081dc1e27ddcd13578.jpg",
        calories: 180,
        servings: 2,
        ingredients: ["Puffed rice", "Onion", "Green chilies", "Mustard oil", "Chopped vegetables"],
        instructions: [
          "Mix puffed rice with onions, chilies, and vegetables",
          "Drizzle mustard oil and toss well",
          "Serve immediately"
        ],
      },
    
      {
        id: 121,
        name: "Phuchka",
        cuisine: "Bengali",
        time: 20,
        difficulty: "Easy",
        mood: ["light", "quick", "international", "energetic"],
        veg: true,
        spiciness: "Hot",
        healthCondition: ["Low-Fat"],
        image: "https://i.pinimg.com/736x/a3/6a/fe/a36afe414b2f61b12dc15b7aa220553d.jpg",
        calories: 200,
        servings: 2,
        ingredients: ["Semolina shells", "Tamarind water", "Mashed potato", "Spices", "Chickpeas"],
        instructions: [
          "Mix mashed potato with spices and chickpeas",
          "Fill puris with mixture",
          "Add tangy tamarind water and serve immediately"
        ],
      },
    
      {
        id: 122,
        name: "Kolkata Biryani (Mutton)",
        cuisine: "Bengali",
        time: 75,
        difficulty: "Hard",
        mood: ["hearty", "comfort", "leisurely", "familiar"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/736x/ce/fb/86/cefb861f0cd6f1651e9a8278bbcd8feb.jpg",
        calories: 700,
        servings: 4,
        ingredients: ["Mutton", "Basmati rice", "Potatoes", "Spices", "Yogurt", "Ghee"],
        instructions: [
          "Marinate mutton with yogurt and spices",
          "Parboil rice and fry potatoes",
          "Layer rice, mutton, and potatoes with ghee and cook on dum",
          "Serve hot with salad"
        ],
      },
    
      {
        id: 123,
        name: "Radhaballavi",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Medium",
        mood: ["comfort", "hearty", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Nut-Free"],
        image: "https://i.pinimg.com/1200x/12/71/aa/1271aa53c3885063e777353551b80c87.jpg",
        calories: 300,
        servings: 4,
        ingredients: ["Flour", "Urad dal", "Spices", "Oil"],
        instructions: [
          "Soak urad dal and grind into paste",
          "Stuff dal into dough balls and roll",
          "Deep fry until puffed and golden",
          "Serve with cholar dal"
        ],
      },
    
      {
        id: 124,
        name: "Chhanar Jilipi",
        cuisine: "Bengali",
        time: 50,
        difficulty: "Medium",
        mood: ["calm", "comfort", "leisurely", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free"],
        image: "https://i.pinimg.com/736x/3f/55/da/3f55da781a19413605291a210c8e73ca.jpg",
        calories: 420,
        servings: 6,
        ingredients: ["Chhena", "Flour", "Sugar", "Cardamom", "Ghee"],
        instructions: [
          "Knead chhena with flour and cardamom",
          "Shape into jilipi spirals and deep fry",
          "Soak in sugar syrup and serve warm"
        ],
      },
    
      {
        id: 125,
        name: "Mishti Doi",
        cuisine: "Bengali",
        time: 25,
        difficulty: "Easy",
        mood: ["calm", "comfort", "leisurely", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free"],
        image: "https://i.pinimg.com/736x/04/e0/90/04e090e5d25f62e1cd70a9ff1ca7168b.jpg",
        calories: 310,
        servings: 4,
        ingredients: ["Milk", "Sugar", "Yogurt culture"],
        instructions: [
          "Boil milk until thickened",
          "Add caramelized sugar and mix",
          "Cool slightly, add yogurt culture",
          "Set overnight in earthen pot"
        ],
      },
    
      {
        id: 126,
        name: "Sondesh",
        cuisine: "Bengali",
        time: 30,
        difficulty: "Easy",
        mood: ["calm", "light", "familiar", "quick"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat"],
        image: "https://i.pinimg.com/1200x/5a/78/f9/5a78f9efe22c7489d05999040ea0daf0.jpg",
        calories: 250,
        servings: 6,
        ingredients: ["Chhena", "Sugar", "Cardamom"],
        instructions: [
          "Knead chhena with sugar and cardamom",
          "Cook on low flame until thick",
          "Shape into small pieces and cool"
        ],
      },
    
      {
        id: 127,
        name: "Rasgulla",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Medium",
        mood: ["comfort", "calm", "familiar", "leisurely"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free"],
        image: "https://i.pinimg.com/1200x/ee/42/70/ee4270634c96dfef9b2d9d613645aaa9.jpg",
        calories: 280,
        servings: 6,
        ingredients: ["Chhena", "Sugar", "Water"],
        instructions: [
          "Prepare soft chhena and shape into balls",
          "Boil in sugar syrup until spongy",
          "Cool and serve in syrup"
        ],
      },
    
      {
        id: 128,
        name: "Patishapta",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Medium",
        mood: ["comfort", "familiar", "leisurely", "calm"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Nut-Free"],
        image: "https://i.pinimg.com/1200x/99/90/2e/99902ecc5d4a43c0dfb414360fcf3f76.jpg",
        calories: 360,
        servings: 6,
        ingredients: ["Flour", "Rice flour", "Coconut", "Jaggery", "Milk"],
        instructions: [
          "Make thin pancakes with flour and milk",
          "Stuff with coconut-jaggery mixture",
          "Roll and cook lightly on both sides"
        ],
      },
    
      {
        id: 129,
        name: "Payesh",
        cuisine: "Bengali",
        time: 45,
        difficulty: "Easy",
        mood: ["calm", "comfort", "leisurely", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free"],
        image: "https://i.pinimg.com/1200x/03/f7/ac/03f7ac4c1aac681ab400950140f159b7.jpg",
        calories: 320,
        servings: 4,
        ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Cashews", "Raisins"],
        instructions: [
          "Boil milk and add rice",
          "Cook until rice is soft and mixture thickens",
          "Add sugar, cardamom, and nuts",
          "Serve warm or chilled"
        ],
      },
    
      {
        id: 130,
        name: "Labra",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Easy",
        mood: ["calm", "light", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat"],
        image: "https://i.pinimg.com/1200x/6d/10/5f/6d105f0ac343f5da0fe45a01c5898dea.jpg",
        calories: 250,
        servings: 4,
        ingredients: ["Mixed vegetables", "Panch phoron", "Mustard oil", "Salt"],
        instructions: [
          "Cut and boil vegetables lightly",
          "Add panch phoron in hot oil and sauté",
          "Mix vegetables and cook until tender"
        ],
      },
    
      {
        id: 131,
        name: "Kochuri",
        cuisine: "Bengali",
        time: 35,
        difficulty: "Medium",
        mood: ["hearty", "familiar", "moderate", "comfort"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Nut-Free"],
        image: "https://i.pinimg.com/736x/c0/bf/a0/c0bfa0fcea15f2980190c8813dd02853.jpg",
        calories: 280,
        servings: 4,
        ingredients: ["Flour", "Kalai dal", "Spices", "Oil"],
        instructions: [
          "Soak dal and grind into paste",
          "Stuff into dough balls and roll flat",
          "Deep fry until puffed and golden"
        ],
      },
    
       {
        id: 132,
        name: "Aloor Dom",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Medium",
        mood: ["hearty", "comfort", "moderate", "familiar"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/bd/b7/9b/bdb79b2ead4403868ea7413a175b7cc7.jpg",
        calories: 330,
        servings: 4,
        ingredients: ["Baby potatoes", "Yogurt", "Tomatoes", "Ginger", "Spices", "Mustard oil"],
        instructions: [
          "Boil baby potatoes and peel skin",
          "Sauté with mustard oil, ginger, and spices",
          "Add yogurt and simmer until thickened",
          "Serve hot with luchi or kachori"
        ],
      },
    
      {
        id: 133,
        name: "Kumror Chhokka",
        cuisine: "Bengali",
        time: 35,
        difficulty: "Easy",
        mood: ["calm", "light", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/35/25/d3/3525d368aa928b6d70ffffc8b49129ee.jpg",
        calories: 240,
        servings: 4,
        ingredients: ["Pumpkin", "Potatoes", "Black chickpeas", "Spices", "Mustard oil"],
        instructions: [
          "Boil chickpeas and keep aside",
          "Fry pumpkin and potato pieces in mustard oil",
          "Add spices and chickpeas, cook until soft",
          "Serve with rice or puri"
        ],
      },
    
      {
        id: 134,
        name: "Lau Ghonto",
        cuisine: "Bengali",
        time: 30,
        difficulty: "Easy",
        mood: ["calm", "light", "quick", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/d7/c4/42/d7c442cd3994dffbf7a303b21a637e4c.jpg",
        calories: 220,
        servings: 4,
        ingredients: ["Bottle gourd", "Grated coconut", "Green chilies", "Mustard oil", "Panch phoron"],
        instructions: [
          "Peel and grate bottle gourd",
          "Fry panch phoron in mustard oil and add bottle gourd",
          "Cook until water evaporates and add coconut",
          "Mix well and serve with rice"
        ],
      },
    
      {
        id: 135,
        name: "Panta Bhat",
        cuisine: "Bengali",
        time: 15,
        difficulty: "Easy",
        mood: ["calm", "light", "quick", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free", "Low-Fat"],
        image: "https://i.pinimg.com/1200x/6c/d8/fd/6cd8fde363224571e1d1b059f0fb1323.jpg",
        calories: 180,
        servings: 2,
        ingredients: ["Cooked rice", "Salt", "Onion", "Green chili", "Mustard oil"],
        instructions: [
          "Soak leftover rice overnight in water",
          "Drain slightly and mix with salt, onions, and green chili",
          "Drizzle mustard oil before serving"
        ],
      },
    
      {
        id: 136,
        name: "Chhanar Dalna",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Medium",
        mood: ["comfort", "moderate", "familiar", "calm"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free", "High-Protein"],
        image: "https://i.pinimg.com/1200x/96/7d/3b/967d3b600ae4503b997934cd2ed7b82f.jpg",
        calories: 360,
        servings: 4,
        ingredients: ["Chhena", "Tomatoes", "Potatoes", "Spices", "Mustard oil"],
        instructions: [
          "Make soft chhena dumplings and fry lightly",
          "Cook gravy with tomatoes, potatoes, and spices",
          "Add fried chhena pieces and simmer for 10 minutes"
        ],
      },
    
      {
        id: 137,
        name: "Kancha Moong Dal",
        cuisine: "Bengali",
        time: 30,
        difficulty: "Easy",
        mood: ["calm", "light", "quick", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["High-Protein", "Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/c3/61/c1/c361c124f823d249ebed20d26290b268.jpg",
        calories: 250,
        servings: 4,
        ingredients: ["Moong dal", "Turmeric", "Mustard seeds", "Green chilies", "Oil"],
        instructions: [
          "Dry roast moong dal lightly and wash",
          "Cook with turmeric and salt until soft",
          "Temper with mustard seeds and green chilies in oil",
          "Pour tempering over dal and serve hot"
        ],
      },
    
      {
        id: 138,
        name: "Doi Maach",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Medium",
        mood: ["comfort", "hearty", "moderate", "familiar"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/d6/ce/ad/d6cead8914c100e1085f6115e58be6fa.jpg",
        calories: 420,
        servings: 4,
        ingredients: ["Rohu fish", "Yogurt", "Spices", "Mustard oil"],
        instructions: [
          "Marinate fish with turmeric and salt",
          "Fry lightly and set aside",
          "Prepare yogurt-based gravy with spices",
          "Add fish and cook on low heat until done"
        ],
      },
    
      {
        id: 139,
        name: "Katla Kalia",
        cuisine: "Bengali",
        time: 50,
        difficulty: "Medium",
        mood: ["hearty", "comfort", "moderate", "familiar"],
        veg: false,
        spiciness: "Hot",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/1200x/52/ff/58/52ff58313db58e899574c27af305ee24.jpg",
        calories: 480,
        servings: 4,
        ingredients: ["Katla fish", "Onions", "Tomatoes", "Ginger-garlic paste", "Spices", "Mustard oil"],
        instructions: [
          "Fry fish pieces until golden and set aside",
          "Cook onions and tomatoes with spices until thick",
          "Add fish pieces and simmer for 10 minutes"
        ],
      },
    
      {
        id: 140,
        name: "Muri Ghonto",
        cuisine: "Bengali",
        time: 45,
        difficulty: "Medium",
        mood: ["hearty", "familiar", "moderate", "comfort"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Low-Carb"],
        image: "https://i.pinimg.com/1200x/b2/90/b8/b290b8aafcee2bdfce1300f1ba1ca2b6.jpg",
        calories: 390,
        servings: 4,
        ingredients: ["Fish head", "Rice", "Spices", "Mustard oil", "Onion"],
        instructions: [
          "Fry fish head and crush lightly",
          "Fry onions and rice with spices",
          "Add fish head pieces and cook until rice is done"
        ],
      },
    
      {
        id: 141,
        name: "Postor Bora",
        cuisine: "Bengali",
        time: 25,
        difficulty: "Easy",
        mood: ["light", "quick", "familiar", "comfort"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free", "Nut-Free"],
        image: "https://i.pinimg.com/736x/b0/0e/2b/b00e2b592b662f3f0a9c6f49eb7d9fbd.jpg",
        calories: 280,
        servings: 4,
        ingredients: ["Poppy seeds", "Green chilies", "Onions", "Salt", "Oil"],
        instructions: [
          "Grind poppy seeds into a paste with green chilies",
          "Mix with chopped onions and salt",
          "Form small fritters and fry until golden"
        ],
      },
    
      {
        id: 142,
        name: "Beguni",
        cuisine: "Bengali",
        time: 25,
        difficulty: "Easy",
        mood: ["light", "quick", "familiar", "comfort"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Nut-Free"],
        image: "https://i.pinimg.com/1200x/ff/b2/71/ffb2715618d8ebb7eb5c166c25e01b2c.jpg",
        calories: 300,
        servings: 4,
        ingredients: ["Brinjal", "Gram flour", "Turmeric", "Salt", "Oil"],
        instructions: [
          "Slice brinjal and dip in gram flour batter",
          "Deep fry until golden brown",
          "Serve with puffed rice or tea"
        ],
      },
    
      {
        id: 143,
        name: "Phulkopir Dalna",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Medium",
        mood: ["calm", "comfort", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/e4/87/30/e487301a28053d9ef74d023934a32cf2.jpg",
        calories: 310,
        servings: 4,
        ingredients: ["Cauliflower", "Potatoes", "Tomatoes", "Spices", "Mustard oil"],
        instructions: [
          "Fry cauliflower and potatoes in mustard oil",
          "Add tomatoes and spices to make gravy",
          "Simmer until vegetables are tender"
        ],
      },
      {
        id: 144,
        name: "Topse Maach Fry",
        cuisine: "Bengali",
        time: 30,
        difficulty: "Easy",
        mood: ["light", "quick", "familiar", "comfort"],
        veg: false,
        spiciness: "Mild",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/1200x/e5/3d/20/e53d207be3aab9b4981e2dc58ed581e2.jpg",
        calories: 350,
        servings: 4,
        ingredients: ["Topse fish", "Gram flour", "Salt", "Turmeric", "Oil"],
        instructions: [
          "Coat fish in gram flour batter",
          "Deep fry until crisp and golden",
          "Serve hot with chutney"
        ],
      },
    
      {
        id: 145,
        name: "Parshe Macher Jhal",
        cuisine: "Bengali",
        time: 35,
        difficulty: "Medium",
        mood: ["comfort", "hearty", "moderate", "familiar"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/1200x/a4/f6/e9/a4f6e93f0610baf6e62465421f42a4ca.jpg",
        calories: 410,
        servings: 4,
        ingredients: ["Parshe fish", "Mustard paste", "Green chilies", "Turmeric", "Oil"],
        instructions: [
          "Marinate fish with salt and turmeric",
          "Fry and set aside",
          "Add mustard paste and green chilies to pan",
          "Add water, cook fish until done"
        ],
      },
    
      {
        id: 146,
        name: "Gokul Pithe",
        cuisine: "Bengali",
        time: 45,
        difficulty: "Medium",
        mood: ["calm", "comfort", "leisurely", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Nut-Free"],
        image: "https://i.pinimg.com/736x/f3/8f/68/f38f688a1f84aee1e06b25ecbc78f3a6.jpg",
        calories: 420,
        servings: 6,
        ingredients: ["Flour", "Coconut", "Jaggery", "Milk", "Oil"],
        instructions: [
          "Prepare coconut-jaggery stuffing",
          "Make small balls, dip in flour batter",
          "Deep fry and soak in sugar syrup"
        ],
      },
    
      {
        id: 147,
        name: "Narkel Naru",
        cuisine: "Bengali",
        time: 30,
        difficulty: "Easy",
        mood: ["calm", "light", "familiar", "leisurely"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free"],
        image: "https://i.pinimg.com/736x/69/9a/0b/699a0b6f3017ac096c284f2653afd5e7.jpg",
        calories: 320,
        servings: 8,
        ingredients: ["Coconut", "Jaggery", "Cardamom"],
        instructions: [
          "Heat coconut with jaggery until thickened",
          "Shape into small balls and cool"
        ],
      },
    
      {
        id: 148,
        name: "Khichuri",
        cuisine: "Bengali",
        time: 40,
        difficulty: "Easy",
        mood: ["comfort", "hearty", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/3a/8b/00/3a8b00da554349060b36da3a8225032e.jpg",
        calories: 360,
        servings: 4,
        ingredients: ["Rice", "Moong dal", "Vegetables", "Spices", "Ghee"],
        instructions: [
          "Fry moong dal lightly",
          "Add rice, vegetables, and spices",
          "Cook with water until soft and thick"
        ],
      },
      {
        id: 149,
        name: "Bandhakopir Torkari",
        cuisine: "Bengali",
        time: 35,
        difficulty: "Easy",
        mood: ["light", "calm", "quick", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/99/27/44/992744da1f9dcbb8540badc6ba95cdae.jpg",
        calories: 250,
        servings: 4,
        ingredients: ["Cabbage", "Mustard oil", "Turmeric", "Salt", "Green chilies"],
        instructions: [
          "Shred cabbage and fry lightly in mustard oil",
          "Add turmeric, salt, and green chilies",
          "Cook until cabbage is soft but retains crunch"
        ],
      },
    
      {
        id: 150,
        name: "Khandvi",
        cuisine: "Indian",
        time: 30,
        difficulty: "Medium",
        mood: ["light", "quick", "familiar", "experimental"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/ed/78/39/ed78398555cdbc8f9cc37734a43f7828.jpg",
        calories: 220,
        servings: 4,
        ingredients: ["Gram flour", "Yogurt", "Turmeric", "Ginger", "Coconut", "Coriander leaves"],
        instructions: [
          "Mix gram flour and yogurt into smooth batter with turmeric",
          "Cook over low heat until thick",
          "Spread thin, roll into strips, garnish with coconut and coriander"
        ],
      },
    
      {
        id: 151,
        name: "Appam with Stew",
        cuisine: "Indian",
        time: 45,
        difficulty: "Medium",
        mood: ["calm", "light", "leisurely", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free", "Low-Fat"],
        image: "https://i.pinimg.com/736x/99/91/ae/9991ae18ce9e9827241944cac5f4451f.jpg",
        calories: 350,
        servings: 4,
        ingredients: ["Rice flour", "Coconut milk", "Sugar", "Vegetables", "Spices"],
        instructions: [
          "Prepare fermented rice flour batter for appam",
          "Cook thin appams on non-stick pan",
          "Serve with coconut vegetable stew"
        ],
      },
    
      {
        id: 152,
        name: "Avial",
        cuisine: "Indian",
        time: 50,
        difficulty: "Medium",
        mood: ["comfort", "light", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/a6/3c/43/a63c436484c444609f9eac5acaef6d10.jpg",
        calories: 280,
        servings: 4,
        ingredients: ["Mixed vegetables", "Coconut", "Yogurt", "Curry leaves", "Green chilies"],
        instructions: [
          "Boil mixed vegetables until tender",
          "Grind coconut with yogurt and green chilies",
          "Mix with vegetables and simmer for 10 minutes"
        ],
      },
    
      {
        id: 153,
        name: "Bisi Bele Bath",
        cuisine: "Indian",
        time: 60,
        difficulty: "Medium",
        mood: ["hearty", "moderate", "familiar", "comfort"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/1b/29/87/1b2987789ffdb51671ce3fd0f8f428c8.jpg",
        calories: 420,
        servings: 4,
        ingredients: ["Rice", "Toor dal", "Tamarind", "Spices", "Vegetables", "Ghee"],
        instructions: [
          "Cook rice and dal together until soft",
          "Add tamarind, vegetables, and spices",
          "Simmer until mixture thickens, drizzle ghee before serving"
        ],
      },
    
      {
        id: 154,
        name: "Dal Baati Churma",
        cuisine: "Indian",
        time: 90,
        difficulty: "Hard",
        mood: ["hearty", "leisurely", "familiar", "comfort"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/736x/a8/95/9c/a8959c05a923fb65f01074fc105b3b6a.jpg",
        calories: 650,
        servings: 4,
        ingredients: ["Wheat flour", "Ghee", "Toor dal", "Spices", "Sugar"],
        instructions: [
          "Prepare dough for baati and bake until golden",
          "Cook dal with spices",
          "Mash baati with ghee and sugar to make churma",
          "Serve all three components together"
        ],
      },
    
      {
        id: 155,
        name: "Gatte ki Sabzi",
        cuisine: "Indian",
        time: 50,
        difficulty: "Medium",
        mood: ["comfort", "moderate", "familiar", "hearty"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["Low-Fat"],
        image: "https://i.pinimg.com/736x/17/1c/39/171c39e18bfc9b96571473551aa2f251.jpg",
        calories: 380,
        servings: 4,
        ingredients: ["Gram flour", "Yogurt", "Spices", "Oil"],
        instructions: [
          "Prepare gram flour dumplings and boil in spiced yogurt gravy",
          "Cook until thickened and serve hot with rice or roti"
        ],
      },
    
      {
        id: 156,
        name: "Undhiyu",
        cuisine: "Indian",
        time: 70,
        difficulty: "Hard",
        mood: ["hearty", "familiar", "moderate", "comfort"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/28/bf/d0/28bfd014d49e754cddafc2a959bb3aa8.jpg",
        calories: 450,
        servings: 4,
        ingredients: ["Mixed vegetables", "Fenugreek dumplings", "Spices", "Oil"],
        instructions: [
          "Layer vegetables and dumplings in pot with spices",
          "Cook covered on low flame for 45–50 minutes",
          "Serve hot with rice or roti"
        ],
      },
    
      {
        id: 157,
        name: "Sabudana Khichdi",
        cuisine: "Indian",
        time: 30,
        difficulty: "Easy",
        mood: ["light", "quick", "comfort", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free", "Low-Fat"],
        image: "https://i.pinimg.com/1200x/e6/63/cb/e663cb555131098212328e685554e938.jpg",
        calories: 280,
        servings: 2,
        ingredients: ["Sabudana", "Peanuts", "Green chilies", "Curry leaves", "Ghee"],
        instructions: [
          "Soak sabudana for 2–3 hours",
          "Fry peanuts and curry leaves in ghee",
          "Add sabudana and cook until translucent"
        ],
      },
    
      {
        id: 158,
        name: "Thalipeeth",
        cuisine: "Indian",
        time: 40,
        difficulty: "Medium",
        mood: ["light", "quick", "familiar", "comfort"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "High-Protein"],
        image: "https://i.pinimg.com/1200x/e5/fc/af/e5fcaf78d24e563266a6b047a402de38.jpg",
        calories: 320,
        servings: 4,
        ingredients: ["Multigrain flour", "Onions", "Green chilies", "Spices", "Oil"],
        instructions: [
          "Mix multigrain flour with water and spices into a dough",
          "Roll out flat and cook on skillet with oil",
          "Serve hot with chutney"
        ],
      },
    
      {
        id: 159,
        name: "Mutton Korma",
        cuisine: "Indian",
        time: 75,
        difficulty: "Hard",
        mood: ["hearty", "comfort", "leisurely", "familiar"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/736x/e6/95/a6/e695a6ef3e3f1d530ce4d5a3ce196b42.jpg",
        calories: 700,
        servings: 4,
        ingredients: ["Mutton", "Yogurt", "Onions", "Spices", "Ghee"],
        instructions: [
          "Marinate mutton with yogurt and spices",
          "Cook in ghee and onion paste until tender",
          "Serve hot with naan or rice"
        ],
      },
    
      {
        id: 160,
        name: "Goan Fish Curry",
        cuisine: "Indian",
        time: 50,
        difficulty: "Medium",
        mood: ["hearty", "familiar", "moderate", "international"],
        veg: false,
        spiciness: "Hot",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/09/ef/89/09ef89cd00adc6efc5204590f75fa9de.jpg",
        calories: 430,
        servings: 4,
        ingredients: ["Fish", "Coconut milk", "Tamarind", "Spices", "Oil"],
        instructions: [
          "Fry fish lightly and keep aside",
          "Prepare coconut-tamarind gravy with spices",
          "Add fish and simmer until cooked"
        ],
      },
    
      {
        id: 161,
        name: "Chicken Chettinad",
        cuisine: "Indian",
        time: 50,
        difficulty: "Medium",
        mood: ["hearty", "familiar", "moderate", "international"],
        veg: false,
        spiciness: "Hot",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/33/2a/70/332a7033d653db7d01f4497adca77c4b.jpg",
        calories: 480,
        servings: 4,
        ingredients: ["Chicken", "Coconut", "Spices", "Oil", "Onions"],
        instructions: [
          "Marinate chicken with spices",
          "Fry onions and add spice paste with coconut",
          "Add chicken and cook until tender"
        ],
      },
    
      {
        id: 162,
        name: "Keema Matar",
        cuisine: "Indian",
        time: 40,
        difficulty: "Medium",
        mood: ["hearty", "comfort", "moderate", "familiar"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/1200x/86/71/f2/8671f2cb0a8b2122c5c327220a70e5e5.jpg",
        calories: 500,
        servings: 4,
        ingredients: ["Minced meat", "Green peas", "Onions", "Spices", "Oil"],
        instructions: [
          "Fry onions and add minced meat",
          "Cook with spices until meat is done",
          "Add peas and simmer for 10 minutes"
        ],
      },
    
      {
        id: 163,
        name: "Shami Kebab",
        cuisine: "Indian",
        time: 45,
        difficulty: "Medium",
        mood: ["hearty", "moderate", "familiar", "comfort"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/736x/5a/44/cf/5a44cfcbfc25ffaead07e388545d2b2a.jpg",
        calories: 400,
        servings: 4,
        ingredients: ["Minced meat", "Lentils", "Spices", "Eggs", "Oil"],
        instructions: [
          "Mix minced meat with cooked lentils and spices",
          "Shape into patties and fry until golden",
          "Serve hot with chutney"
        ],
      },
    
      {
        id: 164,
        name: "Galouti Kebab",
        cuisine: "Indian",
        time: 60,
        difficulty: "Hard",
        mood: ["hearty", "comfort", "leisurely", "familiar"],
        veg: false,
        spiciness: "Medium",
        healthCondition: ["High-Protein"],
        image: "https://i.pinimg.com/1200x/b9/37/3d/b9373dc8a4cf45ad93ac17340cc8b93c.jpg",
        calories: 450,
        servings: 4,
        ingredients: ["Minced meat", "Spices", "Raw papaya", "Oil"],
        instructions: [
          "Marinate minced meat with spices and raw papaya paste",
          "Grind to smooth paste and shape into patties",
          "Shallow fry until golden brown"
        ],
      },
      {
        id: 165,
        name: "Kadai Paneer",
        cuisine: "Indian",
        time: 35,
        difficulty: "Medium",
        mood: ["hearty", "familiar", "moderate", "comfort"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/f5/ac/86/f5ac86f3bec34cfbfa10f9de04d7471b.jpg",
        calories: 420,
        servings: 4,
        ingredients: ["Paneer", "Bell peppers", "Onions", "Tomatoes", "Spices", "Oil"],
        instructions: [
          "Fry onions, bell peppers, and tomatoes with spices",
          "Add paneer cubes and cook for 5–7 minutes",
          "Garnish with coriander leaves and serve hot"
        ],
      },
    
      {
        id: 165,
        name: "Matar Paneer",
        cuisine: "Indian",
        time: 30,
        difficulty: "Medium",
        mood: ["comfort", "moderate", "familiar", "hearty"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/07/8d/a3/078da393d53b6b2173b4fb963f48867f.jpg",
        calories: 400,
        servings: 4,
        ingredients: ["Paneer", "Green peas", "Onions", "Tomatoes", "Spices", "Oil"],
        instructions: [
          "Sauté onions and tomatoes with spices",
          "Add green peas and cook until soft",
          "Add paneer cubes and simmer for 5 minutes"
        ],
      },
    
      {
        id: 167,
        name: "Kashmiri Dum Aloo",
        cuisine: "Indian",
        time: 45,
        difficulty: "Medium",
        mood: ["comfort", "hearty", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/01/10/7a/01107a4cb0b2d142f4d100e80f919c22.jpg",
        calories: 350,
        servings: 4,
        ingredients: ["Baby potatoes", "Yogurt", "Spices", "Oil", "Saffron"],
        instructions: [
          "Boil baby potatoes and peel them",
          "Prepare spice-yogurt gravy",
          "Cook potatoes in gravy on slow flame",
          "Garnish with saffron and serve hot"
        ],
      },
    
      {
        id: 168,
        name: "Methi Malai Matar",
        cuisine: "Indian",
        time: 30,
        difficulty: "Medium",
        mood: ["hearty", "comfort", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/1200x/74/b7/bd/74b7bd12cd44a29ad8de2eadc7c30ddc.jpg",
        calories: 320,
        servings: 4,
        ingredients: ["Fenugreek leaves", "Green peas", "Cream", "Spices", "Oil"],
        instructions: [
          "Sauté fenugreek leaves with green peas",
          "Add cream and spices, cook for 5 minutes",
          "Serve hot with rice or roti"
        ],
      },
    
      {
        id: 169,
        name: "Vegetable Korma",
        cuisine: "Indian",
        time: 40,
        difficulty: "Medium",
        mood: ["comfort", "hearty", "moderate", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Low-Fat", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/62/2d/4b/622d4b10304019bbeab6ac9cfa4a1df3.jpg",
        calories: 350,
        servings: 4,
        ingredients: ["Mixed vegetables", "Coconut milk", "Spices", "Oil"],
        instructions: [
          "Cook mixed vegetables until tender",
          "Prepare coconut milk gravy with spices",
          "Add vegetables to gravy and simmer for 5–7 minutes"
        ],
      },
    
      {
        id: 170,
        name: "Dal Fry",
        cuisine: "Indian",
        time: 30,
        difficulty: "Easy",
        mood: ["light", "quick", "comfort", "familiar"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["High-Protein", "Gluten-Free"],
        image: "https://i.pinimg.com/736x/94/88/2d/94882de55baa28f9c5c881d11c3526f0.jpg",
        calories: 250,
        servings: 4,
        ingredients: ["Toor dal", "Onions", "Tomatoes", "Spices", "Oil"],
        instructions: [
          "Boil dal until soft",
          "Prepare tempering with onions, tomatoes, and spices",
          "Add dal to tempering and simmer for 5 minutes"
        ],
      },
    
      {
        id: 171,
        name: "Lemon Rice",
        cuisine: "Indian",
        time: 20,
        difficulty: "Easy",
        mood: ["light", "quick", "energetic", "familiar"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free", "Low-Fat"],
        image: "https://i.pinimg.com/1200x/d5/33/2a/d5332a56a0c608684c758aac714a0cd6.jpg",
        calories: 200,
        servings: 4,
        ingredients: ["Rice", "Lemon juice", "Green chilies", "Curry leaves", "Oil"],
        instructions: [
          "Cook rice and let it cool slightly",
          "Prepare tempering with oil, green chilies, and curry leaves",
          "Mix rice with tempering and lemon juice, serve"
        ],
      },
    
      {
        id: 172,
        name: "Tamarind Rice (Pulihora)",
        cuisine: "Indian",
        time: 25,
        difficulty: "Easy",
        mood: ["light", "quick", "familiar", "comfort"],
        veg: true,
        spiciness: "Medium",
        healthCondition: ["Gluten-Free", "Low-Fat"],
        image: "https://i.pinimg.com/1200x/3d/41/b3/3d41b30d0caac383c5f789c6bdb2fd7a.jpg",
        calories: 220,
        servings: 4,
        ingredients: ["Rice", "Tamarind paste", "Spices", "Peanuts", "Oil"],
        instructions: [
          "Cook rice and keep aside",
          "Prepare tamarind paste with spices",
          "Mix rice with tamarind paste and garnish with peanuts"
        ],
      },
    
      {
        id: 173,
        name: "Curd Rice (Daddojanam)",
        cuisine: "Indian",
        time: 20,
        difficulty: "Easy",
        mood: ["light", "comfort", "quick", "calm"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free", "Low-Fat"],
        image: "https://i.pinimg.com/736x/b9/f8/fc/b9f8fc30887f028ca72e68e134068e4e.jpg",
        calories: 180,
        servings: 4,
        ingredients: ["Rice", "Curd", "Salt", "Green chilies", "Coriander leaves"],
        instructions: [
          "Cook rice and let it cool",
          "Mix with curd and salt",
          "Garnish with green chilies and coriander, serve chilled"
        ],
      },
    
      {
        id: 174,
        name: "Chapati / Roti",
        cuisine: "Indian",
        time: 20,
        difficulty: "Easy",
        mood: ["quick", "light", "familiar", "comfort"],
        veg: true,
        spiciness: "Mild",
        healthCondition: ["Gluten-Free"],
        image: "https://i.pinimg.com/736x/2b/44/a5/2b44a58009488dabbbe3096ac22d7d70.jpg",
        calories: 150,
        servings: 4,
        ingredients: ["Wheat flour", "Water", "Salt"],
        instructions: [
          "Knead flour with water and salt into dough",
          "Roll into thin discs and cook on hot skillet",
          "Serve hot"
        ],
      },
     
    {
      id: 175,
      name: "Teler Pithe",
      cuisine: "Bengali",
      time: 45,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["All"],
      image: "https://i.pinimg.com/736x/db/7e/3d/db7e3dd13b2d023838e4cd577001c8e9.jpg",
      calories: 420,
      servings: 6,
      ingredients: ["Rice flour", "Jaggery", "Grated coconut", "Oil", "Water"],
      instructions: [
        "Prepare batter using rice flour and water",
        "Add grated coconut and jaggery to the mixture",
        "Heat oil in a pan over medium flame",
        "Pour spoonfuls of batter and fry until golden brown",
        "Serve warm as a festive sweet"
      ],
    },
    
    {
      id: 176,
      name: "Taler Bara",
      cuisine: "Bengali",
      time: 35,
      difficulty: "Easy",
      mood: ["energetic", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["All"],
      image: "https://i.pinimg.com/1200x/c6/d5/ac/c6d5acff622d073e4a0e07f4e982b55e.jpg",
      calories: 380,
      servings: 8,
      ingredients: ["Palm fruit pulp", "Rice flour", "Jaggery", "Fennel seeds", "Oil"],
      instructions: [
        "Mix palm fruit pulp with rice flour and jaggery",
        "Add fennel seeds for aroma",
        "Heat oil and deep fry small portions of the batter",
        "Fry until crisp and golden",
        "Serve hot during festive occasions"
      ],
    },
    
    {
      id: 177,
      name: "Taler Halua",
      cuisine: "Bengali",
      time: 50,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["All"],
      image: "https://i.ytimg.com/vi/qLdFIaBirZw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAiN0ozKa6cBuudL2-TmZ4AvOUWDQ",
      calories: 460,
      servings: 6,
      ingredients: ["Palm fruit pulp", "Semolina", "Sugar", "Ghee", "Cardamom powder"],
      instructions: [
        "Heat ghee in a pan and roast semolina until aromatic",
        "Add palm pulp and stir well",
        "Mix in sugar and cardamom powder",
        "Cook until mixture thickens and leaves the sides of the pan",
        "Serve warm garnished with nuts"
      ],
    },
    
    {
      id: 178,
      name: "Kaju Katli",
      cuisine: "Indian",
      time: 30,
      difficulty: "Medium",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Dairy-Free", "Nut-Free"],
      image: "https://i.pinimg.com/1200x/e6/20/35/e620353f5ba8188325b9ab58d16c8616.jpg",
      calories: 320,
      servings: 10,
      ingredients: ["Cashews", "Sugar", "Ghee", "Cardamom powder", "Water"],
      instructions: [
        "Grind cashews into fine powder",
        "Boil sugar and water to make syrup",
        "Mix cashew powder into syrup and cook until thick",
        "Add ghee and spread mixture on a greased plate",
        "Cool, cut into diamond shapes, and serve"
      ],
    },
    
    {
      id: 179,
      name: "Sarvaja (Milk Layer Sweet)",
      cuisine: "Bengali",
      time: 70,
      difficulty: "Hard",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["All"],
      image: "https://i.pinimg.com/736x/20/fd/94/20fd946835e82473e47caa58c09b4418.jpg",
      calories: 480,
      servings: 8,
      ingredients: ["Milk", "Sugar", "Condensed milk", "Saffron", "Cardamom", "Ghee"],
      instructions: [
        "Boil milk and reduce until thickened",
        "Layer milk solids with sugar and condensed milk",
        "Repeat layering until desired thickness",
        "Add saffron and cardamom for flavor",
        "Cool and cut into portions before serving"
      ],
    },
    
    {
      id: 180,
      name: "Ros Bara",
      cuisine: "Bengali",
      time: 40,
      difficulty: "Medium",
      mood: ["tired", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["All"],
      image: "https://i.ytimg.com/vi/gh9vhIvouLI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBV1Aq7LWWQUF5_OGDJl_i9MdPL2w",
      calories: 400,
      servings: 10,
      ingredients: ["Chenna (cottage cheese)", "Sugar", "Semolina", "Cardamom", "Ghee"],
      instructions: [
        "Mix chenna with semolina and knead until soft",
        "Shape into small balls",
        "Deep fry in ghee until golden brown",
        "Soak in warm sugar syrup flavored with cardamom",
        "Serve soaked and soft"
      ],
    },
    {
      id: 181,
      name: "Pho (Vietnamese Noodle Soup)",
      cuisine: "Asian",
      time: 60, // Number of minutes
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "international"], // mood combination
      veg: false, // traditionally made with beef broth
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Low-Sodium", "High-Protein"],
      
      image: "https://noshingwiththenolands.com/wp-content/uploads/2017/02/Vietnamese-Pho-Recipe-1200-x-1200.jpg",
      calories: 400,
      servings: 2,
      ingredients: [
        "Rice noodles",
        "Beef or chicken broth",
        "Sliced beef or chicken",
        "Onions",
        "Ginger",
        "Star anise",
        "Cloves",
        "Fish sauce",
        "Lime",
        "Bean sprouts",
        "Fresh basil",
        "Green onions",
        "Chili slices (optional)"
      ],
      instructions: [
        "Toast ginger, star anise, and cloves in a dry pan to release aroma.",
        "Add toasted spices to broth and simmer for 30–40 minutes for deep flavor.",
        "Meanwhile, cook rice noodles according to package instructions and drain.",
        "Strain the broth to remove solids and return to pot.",
        "Add thinly sliced beef or cooked chicken to hot broth to cook gently.",
        "Divide noodles into bowls, pour hot broth over them, and top with meat.",
        "Garnish with bean sprouts, basil, lime wedges, green onions, and chilies.",
        "Serve hot and enjoy authentic Vietnamese comfort."
      ],
    },
    
    
    
    {
      id: 182,
      name: "Sushi (Salmon Nigiri)",
      cuisine: "Asian",
      time: 45, // Number of minutes (realistic prep and assembly time)
      difficulty: "Hard",
      mood: ["calm", "light", "leisurely", "international"], // combination from all 4 mood categories
      veg: false, // contains salmon
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Fat", "Low-Carb", "Heart-Healthy", "Gluten-Free"],
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH04nkUdbKL89Zr5QnV7mn0IdpXq5dstbVrg&s",
      calories: 310,
      servings: 2,
      ingredients: [
        "Sushi rice",
        "Fresh salmon (sashimi-grade)",
        "Rice vinegar",
        "Sugar",
        "Salt",
        "Wasabi",
        "Soy sauce (optional, gluten-free)",
        "Pickled ginger (for serving)"
      ],
      instructions: [
        "Rinse sushi rice until water runs clear, then cook according to package instructions.",
        "In a small bowl, mix rice vinegar, sugar, and salt until dissolved; fold into cooked rice and let cool slightly.",
        "Slice fresh salmon into thin, rectangular pieces about 2 inches long.",
        "Dampen hands with water and form small oblong mounds of rice (about the size of two fingers).",
        "Spread a small dab of wasabi on one side of the salmon slice.",
        "Place the salmon (wasabi side down) over the rice mound and gently press to shape.",
        "Serve with pickled ginger and gluten-free soy sauce on the side."
      ],
    },
    
    
    {
      id: 183,
      name: "Pad Thai (Chicken)",
      cuisine: "Asian",
      time: 40, // Number of minutes (realistic preparation and cooking time)
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"], // combination from all 4 categories
      veg: false, // contains chicken and fish sauce
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Fat", "Nut-Free"],
    
      image: "https://www.recipetineats.com/tachyon/2020/01/Chicken-Pad-Thai_9-SQ.jpg?resize=500%2C500",
      calories: 520,
      servings: 2,
      ingredients: [
        "Flat rice noodles",
        "Chicken breast (thinly sliced)",
        "Eggs",
        "Bean sprouts",
        "Garlic",
        "Green onions",
        "Crushed peanuts (optional)",
        "Tamarind paste",
        "Fish sauce",
        "Soy sauce",
        "Brown sugar",
        "Lime wedges",
        "Vegetable oil",
        "Red chili flakes (optional)"
      ],
      instructions: [
        "Soak rice noodles in warm water for about 20–25 minutes until soft, then drain.",
        "In a bowl, mix tamarind paste, fish sauce, soy sauce, and brown sugar to make the sauce.",
        "Heat oil in a wok over medium heat and sauté garlic until fragrant.",
        "Add sliced chicken and cook until no longer pink.",
        "Push chicken to one side, crack eggs into the pan, and scramble lightly.",
        "Add drained noodles and pour the prepared sauce over them.",
        "Toss well to coat noodles evenly, then add bean sprouts and green onions.",
        "Stir-fry for 2–3 minutes until everything is hot and combined.",
        "Serve hot with lime wedges and sprinkle crushed peanuts and chili flakes on top if desired."
      ],
    },
    
    
    
    {
      id: 184,
      name: "Bibimbap (Korean Mixed Rice)",
      cuisine: "Asian",
      time: 50, // Realistic total time including prep and assembly
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "experimental"], // one from each mood category
      veg: true, // traditionally can be made vegetarian with egg and veggies
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Fat", "Nut-Free"],
    
      image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-03-bimbimbap%2Fbibimbap-074",
      calories: 480,
      servings: 2,
      ingredients: [
        "Cooked rice",
        "Carrots (julienned)",
        "Spinach",
        "Bean sprouts",
        "Zucchini (sliced)",
        "Mushrooms (shiitake or button)",
        "Eggs",
        "Gochujang (Korean chili paste)",
        "Sesame oil",
        "Soy sauce",
        "Garlic",
        "Salt",
        "Sesame seeds (for garnish)"
      ],
      instructions: [
        "Cook rice and keep it warm.",
        "Blanch spinach and bean sprouts separately; season each with a little sesame oil, soy sauce, and garlic.",
        "Sauté carrots, zucchini, and mushrooms lightly until tender and seasoned.",
        "Fry an egg sunny-side up and set aside.",
        "In a serving bowl, place warm rice at the bottom.",
        "Arrange each prepared vegetable neatly on top of the rice in sections.",
        "Place the fried egg in the center and drizzle a bit of sesame oil.",
        "Add a spoonful of gochujang on top or serve it on the side.",
        "Sprinkle sesame seeds before serving and mix well before eating."
      ],
    },
    
    
    
    {
      id: 185,
      name: "Ramen (Tonkotsu)",
      cuisine: "Asian",
      time: 180, // Number of minutes (realistic simmering and prep time)
      difficulty: "Hard",
      mood: ["tired", "comfort", "leisurely", "experimental"], // combination from all 4 categories
      veg: false, // pork-based broth
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb", "Dairy-Free"],
    
      image: "https://www.foodandwine.com/thmb/0AXGLeY6dYnY8sEXFqxBa8opDrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tonkotsu-Ramen-FT-BLOG1122-8fe6c12d609a4fd4ab246bea3aae140e.jpg",
      calories: 650,
      servings: 2,
      ingredients: [
        "Pork bones (neck or femur)",
        "Ramen noodles",
        "Garlic",
        "Ginger",
        "Green onions",
        "Soy sauce",
        "Mirin",
        "Miso paste (optional)",
        "Soft-boiled eggs",
        "Chashu pork slices",
        "Nori (seaweed)",
        "Sesame oil",
        "Salt"
      ],
      instructions: [
        "Boil pork bones for 10 minutes to remove impurities, then rinse and refill the pot with fresh water.",
        "Add garlic, ginger, and green onions; simmer uncovered for 2–3 hours until broth becomes creamy and rich.",
        "Strain the broth and return to a clean pot.",
        "Season the broth with soy sauce, mirin, miso (optional), and salt to taste.",
        "Cook ramen noodles according to package instructions and drain well.",
        "In serving bowls, pour hot broth over noodles.",
        "Top with chashu pork slices, soft-boiled egg halves, chopped green onions, nori, and a drizzle of sesame oil.",
        "Serve immediately while hot and enjoy the deep, comforting flavors."
      ],
    },
    
    
    
    {
      id: 186,
      name: "Tom Yum Goong (Thai Hot and Sour Shrimp Soup)",
      cuisine: "Asian",
      time: 35, // Realistic preparation and cooking time
      difficulty: "Medium",
      mood: ["energetic", "light", "quick", "international"], // combination from 4 mood categories
      veg: false, // contains shrimp
      spiciness: "Hot",
      healthCondition: ["Low-Fat", "Low-Carb", "High-Protein", "Gluten-Free", "Dairy-Free"],
    
      image: "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
      calories: 250,
      servings: 2,
      ingredients: [
        "Shrimp (peeled and deveined)",
        "Lemongrass stalks (bruised and cut into pieces)",
        "Kaffir lime leaves",
        "Galangal (sliced)",
        "Thai bird's eye chilies (crushed)",
        "Mushrooms (halved)",
        "Fish sauce",
        "Lime juice",
        "Tomatoes (quartered)",
        "Cilantro leaves",
        "Water or chicken broth",
        "Sugar",
        "Chili paste (Nam Prik Pao)"
      ],
      instructions: [
        "In a pot, bring water or chicken broth to a gentle boil.",
        "Add lemongrass, galangal, and kaffir lime leaves; simmer for 5–7 minutes to release aroma.",
        "Add shrimp, mushrooms, and tomatoes; cook until shrimp turn pink and tender.",
        "Stir in fish sauce, sugar, and chili paste.",
        "Remove from heat, then add lime juice for the signature tangy flavor.",
        "Taste and adjust seasoning to balance spicy, sour, and salty notes.",
        "Garnish with fresh cilantro leaves and serve hot."
      ],
    },
    
    
    
    {
      id: 187,
      name: "Laksa (Curry Noodle Soup)",
      cuisine: "Asian",
      time: 40, // minutes
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"], 
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein", "Dairy-Free"],
      
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzneOH28usqDYl0AcZT8ku02Dq7fMkMIJ-g&s",
      calories: 550,
      servings: 2,
      ingredients: [
        "Rice noodles",
        "Coconut milk",
        "Laksa paste",
        "Shrimp or chicken",
        "Bean sprouts",
        "Tofu puffs",
        "Boiled egg",
        "Fish sauce",
        "Lime",
        "Cilantro"
      ],
      instructions: [
        "Cook rice noodles according to package instructions and set aside",
        "In a pot, heat laksa paste until fragrant",
        "Add coconut milk and bring to a simmer",
        "Stir in fish sauce and protein of choice (shrimp or chicken)",
        "Add tofu puffs and simmer until flavors combine",
        "Place noodles in serving bowls and pour the hot soup over them",
        "Top with bean sprouts, boiled egg, lime juice, and cilantro",
        "Serve hot and enjoy"
      ],
    },
    
    
    
    {
      id: 188,
      name: "Chicken Satay with Peanut Sauce",
      cuisine: "Asian",
      time: 35, // Number of minutes (integer, not string)
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false, // true for vegetarian, false for non-veg
      spiciness: "Medium", // "Mild", "Medium", or "Hot"
      healthCondition: ["High-Protein", "Dairy-Free", "Low-Carb", "Nut-Free"], // realistic health tags
    
      image: "https://www.eatyourselfskinny.com/wp-content/uploads/2023/08/chicken-skewers-5-scaled.jpg",
      calories: 480,
      servings: 3,
      ingredients: [
        "Chicken breast strips",
        "Soy sauce",
        "Garlic",
        "Ginger",
        "Lemongrass",
        "Brown sugar",
        "Peanut butter",
        "Coconut milk",
        "Lime juice",
        "Chili flakes",
        "Oil",
        "Salt"
      ],
      instructions: [
        "In a bowl, mix soy sauce, garlic, ginger, lemongrass, brown sugar, and a little oil to make a marinade.",
        "Add chicken strips, coat well, and marinate for at least 20 minutes.",
        "Thread marinated chicken onto skewers.",
        "Grill or pan-sear the skewers over medium heat until fully cooked and slightly charred.",
        "For the peanut sauce, combine peanut butter, coconut milk, soy sauce, lime juice, and chili flakes in a pan.",
        "Cook sauce over low heat until smooth and creamy.",
        "Serve grilled chicken satay hot with peanut sauce on the side."
      ],
    },
    
    
    
    {
      id: 189,
      name: "Green Curry (Thai, with Chicken)",
      cuisine: "Asian",
      time: 40, // Number of minutes (integer, not string)
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false, // true for vegetarian, false for non-veg
      spiciness: "Hot", // "Mild", "Medium", or "Hot"
      healthCondition: ["High-Protein", "Gluten-Free", "Dairy-Free", "Heart-Healthy"], // Array of tags for health conditions
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq9ygLcF1KhgZp7F88mMMgHuZ65qKrYIy1A&s",
      calories: 520,
      servings: 4,
      ingredients: [
        "Chicken breast or thigh pieces",
        "Green curry paste",
        "Coconut milk",
        "Thai basil leaves",
        "Lemongrass",
        "Kaffir lime leaves",
        "Fish sauce",
        "Palm sugar",
        "Eggplant (Thai or regular)",
        "Green chilies",
        "Oil"
      ],
      instructions: [
        "Heat oil in a wok or pan over medium heat.",
        "Add green curry paste and sauté for 1–2 minutes until fragrant.",
        "Pour in coconut milk gradually, stirring to blend with the paste.",
        "Add chicken pieces and cook until they turn white on the outside.",
        "Add sliced eggplant, kaffir lime leaves, and a bit of water if needed.",
        "Simmer until chicken and vegetables are cooked through.",
        "Season with fish sauce and palm sugar for balance.",
        "Add Thai basil leaves and green chilies before turning off the heat.",
        "Serve hot with steamed jasmine rice."
      ],
    },
    
    
    
    {
      id: 190,
      name: "Hainanese Chicken Rice",
      cuisine: "Asian",
      time: 50, // Number of minutes (integer, not string)
      difficulty: "Medium",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: false, // true for vegetarian, false for non-veg
      spiciness: "Mild", // "Mild", "Medium", or "Hot"
      healthCondition: ["High-Protein", "Low-Fat", "Gluten-Free", "Heart-Healthy"], // Array of tags for health conditions
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tH-EvIJLUkSdLHdV22mCrFjbrxU_c2lBYA&s",
      calories: 600,
      servings: 4,
      ingredients: [
        "Whole chicken or chicken thighs",
        "Jasmine rice",
        "Garlic",
        "Ginger",
        "Spring onions",
        "Chicken broth",
        "Sesame oil",
        "Soy sauce",
        "Cucumber slices",
        "Salt"
      ],
      instructions: [
        "Clean and poach the chicken in simmering water with ginger and spring onions for 30 minutes until cooked.",
        "Remove chicken, brush lightly with sesame oil, and set aside to rest.",
        "In another pan, sauté minced garlic and ginger in a bit of oil.",
        "Add uncooked rice and stir until lightly fragrant.",
        "Pour in chicken broth and cook rice until fluffy and aromatic.",
        "Slice the chicken and serve it over the rice.",
        "Drizzle with soy sauce and sesame oil mixture.",
        "Serve with cucumber slices and a side of chili-ginger sauce if desired."
      ],
    },
    
    
    
    {
      id: 191,
      name: "Adobo (Filipino, Chicken or Pork)",
      cuisine: "Asian",
      time: 45, // Number of minutes (integer, not string)
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "familiar"], 
      veg: false, // true for vegetarian, false for non-veg
      spiciness: "Mild", // "Mild", "Medium", or "Hot"
      healthCondition: ["High-Protein", "Low-Fat", "Gluten-Free"], // realistic health tags
    
      image: "https://kitchenconfidante.com/wp-content/uploads/2015/04/Filipino-Chicken-and-Pork-Adobo-www.kitchenconfidante.com-P1000853-2.jpg",
      calories: 450,
      servings: 4,
      ingredients: [
        "Chicken or pork pieces",
        "Soy sauce",
        "Vinegar",
        "Garlic cloves",
        "Bay leaves",
        "Black peppercorns",
        "Water",
        "Oil",
        "Sugar (optional)"
      ],
      instructions: [
        "In a pan, heat a little oil and sauté crushed garlic until fragrant.",
        "Add chicken or pork pieces and sear until lightly browned.",
        "Pour in soy sauce and vinegar, then add bay leaves and black peppercorns.",
        "Add water to cover the meat partially and bring to a boil.",
        "Lower heat and simmer uncovered for 30–35 minutes until meat is tender and sauce slightly thickens.",
        "Adjust seasoning with salt, sugar, or extra soy sauce as needed.",
        "Serve hot with steamed rice."
      ],
    },
    
    
    
    {
      id: 192,
      name: "Bulgogi (Korean BBQ Beef)",
      cuisine: "Asian",
      time: 45, // Number of minutes (integer, not string)
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false, // true for vegetarian, false for non-veg
      spiciness: "Medium", // "Mild", "Medium", or "Hot"
      healthCondition: ["High-Protein", "Low-Fat", "Gluten-Free"], // Array of tags for health conditions
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCj908Laz3bZRtjNz0jBEGYMhVDvGd5YUaDQ&s",
      calories: 500,
      servings: 4,
      ingredients: [
        "Thinly sliced beef ribeye or sirloin",
        "Soy sauce",
        "Brown sugar",
        "Garlic cloves",
        "Ginger",
        "Sesame oil",
        "Green onions",
        "Black pepper",
        "Pear or apple puree (optional for tenderness)",
        "Carrots (optional)",
        "Onions"
      ],
      instructions: [
        "In a bowl, mix soy sauce, brown sugar, minced garlic, grated ginger, sesame oil, black pepper, and pear/apple puree.",
        "Add thinly sliced beef and coat well. Marinate for at least 20–30 minutes.",
        "Heat a skillet or grill pan over medium-high heat.",
        "Add marinated beef and cook quickly until browned and slightly caramelized.",
        "Add sliced onions and carrots and stir-fry briefly until tender-crisp.",
        "Garnish with chopped green onions and serve hot with steamed rice or lettuce wraps."
      ],
    },
    
    
    
    {
      id: 193,
      name: "Gyoza (Pan-fried Pork Dumplings)",
      cuisine: "Asian",
      time: 40, // Number of minutes (integer, not string)
      difficulty: "Medium",
      mood: ["energetic", "light", "moderate", "international"],
      veg: false, // true for vegetarian, false for non-veg
      spiciness: "Mild", // "Mild", "Medium", or "Hot"
      healthCondition: ["High-Protein", "Low-Fat"], // realistic health tags
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMeKBlF9S7lLM3OUGI0rAk0bUydn4I64zwQ&s",
      calories: 420,
      servings: 4,
      ingredients: [
        "Ground pork",
        "Cabbage, finely chopped",
        "Garlic, minced",
        "Ginger, minced",
        "Green onions, chopped",
        "Soy sauce",
        "Sesame oil",
        "Salt and pepper",
        "Gyoza wrappers",
        "Vegetable oil",
        "Water"
      ],
      instructions: [
        "In a bowl, combine ground pork, cabbage, garlic, ginger, green onions, soy sauce, sesame oil, salt, and pepper to make the filling.",
        "Place a small spoonful of filling in the center of a gyoza wrapper.",
        "Fold the wrapper in half and pleat the edges to seal.",
        "Heat a non-stick pan over medium heat and add a little vegetable oil.",
        "Place gyoza in the pan and cook until the bottoms are golden brown, about 2–3 minutes.",
        "Add a small amount of water, cover the pan, and steam for 5–6 minutes until the filling is cooked through.",
        "Remove the lid and cook for another 1–2 minutes to crisp the bottoms.",
        "Serve hot with a dipping sauce made from soy sauce, rice vinegar, and chili oil if desired."
      ],
    },
    
    
    
    {
      id: 194,
      name: "Kimchi Jjigae (Kimchi Stew)",
      cuisine: "Asian",
      time: 45, // Number of minutes (integer, not string)
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false, // true for vegetarian, false for non-veg
      spiciness: "Medium", // "Mild", "Medium", or "Hot"
      healthCondition: ["Low-Fat", "Heart-Healthy"], // realistic health tags
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob2YJBzHiseZo7zR7cRf35ZD0U_TaKXAlmg&s",
      calories: 380,
      servings: 4,
      ingredients: [
        "Kimchi, chopped",
        "Pork belly, sliced",
        "Tofu, cubed",
        "Onions, sliced",
        "Garlic, minced",
        "Gochugaru (Korean chili flakes)",
        "Gochujang (Korean chili paste)",
        "Soy sauce",
        "Sesame oil",
        "Green onions, chopped",
        "Water or broth"
      ],
      instructions: [
        "Heat a pot over medium heat and add sesame oil.",
        "Sauté garlic and onions until fragrant.",
        "Add pork belly slices and cook until lightly browned.",
        "Stir in chopped kimchi and cook for 5–7 minutes.",
        "Add water or broth and bring to a boil.",
        "Mix in gochugaru, gochujang, and soy sauce to taste.",
        "Add tofu cubes and simmer for 15–20 minutes.",
        "Garnish with chopped green onions and serve hot with rice."
      ],
    },
    
    
    
    {
      id: 195,
      name: "Nasi Goreng (Indonesian Fried Rice)",
      cuisine: "Asian",
      time: 35, // realistic time in minutes
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false, // contains egg and optionally chicken/shrimp
      spiciness: "Medium",
      healthCondition: ["Low-Fat", "Heart-Healthy"],
    
      image: "https://www.recipetineats.com/uploads/2016/03/Nasi-Goreng_3-1.jpg",
      calories: 450,
      servings: 4,
      ingredients: [
        "Cooked rice (preferably day-old)",
        "Chicken or shrimp, diced",
        "Eggs, lightly beaten",
        "Shallots, chopped",
        "Garlic, minced",
        "Chili paste or sambal oelek",
        "Soy sauce",
        "Sweet soy sauce (kecap manis)",
        "Carrots, diced",
        "Spring onions, chopped",
        "Oil for frying",
        "Salt and pepper to taste",
        "Cucumber and tomato slices for garnish"
      ],
      instructions: [
        "Heat oil in a wok or large pan over medium heat.",
        "Sauté shallots and garlic until fragrant.",
        "Add chicken or shrimp and cook until done.",
        "Push ingredients to the side and scramble the eggs in the pan.",
        "Add cooked rice and mix everything thoroughly.",
        "Stir in chili paste, soy sauce, and sweet soy sauce to taste.",
        "Add diced carrots and cook for 3–5 minutes until heated through.",
        "Season with salt and pepper, garnish with spring onions, cucumber, and tomato slices.",
        "Serve hot."
      ],
    },
    
    
    
    {
      id: 196,
      name: "Miso Soup",
      cuisine: "Asian",
      time: 15, // realistic time in minutes
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true, // vegetarian-friendly
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Heart-Healthy", "Dairy-Free"],
    
      image: "https://www.pressurecookrecipes.com/wp-content/uploads/2021/05/miso-soup.jpg",
      calories: 90,
      servings: 2,
      ingredients: [
        "Miso paste (2 tbsp)",
        "Dashi stock (2 cups) or vegetable broth",
        "Tofu, cubed",
        "Wakame seaweed, rehydrated",
        "Spring onions, chopped"
      ],
      instructions: [
        "Heat the dashi stock or vegetable broth in a pot over medium heat.",
        "Add the rehydrated wakame and cubed tofu to the stock.",
        "Reduce heat to low, and dissolve miso paste in a small amount of hot broth, then stir it back into the pot.",
        "Do not boil after adding miso to preserve its flavor and probiotics.",
        "Garnish with chopped spring onions and serve hot."
      ],
    },
    
    
    
    {
      id: 197,
      name: "Tempura (Shrimp)",
      cuisine: "Asian",
      time: 35, // realistic time in minutes
      difficulty: "Medium",
      mood: ["energetic", "light", "moderate", "international"],
      veg: false, // contains shrimp
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Dairy-Free"],
    
      image: "https://thesuburbansoapbox.com/wp-content/uploads/2022/08/STempura-18.jpg",
      calories: 250,
      servings: 2,
      ingredients: [
        "Shrimp, peeled and deveined (10 pieces)",
        "Tempura flour or all-purpose flour (1 cup)",
        "Cold water (3/4 cup)",
        "Egg (1)",
        "Vegetable oil for deep frying",
        "Optional: dipping sauce (soy sauce-based)"
      ],
      instructions: [
        "Prepare the shrimp by cleaning and deveining them, leaving tails intact.",
        "Mix cold water and egg lightly, then add tempura flour and stir gently (do not overmix; batter should be lumpy).",
        "Heat vegetable oil in a deep pan to 170–180°C (340–355°F).",
        "Dip shrimp into batter, then carefully place into hot oil.",
        "Fry until golden and crispy, about 2–3 minutes per side.",
        "Remove and drain on paper towels.",
        "Serve hot with dipping sauce."
      ],
    },
    
    
    
    {
      id: 198,
      name: "Vietnamese Spring Rolls (Fresh)",
      cuisine: "Asian",
      time: 30, // realistic preparation time in minutes
      difficulty: "Medium",
      mood: ["energetic", "light", "moderate", "international"],
      veg: false, // usually contains shrimp or pork, but can be vegetarian
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Dairy-Free", "Gluten-Free"],
    
      image: "https://thepawn.com.hk/wp-content/uploads/2025/05/vietnamese-fresh-spring-rolls-recipe-1747971076.jpg",
      calories: 180,
      servings: 4,
      ingredients: [
        "Rice paper wrappers (8–10 sheets)",
        "Cooked shrimp or cooked pork slices",
        "Rice vermicelli noodles (50g, cooked)",
        "Lettuce leaves",
        "Fresh herbs (mint, cilantro, basil)",
        "Carrot and cucumber julienne",
        "Optional: hoisin-peanut dipping sauce"
      ],
      instructions: [
        "Prepare all fillings: cook shrimp or pork, cook vermicelli, wash and cut vegetables and herbs.",
        "Dip one rice paper wrapper in warm water for 5–10 seconds until pliable.",
        "Lay wrapper on a clean surface and arrange lettuce, vermicelli, shrimp/pork, and herbs in the center.",
        "Fold sides over the filling and roll tightly from bottom to top.",
        "Repeat with remaining wrappers and fillings.",
        "Serve fresh with hoisin-peanut dipping sauce."
      ]
    },
    
    
    
    {
      id: 199,
      name: "Char Kway Teow (Stir-fried Rice Noodles)",
      cuisine: "Asian",
      time: 35, // realistic preparation and cooking time in minutes
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false, // usually contains prawns, egg, and sometimes Chinese sausage
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Fat"],
    
      image: "https://thewoksoflife.com/wp-content/uploads/2018/08/char-kway-teow-11.jpg",
      calories: 450,
      servings: 2,
      ingredients: [
        "Flat rice noodles (kway teow, 200g)",
        "Prawns or chicken slices (100g)",
        "Chinese sausage slices (optional, 50g)",
        "Eggs (2, lightly beaten)",
        "Bean sprouts (100g)",
        "Chives (handful, chopped)",
        "Garlic (2 cloves, minced)",
        "Soy sauce (1 tbsp)",
        "Oyster sauce (1 tbsp)",
        "Chili paste or fresh chili (to taste)",
        "Oil for stir-frying"
      ],
      instructions: [
        "Heat oil in a large wok over medium-high heat. Sauté garlic until fragrant.",
        "Add prawns or chicken slices and cook until slightly pink.",
        "Push ingredients to the side and pour in the beaten eggs, scramble slightly.",
        "Add rice noodles, soy sauce, oyster sauce, and chili paste; stir-fry quickly to combine.",
        "Toss in bean sprouts, chives, and Chinese sausage; stir-fry for another 1–2 minutes.",
        "Serve hot, optionally garnish with lime wedges or extra chili."
      ]
    },
    
    
    
    {
      id: 200,
      name: "Mango Sticky Rice",
      cuisine: "Asian",
      time: 40, // realistic preparation and cooking time in minutes
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Dairy-Free"],
    
      image: "https://takestwoeggs.com/wp-content/uploads/2021/07/Thai-Mango-Sticky-Rice-Takestwoeggs-Process-Final-sq.jpg",
      calories: 400,
      servings: 2,
      ingredients: [
        "Glutinous rice (1 cup)",
        "Coconut milk (1 cup)",
        "Sugar (1/3 cup)",
        "Salt (1/4 tsp)",
        "Ripe mangoes (2, peeled and sliced)",
        "Toasted sesame seeds (optional, for garnish)"
      ],
      instructions: [
        "Rinse the glutinous rice until water runs clear and soak for 30 minutes.",
        "Steam the rice for 20–25 minutes until tender.",
        "While the rice cooks, combine coconut milk, sugar, and salt in a pan; heat gently until sugar dissolves, do not boil.",
        "Pour 2/3 of the coconut mixture over the cooked rice; mix gently and let it sit for 10 minutes to absorb.",
        "Serve the sticky rice with sliced mango on the side.",
        "Drizzle remaining coconut mixture over the top and sprinkle with toasted sesame seeds if desired."
      ]
    },
    
    
    
    {
      id: 201,
      name: "Beef Rendang",
      cuisine: "Asian",
      time: 180, // realistic preparation and slow-cooking time in minutes
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Gluten-Free"],
    
      image: "https://www.recipetineats.com/tachyon/2014/11/Beef-Rendang-13.jpg?resize=500%2C500",
      calories: 550,
      servings: 4,
      ingredients: [
        "Beef (1 kg, cut into chunks)",
        "Coconut milk (2 cups)",
        "Lemongrass (2 stalks, bruised)",
        "Kaffir lime leaves (5–6)",
        "Galangal (2-inch piece, sliced)",
        "Garlic (6 cloves)",
        "Shallots (6, sliced)",
        "Ginger (2-inch piece, sliced)",
        "Red chilies (4, adjust to taste)",
        "Turmeric powder (1 tsp)",
        "Coriander powder (2 tsp)",
        "Salt (to taste)",
        "Palm sugar (1 tbsp)",
        "Oil (2 tbsp for sautéing)"
      ],
      instructions: [
        "Blend garlic, shallots, ginger, galangal, and red chilies into a smooth paste.",
        "Heat oil in a large pot and sauté the spice paste until fragrant.",
        "Add beef chunks and brown them on all sides.",
        "Pour in coconut milk, add lemongrass, kaffir lime leaves, turmeric, coriander, salt, and palm sugar.",
        "Bring to a simmer, then reduce heat to low. Cover partially and cook for 2–3 hours, stirring occasionally.",
        "Cook until the sauce thickens and the beef is tender with rich, dry coconut coating.",
        "Serve hot with steamed rice."
      ]
    },
    
    
    
    {
      id: 202,
      name: "Som Tum (Green Papaya Salad)",
      cuisine: "Asian",
      time: 30, // realistic preparation time in minutes
      difficulty: "Medium",
      mood: ["energetic", "light", "quick", "international"],
      veg: true,
      spiciness: "Hot",
      healthCondition: ["Gluten-Free", "Low-Fat", "Dairy-Free", "Nut-Free"],
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw7TqygHXSJ2fj0ad7NGEzT5DZBFRuA8KnQ&s",
      calories: 180,
      servings: 2,
      ingredients: [
        "Green papaya (shredded, 2 cups)",
        "Carrots (shredded, 1/2 cup)",
        "Cherry tomatoes (6, halved)",
        "Green beans (5–6, cut into 2-inch pieces)",
        "Garlic (2 cloves)",
        "Bird’s eye chilies (2–3, adjust to taste)",
        "Lime juice (2 tbsp)",
        "Fish sauce (1 tbsp) or soy sauce for vegetarian",
        "Palm sugar (1 tsp)",
        "Roasted peanuts (1 tbsp, optional)"
      ],
      instructions: [
        "Crush garlic and chilies together in a mortar and pestle.",
        "Add shredded papaya, carrots, cherry tomatoes, and green beans to the mortar.",
        "Lightly pound and mix to slightly bruise the vegetables.",
        "Add lime juice, fish sauce (or soy sauce), and palm sugar. Mix well.",
        "Taste and adjust seasoning with more lime, sugar, or sauce as needed.",
        "Transfer to a serving plate and sprinkle roasted peanuts on top (optional).",
        "Serve immediately as a refreshing side or light meal."
      ]
    },
    
    
    
    {
      id: 203,
      name: "Banh Mi (Vietnamese Sandwich)",
      cuisine: "Asian",
      time: 35, // realistic preparation time in minutes
      difficulty: "Medium",
      mood: ["energetic", "hearty", "quick", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["Low-Fat", "Nut-Free"],
    
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2019/02/banh-mi.jpg",
      calories: 450,
      servings: 2,
      ingredients: [
        "Baguette or French roll (1–2 pieces)",
        "Grilled pork or chicken slices (150g)",
        "Pickled carrots and daikon (1/2 cup)",
        "Cucumber slices (1/4 cup)",
        "Fresh cilantro (a few sprigs)",
        "Jalapeño slices (optional, 1–2)",
        "Mayonnaise (1–2 tbsp)",
        "Soy sauce or fish sauce (1 tsp)"
      ],
      instructions: [
        "Slice the baguette lengthwise, leaving a hinge on one side.",
        "Spread mayonnaise evenly inside the baguette.",
        "Layer grilled pork or chicken slices evenly inside.",
        "Add pickled carrots and daikon, cucumber slices, and fresh cilantro.",
        "Add jalapeño slices if you like some heat.",
        "Drizzle a little soy sauce or fish sauce for extra flavor.",
        "Close the sandwich and serve immediately."
      ]
    },
    
    
    
    {
      id: 204,
      name: "Katsudon (Pork Cutlet Rice Bowl)",
      cuisine: "Asian",
      time: 40, // realistic preparation time in minutes
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Nut-Free"],
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFxLeRK6b2le3-c6HNRPyZLBwe8ts4b5Z4A&s",
      calories: 550,
      servings: 2,
      ingredients: [
        "Pork cutlet (tonkatsu) - 1 piece",
        "Cooked rice - 1 cup",
        "Onion - 1/4 sliced",
        "Egg - 1, lightly beaten",
        "Dashi stock - 1/2 cup",
        "Soy sauce - 1 tbsp",
        "Mirin - 1 tbsp",
        "Sugar - 1 tsp",
        "Oil for frying"
      ],
      instructions: [
        "Prepare the tonkatsu: bread the pork cutlet and deep fry until golden brown.",
        "Slice the fried pork cutlet into strips.",
        "In a small pan, heat dashi stock, soy sauce, mirin, and sugar.",
        "Add sliced onion and cook until soft.",
        "Pour the beaten egg over the onions and simmer until the egg is just set.",
        "Place cooked rice in a bowl.",
        "Place the pork cutlet on top of the rice and pour the onion-egg mixture over it.",
        "Serve immediately while hot."
      ]
    },
    
    
    
    {
      id: 205,
      name: "Amok Trey (Cambodian Fish Curry)",
      cuisine: "Asian",
      time: 50, // realistic preparation and cooking time in minutes
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Fat", "Nut-Free"],
    
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXz5-NTl5nyYLhKsCgPTVZf101PrRrESC9w&s",
      calories: 450,
      servings: 3,
      ingredients: [
        "White fish fillets (e.g., catfish or tilapia) - 300g",
        "Coconut milk - 1 cup",
        "Kroeung paste (Cambodian spice paste) - 2 tbsp",
        "Fish sauce - 1 tbsp",
        "Sugar - 1 tsp",
        "Egg - 1, beaten",
        "Banana leaf cups or ramekins for steaming",
        "Fresh herbs (like kaffir lime leaves or basil) for garnish"
      ],
      instructions: [
        "Prepare the kroeung paste by blending lemongrass, galangal, kaffir lime zest, garlic, and chili until smooth.",
        "Mix the paste with coconut milk, fish sauce, and sugar in a bowl.",
        "Add the fish pieces to the mixture and coat evenly.",
        "Lightly beat the egg and mix into the coconut-fish mixture.",
        "Pour the mixture into banana leaf cups or ramekins.",
        "Steam the cups over medium heat for 20–25 minutes until the fish is cooked and the custard is set.",
        "Garnish with fresh herbs and serve hot with steamed rice."
      ]
    },
    {
      id: 206,
      name: "Spaghetti Carbonara",
      cuisine: "Western",
      time: 25,
      difficulty: "Medium",
      mood: ["energetic", "comfort", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpcRVL7X6_d-ZFFkgl1ATpw_3zlQnnUqi3Q&s",
      calories: 520,
      servings: 2,
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Parmesan cheese",
        "Pancetta",
        "Black pepper",
        "Salt",
        "Olive oil"
      ],
      instructions: [
        "Boil spaghetti until al dente.",
        "Fry pancetta in olive oil until crisp.",
        "Whisk eggs with grated Parmesan and pepper.",
        "Mix hot pasta with pancetta and remove from heat.",
        "Quickly stir in egg mixture to coat pasta without scrambling.",
        "Serve warm with extra cheese and pepper."
      ]
    },
    {
      id: 207,
      name: "Caesar Salad",
      cuisine: "Western",
      time: 15,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Carb", "Low-Fat"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWk-FIMM5Ms_3fCNdb70po3wP6qz6kjywvqw&s",
      calories: 220,
      servings: 2,
      ingredients: [
        "Romaine lettuce",
        "Croutons",
        "Parmesan cheese",
        "Caesar dressing",
        "Olive oil",
        "Lemon juice",
        "Black pepper"
      ],
      instructions: [
        "Wash and chop romaine lettuce.",
        "Toss lettuce with croutons and grated Parmesan.",
        "Drizzle Caesar dressing evenly.",
        "Add olive oil, lemon juice, and pepper to taste.",
        "Mix lightly and serve chilled."
      ]
    },
    {
      id: 208,
      name: "Grilled Salmon with Vegetables",
      cuisine: "Western",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["Heart-Healthy", "High-Protein", "Low-Carb"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kP9V1Tht4jRAlXGbAmtPsUvhFhpayIEOJg&s",
      calories: 410,
      servings: 2,
      ingredients: [
        "Salmon fillets",
        "Broccoli",
        "Carrots",
        "Olive oil",
        "Garlic",
        "Salt",
        "Black pepper",
        "Lemon"
      ],
      instructions: [
        "Preheat grill to medium heat.",
        "Season salmon with salt, pepper, and garlic.",
        "Grill salmon for 4–5 minutes per side.",
        "Steam or roast vegetables until tender.",
        "Serve salmon with vegetables and a squeeze of lemon."
      ]
    },
    {
      id: 209,
      name: "Classic Pancakes",
      cuisine: "Western",
      time: 20,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeiN4GUswTXe9xsqdhp38wo_8QfCLlzqTHug&s",
      calories: 350,
      servings: 3,
      ingredients: [
        "All-purpose flour",
        "Milk",
        "Eggs",
        "Sugar",
        "Butter",
        "Baking powder",
        "Salt"
      ],
      instructions: [
        "Mix flour, sugar, baking powder, and salt in a bowl.",
        "Whisk in milk and eggs until smooth.",
        "Melt butter on a skillet over medium heat.",
        "Pour batter to form pancakes and cook until bubbles form.",
        "Flip and cook until golden brown.",
        "Serve warm with syrup or fruits."
      ]
    },
    {
      id: 210,
      name: "Beef Steak with Mashed Potatoes",
      cuisine: "Western",
      time: 40,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "familiar"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-ZvDDZMQ-RGXvPxLYOEX_HDFcCSVF7s9jg&s",
      calories: 650,
      servings: 2,
      ingredients: [
        "Beef steak",
        "Potatoes",
        "Butter",
        "Milk",
        "Salt",
        "Pepper",
        "Olive oil",
        "Garlic"
      ],
      instructions: [
        "Season steak with salt, pepper, and garlic.",
        "Heat olive oil in a skillet and sear steak on both sides.",
        "Cook to preferred doneness and rest for a few minutes.",
        "Boil potatoes until soft, then mash with butter and milk.",
        "Serve steak with mashed potatoes and garnish with herbs."
      ]
    },
    {
      id: 211,
      name: "Cheeseburger",
      cuisine: "Western",
      time: 25,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "quick", "familiar"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTlsx8WYYPbTVG51s388PiXfEHxehTzZ-hg&s",
      calories: 680,
      servings: 1,
      ingredients: [
        "Ground beef patty",
        "Burger bun",
        "Cheddar cheese",
        "Lettuce",
        "Tomato",
        "Onion",
        "Mayonnaise",
        "Ketchup",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Season beef patty with salt and pepper.",
        "Grill or pan-fry the patty until cooked.",
        "Toast burger buns lightly.",
        "Assemble with lettuce, tomato, onion, cheese, and condiments.",
        "Serve hot with fries or salad."
      ]
    },
    {
      id: 212,
      name: "Mushroom Soup",
      cuisine: "Western",
      time: 30,
      difficulty: "Easy",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Low-Sodium", "Vegetarian"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NdrxicsPfjqqSENQUG9-dRpRtG9qrvV0kA&s",
      calories: 190,
      servings: 3,
      ingredients: [
        "Mushrooms",
        "Onion",
        "Garlic",
        "Butter",
        "Flour",
        "Milk",
        "Vegetable broth",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Sauté chopped onions and garlic in butter.",
        "Add sliced mushrooms and cook until soft.",
        "Stir in flour and cook for 1 minute.",
        "Pour in vegetable broth and milk; simmer for 10 minutes.",
        "Blend until smooth and season to taste.",
        "Serve warm with bread."
      ]
    },
    {
      id: 213,
      name: "Chicken Alfredo Pasta",
      cuisine: "Western",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "comfort", "moderate", "international"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcS4ECOplSfGbQ_ZQ4qAu08hy1IPMjn-CQMQ&s",
      calories: 560,
      servings: 2,
      ingredients: [
        "Fettuccine pasta",
        "Chicken breast",
        "Butter",
        "Cream",
        "Garlic",
        "Parmesan cheese",
        "Salt",
        "Pepper",
        "Olive oil"
      ],
      instructions: [
        "Cook fettuccine until al dente.",
        "Sauté chicken pieces in olive oil until golden.",
        "Melt butter, add garlic, then pour in cream.",
        "Stir in Parmesan cheese and cooked chicken.",
        "Mix in pasta and toss until coated.",
        "Serve hot with extra cheese."
      ]
    },
    {
      id: 214,
      name: "Veggie Wrap",
      cuisine: "Western",
      time: 15,
      difficulty: "Easy",
      mood: ["tired", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "High-Fiber", "Dairy-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvjOOHgKJi16fKbOhGfpMLGu8JuOPIEoq9A&s",
      calories: 280,
      servings: 1,
      ingredients: [
        "Whole wheat tortilla",
        "Lettuce",
        "Tomato",
        "Cucumber",
        "Bell peppers",
        "Hummus",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Spread hummus evenly over tortilla.",
        "Add sliced vegetables in layers.",
        "Season with salt and pepper.",
        "Roll tightly and slice in half.",
        "Serve immediately or wrap for takeaway."
      ]
    },
    {
      id: 215,
      name: "Baked Mac and Cheese",
      cuisine: "Western",
      time: 35,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4__wc5nUajsQbttH6p70WiIQOfnB5BZiD0g&s",
      calories: 480,
      servings: 3,
      ingredients: [
        "Macaroni pasta",
        "Cheddar cheese",
        "Milk",
        "Butter",
        "Flour",
        "Breadcrumbs",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Boil macaroni until tender and drain.",
        "Melt butter, stir in flour, then add milk to make a sauce.",
        "Mix in cheese until melted and smooth.",
        "Combine macaroni with sauce and pour into a baking dish.",
        "Top with breadcrumbs and bake until golden brown.",
        "Serve warm and cheesy."
      ]
    },
    {
      id: 216,
      name: "French Toast",
      cuisine: "Western",
      time: 15,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I8iUYNwgU1JGduYJqhv6TPLDUZQE_RQmGA&s",
      calories: 320,
      servings: 2,
      ingredients: [
        "Bread slices",
        "Eggs",
        "Milk",
        "Sugar",
        "Butter",
        "Cinnamon",
        "Vanilla extract"
      ],
      instructions: [
        "Whisk eggs, milk, sugar, cinnamon, and vanilla in a bowl.",
        "Dip bread slices into the mixture to coat evenly.",
        "Heat butter on a skillet over medium heat.",
        "Cook each slice until golden brown on both sides.",
        "Serve warm with syrup or fruits."
      ]
    },
    {
      id: 217,
      name: "Roast Chicken with Herbs",
      cuisine: "Western",
      time: 60,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "familiar"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb", "Heart-Healthy"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5e9PhcuMkkYxxgjrw1iliq7MU830y1DJPQ&s",
      calories: 620,
      servings: 3,
      ingredients: [
        "Whole chicken",
        "Olive oil",
        "Garlic",
        "Rosemary",
        "Thyme",
        "Lemon",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Preheat oven to 200°C (400°F).",
        "Rub chicken with olive oil, salt, pepper, garlic, and herbs.",
        "Stuff cavity with lemon halves and rosemary.",
        "Roast for 50–60 minutes until golden and cooked through.",
        "Rest for 10 minutes before slicing and serving."
      ]
    },
    {
      id: 218,
      name: "Club Sandwich",
      cuisine: "Western",
      time: 20,
      difficulty: "Easy",
      mood: ["tired", "light", "quick", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3VjNwPuHbOUiU7U8ccJrbZTtU4kBlRWE9A&s",
      calories: 420,
      servings: 1,
      ingredients: [
        "Bread slices",
        "Chicken or turkey",
        "Lettuce",
        "Tomato",
        "Mayonnaise",
        "Bacon",
        "Butter",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Toast bread slices lightly.",
        "Spread mayonnaise on each slice.",
        "Layer lettuce, tomato, bacon, and sliced chicken.",
        "Stack layers and secure with toothpicks.",
        "Slice diagonally and serve fresh."
      ]
    },
    {
      id: 219,
      name: "Garlic Bread",
      cuisine: "Western",
      time: 15,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Low-Sodium"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7KzwPmAhbwZ4AIhx79oXSXmjp6PRXVKk1A&s",
      calories: 250,
      servings: 2,
      ingredients: [
        "Baguette bread",
        "Butter",
        "Garlic",
        "Parsley",
        "Salt"
      ],
      instructions: [
        "Preheat oven to 180°C (350°F).",
        "Mix softened butter with minced garlic and chopped parsley.",
        "Spread mixture evenly on sliced baguette pieces.",
        "Bake for 8–10 minutes until crispy and golden.",
        "Serve warm as a side or snack."
      ]
    },
    {
      id: 220,
      name: "Vegetable Lasagna",
      cuisine: "Western",
      time: 50,
      difficulty: "Medium",
      mood: ["energetic", "comfort", "leisurely", "international"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "High-Fiber", "Low-Sodium"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx4ZjtVyi2jmd8eDIzw8089UTIp8mU_wWEA&s",
      calories: 480,
      servings: 4,
      ingredients: [
        "Lasagna sheets",
        "Tomato sauce",
        "Ricotta cheese",
        "Spinach",
        "Zucchini",
        "Bell peppers",
        "Mozzarella cheese",
        "Olive oil",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Preheat oven to 190°C (375°F).",
        "Sauté vegetables in olive oil until soft.",
        "Layer lasagna sheets, ricotta, vegetables, and sauce alternately.",
        "Top with mozzarella cheese.",
        "Bake for 35–40 minutes until bubbly and golden.",
        "Rest for 10 minutes before slicing and serving."
      ]
    },
    {
      id: 221,
      name: "Margherita Pizza",
      cuisine: "Western",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpjkjGznGLKphjHANaYQuoWSekUV9jjMYOg&s",
      calories: 500,
      servings: 2,
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella cheese",
        "Fresh basil",
        "Olive oil",
        "Salt"
      ],
      instructions: [
        "Preheat oven to 230°C (450°F).",
        "Spread tomato sauce over pizza dough.",
        "Top with mozzarella slices and basil leaves.",
        "Drizzle olive oil and bake for 10–12 minutes.",
        "Serve hot with a crispy crust."
      ]
    },
    {
      id: 222,
      name: "Fish and Chips",
      cuisine: "Western",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfx6myiWv9I4MNlWHF31ch8jmaZMjWtlTBXA&s",
      calories: 650,
      servings: 2,
      ingredients: [
        "White fish fillets",
        "Potatoes",
        "Flour",
        "Baking powder",
        "Salt",
        "Oil",
        "Water"
      ],
      instructions: [
        "Cut potatoes into fries and soak in water.",
        "Make batter with flour, baking powder, and water.",
        "Coat fish in batter and deep-fry until golden.",
        "Fry potatoes until crisp.",
        "Serve together with tartar sauce or lemon wedges."
      ]
    },
    {
      id: 223,
      name: "Beef Tacos",
      cuisine: "Western",
      time: 20,
      difficulty: "Easy",
      mood: ["energetic", "hearty", "quick", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxhY81kcYaDVjS8bEwY9bgHiNo1-cFgXg3g&s",
      calories: 450,
      servings: 2,
      ingredients: [
        "Taco shells",
        "Ground beef",
        "Onion",
        "Garlic",
        "Cheddar cheese",
        "Lettuce",
        "Tomato",
        "Spices"
      ],
      instructions: [
        "Cook ground beef with onion, garlic, and spices.",
        "Warm taco shells in a pan.",
        "Fill shells with beef, cheese, lettuce, and tomato.",
        "Serve with salsa or sour cream."
      ]
    },
    {
      id: 224,
      name: "BBQ Ribs",
      cuisine: "Western",
      time: 90,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "familiar"],
      veg: false,
      spiciness: "Hot",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgRQ2lJrQnnOrupD1b3SnRFP4ehfkeztwew&s",
      calories: 800,
      servings: 3,
      ingredients: [
        "Pork ribs",
        "BBQ sauce",
        "Garlic powder",
        "Paprika",
        "Salt",
        "Pepper",
        "Olive oil"
      ],
      instructions: [
        "Season ribs with spices and olive oil.",
        "Bake or grill slowly for 1 hour until tender.",
        "Brush with BBQ sauce and caramelize for 10 minutes.",
        "Serve sticky and hot."
      ]
    },
    {
      id: 225,
      name: "Eggs Benedict",
      cuisine: "Western",
      time: 25,
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYENTB9hd1sbNGXUbL7CRKF-fTDc7Uns2wQg&s",
      calories: 420,
      servings: 2,
      ingredients: [
        "Eggs",
        "English muffins",
        "Ham or bacon",
        "Butter",
        "Lemon juice",
        "Egg yolks",
        "Salt"
      ],
      instructions: [
        "Poach eggs until soft.",
        "Toast English muffins and top with ham.",
        "Prepare hollandaise sauce with butter, yolks, and lemon.",
        "Place poached eggs on top and drizzle sauce.",
        "Serve immediately."
      ]
    },
    {
      id: 226,
      name: "Cauliflower Steak",
      cuisine: "Western",
      time: 25,
      difficulty: "Easy",
      mood: ["energetic", "light", "moderate", "experimental"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Carb", "Vegan", "Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflwy_3ir15g1EXrAcp0mhH1T1Bm8JNwJQiQ&s",
      calories: 180,
      servings: 2,
      ingredients: [
        "Cauliflower",
        "Olive oil",
        "Garlic",
        "Paprika",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Slice cauliflower into thick slabs.",
        "Brush with olive oil and season with spices.",
        "Roast or grill for 20 minutes until tender.",
        "Serve with lemon or yogurt dip."
      ]
    },
    {
      id: 227,
      name: "Chicken Pot Pie",
      cuisine: "Western",
      time: 45,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG88L1cSQVVDJ54jRWvfFofJPdLBc6dg_Rww&s",
      calories: 600,
      servings: 3,
      ingredients: [
        "Chicken breast",
        "Pie crust",
        "Carrots",
        "Peas",
        "Butter",
        "Flour",
        "Milk",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Cook chicken and vegetables in butter and flour mix.",
        "Add milk to make creamy filling.",
        "Pour filling into crust and cover with top layer.",
        "Bake at 200°C for 25–30 minutes until golden.",
        "Cool slightly before serving."
      ]
    },
    {
      id: 228,
      name: "Shrimp Scampi",
      cuisine: "Western",
      time: 20,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "quick", "international"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7nQq3r6O7xQpyn66JxuDQrrUYPnBtnZZgw&s",
      calories: 400,
      servings: 2,
      ingredients: [
        "Shrimp",
        "Butter",
        "Garlic",
        "Lemon juice",
        "Parsley",
        "Olive oil",
        "Salt",
        "Pepper"
      ],
      instructions: [
        "Heat butter and olive oil in a pan.",
        "Add garlic and sauté until fragrant.",
        "Add shrimp and cook until pink.",
        "Stir in lemon juice and parsley.",
        "Serve over pasta or with bread."
      ]
    },
    {
      id: 229,
      name: "Greek Salad",
      cuisine: "Western",
      time: 10,
      difficulty: "Easy",
      mood: ["tired", "light", "quick", "international"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Carb", "Heart-Healthy", "Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSHmaEqBzpiRl13wgPaCTrM7NmgCCIiGiPA&s",
      calories: 220,
      servings: 2,
      ingredients: [
        "Cucumber",
        "Tomato",
        "Onion",
        "Feta cheese",
        "Olives",
        "Olive oil",
        "Lemon juice",
        "Oregano"
      ],
      instructions: [
        "Chop all vegetables into bite-sized pieces.",
        "Combine in a bowl with feta and olives.",
        "Drizzle with olive oil and lemon juice.",
        "Sprinkle oregano and toss lightly.",
        "Serve fresh and chilled."
      ]
    },
    {
      id: 230,
      name: "Apple Pie",
      cuisine: "Western",
      time: 50,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Nut-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1neUjC6pBfFDJlCFfGj4CzaQ25zK5ZOutGg&s",
      calories: 430,
      servings: 4,
      ingredients: [
        "Pie crust",
        "Apples",
        "Sugar",
        "Cinnamon",
        "Butter",
        "Flour",
        "Lemon juice"
      ],
      instructions: [
        "Preheat oven to 190°C (375°F).",
        "Mix sliced apples with sugar, flour, cinnamon, and lemon juice.",
        "Fill pie crust with mixture and cover with top crust.",
        "Bake for 40–45 minutes until golden and bubbly.",
        "Cool before slicing and serve with ice cream."
      ]
    },
    {
      id: 231,
      name: "Grilled Chicken Breast",
      cuisine: "Continental",
      time: 30,
      difficulty: "Easy",
      mood: ["energetic", "light", "quick", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Carb", "Low-Fat"],
      image: "https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-1200x1658.jpg",
      calories: 280,
      servings: 2,
      ingredients: ["Chicken breast", "Olive oil", "Salt", "Black pepper", "Lemon juice", "Garlic"],
      instructions: [
        "Preheat grill to medium-high heat",
        "Brush chicken with olive oil and season with salt, pepper, and garlic",
        "Grill chicken for 6-7 minutes per side until cooked through",
        "Drizzle with lemon juice and serve hot"
      ],
    },
    
    {
      id: 232,
      name: "Grilled Salmon",
      cuisine: "Continental",
      time: 25,
      difficulty: "Medium",
      mood: ["calm", "light", "quick", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["Heart-Healthy", "High-Protein", "Low-Carb"],
      image: "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200: ",
      calories: 320,
      servings: 2,
      ingredients: ["Salmon fillet", "Olive oil", "Lemon", "Dill", "Salt", "Black pepper"],
      instructions: [
        "Preheat grill and lightly oil the grate",
        "Brush salmon with olive oil and season with salt, pepper, and dill",
        "Grill for 5-6 minutes per side until flaky",
        "Squeeze lemon over and serve warm"
      ],
    },
    
    {
      id: 233,
      name: "Filet Mignon Steak",
      cuisine: "Continental",
      time: 40,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "familiar"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/02/Filet-Mignon-main.jpg",
      calories: 450,
      servings: 2,
      ingredients: ["Beef tenderloin", "Butter", "Salt", "Pepper", "Garlic", "Rosemary"],
      instructions: [
        "Season steak with salt and pepper",
        "Sear in butter and garlic for 2-3 minutes each side",
        "Transfer to oven and roast until desired doneness",
        "Rest for 5 minutes and serve"
      ],
    },
    
    {
      id: 234,
      name: "Grilled Lamb Chops",
      cuisine: "Continental",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2012/2/22/0/EI1C01_grilled-lamb-chops_s4x3.jpg",
      calories: 420,
      servings: 3,
      ingredients: ["Lamb chops", "Olive oil", "Rosemary", "Garlic", "Salt", "Pepper"],
      instructions: [
        "Marinate lamb chops in olive oil, garlic, rosemary, salt, and pepper",
        "Preheat grill to medium heat",
        "Grill for 4-5 minutes per side until tender",
        "Rest for a few minutes and serve"
      ],
    },
    
    {
      id: 235,
      name: "Roast Chicken",
      cuisine: "Continental",
      time: 75,
      difficulty: "Medium",
      mood: ["calm", "hearty", "leisurely", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Carb", "Low-Fat"],
      image: "https://hips.hearstapps.com/hmg-prod/images/roast-chicken-recipe-2-66b231ac9a8fb.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:",
      calories: 500,
      servings: 4,
      ingredients: ["Whole chicken", "Olive oil", "Lemon", "Garlic", "Thyme", "Salt", "Pepper"],
      instructions: [
        "Preheat oven to 200°C (400°F)",
        "Rub chicken with olive oil, garlic, thyme, salt, and pepper",
        "Roast for 60–70 minutes until golden brown",
        "Rest before carving and serve"
      ],
    },
    
    {
      id: 236,
      name: "Fish and Chips",
      cuisine: "Continental",
      time: 35,
      difficulty: "Medium",
      mood: ["energetic", "hearty", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["Nut-Free"],
      image: "https://images.getrecipekit.com/20220707143834-atlantic_cod_fish_chips_recipe_1024x1024.webp?class=16x9",
      calories: 650,
      servings: 2,
      ingredients: ["White fish fillets", "Flour", "Egg", "Breadcrumbs", "Potatoes", "Oil", "Salt"],
      instructions: [
        "Peel and cut potatoes into fries, soak and dry them",
        "Fry potatoes until golden and crispy",
        "Coat fish in flour, egg, and breadcrumbs",
        "Deep fry fish until golden brown",
        "Serve hot with fries and tartar sauce"
      ],
    },
    
    {
      id: 237,
      name: "Beef Wellington",
      cuisine: "Continental",
      time: 90,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "experimental"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJPFzcA2gquBuxv9ETheC1AwbEnZjGvVc3g&s",
      calories: 800,
      servings: 4,
      ingredients: ["Beef tenderloin", "Puff pastry", "Mushrooms", "Onions", "Butter", "Egg yolk", "Salt", "Pepper"],
      instructions: [
        "Sear beef tenderloin and let it cool",
        "Sauté mushrooms and onions into a duxelles paste",
        "Wrap beef in pastry with duxelles and brush with egg yolk",
        "Bake until pastry is golden and beef is medium-rare"
      ],
    },
    
    {
      id: 238,
      name: "Shepherd's Pie",
      cuisine: "Continental",
      time: 60,
      difficulty: "Medium",
      mood: ["tired", "comfort", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Gluten-Free"],
      image: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipe%20images%20and%20files/retail/desktop%20(600x600)/2025/april/2025_retail_simple-shepherds-pie_600x600.webp?ext=.webp",
      calories: 500,
      servings: 4,
      ingredients: ["Ground beef or lamb", "Onion", "Carrot", "Peas", "Mashed potatoes", "Butter", "Salt", "Pepper"],
      instructions: [
        "Cook minced meat with onions, carrots, peas, and seasoning",
        "Spread mixture in a baking dish",
        "Top with mashed potatoes and butter",
        "Bake at 180°C for 25 minutes until golden"
      ],
    },
    
    {
      id: 239,
      name: "Chicken Kiev",
      cuisine: "Continental",
      time: 45,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein"],
      image: "https://www.recipetineats.com/tachyon/2021/05/Chicken-Kiev_2-1-SQ.jpg?resize=500%2C500",
      calories: 600,
      servings: 3,
      ingredients: ["Chicken breast", "Butter", "Garlic", "Parsley", "Eggs", "Breadcrumbs", "Flour", "Oil"],
      instructions: [
        "Prepare garlic butter with parsley and chill",
        "Stuff chicken breasts with the butter and seal",
        "Coat in flour, egg, and breadcrumbs",
        "Deep fry until golden and cooked through"
      ],
    },
    
    {
      id: 240,
      name: "Chicken Cordon Bleu",
      cuisine: "Continental",
      time: 50,
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "international"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://www.onceuponachef.com/images/2023/11/chicken-cordon-bleu-1-1200x1409.jpg",
      calories: 620,
      servings: 3,
      ingredients: ["Chicken breast", "Ham", "Cheese", "Flour", "Egg", "Breadcrumbs", "Oil", "Salt"],
      instructions: [
        "Flatten chicken breast and layer with ham and cheese",
        "Roll tightly and secure with toothpicks",
        "Coat with flour, egg, and breadcrumbs",
        "Pan-fry or bake until golden brown and cheese melts"
      ],
    },
    {
      id: 241,
      name: "Wiener Schnitzel",
      cuisine: "Continental",
      time: 40,
      difficulty: "Medium",
      mood: ["energetic", "light", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Nut-Free"],
      image:"https://honest-food.net/wp-content/uploads/2012/12/wiener-schnitzel-recipe-2.jpg" ,
      calories: 520,
      servings: 2,
      ingredients: ["Veal cutlets", "Flour", "Eggs", "Breadcrumbs", "Butter or oil", "Lemon", "Salt", "Pepper"],
      instructions: [
        "Pound veal cutlets thinly and season with salt and pepper",
        "Coat each cutlet in flour, then beaten egg, and breadcrumbs",
        "Heat butter or oil in a skillet over medium heat",
        "Fry cutlets until golden brown on both sides",
        "Serve hot with lemon wedges"
      ],
    },
    
    {
      id: 242,
      name: "Coq au Vin",
      cuisine: "Continental",
      time: 90,
      difficulty: "Hard",
      mood: ["calm", "hearty", "leisurely", "international"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2012/01/coq-au-vin-3740fe3.jpg?resize=1366,1242",
      calories: 680,
      servings: 4,
      ingredients: ["Chicken pieces", "Red wine", "Onions", "Garlic", "Carrots", "Mushrooms", "Bacon", "Butter", "Thyme", "Salt", "Pepper"],
      instructions: [
        "Marinate chicken pieces in red wine, garlic, and herbs for a few hours or overnight",
        "Brown bacon and remove, then sear chicken in the same pot",
        "Add onions, carrots, and mushrooms, and sauté until tender",
        "Pour in the wine marinade, add thyme, salt, and pepper",
        "Simmer covered for 45–60 minutes until chicken is tender",
        "Serve hot with mashed potatoes or bread"
      ],
    },
    {
      id: 243,
      name: "Beef Bourguignon",
      cuisine: "Continental",
      time: 120,
      difficulty: "Hard",
      mood: ["calm", "hearty", "leisurely", "international"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/boeuf_bourguignon_25475_16x9.jpg",
      calories: 700,
      servings: 4,
      ingredients: ["Beef chunks", "Red wine", "Onions", "Carrots", "Garlic", "Mushrooms", "Thyme", "Butter", "Flour", "Salt", "Pepper"],
      instructions: [
        "Brown beef in butter, then remove from pot",
        "Sauté onions, carrots, and garlic until softened",
        "Add flour and stir, then pour in red wine and stock",
        "Return beef to pot, add herbs, and simmer for 1.5 to 2 hours",
        "Add mushrooms near the end and cook until beef is tender"
      ],
    },
    
    {
      id: 244,
      name: "Beef Stroganoff",
      cuisine: "Continental",
      time: 45,
      difficulty: "Medium",
      mood: ["energetic", "comfort", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://www.allrecipes.com/thmb/mSWde3PHTu-fDkbvWBw0D1JlS8U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25202beef-stroganoff-iii-ddmfs-3x4-233-0f26fa477e9c446b970a32502468efc6.jpg",
      calories: 580,
      servings: 3,
      ingredients: ["Beef strips", "Mushrooms", "Onions", "Sour cream", "Butter", "Flour", "Beef broth", "Salt", "Pepper"],
      instructions: [
        "Cook beef strips in butter until browned and set aside",
        "Sauté onions and mushrooms until soft",
        "Add flour, stir, then pour in beef broth to form sauce",
        "Return beef and simmer briefly",
        "Stir in sour cream and serve with noodles or rice"
      ],
    },
    
    {
      id: 245,
      name: "Hungarian Goulash",
      cuisine: "Continental",
      time: 100,
      difficulty: "Hard",
      mood: ["tired", "hearty", "leisurely", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Gluten-Free"],
      image: "https://www.daringgourmet.com/wp-content/uploads/2022/01/Hungarian-Goulash-17.jpg",
      calories: 640,
      servings: 4,
      ingredients: ["Beef cubes", "Onions", "Paprika", "Tomatoes", "Garlic", "Potatoes", "Carrots", "Oil", "Salt", "Pepper"],
      instructions: [
        "Sauté onions until golden, then add paprika and garlic",
        "Add beef cubes and brown well",
        "Add tomatoes, potatoes, carrots, and enough water to cover",
        "Simmer for 1.5 hours until beef is tender and stew thickens",
        "Season and serve hot"
      ],
    },
    
    {
      id: 246,
      name: "Chicken Marsala",
      cuisine: "Continental",
      time: 40,
      difficulty: "Medium",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala-scaled.jpg",
      calories: 460,
      servings: 3,
      ingredients: ["Chicken breasts", "Mushrooms", "Marsala wine", "Butter", "Garlic", "Flour", "Salt", "Pepper"],
      instructions: [
        "Coat chicken lightly in flour and season with salt and pepper",
        "Cook chicken in butter until golden brown and remove",
        "Sauté mushrooms and garlic in the same pan",
        "Add Marsala wine and simmer to reduce slightly",
        "Return chicken to pan and cook for a few minutes until sauce thickens"
      ],
    },
    
    {
      id: 247,
      name: "Spaghetti Carbonara",
      cuisine: "Continental",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "comfort", "quick", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
      calories: 620,
      servings: 2,
      ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Pancetta or bacon", "Garlic", "Salt", "Pepper"],
      instructions: [
        "Cook spaghetti until al dente",
        "Fry pancetta or bacon with garlic until crisp",
        "Whisk eggs and cheese together in a bowl",
        "Combine pasta with pancetta, remove from heat, and stir in egg mixture quickly",
        "Season with black pepper and serve immediately"
      ],
    },
    
    {
      id: 248,
      name: "Fettuccine Alfredo",
      cuisine: "Continental",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1-500x500.jpg",
      calories: 580,
      servings: 2,
      ingredients: ["Fettuccine pasta", "Butter", "Heavy cream", "Parmesan cheese", "Salt", "Pepper"],
      instructions: [
        "Cook fettuccine until al dente and drain",
        "Melt butter in a pan and add cream",
        "Simmer gently, then stir in cheese until smooth",
        "Add pasta and toss to coat evenly",
        "Serve warm with extra cheese on top"
      ],
    },
    
    {
      id: 249,
      name: "Lasagna Bolognese",
      cuisine: "Continental",
      time: 90,
      difficulty: "Hard",
      mood: ["tired", "hearty", "leisurely", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://www.recipesfromitaly.com/wp-content/uploads/2021/02/lasagna-bolognese-recipe-1x1-1200x1200-A.jpg",
      calories: 750,
      servings: 4,
      ingredients: ["Lasagna noodles", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Ricotta cheese", "Mozzarella", "Parmesan", "Olive oil"],
      instructions: [
        "Cook beef with onions and garlic, then add tomato sauce and simmer",
        "Layer noodles, meat sauce, and cheeses in a baking dish",
        "Repeat layers and finish with cheese on top",
        "Bake at 180°C for 40 minutes until golden and bubbly"
      ],
    },
    
    {
      id: 250,
      name: "Vegetable Lasagna",
      cuisine: "Continental",
      time: 80,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "High-Protein"],
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/vegetarian-lasagna-scaled.jpg",
      calories: 680,
      servings: 4,
      ingredients: ["Lasagna noodles", "Zucchini", "Spinach", "Tomato sauce", "Ricotta", "Mozzarella", "Garlic", "Olive oil", "Salt", "Pepper"],
      instructions: [
        "Sauté vegetables with olive oil, garlic, and salt",
        "Layer noodles, tomato sauce, ricotta, and vegetables",
        "Top with mozzarella and bake at 180°C for 35–40 minutes",
        "Let rest before slicing and serving"
      ],
    },
    
    {
      id: 251,
      name: "Mushroom Risotto",
      cuisine: "Continental",
      time: 45,
      difficulty: "Medium",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Gluten-Free", "Vegetarian"],
      image: "https://www.sandravalvassori.com/wp-content/uploads/2024/02/Risotto-Mushroom-2-352.jpg",
      calories: 520,
      servings: 3,
      ingredients: ["Arborio rice", "Mushrooms", "Onion", "Garlic", "Butter", "Parmesan", "Vegetable broth", "Olive oil"],
      instructions: [
        "Sauté onions and garlic in butter and oil",
        "Add rice and cook until translucent",
        "Add broth gradually, stirring constantly",
        "Stir in sautéed mushrooms and Parmesan near the end",
        "Serve creamy and warm"
      ],
    },
    
    {
      id: 252,
      name: "Shrimp Scampi",
      cuisine: "Continental",
      time: 25,
      difficulty: "Easy",
      mood: ["energetic", "light", "quick", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Carb"],
      image: "https://www.allrecipes.com/thmb/gGiZlDOs_cqp65nB23gsVlcmBI0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-19508-shrimp-scampi-VAT-hero-01-4x3-f5a1c9cadca542919285caa8dcf5d135.jpg",
      calories: 400,
      servings: 2,
      ingredients: ["Shrimp", "Garlic", "Butter", "Olive oil", "Lemon juice", "Parsley", "Salt", "Pepper"],
      instructions: [
        "Heat butter and oil in a skillet over medium heat",
        "Add garlic and sauté briefly",
        "Add shrimp and cook until pink and opaque",
        "Stir in lemon juice and parsley",
        "Serve hot with pasta or crusty bread"
      ],
    },
    {
      id: 253,
      name: "Seafood Paella",
      cuisine: "Continental",
      time: 60,
      difficulty: "Hard",
      mood: ["energetic", "hearty", "leisurely", "international"],
      veg: false,
      spiciness: "Medium",
      healthCondition: ["High-Protein", "Low-Fat"],
      image: "https://www.simplyrecipes.com/thmb/2GMHFcWEHZGOYbT4eoVCAu2uwsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg",
      calories: 620,
      servings: 4,
      ingredients: ["Rice", "Shrimp", "Mussels", "Squid", "Chicken broth", "Onion", "Tomato", "Saffron", "Olive oil", "Salt", "Pepper"],
      instructions: [
        "Heat oil in a wide pan and sauté onions and tomatoes",
        "Add rice and saffron, stir until coated",
        "Pour in broth and bring to simmer",
        "Add seafood and cook until rice absorbs liquid",
        "Let rest before serving warm"
      ],
    },
    
    {
      id: 254,
      name: "Moussaka",
      cuisine: "Continental",
      time: 90,
      difficulty: "Hard",
      mood: ["calm", "hearty", "leisurely", "international"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://www.recipetineats.com/tachyon/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg?resize=500%2C375",
      calories: 700,
      servings: 4,
      ingredients: ["Eggplant", "Ground beef or lamb", "Onion", "Tomato sauce", "Béchamel sauce", "Olive oil", "Salt", "Pepper"],
      instructions: [
        "Slice and roast eggplants until tender",
        "Cook minced meat with onion, tomato sauce, and seasoning",
        "Layer eggplant and meat in a baking dish",
        "Top with béchamel sauce and bake at 180°C for 40 minutes",
        "Cool slightly before serving"
      ],
    },
    
    {
      id: 255,
      name: "Quiche Lorraine",
      cuisine: "Continental",
      time: 50,
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://www.allrecipes.com/thmb/plG7UKAQvPQdn04AA_SBfj88ki0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17515-quiche-lorraine-i-DDMFS-4x3-efda035d462a4242b7a18f39e21df047.jpg",
      calories: 480,
      servings: 6,
      ingredients: ["Pie crust", "Eggs", "Cream", "Bacon", "Cheese", "Salt", "Pepper", "Nutmeg"],
      instructions: [
        "Pre-bake crust until lightly golden",
        "Cook bacon until crisp and crumble it",
        "Whisk eggs, cream, cheese, and seasoning",
        "Pour filling into crust, add bacon, and bake for 30 minutes",
        "Cool slightly before slicing"
      ],
    },
    
    {
      id: 256,
      name: "Ratatouille",
      cuisine: "Continental",
      time: 60,
      difficulty: "Medium",
      mood: ["calm", "light", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegan", "Gluten-Free", "Low-Fat"],
      image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-07-ratatouille%2FRatatouille-",
      calories: 250,
      servings: 3,
      ingredients: ["Eggplant", "Zucchini", "Tomatoes", "Bell peppers", "Onion", "Garlic", "Olive oil", "Herbs", "Salt", "Pepper"],
      instructions: [
        "Sauté onions and garlic in olive oil",
        "Add chopped vegetables and cook until soft",
        "Season with herbs, salt, and pepper",
        "Simmer gently for 20 minutes and serve warm"
      ],
    },
    
    {
      id: 257,
      name: "Vegetable Au Gratin",
      cuisine: "Continental",
      time: 50,
      difficulty: "Medium",
      mood: ["tired", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Nut-Free"],
      image: "https://www.cucinabyelena.com/wp-content/uploads/2024/08/Vegetable-Au-Gratin-Recipe-Creamy-Baked-Vegetables-21-scaled.jpg",
      calories: 420,
      servings: 3,
      ingredients: ["Mixed vegetables", "Béchamel sauce", "Cheese", "Butter", "Breadcrumbs", "Salt", "Pepper"],
      instructions: [
        "Blanch vegetables and place in a baking dish",
        "Pour béchamel sauce over vegetables",
        "Top with cheese and breadcrumbs",
        "Bake at 180°C for 25 minutes until golden"
      ],
    },
    
    {
      id: 258,
      name: "Caesar Salad",
      cuisine: "Continental",
      time: 15,
      difficulty: "Easy",
      mood: ["energetic", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Low-Carb"],
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
      calories: 220,
      servings: 2,
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan", "Caesar dressing", "Olive oil", "Lemon juice"],
      instructions: [
        "Toss lettuce with Caesar dressing",
        "Add croutons and Parmesan",
        "Drizzle with olive oil and lemon juice before serving"
      ],
    },
    
    {
      id: 259,
      name: "Greek Salad",
      cuisine: "Continental",
      time: 15,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "international"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegan", "Low-Carb", "Low-Fat"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgaBBnpfRGFOQpgmSAit7b9sqiU29jFNQiA&s",
      calories: 200,
      servings: 2,
      ingredients: ["Tomatoes", "Cucumber", "Red onion", "Olives", "Feta cheese", "Olive oil", "Oregano", "Salt"],
      instructions: [
        "Chop vegetables and combine in a bowl",
        "Add olives and feta cheese",
        "Drizzle with olive oil and sprinkle oregano on top"
      ],
    },
    
    {
      id: 260,
      name: "Caprese Salad",
      cuisine: "Continental",
      time: 10,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegan", "Gluten-Free", "Low-Carb"],
      image: "https://cdn.momsdish.com/wp-content/uploads/2021/10/Arugula-Caprese-Salad-06.jpg",
      calories: 180,
      servings: 2,
      ingredients: ["Tomatoes", "Fresh mozzarella", "Basil leaves", "Olive oil", "Salt", "Pepper"],
      instructions: [
        "Arrange tomato and mozzarella slices alternately",
        "Top with basil leaves",
        "Drizzle olive oil and season with salt and pepper"
      ],
    },
    
    {
      id: 261,
      name: "French Onion Soup",
      cuisine: "Continental",
      time: 60,
      difficulty: "Medium",
      mood: ["tired", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Low-Fat"],
      image: "https://www.sweetteaandthyme.com/wp-content/uploads/2024/02/Bistro-French-Onion-Soup-bread-lift.jpg",
      calories: 320,
      servings: 3,
      ingredients: ["Onions", "Butter", "Beef or vegetable broth", "White wine", "Baguette slices", "Cheese", "Salt", "Pepper"],
      instructions: [
        "Caramelize onions in butter until golden brown",
        "Add wine and broth, then simmer for 30 minutes",
        "Pour soup into bowls, top with toasted baguette and cheese",
        "Broil until cheese is melted and serve hot"
      ],
    },
    
    {
      id: 262,
      name: "Minestrone Soup",
      cuisine: "Continental",
      time: 45,
      difficulty: "Easy",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegan", "Low-Fat", "High-Protein"],
      image: "https://insanelygoodrecipes.com/wp-content/uploads/2024/09/minestrone-soup.jpg",
      calories: 280,
      servings: 4,
      ingredients: ["Mixed vegetables", "Tomatoes", "Beans", "Pasta", "Garlic", "Onion", "Vegetable broth", "Olive oil"],
      instructions: [
        "Sauté onion and garlic in olive oil",
        "Add chopped vegetables, tomatoes, and broth",
        "Simmer for 20 minutes, then add pasta and beans",
        "Cook until pasta is tender and serve hot"
      ],
    },
    
    {
      id: 263,
      name: "Cream of Mushroom Soup",
      cuisine: "Continental",
      time: 35,
      difficulty: "Easy",
      mood: ["tired", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Low-Fat", "Gluten-Free"],
      image: "https://savingdollarsandsense.com/wp-content/uploads/2024/01/mushroom-soup-recipe.jpg",
      calories: 260,
      servings: 3,
      ingredients: ["Mushrooms", "Butter", "Garlic", "Onion", "Cream", "Vegetable broth", "Salt", "Pepper"],
      instructions: [
        "Sauté mushrooms, garlic, and onions in butter",
        "Add broth and simmer for 15 minutes",
        "Blend until smooth, then stir in cream",
        "Simmer briefly and serve warm"
      ],
    },
    {
      id: 264,
      name: "Gazpacho",
      cuisine: "Continental",
      time: 20,
      difficulty: "Easy",
      mood: ["calm", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Low-Sodium", "Gluten-Free"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFlKV5SqxlVy0y6BK5fHeWYF1RJ1gnkDndw&s",
      calories: 150,
      servings: 2,
      ingredients: ["Tomatoes", "Cucumbers", "Bell peppers", "Garlic", "Onion", "Olive oil", "Vinegar", "Salt", "Pepper"],
      instructions: [
        "Chop all vegetables roughly",
        "Blend tomatoes, cucumbers, peppers, garlic, and onion until smooth",
        "Add olive oil, vinegar, salt, and pepper to taste",
        "Chill for at least 1 hour before serving"
      ],
    },
    
    {
      id: 265,
      name: "New England Clam Chowder",
      cuisine: "Continental",
      time: 45,
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkc5anDbx4gRgKjNu-6iBenFM8M4Ooyw43w&s",
      calories: 420,
      servings: 4,
      ingredients: ["Clams", "Potatoes", "Onion", "Celery", "Butter", "Cream", "Flour", "Salt", "Pepper"],
      instructions: [
        "Sauté onions and celery in butter until soft",
        "Add flour to make a roux",
        "Stir in clam juice and diced potatoes",
        "Simmer until potatoes are tender",
        "Add clams and cream, cook gently until heated through"
      ],
    },
    
    {
      id: 266,
      name: "Bruschetta",
      cuisine: "Continental",
      time: 15,
      difficulty: "Easy",
      mood: ["energetic", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Low-Fat", "Vegetarian"],
      image: "https://miarecipes.com/wp-content/uploads/2024/07/BURRATA-BRUSCHETTA.jpg",
      calories: 180,
      servings: 2,
      ingredients: ["Baguette", "Tomatoes", "Garlic", "Basil", "Olive oil", "Salt", "Pepper"],
      instructions: [
        "Toast baguette slices until crisp",
        "Mix chopped tomatoes, garlic, basil, olive oil, salt, and pepper",
        "Spoon tomato mixture over bread and serve immediately"
      ],
    },
    
    {
      id: 267,
      name: "Garlic Bread",
      cuisine: "Continental",
      time: 20,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWG77FH4t87YueRrOlmKO2COndWPk62gZAqA&s",
      calories: 250,
      servings: 3,
      ingredients: ["Baguette", "Butter", "Garlic", "Parsley", "Salt"],
      instructions: [
        "Mix softened butter with minced garlic and parsley",
        "Spread evenly on sliced bread",
        "Bake at 180°C for 10–12 minutes until golden"
      ],
    },
    
    {
      id: 268,
      name: "Mashed Potatoes",
      cuisine: "Continental",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Gluten-Free"],
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Sous_vide_mashed_potatoes.jpg",
      calories: 220,
      servings: 3,
      ingredients: ["Potatoes", "Butter", "Milk", "Salt", "Pepper"],
      instructions: [
        "Boil potatoes until soft",
        "Mash with butter and warm milk",
        "Season with salt and pepper to taste"
      ],
    },
    
    {
      id: 269,
      name: "French Fries",
      cuisine: "Continental",
      time: 25,
      difficulty: "Easy",
      mood: ["energetic", "light", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Gluten-Free"],
      image: "https://www.thegraciouspantry.com/wp-content/uploads/2024/09/french-fries-.jpg",
      calories: 365,
      servings: 2,
      ingredients: ["Potatoes", "Oil", "Salt"],
      instructions: [
        "Cut potatoes into strips",
        "Deep fry in hot oil until golden and crispy",
        "Drain and season with salt"
      ],
    },
    
    {
      id: 270,
      name: "Macaroni and Cheese",
      cuisine: "Continental",
      time: 30,
      difficulty: "Medium",
      mood: ["calm", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://www.allrecipes.com/thmb/MkbGgNcGadAWdYw0aRZbo8WapHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/237311-slow-cooker-mac-and-cheese-DDMFS-4x3-9b4a15f2c3344c1da22b034bc3b35683.jpg",
      calories: 450,
      servings: 3,
      ingredients: ["Macaroni", "Cheddar cheese", "Milk", "Butter", "Flour", "Salt"],
      instructions: [
        "Cook macaroni and drain",
        "Make cheese sauce by combining butter, flour, milk, and cheese",
        "Mix pasta with sauce and bake until golden"
      ],
    },
    
    {
      id: 271,
      name: "Eggs Benedict",
      cuisine: "Continental",
      time: 30,
      difficulty: "Hard",
      mood: ["energetic", "light", "moderate", "familiar"],
      veg: false,
      spiciness: "Mild",
      healthCondition: ["High-Protein"],
      image: "https://assets.surlatable.com/m/4b64e7fd6d40e347/72_dpi_webp-3436474_01G_0318_16.jpg",
      calories: 400,
      servings: 2,
      ingredients: ["English muffins", "Poached eggs", "Ham", "Butter", "Egg yolks", "Lemon juice"],
      instructions: [
        "Poach eggs gently in simmering water",
        "Toast muffins and top with ham",
        "Whisk egg yolks, lemon juice, and butter to make hollandaise sauce",
        "Assemble and serve immediately"
      ],
    },
    
    {
      id: 272,
      name: "Pancakes with Maple Syrup",
      cuisine: "Continental",
      time: 25,
      difficulty: "Easy",
      mood: ["calm", "comfort", "quick", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJyd35pLbu2BB6HXKhSCHz1CiInpIVu8jMg&s",
      calories: 320,
      servings: 2,
      ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar", "Maple syrup"],
      instructions: [
        "Whisk flour, eggs, milk, and sugar into a smooth batter",
        "Cook on a greased pan until golden on both sides",
        "Serve with butter and maple syrup"
      ],
    },
    
    {
      id: 273,
      name: "Waffles with Berries",
      cuisine: "Continental",
      time: 30,
      difficulty: "Medium",
      mood: ["energetic", "comfort", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://freshberries.com.au/wp-content/uploads/2021/04/waffles-1.png",
      calories: 370,
      servings: 2,
      ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar", "Berries"],
      instructions: [
        "Prepare waffle batter and pour into preheated waffle iron",
        "Cook until crisp and golden",
        "Serve with fresh berries and syrup"
      ],
    },
    
    {
      id: 274,
      name: "Tiramisu",
      cuisine: "Continental",
      time: 45,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkhk7WcI0AOhPoDhFauI7S4741kg1sAUNSw&s",
      calories: 480,
      servings: 4,
      ingredients: ["Ladyfingers", "Mascarpone cheese", "Coffee", "Cocoa powder", "Eggs", "Sugar"],
      instructions: [
        "Dip ladyfingers in coffee and layer in dish",
        "Mix mascarpone with sugar and eggs until smooth",
        "Layer cream over biscuits and dust with cocoa",
        "Chill for 4 hours before serving"
      ],
    },
    
    {
      id: 275,
      name: "Crème Brûlée",
      cuisine: "Continental",
      time: 60,
      difficulty: "Hard",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://www.nestleprofessional.in/sites/default/files/2022-07/Vanilla-Creme-Brulee-420x330.jpg",
      calories: 420,
      servings: 3,
      ingredients: ["Cream", "Egg yolks", "Sugar", "Vanilla extract"],
      instructions: [
        "Whisk egg yolks and sugar until pale",
        "Heat cream and vanilla, then combine with yolks",
        "Bake in a water bath until set",
        "Chill and caramelize sugar on top before serving"
      ],
    },
    
    {
      id: 276,
      name: "Chocolate Mousse",
      cuisine: "Continental",
      time: 40,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://bakerbynature.com/wp-content/uploads/2023/08/Easy-Chocolate-Mousse-Baker-by-Nature-12636.jpg",
      calories: 390,
      servings: 3,
      ingredients: ["Dark chocolate", "Eggs", "Sugar", "Cream", "Butter"],
      instructions: [
        "Melt chocolate and butter together",
        "Whisk egg yolks with sugar and fold into chocolate",
        "Beat cream until soft peaks form and fold in gently",
        "Chill for 2 hours before serving"
      ],
    },
    {
      id: 277,
      name: "Apple Pie",
      cuisine: "Continental",
      time: 75,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://victoriajunction.in/wp-content/uploads/2023/08/apple-pie-2.jpg",
      calories: 450,
      servings: 6,
      ingredients: ["Apples", "Flour", "Butter", "Sugar", "Cinnamon", "Salt", "Egg"],
      instructions: [
        "Prepare pie dough using flour, butter, and a pinch of salt",
        "Slice apples and mix with sugar and cinnamon",
        "Roll out dough, fill with apple mixture, and cover with top crust",
        "Brush with egg wash and bake at 180°C for 45–50 minutes until golden"
      ],
    },
    
    {
      id: 278,
      name: "Cheesecake",
      cuisine: "Continental",
      time: 90,
      difficulty: "Medium",
      mood: ["calm", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/No-bake-raspberry-cheesecake-cc1ee62.jpg?quality=90&resize=708,643",
      calories: 480,
      servings: 8,
      ingredients: ["Cream cheese", "Sugar", "Eggs", "Butter", "Graham crackers", "Vanilla extract"],
      instructions: [
        "Crush graham crackers and mix with melted butter to form crust",
        "Beat cream cheese, sugar, eggs, and vanilla until smooth",
        "Pour mixture over crust and bake at 160°C for 45–60 minutes",
        "Cool and refrigerate before serving"
      ],
    },
    
    {
      id: 279,
      name: "Black Forest Cake",
      cuisine: "Continental",
      time: 90,
      difficulty: "Hard",
      mood: ["energetic", "comfort", "leisurely", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian"],
      image: "https://www.punebakers.com/cdn/shop/products/black101.jpg?v=1617438460",
      calories: 520,
      servings: 8,
      ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter", "Whipped cream", "Cherries", "Chocolate shavings"],
      instructions: [
        "Bake chocolate sponge layers and let cool",
        "Whip cream and prepare cherry filling",
        "Layer sponge with whipped cream and cherries",
        "Frost top and sides with cream and decorate with chocolate shavings and cherries"
      ],
    },
    
    {
      id: 280,
      name: "Potato Au Gratin",
      cuisine: "Continental",
      time: 50,
      difficulty: "Medium",
      mood: ["calm", "hearty", "moderate", "familiar"],
      veg: true,
      spiciness: "Mild",
      healthCondition: ["Vegetarian", "Gluten-Free"],
      image: "https://hips.hearstapps.com/hmg-prod/images/perfect-potatoes-au-grain-recipe-654ab7166a308.jpeg?crop=0.9981290926099158xw:1xh;center,top&resize=640:*",
      calories: 360,
      servings: 4,
      ingredients: ["Potatoes", "Cream", "Cheese", "Butter", "Garlic", "Salt", "Pepper"],
      instructions: [
        "Thinly slice potatoes and layer in a greased baking dish",
        "Mix cream, garlic, salt, and pepper and pour over potatoes",
        "Top with grated cheese and bake at 180°C for 40 minutes until golden and bubbly"
      ],
    }
  ],

  // Comprehensive Food Database for Nutrition Search
  foodDatabase: [
   // Generic Foods
    // veggies
    {name: "Spinach", brand: "Generic", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, serving: "100g"},
{name: "Kale", brand: "Generic", calories: 49, protein: 4.3, carbs: 9, fat: 0.9, serving: "100g"},
{name: "Lettuce", brand: "Generic", calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, serving: "100g"},
{name: "Cabbage", brand: "Generic", calories: 25, protein: 1.3, carbs: 5.8, fat: 0.1, serving: "100g"},
{name: "Broccoli", brand: "Generic", calories: 55, protein: 3.7, carbs: 11.1, fat: 0.6, serving: "100g"},
{name: "Cauliflower", brand: "Generic", calories: 25, protein: 1.9, carbs: 5, fat: 0.3, serving: "100g"},
{name: "Brussels Sprouts", brand: "Generic", calories: 43, protein: 3.4, carbs: 9, fat: 0.3, serving: "100g"},
{name: "Arugula", brand: "Generic", calories: 25, protein: 2.6, carbs: 3.7, fat: 0.7, serving: "100g"},
{name: "Watercress", brand: "Generic", calories: 11, protein: 2.3, carbs: 1.3, fat: 0.1, serving: "100g"},
{name: "Swiss Chard", brand: "Generic", calories: 19, protein: 1.8, carbs: 3.7, fat: 0.2, serving: "100g"},
{name: "Beetroot", brand: "Generic", calories: 43, protein: 1.6, carbs: 10, fat: 0.2, serving: "100g"},
{name: "Carrot", brand: "Generic", calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, serving: "100g"},
{name: "Parsnip", brand: "Generic", calories: 75, protein: 1.2, carbs: 18, fat: 0.3, serving: "100g"},
{name: "Turnip", brand: "Generic", calories: 28, protein: 0.9, carbs: 6.4, fat: 0.1, serving: "100g"},
{name: "Radish", brand: "Generic", calories: 16, protein: 0.7, carbs: 3.4, fat: 0.1, serving: "100g"},
{name: "Potato", brand: "Generic", calories: 77, protein: 2, carbs: 17, fat: 0.1, serving: "100g"},
{name: "Sweet Potato", brand: "Generic", calories: 86, protein: 1.6, carbs: 20, fat: 0.1, serving: "100g"},
{name: "Yam", brand: "Generic", calories: 118, protein: 1.5, carbs: 27.9, fat: 0.2, serving: "100g"},
{name: "Eggplant", brand: "Generic", calories: 25, protein: 0.8, carbs: 6, fat: 0.2, serving: "100g"},
{name: "Zucchini", brand: "Generic", calories: 17, protein: 1.2, carbs: 3.1, fat: 0.3, serving: "100g"},
{name: "Yellow Squash", brand: "Generic", calories: 16, protein: 1.2, carbs: 3.4, fat: 0.2, serving: "100g"},
{name: "Cucumber", brand: "Generic", calories: 16, protein: 0.7, carbs: 3.6, fat: 0.1, serving: "100g"},
{name: "Tomato", brand: "Generic", calories: 22, protein: 1.1, carbs: 4.8, fat: 0.2, serving: "100g"},
{name: "Bell Pepper (Red)", brand: "Generic", calories: 31, protein: 1, carbs: 6, fat: 0.3, serving: "100g"},
{name: "Bell Pepper (Green)", brand: "Generic", calories: 20, protein: 0.9, carbs: 4.6, fat: 0.2, serving: "100g"},
{name: "Chili Pepper", brand: "Generic", calories: 40, protein: 1.9, carbs: 9, fat: 0.4, serving: "100g"},
{name: "Okra", brand: "Generic", calories: 33, protein: 2, carbs: 7, fat: 0.2, serving: "100g"},
{name: "Pumpkin", brand: "Generic", calories: 26, protein: 1, carbs: 6, fat: 0.1, serving: "100g"},
{name: "Butternut Squash", brand: "Generic", calories: 45, protein: 1, carbs: 12, fat: 0.1, serving: "100g"},
{name: "Spaghetti Squash", brand: "Generic", calories: 31, protein: 0.6, carbs: 7, fat: 0.3, serving: "100g"},
{name: "Bok Choy", brand: "Generic", calories: 13, protein: 1.5, carbs: 2.2, fat: 0.2, serving: "100g"},
{name: "Napa Cabbage", brand: "Generic", calories: 16, protein: 1, carbs: 3.2, fat: 0.2, serving: "100g"},
{name: "Collard Greens", brand: "Generic", calories: 32, protein: 3, carbs: 7, fat: 0.6, serving: "100g"},
{name: "Mustard Greens", brand: "Generic", calories: 27, protein: 2.7, carbs: 4.7, fat: 0.4, serving: "100g"},
{name: "Endive", brand: "Generic", calories: 17, protein: 1.3, carbs: 3.4, fat: 0.2, serving: "100g"},
{name: "Radicchio", brand: "Generic", calories: 23, protein: 1.4, carbs: 4.5, fat: 0.3, serving: "100g"},
{name: "Chard (Rainbow)", brand: "Generic", calories: 19, protein: 1.8, carbs: 3.7, fat: 0.2, serving: "100g"},
{name: "Dandelion Greens", brand: "Generic", calories: 45, protein: 2.7, carbs: 9.2, fat: 0.7, serving: "100g"},
{name: "Kohlrabi", brand: "Generic", calories: 27, protein: 1.7, carbs: 6.2, fat: 0.1, serving: "100g"},
{name: "Rutabaga", brand: "Generic", calories: 38, protein: 1.2, carbs: 9, fat: 0.2, serving: "100g"},
{name: "Water Chestnut", brand: "Generic", calories: 97, protein: 1.4, carbs: 24, fat: 0.1, serving: "100g"},
{name: "Lotus Root", brand: "Generic", calories: 74, protein: 2.6, carbs: 17, fat: 0.1, serving: "100g"},
{name: "Taro Root", brand: "Generic", calories: 142, protein: 0.5, carbs: 34, fat: 0.1, serving: "100g"},
{name: "Jicama", brand: "Generic", calories: 38, protein: 0.7, carbs: 9, fat: 0.1, serving: "100g"},
{name: "Celery Root (Celeriac)", brand: "Generic", calories: 42, protein: 1.5, carbs: 9.2, fat: 0.3, serving: "100g"},
{name: "Fennel Bulb", brand: "Generic", calories: 31, protein: 1, carbs: 7, fat: 0.2, serving: "100g"},
{name: "Seaweed (Nori)", brand: "Generic", calories: 35, protein: 5.8, carbs: 5.1, fat: 0.3, serving: "100g"},
{name: "Alfalfa Sprouts", brand: "Generic", calories: 23, protein: 4, carbs: 2.1, fat: 0.7, serving: "100g"},
{name: "Bean Sprouts", brand: "Generic", calories: 30, protein: 3, carbs: 6, fat: 0.2, serving: "100g"},
{name: "Mung Bean Sprouts", brand: "Generic", calories: 30, protein: 3, carbs: 6, fat: 0.2, serving: "100g"},
{name: "Snow Peas", brand: "Generic", calories: 42, protein: 2.8, carbs: 7.5, fat: 0.2, serving: "100g"},
{name: "Sugar Snap Peas", brand: "Generic", calories: 42, protein: 2.8, carbs: 7.5, fat: 0.2, serving: "100g"},
{name: "Green Beans", brand: "Generic", calories: 31, protein: 1.8, carbs: 7, fat: 0.2, serving: "100g"},
{name: "Soybeans (Edamame)", brand: "Generic", calories: 121, protein: 11, carbs: 9, fat: 5, serving: "100g"},
{name: "Peas", brand: "Generic", calories: 81, protein: 5.4, carbs: 14, fat: 0.4, serving: "100g"},
{name: "Chayote", brand: "Generic", calories: 19, protein: 0.8, carbs: 4.5, fat: 0.1, serving: "100g"},
{name: "Bitter Gourd (Karela)", brand: "Generic", calories: 34, protein: 1, carbs: 8, fat: 0.2, serving: "100g"},
{name: "Pointed Gourd (Parwal)", brand: "Generic", calories: 18, protein: 1.2, carbs: 4, fat: 0.1, serving: "100g"},
{name: "Tinda (Indian Round Gourd)", brand: "Generic", calories: 24, protein: 1, carbs: 5, fat: 0.1, serving: "100g"},
{name: "Bottle Gourd (Lauki)", brand: "Generic", calories: 14, protein: 0.6, carbs: 3.4, fat: 0.1, serving: "100g"},
{name: "Onion", brand: "Generic", calories: 40, protein: 1.1, carbs: 9, fat: 0.1, serving: "100g"},
{name: "Garlic", brand: "Generic", calories: 149, protein: 6.4, carbs: 33, fat: 0.5, serving: "100g"},
{name: "Leek", brand: "Generic", calories: 61, protein: 1.5, carbs: 14, fat: 0.3, serving: "100g"},
{name: "Shallot", brand: "Generic", calories: 72, protein: 2.5, carbs: 16, fat: 0.1, serving: "100g"},
{name: "Scallion (Green Onion)", brand: "Generic", calories: 32, protein: 1.8, carbs: 7, fat: 0.2, serving: "100g"},
{name: "Mushroom (White Button)", brand: "Generic", calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, serving: "100g"},
{name: "Mushroom (Portobello)", brand: "Generic", calories: 22, protein: 2.5, carbs: 3.9, fat: 0.3, serving: "100g"},
{name: "Mushroom (Shiitake)", brand: "Generic", calories: 34, protein: 2.2, carbs: 6.8, fat: 0.5, serving: "100g"},
{name: "Mushroom (Oyster)", brand: "Generic", calories: 33, protein: 3.3, carbs: 6.1, fat: 0.4, serving: "100g"},
{name: "Mushroom (Enoki)", brand: "Generic", calories: 37, protein: 2.7, carbs: 7.8, fat: 0.3, serving: "100g"},
{name: "Spinach (Baby)", brand: "Generic", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, serving: "100g"},
{name: "Arugula (Rocket)", brand: "Generic", calories: 25, protein: 2.6, carbs: 3.7, fat: 0.7, serving: "100g"},
{name: "Coriander Leaves (Cilantro)", brand: "Generic", calories: 23, protein: 2.1, carbs: 3.7, fat: 0.5, serving: "100g"},
{name: "Parsley", brand: "Generic", calories: 36, protein: 3, carbs: 6, fat: 0.8, serving: "100g"},
{name: "Basil", brand: "Generic", calories: 23, protein: 3.2, carbs: 2.7, fat: 0.6, serving: "100g"},
{name: "Mint", brand: "Generic", calories: 44, protein: 3.8, carbs: 8, fat: 0.7, serving: "100g"},
{name: "Cabbage (Savoy)", brand: "Generic", calories: 27, protein: 1.3, carbs: 5.5, fat: 0.1, serving: "100g"},
{name: "Cabbage (Red)", brand: "Generic", calories: 31, protein: 1.4, carbs: 7.4, fat: 0.2, serving: "100g"},
{name: "Celery", brand: "Generic", calories: 16, protein: 0.7, carbs: 3, fat: 0.2, serving: "100g"},
{name: "Fennel", brand: "Generic", calories: 31, protein: 1, carbs: 7, fat: 0.2, serving: "100g"},
{name: "Asparagus", brand: "Generic", calories: 20, protein: 2.2, carbs: 3.7, fat: 0.2, serving: "100g"},
{name: "Artichoke", brand: "Generic", calories: 47, protein: 3.3, carbs: 10, fat: 0.2, serving: "100g"},
{name: "Snap Peas", brand: "Generic", calories: 42, protein: 2.8, carbs: 7.5, fat: 0.2, serving: "100g"},
{name: "Snow Peas", brand: "Generic", calories: 42, protein: 2.8, carbs: 7.5, fat: 0.2, serving: "100g"},
{name: "Chili (Capsicum)", brand: "Generic", calories: 40, protein: 1.9, carbs: 9, fat: 0.4, serving: "100g"},
{name: "Ginger Root", brand: "Generic", calories: 80, protein: 1.8, carbs: 18, fat: 0.8, serving: "100g"},
{name: "Turmeric Root", brand: "Generic", calories: 312, protein: 9.7, carbs: 67, fat: 3.3, serving: "100g"},
{name: "Wasabi", brand: "Generic", calories: 109, protein: 4.8, carbs: 23, fat: 0.6, serving: "100g"},
{name: "Horseradish", brand: "Generic", calories: 48, protein: 1.2, carbs: 11.3, fat: 0.2, serving: "100g"},
{name: "Daikon (White Radish)", brand: "Generic", calories: 18, protein: 0.6, carbs: 4.1, fat: 0.1, serving: "100g"},
{name: "Eggplant (Globe)", brand: "Generic", calories: 25, protein: 0.8, carbs: 6, fat: 0.2, serving: "100g"},
{name: "Eggplant (Japanese)", brand: "Generic", calories: 20, protein: 1, carbs: 4.8, fat: 0.1, serving: "100g"},
{name: "Eggplant (Italian)", brand: "Generic", calories: 24, protein: 1, carbs: 5.7, fat: 0.2, serving: "100g"},
{name: "Luffa (Ridge Gourd)", brand: "Generic", calories: 20, protein: 1, carbs: 4.5, fat: 0.1, serving: "100g"},
{name: "Bitter Melon (Bitter Gourd)", brand: "Generic", calories: 34, protein: 1, carbs: 8, fat: 0.2, serving: "100g"},
{name: "Pointed Gourd (Parwal)", brand: "Generic", calories: 18, protein: 1.2, carbs: 4, fat: 0.1, serving: "100g"},
{name: "Bottle Gourd (Lauki)", brand: "Generic", calories: 14, protein: 0.6, carbs: 3.4, fat: 0.1, serving: "100g"},
{name: "Tinda (Indian Round Gourd)", brand: "Generic", calories: 24, protein: 1, carbs: 5, fat: 0.1, serving: "100g"},
{name: "Cassava (Yuca)", brand: "Generic", calories: 160, protein: 1.4, carbs: 38, fat: 0.3, serving: "100g"},
{name: "Taro Root", brand: "Generic", calories: 142, protein: 0.5, carbs: 34, fat: 0.1, serving: "100g"},
{name: "Yam", brand: "Generic", calories: 118, protein: 1.5, carbs: 27.9, fat: 0.2, serving: "100g"},
{name: "Celery Root (Celeriac)", brand: "Generic", calories: 42, protein: 1.5, carbs: 9.2, fat: 0.3, serving: "100g"},
{name: "Kohlrabi", brand: "Generic", calories: 27, protein: 1.7, carbs: 6.2, fat: 0.1, serving: "100g"},
{name: "Rutabaga", brand: "Generic", calories: 38, protein: 1.2, carbs: 9, fat: 0.2, serving: "100g"},
{name: "Chayote", brand: "Generic", calories: 19, protein: 0.8, carbs: 4.5, fat: 0.1, serving: "100g"},
{name: "Edamame (Green Soybeans)", brand: "Generic", calories: 121, protein: 11, carbs: 9, fat: 5, serving: "100g"},
{name: "Water Chestnut", brand: "Generic", calories: 97, protein: 1.4, carbs: 24, fat: 0.1, serving: "100g"},
{name: "Snow Peas", brand: "Generic", calories: 42, protein: 2.8, carbs: 7.5, fat: 0.2, serving: "100g"},
{name: "Sugar Snap Peas", brand: "Generic", calories: 42, protein: 2.8, carbs: 7.5, fat: 0.2, serving: "100g"},
{name: "Seaweed (Wakame)", brand: "Generic", calories: 45, protein: 3, carbs: 9, fat: 0.5, serving: "100g"},
{name: "Seaweed (Kombu)", brand: "Generic", calories: 43, protein: 1.7, carbs: 9.6, fat: 0.5, serving: "100g"},
{name: "Seaweed (Nori)", brand: "Generic", calories: 35, protein: 5.8, carbs: 5.1, fat: 0.3, serving: "100g"},
{name: "Mushroom (Cremini)", brand: "Generic", calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, serving: "100g"},
{name: "Mushroom (Morel)", brand: "Generic", calories: 31, protein: 3.1, carbs: 5.1, fat: 0.6, serving: "100g"},
{name: "Mushroom (Chanterelle)", brand: "Generic", calories: 38, protein: 1.5, carbs: 7.3, fat: 0.5, serving: "100g"},
{name: "Mushroom (Porcini)", brand: "Generic", calories: 30, protein: 3.7, carbs: 4, fat: 0.5, serving: "100g"},
{name: "Mushroom (Maitake)", brand: "Generic", calories: 31, protein: 1.9, carbs: 6.9, fat: 0.2, serving: "100g"},
{name: "Mushroom (King Oyster)", brand: "Generic", calories: 35, protein: 3.3, carbs: 6.1, fat: 0.4, serving: "100g"},
{name: "Mushroom (Shimeji)", brand: "Generic", calories: 37, protein: 2.7, carbs: 7.8, fat: 0.3, serving: "100g"},
{name: "Mushroom (Beech)", brand: "Generic", calories: 37, protein: 2.7, carbs: 7.8, fat: 0.3, serving: "100g"},
{name: "Mushroom (Oyster)", brand: "Generic", calories: 33, protein: 3.3, carbs: 6.1, fat: 0.4, serving: "100g"},
{name: "Amaranth Leaves (Chaulai)", brand: "Generic", calories: 23, protein: 2.5, carbs: 4, fat: 0.3, serving: "100g"},
{name: "Drumstick (Moringa)", brand: "Generic", calories: 64, protein: 9.4, carbs: 8.3, fat: 1.4, serving: "100g"},
{name: "Snake Gourd (Chichinda)", brand: "Generic", calories: 17, protein: 0.9, carbs: 3.3, fat: 0.2, serving: "100g"},
{name: "Ridge Gourd (Turai)", brand: "Generic", calories: 20, protein: 1, carbs: 4.5, fat: 0.1, serving: "100g"},
{name: "Tinda (Indian Round Gourd)", brand: "Generic", calories: 24, protein: 1, carbs: 5, fat: 0.1, serving: "100g"},
{name: "Indian Squash (Kakdi/Turai)", brand: "Generic", calories: 14, protein: 0.6, carbs: 3.4, fat: 0.1, serving: "100g"},
{name: "Ivy Gourd (Tindora)", brand: "Generic", calories: 47, protein: 1.9, carbs: 11, fat: 0.2, serving: "100g"},
{name: "Colocasia (Arbi/Taro)", brand: "Generic", calories: 142, protein: 0.5, carbs: 34, fat: 0.1, serving: "100g"},
{name: "Ash Gourd (Petha)", brand: "Generic", calories: 14, protein: 0.5, carbs: 3.3, fat: 0.2, serving: "100g"},
{name: "Bitter Gourd (Karela)", brand: "Generic", calories: 34, protein: 1, carbs: 8, fat: 0.2, serving: "100g"},
{name: "Pointed Gourd (Parwal)", brand: "Generic", calories: 18, protein: 1.2, carbs: 4, fat: 0.1, serving: "100g"},
{name: "Fenugreek Leaves (Methi)", brand: "Generic", calories: 49, protein: 4.4, carbs: 7, fat: 1.3, serving: "100g"},
{name: "Curry Leaves", brand: "Generic", calories: 108, protein: 6.8, carbs: 14, fat: 5.4, serving: "100g"},
{name: "Drumstick Pods", brand: "Generic", calories: 64, protein: 9.4, carbs: 8.3, fat: 1.4, serving: "100g"},
{name: "Tamarind Leaves", brand: "Generic", calories: 213, protein: 5.5, carbs: 57, fat: 1.1, serving: "100g"},
{name: "Kohlrabi (Knol-Khol)", brand: "Generic", calories: 27, protein: 1.7, carbs: 6.2, fat: 0.1, serving: "100g"},
{name: "Amaranth (Red/Green)", brand: "Generic", calories: 23, protein: 2.5, carbs: 4, fat: 0.3, serving: "100g"},
{name: "Palak (Spinach, Indian)", brand: "Generic", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, serving: "100g"},
{name: "Coriander Leaves (Dhania)", brand: "Generic", calories: 23, protein: 2.1, carbs: 3.7, fat: 0.5, serving: "100g"},
{name: "Drumstick Leaves (Sahjan Patta)", brand: "Generic", calories: 64, protein: 9.4, carbs: 8.3, fat: 1.4, serving: "100g"},

//fruits
{name: "Apple", brand: "Generic", calories: 52, protein: 0.3, carbs: 14, fat: 0.2, serving: "100g"},
{name: "Banana", brand: "Generic", calories: 89, protein: 1.1, carbs: 23, fat: 0.3, serving: "100g"},
{name: "Orange", brand: "Generic", calories: 47, protein: 0.9, carbs: 12, fat: 0.1, serving: "100g"},
{name: "Strawberry", brand: "Generic", calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, serving: "100g"},
{name: "Blueberry", brand: "Generic", calories: 57, protein: 0.7, carbs: 14, fat: 0.3, serving: "100g"},
{name: "Raspberry", brand: "Generic", calories: 52, protein: 1.2, carbs: 12, fat: 0.7, serving: "100g"},
{name: "Blackberry", brand: "Generic", calories: 43, protein: 1.4, carbs: 10, fat: 0.5, serving: "100g"},
{name: "Pineapple", brand: "Generic", calories: 50, protein: 0.5, carbs: 13, fat: 0.1, serving: "100g"},
{name: "Mango", brand: "Generic", calories: 60, protein: 0.8, carbs: 15, fat: 0.4, serving: "100g"},
{name: "Papaya", brand: "Generic", calories: 43, protein: 0.5, carbs: 11, fat: 0.3, serving: "100g"},
{name: "Kiwi", brand: "Generic", calories: 61, protein: 1.1, carbs: 15, fat: 0.5, serving: "100g"},
{name: "Grapes (Red/Green)", brand: "Generic", calories: 69, protein: 0.7, carbs: 18, fat: 0.2, serving: "100g"},
{name: "Watermelon", brand: "Generic", calories: 30, protein: 0.6, carbs: 8, fat: 0.2, serving: "100g"},
{name: "Cantaloupe", brand: "Generic", calories: 34, protein: 0.8, carbs: 8.2, fat: 0.2, serving: "100g"},
{name: "Honeydew", brand: "Generic", calories: 36, protein: 0.5, carbs: 9, fat: 0.1, serving: "100g"},
{name: "Cherry", brand: "Generic", calories: 50, protein: 1, carbs: 12, fat: 0.3, serving: "100g"},
{name: "Peach", brand: "Generic", calories: 39, protein: 0.9, carbs: 10, fat: 0.3, serving: "100g"},
{name: "Plum", brand: "Generic", calories: 46, protein: 0.7, carbs: 11, fat: 0.3, serving: "100g"},
{name: "Apricot", brand: "Generic", calories: 48, protein: 1.4, carbs: 11, fat: 0.4, serving: "100g"},
{name: "Fig", brand: "Generic", calories: 74, protein: 0.8, carbs: 19, fat: 0.3, serving: "100g"},
{name: "Pomegranate", brand: "Generic", calories: 83, protein: 1.7, carbs: 19, fat: 1.2, serving: "100g"},
{name: "Guava", brand: "Generic", calories: 68, protein: 2.6, carbs: 14, fat: 1, serving: "100g"},
{name: "Lychee", brand: "Generic", calories: 66, protein: 0.8, carbs: 17, fat: 0.4, serving: "100g"},
{name: "Passion Fruit", brand: "Generic", calories: 97, protein: 2.2, carbs: 23, fat: 0.4, serving: "100g"},
{name: "Dragon Fruit (Pitaya)", brand: "Generic", calories: 50, protein: 1.1, carbs: 11, fat: 0.1, serving: "100g"},
{name: "Coconut (Raw)", brand: "Generic", calories: 354, protein: 3.3, carbs: 15, fat: 33, serving: "100g"},
{name: "Avocado", brand: "Generic", calories: 160, protein: 2, carbs: 9, fat: 15, serving: "100g"},
{name: "Cranberry", brand: "Generic", calories: 46, protein: 0.4, carbs: 12, fat: 0.1, serving: "100g"},
{name: "Mulberry", brand: "Generic", calories: 43, protein: 1.4, carbs: 10, fat: 0.4, serving: "100g"},
{name: "Jackfruit", brand: "Generic", calories: 95, protein: 1.7, carbs: 23, fat: 0.6, serving: "100g"},
{name: "Durian", brand: "Generic", calories: 147, protein: 1.5, carbs: 27, fat: 5, serving: "100g"},
{name: "Mango (Alphonso)", brand: "Generic", calories: 60, protein: 0.8, carbs: 15, fat: 0.4, serving: "100g"},
{name: "Mango (Kesar)", brand: "Generic", calories: 60, protein: 0.8, carbs: 15, fat: 0.4, serving: "100g"},
{name: "Mango (Dasheri)", brand: "Generic", calories: 60, protein: 0.8, carbs: 15, fat: 0.4, serving: "100g"},
{name: "Guava", brand: "Generic", calories: 68, protein: 2.6, carbs: 14, fat: 1, serving: "100g"},
{name: "Jamun (Indian Blackberry)", brand: "Generic", calories: 60, protein: 0.7, carbs: 14, fat: 0.2, serving: "100g"},
{name: "Sapota (Chikoo)", brand: "Generic", calories: 83, protein: 0.4, carbs: 19, fat: 1.1, serving: "100g"},
{name: "Custard Apple (Sitaphal)", brand: "Generic", calories: 94, protein: 1.6, carbs: 24, fat: 0.3, serving: "100g"},
{name: "Indian Gooseberry (Amla)", brand: "Generic", calories: 44, protein: 0.9, carbs: 10, fat: 0.6, serving: "100g"},
{name: "Wood Apple (Bael)", brand: "Generic", calories: 137, protein: 1.8, carbs: 34, fat: 0.3, serving: "100g"},
{name: "Pineapple (Indian)", brand: "Generic", calories: 50, protein: 0.5, carbs: 13, fat: 0.1, serving: "100g"},
{name: "Banana (Indian Cavendish)", brand: "Generic", calories: 89, protein: 1.1, carbs: 23, fat: 0.3, serving: "100g"},
{name: "Papaya (Indian)", brand: "Generic", calories: 43, protein: 0.5, carbs: 11, fat: 0.3, serving: "100g"},
{name: "Pomegranate (Indian)", brand: "Generic", calories: 83, protein: 1.7, carbs: 19, fat: 1.2, serving: "100g"},
{name: "Litchi (Indian)", brand: "Generic", calories: 66, protein: 0.8, carbs: 17, fat: 0.4, serving: "100g"},
{name: "Fig (Anjir)", brand: "Generic", calories: 74, protein: 0.8, carbs: 19, fat: 0.3, serving: "100g"},
{name: "Jackfruit (Kathal)", brand: "Generic", calories: 95, protein: 1.7, carbs: 23, fat: 0.6, serving: "100g"},
{name: "Sapodilla (Chikoo)", brand: "Generic", calories: 83, protein: 0.4, carbs: 19, fat: 1.1, serving: "100g"},
{name: "Starfruit (Kamrakh)", brand: "Generic", calories: 31, protein: 1, carbs: 7, fat: 0.3, serving: "100g"},
{name: "Jackfruit Seeds", brand: "Generic", calories: 182, protein: 7.5, carbs: 38, fat: 0.5, serving: "100g"},
{name: "Tamarind (Imli)", brand: "Generic", calories: 239, protein: 2.8, carbs: 62.5, fat: 0.6, serving: "100g"},
{name: "Mulberry (Shahtoot)", brand: "Generic", calories: 43, protein: 1.4, carbs: 10, fat: 0.4, serving: "100g"},
{name: "Ber (Indian Jujube)", brand: "Generic", calories: 79, protein: 1.2, carbs: 20, fat: 0.2, serving: "100g"},
{name: "Coconut (Tender Indian)", brand: "Generic", calories: 354, protein: 3.3, carbs: 15, fat: 33, serving: "100g"},
{name: "Wood Apple (Bel)", brand: "Generic", calories: 137, protein: 1.8, carbs: 34, fat: 0.3, serving: "100g"},
{name: "Indian Persimmon (Tendu)", brand: "Generic", calories: 81, protein: 0.6, carbs: 21, fat: 0.2, serving: "100g"},
{name: "Indian Peach (Aadu)", brand: "Generic", calories: 39, protein: 0.9, carbs: 10, fat: 0.3, serving: "100g"},
{name: "Indian Plum (Aloo Bukhara)", brand: "Generic", calories: 46, protein: 0.7, carbs: 11, fat: 0.3, serving: "100g"},
{name: "Indian Grapes (Thompson Seedless)", brand: "Generic", calories: 69, protein: 0.7, carbs: 18, fat: 0.2, serving: "100g"},
{name: "Indian Melon (Kharbuja)", brand: "Generic", calories: 34, protein: 0.8, carbs: 8.2, fat: 0.2, serving: "100g"},
{name: "Indian Watermelon (Tarbooj)", brand: "Generic", calories: 30, protein: 0.6, carbs: 8, fat: 0.2, serving: "100g"},
{name: "Indian Kiwi (Actinidia Chinensis Hybrid)", brand: "Generic", calories: 61, protein: 1.1, carbs: 15, fat: 0.5, serving: "100g"},

//beverages
{name: "Water", brand: "Generic", calories: 0, protein: 0, carbs: 0, fat: 0, serving: "100ml"},
{name: "Black Coffee", brand: "Generic", calories: 2, protein: 0.3, carbs: 0, fat: 0, serving: "100ml"},
{name: "Espresso", brand: "Generic", calories: 1, protein: 0.1, carbs: 0, fat: 0, serving: "30ml"},
{name: "Latte (Milk Coffee)", brand: "Generic", calories: 60, protein: 3, carbs: 6, fat: 2.5, serving: "100ml"},
{name: "Cappuccino", brand: "Generic", calories: 40, protein: 2, carbs: 4, fat: 1.5, serving: "100ml"},
{name: "Green Tea", brand: "Generic", calories: 1, protein: 0, carbs: 0, fat: 0, serving: "100ml"},
{name: "Black Tea", brand: "Generic", calories: 1, protein: 0, carbs: 0, fat: 0, serving: "100ml"},
{name: "Herbal Tea (Chamomile, Peppermint)", brand: "Generic", calories: 2, protein: 0, carbs: 0.5, fat: 0, serving: "100ml"},
{name: "Coca-Cola (Regular Soda)", brand: "Generic", calories: 42, protein: 0, carbs: 10.6, fat: 0, serving: "100ml"},
{name: "Pepsi (Regular Soda)", brand: "Generic", calories: 41, protein: 0, carbs: 10.6, fat: 0, serving: "100ml"},
{name: "Sprite (Lemon-Lime Soda)", brand: "Generic", calories: 38, protein: 0, carbs: 9.3, fat: 0, serving: "100ml"},
{name: "Orange Juice (Fresh)", brand: "Generic", calories: 45, protein: 0.7, carbs: 10, fat: 0.1, serving: "100ml"},
{name: "Apple Juice (Fresh)", brand: "Generic", calories: 46, protein: 0.1, carbs: 11, fat: 0.1, serving: "100ml"},
{name: "Grape Juice (Fresh)", brand: "Generic", calories: 69, protein: 0.4, carbs: 17, fat: 0.2, serving: "100ml"},
{name: "Tomato Juice", brand: "Generic", calories: 17, protein: 0.8, carbs: 3.9, fat: 0.2, serving: "100ml"},
{name: "Coconut Water", brand: "Generic", calories: 19, protein: 0.7, carbs: 3.7, fat: 0.2, serving: "100ml"},
{name: "Lemonade (Fresh)", brand: "Generic", calories: 30, protein: 0, carbs: 7.6, fat: 0, serving: "100ml"},
{name: "Iced Tea (Unsweetened)", brand: "Generic", calories: 1, protein: 0, carbs: 0, fat: 0, serving: "100ml"},
{name: "Matcha Tea", brand: "Generic", calories: 3, protein: 0.3, carbs: 0.4, fat: 0, serving: "100ml"},
{name: "Soy Milk (Unsweetened)", brand: "Generic", calories: 33, protein: 3, carbs: 0.6, fat: 1.6, serving: "100ml"},
{name: "Almond Milk (Unsweetened)", brand: "Generic", calories: 15, protein: 0.5, carbs: 0.3, fat: 1.2, serving: "100ml"},
{name: "Oat Milk (Unsweetened)", brand: "Generic", calories: 43, protein: 1, carbs: 7, fat: 0.5, serving: "100ml"},
{name: "Rice Milk (Unsweetened)", brand: "Generic", calories: 47, protein: 0.3, carbs: 10, fat: 0.1, serving: "100ml"},
{name: "Kombucha", brand: "Generic", calories: 32, protein: 0.1, carbs: 7, fat: 0, serving: "100ml"},
{name: "Energy Drink (Generic)", brand: "Generic", calories: 45, protein: 0, carbs: 11, fat: 0, serving: "100ml"},
{name: "Protein Shake (Whey, Water)", brand: "Generic", calories: 55, protein: 10, carbs: 1, fat: 0.5, serving: "100ml"},
{name: "Vegetable Juice (Mixed)", brand: "Generic", calories: 20, protein: 1, carbs: 4, fat: 0.2, serving: "100ml"},
{name: "Carrot Juice", brand: "Generic", calories: 41, protein: 0.9, carbs: 10, fat: 0.2, serving: "100ml"},
{name: "Beetroot Juice", brand: "Generic", calories: 43, protein: 1.6, carbs: 10, fat: 0.2, serving: "100ml"},
{name: "Masala Chai", brand: "Generic", calories: 42, protein: 0.5, carbs: 7.5, fat: 1.2, serving: "100ml"},
{name: "Ginger Tea (Adrak Chai)", brand: "Generic", calories: 38, protein: 0.4, carbs: 7, fat: 1, serving: "100ml"},
{name: "Tulsi Tea", brand: "Generic", calories: 2, protein: 0, carbs: 0.3, fat: 0, serving: "100ml"},
{name: "Lemon Tea", brand: "Generic", calories: 4, protein: 0, carbs: 1, fat: 0, serving: "100ml"},
{name: "Filter Coffee (South Indian Style)", brand: "Generic", calories: 60, protein: 1.2, carbs: 9, fat: 2, serving: "100ml"},
{name: "Cardamom Milk", brand: "Generic", calories: 88, protein: 3.3, carbs: 11, fat: 3.8, serving: "100ml"},
{name: "Badam Milk", brand: "Generic", calories: 110, protein: 3.5, carbs: 12, fat: 5.5, serving: "100ml"},
{name: "Thandai", brand: "Generic", calories: 120, protein: 3.2, carbs: 14, fat: 5.8, serving: "100ml"},
{name: "Lassi (Sweet)", brand: "Generic", calories: 130, protein: 3.5, carbs: 18, fat: 4, serving: "100ml"},
{name: "Lassi (Salted)", brand: "Generic", calories: 80, protein: 3, carbs: 6, fat: 4, serving: "100ml"},
{name: "Chaas (Buttermilk)", brand: "Generic", calories: 40, protein: 1.8, carbs: 4, fat: 1.5, serving: "100ml"},
{name: "Aam Panna", brand: "Generic", calories: 45, protein: 0.3, carbs: 11, fat: 0.1, serving: "100ml"},
{name: "Sugarcane Juice", brand: "Generic", calories: 73, protein: 0.2, carbs: 18, fat: 0, serving: "100ml"},
{name: "Nimbu Pani (Lemon Water)", brand: "Generic", calories: 25, protein: 0.1, carbs: 6, fat: 0, serving: "100ml"},
{name: "Jaljeera", brand: "Generic", calories: 20, protein: 0.3, carbs: 4.5, fat: 0.2, serving: "100ml"},
{name: "Coconut Water (Tender)", brand: "Generic", calories: 19, protein: 0.7, carbs: 3.7, fat: 0.2, serving: "100ml"},
{name: "Sattu Drink", brand: "Generic", calories: 56, protein: 3, carbs: 8, fat: 1, serving: "100ml"},
{name: "Kesar Doodh (Saffron Milk)", brand: "Generic", calories: 98, protein: 3.4, carbs: 12, fat: 4, serving: "100ml"},
{name: "Rose Milk", brand: "Generic", calories: 90, protein: 3, carbs: 12, fat: 3, serving: "100ml"},
{name: "Sol Kadhi", brand: "Generic", calories: 45, protein: 1, carbs: 3.5, fat: 3, serving: "100ml"},
{name: "Bel Sharbat (Wood Apple Drink)", brand: "Generic", calories: 70, protein: 0.6, carbs: 17, fat: 0.2, serving: "100ml"},
{name: "Kokum Sherbet", brand: "Generic", calories: 60, protein: 0.2, carbs: 15, fat: 0, serving: "100ml"},
{name: "Tender Palm Juice (Ice Apple Juice)", brand: "Generic", calories: 43, protein: 0.5, carbs: 10, fat: 0.1, serving: "100ml"},
{name: "Sugar Palm Juice (Toddy, Non-Alcoholic)", brand: "Generic", calories: 65, protein: 0.3, carbs: 15, fat: 0, serving: "100ml"},
{name: "Bael Juice (Aegle Marmelos)", brand: "Generic", calories: 90, protein: 1, carbs: 22, fat: 0.3, serving: "100ml"},
{name: "Ginger Lemon Honey Drink", brand: "Generic", calories: 35, protein: 0.2, carbs: 9, fat: 0, serving: "100ml"},
{name: "Carrot Juice (Indian)", brand: "Generic", calories: 41, protein: 0.9, carbs: 10, fat: 0.2, serving: "100ml"},
{name: "Pineapple Juice (Fresh)", brand: "Generic", calories: 50, protein: 0.4, carbs: 13, fat: 0.1, serving: "100ml"},
{name: "Watermelon Juice (Fresh)", brand: "Generic", calories: 30, protein: 0.5, carbs: 8, fat: 0.1, serving: "100ml"},
{name: "Mint Lemonade (Pudina Nimbu Pani)", brand: "Generic", calories: 25, protein: 0.1, carbs: 6.2, fat: 0, serving: "100ml"},
{name: "Buttermilk with Curry Leaves (South Indian)", brand: "Generic", calories: 45, protein: 1.8, carbs: 4.5, fat: 1.8, serving: "100ml"},

//non veg

  {name: "Rohu Fish", brand: "Generic", calories: 97, protein: 17, carbs: 0, fat: 3, serving: "100g"},
  {name: "Catla Fish", brand: "Generic", calories: 118, protein: 20, carbs: 0, fat: 4, serving: "100g"},
  {name: "Hilsa Fish", brand: "Generic", calories: 310, protein: 22, carbs: 0, fat: 25, serving: "100g"},
  {name: "Pomfret", brand: "Generic", calories: 84, protein: 17, carbs: 0, fat: 1.3, serving: "100g"},
  {name: "King Fish (Surmai)", brand: "Generic", calories: 114, protein: 20, carbs: 0, fat: 3.5, serving: "100g"},
  {name: "Bombay Duck (Bummalo)", brand: "Generic", calories: 112, protein: 19, carbs: 0, fat: 3.5, serving: "100g"},
  {name: "Indian Mackerel (Bangda)", brand: "Generic", calories: 190, protein: 19, carbs: 0, fat: 13, serving: "100g"},
  {name: "River Prawn", brand: "Generic", calories: 99, protein: 22, carbs: 0.2, fat: 0.8, serving: "100g"},
  {name: "Crab (Indian Blue Crab)", brand: "Generic", calories: 97, protein: 21, carbs: 0, fat: 1.5, serving: "100g"},
  {name: "Desi Chicken (Raw)", brand: "Generic", calories: 120, protein: 22, carbs: 0, fat: 3.5, serving: "100g"},
  {name: "Goat Meat (Mutton, Raw)", brand: "Generic", calories: 143, protein: 27, carbs: 0, fat: 3, serving: "100g"},
  {name: "Buffalo Meat (Raw)", brand: "Generic", calories: 140, protein: 27, carbs: 0, fat: 3, serving: "100g"},
  {name: "Duck Egg", brand: "Generic", calories: 185, protein: 13, carbs: 1.4, fat: 14, serving: "100g"},
  {name: "Quail Egg", brand: "Generic", calories: 158, protein: 13, carbs: 0.4, fat: 11, serving: "100g"},
  {name: "Indian Sardine (Mathi)", brand: "Generic", calories: 208, protein: 25, carbs: 0, fat: 11, serving: "100g"},
  {name: "Silver Carp", brand: "Generic", calories: 121, protein: 20, carbs: 0, fat: 4, serving: "100g"},
  {name: "Tilapia", brand: "Generic", calories: 128, protein: 26, carbs: 0, fat: 2.7, serving: "100g"},
  {name: "Mud Crab", brand: "Generic", calories: 97, protein: 19, carbs: 0, fat: 1.6, serving: "100g"},
  {name: "Desi Duck Meat", brand: "Generic", calories: 337, protein: 19, carbs: 0, fat: 28, serving: "100g"},
  {name: "Chicken Breast (Grilled)", brand: "Generic", calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: "100g"},
  {name: "Salmon (Cooked)", brand: "Generic", calories: 208, protein: 22, carbs: 0, fat: 13, serving: "100g"},
  {name: "Egg (Boiled)", brand: "Generic", calories: 155, protein: 13, carbs: 1.1, fat: 11, serving: "100g"},
  {name: "Beef Steak (Grilled)", brand: "Generic", calories: 271, protein: 26, carbs: 0, fat: 18, serving: "100g"},
  {name: "Pork Tenderloin (Roasted)", brand: "Generic", calories: 242, protein: 27, carbs: 0, fat: 14, serving: "100g"},
  {name: "Tuna (Canned in Water)", brand: "Generic", calories: 132, protein: 28, carbs: 0, fat: 1, serving: "100g"},
  {name: "Shrimp (Boiled)", brand: "Generic", calories: 99, protein: 24, carbs: 0.2, fat: 0.3, serving: "100g"},
  {name: "Turkey (Roasted)", brand: "Generic", calories: 189, protein: 29, carbs: 0, fat: 7, serving: "100g"},
  {name: "Lamb (Cooked)", brand: "Generic", calories: 258, protein: 25, carbs: 0, fat: 17, serving: "100g"},
  {name: "Crab (Steamed)", brand: "Generic", calories: 97, protein: 21, carbs: 0, fat: 1.5, serving: "100g"},
  {name: "Duck Meat (Roasted)", brand: "Generic", calories: 337, protein: 19, carbs: 0, fat: 28, serving: "100g"},
  {name: "Sardines (Cooked)", brand: "Generic", calories: 208, protein: 25, carbs: 0, fat: 11, serving: "100g"},
  {name: "Octopus (Boiled)", brand: "Generic", calories: 164, protein: 29, carbs: 4.4, fat: 2, serving: "100g"},
  {name: "Clams (Steamed)", brand: "Generic", calories: 148, protein: 25, carbs: 5, fat: 2, serving: "100g"},
  {name: "Goat Meat (Cooked)", brand: "Generic", calories: 143, protein: 27, carbs: 0, fat: 3, serving: "100g"},
  {name: "Anchovies (Cooked)", brand: "Generic", calories: 210, protein: 29, carbs: 0, fat: 10, serving: "100g"},
  {name: "Squid (Grilled)", brand: "Generic", calories: 175, protein: 32, carbs: 3, fat: 3, serving: "100g"},
  {name: "Quail (Roasted)", brand: "Generic", calories: 227, protein: 25, carbs: 0, fat: 14, serving: "100g"},
  {name: "Cod (Baked)", brand: "Generic", calories: 105, protein: 23, carbs: 0, fat: 0.9, serving: "100g"},
  {name: "Mussels (Steamed)", brand: "Generic", calories: 172, protein: 24, carbs: 7, fat: 4, serving: "100g"},


    // Fast Food - McDonald's
    {name: "Big Mac", brand: "McDonald's", calories: 550, protein: 25, carbs: 45, fat: 31, serving: "1 sandwich"},
    {name: "Quarter Pounder", brand: "McDonald's", calories: 520, protein: 26, carbs: 42, fat: 26, serving: "1 sandwich"},
    {name: "Chicken McNuggets", brand: "McDonald's", calories: 250, protein: 15, carbs: 15, fat: 15, serving: "6 pieces"},
    {name: "French Fries", brand: "McDonald's", calories: 365, protein: 4, carbs: 63, fat: 17, serving: "Large"},
    {name: "McFlurry Oreo", brand: "McDonald's", calories: 510, protein: 13, carbs: 82, fat: 15, serving: "Medium"},
    {name: "Veg Maharaja Mac", brand: "McDonald's India", calories: 833, protein: 24, carbs: 94, fat: 38, serving: "1 sandwich"},
    {name: "Chicken Maharaja Mac", brand: "McDonald's India", calories: 689, protein: 34, carbs: 55, fat: 37, serving: "1 sandwich"},
    {name: "McAloo Tikki Burger", brand: "McDonald's India", calories: 339, protein: 8, carbs: 50, fat: 10, serving: "1 sandwich"},
    {name: "McVeggie Burger", brand: "McDonald's India", calories: 402, protein: 9, carbs: 54, fat: 14, serving: "1 sandwich"},
    {name: "McSpicy Paneer", brand: "McDonald's India", calories: 592, protein: 24, carbs: 61, fat: 28, serving: "1 sandwich"},
    {name: "McChicken Burger", brand: "McDonald's India", calories: 423, protein: 16, carbs: 49, fat: 16, serving: "1 sandwich"},
    {name: "McSpicy Chicken", brand: "McDonald's India", calories: 524, protein: 23, carbs: 52, fat: 25, serving: "1 sandwich"},
    {name: "Filet-O-Fish (India)", brand: "McDonald's India", calories: 329, protein: 15, carbs: 41, fat: 12, serving: "1 sandwich"},
    {name: "Pizza McPuff", brand: "McDonald's India", calories: 225, protein: 5, carbs: 25, fat: 11, serving: "1 piece"},
    {name: "Hash Brown (India)", brand: "McDonald's India", calories: 137, protein: 2, carbs: 16, fat: 7, serving: "1 piece"},
    {name: "Egg McMuffin (India)", brand: "McDonald's India", calories: 283, protein: 14, carbs: 28, fat: 12, serving: "1 sandwich"},
    {name: "Veg McMuffin", brand: "McDonald's India", calories: 269, protein: 10, carbs: 30, fat: 11, serving: "1 sandwich"},
    {name: "Chicken McNuggets (6 pc, India)", brand: "McDonald's India", calories: 254, protein: 15, carbs: 15, fat: 14, serving: "6 pieces"},
    {name: "World Famous Fries (Medium, India)", brand: "McDonald's India", calories: 340, protein: 5, carbs: 45, fat: 15, serving: "Medium"},
    {name: "McFlurry Oreo (Medium, India)", brand: "McDonald's India", calories: 210, protein: 5, carbs: 33, fat: 7, serving: "Medium"},
    {name: "McFlurry Choco Crunch (Medium, India)", brand: "McDonald's India", calories: 333, protein: 5, carbs: 42, fat: 16, serving: "Medium"},
    {name: "Cold Coffee (250 ml, India)", brand: "McDonald's India", calories: 151, protein: 0, carbs: 38, fat: 0, serving: "250 ml"},
    {name: "Cappuccino (Regular, India)", brand: "McDonald's India", calories: 93, protein: 5, carbs: 9, fat: 4, serving: "Regular"},
    {name: "Big Mac", brand: "McDonald's", calories: 580, protein: 25, carbs: 45, fat: 34, serving: "1 sandwich"},
    {name: "Quarter Pounder with Cheese", brand: "McDonald's", calories: 520, protein: 30, carbs: 42, fat: 26, serving: "1 sandwich"},
    {name: "Sausage McMuffin", brand: "McDonald's India", calories: 313, protein: 14, carbs: 27, fat: 17, serving: "1 sandwich"},
    {name: "Hotcakes (2 pc)", brand: "McDonald's India", calories: 318, protein: 6, carbs: 64, fat: 4, serving: "2 pieces"},
    {name: "Cheesy Nugget - Veg Bites (9 pc)", brand: "McDonald's India", calories: 308, protein: 10, carbs: 24, fat: 19, serving: "9 pieces"},
    {name: "Chicken Strips (3 pc)", brand: "McDonald's India", calories: 252, protein: 22, carbs: 12, fat: 13, serving: "3 pieces"},
    {name: "Mexican Cheesy Fries", brand: "McDonald's India", calories: 409, protein: 8, carbs: 48, fat: 20, serving: "1 serving"},
    {name: "Soft Serve Cone", brand: "McDonald's India", calories: 141, protein: 4, carbs: 24, fat: 3, serving: "1 cone"},
    {name: "Sundae (Hot Fudge)", brand: "McDonald's India", calories: 286, protein: 6, carbs: 45, fat: 9, serving: "1 sundae"},
    {name: "Sundae (Strawberry)", brand: "McDonald's India", calories: 241, protein: 5, carbs: 44, fat: 5, serving: "1 sundae"},
    {name: "Americano (Regular)", brand: "McDonald's India", calories: 9, protein: 1, carbs: 1, fat: 0, serving: "Regular"},
    {name: "Latte (Regular)", brand: "McDonald's India", calories: 108, protein: 6, carbs: 11, fat: 5, serving: "Regular"},
    {name: "English Breakfast Tea", brand: "McDonald's India", calories: 92, protein: 5, carbs: 9, fat: 4, serving: "1 serving"},
    {name: "Masala Chai", brand: "McDonald's India", calories: 106, protein: 3, carbs: 16, fat: 3, serving: "1 serving"},
    {name: "Iced Tea (Lemon)", brand: "McDonald's India", calories: 81, protein: 0, carbs: 20, fat: 0, serving: "Regular"},
    {name: "Coca-Cola (Medium)", brand: "McDonald's India", calories: 172, protein: 0, carbs: 43, fat: 0, serving: "Medium"},
    {name: "Fanta (Medium)", brand: "McDonald's India", calories: 194, protein: 0, carbs: 48, fat: 0, serving: "Medium"},
    

    
    // Fast Food - KFC
    {name: "Original Recipe Chicken", brand: "KFC", calories: 320, protein: 19, carbs: 8, fat: 24, serving: "1 piece (thigh)"},
    {name: "Popcorn Chicken", brand: "KFC", calories: 400, protein: 18, carbs: 19, fat: 28, serving: "Regular"},
    {name: "Coleslaw", brand: "KFC", calories: 170, protein: 1, carbs: 13, fat: 13, serving: "Regular"},
    {name: "Hot & Crispy Chicken", brand: "KFC India", calories: 265, protein: 20, carbs: 13, fat: 17, serving: "1 piece"},
    {name: "Original Recipe Chicken", brand: "KFC India", calories: 230, protein: 22, carbs: 8, fat: 12, serving: "1 piece"},
    {name: "Classic Zinger Burger", brand: "KFC India", calories: 463, protein: 21, carbs: 48, fat: 22, serving: "1 burger"},
    {name: "Tandoori Zinger Burger", brand: "KFC India", calories: 475, protein: 23, carbs: 50, fat: 21, serving: "1 burger"},
    {name: "Veg Zinger Burger", brand: "KFC India", calories: 445, protein: 15, carbs: 51, fat: 20, serving: "1 burger"},
    {name: "Chicken Popcorn (Medium)", brand: "KFC India", calories: 374, protein: 19, carbs: 26, fat: 21, serving: "Medium"},
    {name: "Hot Wings (6 pc)", brand: "KFC India", calories: 471, protein: 31, carbs: 21, fat: 28, serving: "6 pieces"},
    {name: "Classic Chicken Biryani Bucket", brand: "KFC India", calories: 586, protein: 22, carbs: 78, fat: 20, serving: "1 bucket"},
    {name: "Smoky Grilled Biryani Bucket", brand: "KFC India", calories: 550, protein: 21, carbs: 75, fat: 18, serving: "1 bucket"},
    {name: "Veg Strips (4 pc)", brand: "KFC India", calories: 305, protein: 8, carbs: 35, fat: 15, serving: "4 pieces"},
    {name: "Chicken Strips (3 pc)", brand: "KFC India", calories: 252, protein: 22, carbs: 12, fat: 13, serving: "3 pieces"},
    {name: "French Fries (Medium)", brand: "KFC India", calories: 282, protein: 4, carbs: 35, fat: 14, serving: "Medium"},
    {name: "Coleslaw", brand: "KFC India", calories: 140, protein: 1, carbs: 12, fat: 10, serving: "1 serving"},
    {name: "Chocolate Lava Cake", brand: "KFC India", calories: 290, protein: 4, carbs: 35, fat: 15, serving: "1 piece"},
    {name: "Coffee Mousse Cake", brand: "KFC India", calories: 210, protein: 3, carbs: 22, fat: 12, serving: "1 piece"},
    {name: "Smoky Red Chicken", brand: "KFC India", calories: 245, protein: 19, carbs: 10, fat: 14, serving: "1 piece"},
    {name: "Classic Chicken Roll", brand: "KFC India", calories: 395, protein: 18, carbs: 40, fat: 18, serving: "1 roll"},
    {name: "Boneless Chicken Strips", brand: "KFC India", calories: 358, protein: 28, carbs: 18, fat: 19, serving: "3 pieces"},
    {name: "Veg Krisper Burger", brand: "KFC India", calories: 350, protein: 10, carbs: 45, fat: 14, serving: "1 burger"},
    {name: "Chicken Rice Bowl", brand: "KFC India", calories: 450, protein: 15, carbs: 60, fat: 16, serving: "1 bowl"},
    {name: "Veg Rice Bowl", brand: "KFC India", calories: 380, protein: 8, carbs: 65, fat: 9, serving: "1 bowl"},
    {name: "Fries (Large)", brand: "KFC India", calories: 357, protein: 4, carbs: 48, fat: 18, serving: "Large"},
    {name: "Pepsi (Regular)", brand: "KFC India", calories: 142, protein: 0, carbs: 36, fat: 0, serving: "330 ml"},
    {name: "7 Up (Regular)", brand: "KFC India", calories: 155, protein: 0, carbs: 39, fat: 0, serving: "330 ml"},
    {name: "Mirinda (Regular)", brand: "KFC India", calories: 182, protein: 0, carbs: 46, fat: 0, serving: "330 ml"},
    {name: "Garlic Dip", brand: "KFC India", calories: 102, protein: 0, carbs: 3, fat: 10, serving: "25 g"},
    {name: "Sweet Chili Dip", brand: "KFC India", calories: 47, protein: 0, carbs: 12, fat: 0, serving: "25 g"},
    {name: "Krushers Virgin Mojito", brand: "KFC India", calories: 180, protein: 1, carbs: 42, fat: 1, serving: "Regular"},
    {name: "Krushers Choco Lash", brand: "KFC India", calories: 380, protein: 8, carbs: 55, fat: 14, serving: "Regular"},
    {name: "Iced Tea", brand: "KFC India", calories: 90, protein: 0, carbs: 22, fat: 0, serving: "Regular"},
    
  
    // Fast Food - Subway
    {name: "Turkey Breast Sub", brand: "Subway", calories: 280, protein: 18, carbs: 46, fat: 3.5, serving: "6-inch"},
    {name: "Chicken Teriyaki Sub", brand: "Subway", calories: 370, protein: 25, carbs: 59, fat: 4.5, serving: "6-inch"},
    {name: "BMT Sub", brand: "Subway", calories: 410, protein: 19, carbs: 46, fat: 16, serving: "6-inch"},
    
    // Pizza
    {name: "Margherita", brand: "Domino's India", calories: 204, protein: 10, carbs: 24, fat: 8, serving: "1 slice (Regular)"},
{name: "Farmhouse", brand: "Domino's India", calories: 235, protein: 9, carbs: 29, fat: 9, serving: "1 slice (Regular)"},
{name: "Peppy Paneer", brand: "Domino's India", calories: 269, protein: 11, carbs: 29, fat: 12, serving: "1 slice (Regular)"},
{name: "Veg Extravaganza", brand: "Domino's India", calories: 245, protein: 9, carbs: 30, fat: 10, serving: "1 slice (Regular)"},
{name: "Mexican Green Wave", brand: "Domino's India", calories: 251, protein: 9, carbs: 31, fat: 10, serving: "1 slice (Regular)"},
{name: "Deluxe Veggie", brand: "Domino's India", calories: 233, protein: 9, carbs: 28, fat: 9, serving: "1 slice (Regular)"},
{name: "5 Pepper", brand: "Domino's India", calories: 250, protein: 9, carbs: 28, fat: 11, serving: "1 slice (Regular)"},
{name: "Veggie Paradise", brand: "Domino's India", calories: 218, protein: 9, carbs: 26, fat: 8, serving: "1 slice (Regular)"},
{name: "Paneer Makhani", brand: "Domino's India", calories: 273, protein: 11, carbs: 28, fat: 13, serving: "1 slice (Regular)"},
{name: "Indi Tandoori Paneer", brand: "Domino's India", calories: 281, protein: 12, carbs: 29, fat: 13, serving: "1 slice (Regular)"},
{name: "Pepper Barbecue Chicken", brand: "Domino's India", calories: 248, protein: 12, carbs: 25, fat: 11, serving: "1 slice (Regular)"},
{name: "Chicken Sausage", brand: "Domino's India", calories: 234, protein: 11, carbs: 24, fat: 10, serving: "1 slice (Regular)"},
{name: "Chicken Golden Delight", brand: "Domino's India", calories: 256, protein: 12, carbs: 25, fat: 12, serving: "1 slice (Regular)"},
{name: "Non Veg Supreme", brand: "Domino's India", calories: 271, protein: 13, carbs: 26, fat: 13, serving: "1 slice (Regular)"},
{name: "Chicken Dominator", brand: "Domino's India", calories: 298, protein: 15, carbs: 26, fat: 15, serving: "1 slice (Regular)"},
{name: "Peri-Peri Chicken", brand: "Domino's India", calories: 257, protein: 12, carbs: 25, fat: 12, serving: "1 slice (Regular)"},
{name: "Chicken Fiesta", brand: "Domino's India", calories: 262, protein: 12, carbs: 25, fat: 12, serving: "1 slice (Regular)"},
{name: "Indi Chicken Tikka", brand: "Domino's India", calories: 279, protein: 13, carbs: 26, fat: 13, serving: "1 slice (Regular)"},
{name: "Tandoori Paneer", brand: "Pizza Hut India", calories: 278, protein: 12, carbs: 33, fat: 11, serving: "1 slice (Medium)"},
{name: "Veggie Supreme", brand: "Pizza Hut India", calories: 230, protein: 9, carbs: 28, fat: 9, serving: "1 slice (Medium)"},
{name: "Double Paneer Supreme", brand: "Pizza Hut India", calories: 290, protein: 13, carbs: 31, fat: 13, serving: "1 slice (Medium)"},
{name: "Veggie Lover", brand: "Pizza Hut India", calories: 220, protein: 8, carbs: 27, fat: 9, serving: "1 slice (Medium)"},
{name: "Spiced Paneer", brand: "Pizza Hut India", calories: 270, protein: 11, carbs: 32, fat: 11, serving: "1 slice (Medium)"},
{name: "Corn & Cheese", brand: "Pizza Hut India", calories: 250, protein: 10, carbs: 30, fat: 10, serving: "1 slice (Medium)"},
{name: "Chicken Supreme", brand: "Pizza Hut India", calories: 260, protein: 13, carbs: 27, fat: 11, serving: "1 slice (Medium)"},
{name: "Chicken Tikka", brand: "Pizza Hut India", calories: 270, protein: 14, carbs: 28, fat: 12, serving: "1 slice (Medium)"},
{name: "Double Chicken Sausage", brand: "Pizza Hut India", calories: 280, protein: 14, carbs: 27, fat: 13, serving: "1 slice (Medium)"},
{name: "Spiced Chicken Meatballs", brand: "Pizza Hut India", calories: 290, protein: 15, carbs: 28, fat: 14, serving: "1 slice (Medium)"},
{name: "Garden Fresh", brand: "Papa John's India", calories: 210, protein: 8, carbs: 26, fat: 8, serving: "1 slice (Medium)"},
{name: "Tandoori Paneer", brand: "Papa John's India", calories: 270, protein: 11, carbs: 30, fat: 12, serving: "1 slice (Medium)"},
{name: "Veggie Delight", brand: "Papa John's India", calories: 220, protein: 8, carbs: 27, fat: 9, serving: "1 slice (Medium)"},
{name: "Spicy Paneer", brand: "Papa John's India", calories: 280, protein: 11, carbs: 31, fat: 12, serving: "1 slice (Medium)"},
{name: "Chicken Tikka", brand: "Papa John's India", calories: 260, protein: 13, carbs: 27, fat: 11, serving: "1 slice (Medium)"},
{name: "Pepperoni", brand: "Papa John's India", calories: 290, protein: 14, carbs: 28, fat: 14, serving: "1 slice (Medium)"},
{name: "Chicken BBQ", brand: "Papa John's India", calories: 270, protein: 13, carbs: 29, fat: 12, serving: "1 slice (Medium)"},
{name: "Chicken Super Papa", brand: "Papa John's India", calories: 300, protein: 15, carbs: 29, fat: 14, serving: "1 slice (Medium)"},
{name: "Pollo (Chicken Calabrese)", brand: "Pizza Express India", calories: 203, protein: 11, carbs: 24, fat: 7, serving: "per 100g"},
{name: "Verdure (Veg Calabrese)", brand: "Pizza Express India", calories: 228, protein: 9, carbs: 24, fat: 10, serving: "per 100g"},
{name: "Bolognaise (Hunter) Chicken Meat Ball Calzone", brand: "Pizza Express India", calories: 200, protein: 19, carbs: 19, fat: 5, serving: "per 100g"},
{name: "Verdure Calzone", brand: "Pizza Express India", calories: 205, protein: 9, carbs: 23, fat: 9, serving: "per 100g"},
{name: "BBQ Cottage Cheese Calzone", brand: "Pizza Express India", calories: 300, protein: 15, carbs: 38, fat: 10, serving: "per 100g"},
{name: "Classic Onion Capsicum Pizza", brand: "Pizza Hut", calories: 780, protein: 28, carbs: 102, fat: 29, serving: "1 serving (254g)"},
{name: "Classic Corn Pizza", brand: "Pizza Hut", calories: 790, protein: 29, carbs: 104, fat: 29, serving: "1 serving (248g)"},
{name: "Tandoori Paneer Pizza (Personal)", brand: "Pizza Hut", calories: 1064, protein: 44, carbs: 128, fat: 42, serving: "1 serving (318g)"},
{name: "Tomato Pizza", brand: "Pizza Hut", calories: 759, protein: 29, carbs: 98, fat: 28, serving: "1 serving (244g)"},
{name: "Schezwan Margherita Pizza", brand: "Pizza Hut", calories: 1187, protein: 49, carbs: 167, fat: 37, serving: "1 serving (384g)"},
{name: "Thin Crust Chicken Pizza", brand: "Domino's Pizza", calories: 225, protein: 11, carbs: 20, fat: 11, serving: "per 1 slice"},
{name: "Cheese Pizza (Rising Crust, Frozen, Cooked)", brand: "Papa John's Pizza", calories: 2168, protein: 103, carbs: 274, fat: 73, serving: "per 1 package 830 g pizza"},
{name: "14\" Cheese Pizza, THIN 'N CRISPY Crust", brand: "PIZZA HUT", calories: 242, protein: 11, carbs: 27, fat: 10, serving: "1 slice"},
{name: "14\" Cheese Pizza, Thin Crust, 1 slice", brand: "PAPA JOHN'S", calories: 257, protein: 11, carbs: 23, fat: 14, serving: "1 slice"},

    // Indian Foods
    {name: "Butter Chicken", calories: 440, protein: 30, carbs: 14, fat: 30, serving: "1 cup (240g)"},
  {name: "Palak Paneer", calories: 320, protein: 16, carbs: 12, fat: 22, serving: "1 cup (240g)"},
  {name: "Chole Bhature", calories: 520, protein: 15, carbs: 55, fat: 26, serving: "1 bhatura + 1 cup chole"},
  {name: "Masala Dosa", calories: 390, protein: 9, carbs: 45, fat: 18, serving: "1 dosa with filling"},
  {name: "Chicken Biryani", calories: 480, protein: 28, carbs: 45, fat: 20, serving: "1.5 cups (300g)"},
  {name: "Samosa", calories: 260, protein: 4, carbs: 30, fat: 14, serving: "1 piece (100g)"},
  {name: "Dal Makhani", calories: 350, protein: 17, carbs: 28, fat: 20, serving: "1 cup (240g)"},
  {name: "Rajma Chawal", calories: 400, protein: 15, carbs: 50, fat: 12, serving: "1.5 cups (300g)"},
  {name: "Pav Bhaji", calories: 450, protein: 10, carbs: 50, fat: 22, serving: "2 pav + bhaji (1 serving)"},
  {name: "Idli & Sambar", calories: 280, protein: 10, carbs: 35, fat: 10, serving: "2 idli + 1 cup sambar"},
  {name: "Dhokla", calories: 160, protein: 8, carbs: 25, fat: 5, serving: "4 pieces (150g)"},
  {name: "Litti Chokha", calories: 420, protein: 10, carbs: 40, fat: 20, serving: "2 litti + chokha"},
  {name: "Thepla", calories: 200, protein: 5, carbs: 30, fat: 8, serving: "2 medium pieces"},
  {name: "Poha", calories: 212, protein: 4, carbs: 32, fat: 8, serving: "100g"},
  {name: "Dal Tadka", calories: 126, protein: 6, carbs: 16, fat: 4, serving: "100g"},
  {name: "Aloo Gobi", calories: 110, protein: 3, carbs: 15, fat: 6, serving: "100g"},
  {name: "Baingan Bharta", calories: 70, protein: 2, carbs: 10, fat: 3, serving: "100g"},
  {name: "Chicken Tikka Masala", calories: 348, protein: 28, carbs: 10, fat: 25, serving: "1 cup (240g)"},
  {name: "Rogan Josh", calories: 701, protein: 50, carbs: 24, fat: 44, serving: "1 serving"},
  {name: "Vindaloo with Paneer", calories: 473, protein: 24, carbs: 28, fat: 31, serving: "1 serving"},
  {name: "Naan (Classic)", calories: 379, protein: 14, carbs: 72, fat: 2, serving: "1 piece"},
  {name: "Tandoori Chicken", calories: 1080, protein: 66, carbs: 4, fat: 86, serving: "1 whole chicken"},
  {name: "Malai Kofta", calories: 1196, protein: 11, carbs: 62, fat: 94, serving: "1 serving"},
  {name: "Navratan Korma", calories: 876, protein: 10, carbs: 28, fat: 76, serving: "1 serving"},
  {name: "Pani Puri", calories: 300, protein: 6, carbs: 50, fat: 8, serving: "6 pieces"},
  {name: "Bhel Puri", calories: 350, protein: 8, carbs: 60, fat: 9, serving: "1 plate"},
  {name: "Vada Pav", calories: 300, protein: 7, carbs: 40, fat: 12, serving: "1 piece"},
  {name: "Kachori", calories: 250, protein: 5, carbs: 30, fat: 12, serving: "1 piece"},
  {name: "Jalebi", calories: 450, protein: 4, carbs: 80, fat: 12, serving: "100g"},
  {name: "Gulab Jamun", calories: 300, protein: 4, carbs: 45, fat: 12, serving: "2 pieces"},
  {name: "Rasgulla", calories: 150, protein: 4, carbs: 30, fat: 2, serving: "2 pieces"},
  {name: "Gajar Ka Halwa", calories: 350, protein: 6, carbs: 50, fat: 15, serving: "1 cup"},
  {name: "Kheer", calories: 300, protein: 8, carbs: 45, fat: 10, serving: "1 cup"},
  {name: "Misal Pav", calories: 450, protein: 15, carbs: 50, fat: 20, serving: "1 plate"},
  {name: "Puran Poli", calories: 350, protein: 8, carbs: 60, fat: 9, serving: "1 piece"},
  {name: "Hyderabadi Biryani", calories: 500, protein: 30, carbs: 50, fat: 22, serving: "1 plate"},
  {name: "Mutton Curry", calories: 400, protein: 35, carbs: 10, fat: 25, serving: "1 cup"},
  {name: "Fish Curry", calories: 350, protein: 30, carbs: 8, fat: 22, serving: "1 cup"},
  {name: "Upma", calories: 250, protein: 6, carbs: 40, fat: 8, serving: "1 cup"},
  {name: "Pongal", calories: 300, protein: 10, carbs: 50, fat: 8, serving: "1 cup"},
  {name: "Aloo Paratha", calories: 300, protein: 8, carbs: 45, fat: 10, serving: "1 piece"},
  {name: "Gobi Paratha", calories: 250, protein: 7, carbs: 40, fat: 8, serving: "1 piece"},
  {name: "Paneer Butter Masala", calories: 400, protein: 20, carbs: 15, fat: 30, serving: "1 cup"},
  {name: "Shahi Paneer", calories: 350, protein: 18, carbs: 12, fat: 28, serving: "1 cup"},
  {name: "Kadhi Pakora", calories: 300, protein: 12, carbs: 30, fat: 15, serving: "1 cup"},
  {name: "Sarson Ka Saag", calories: 250, protein: 8, carbs: 20, fat: 15, serving: "1 cup"},
  {name: "Makki Ki Roti", calories: 200, protein: 5, carbs: 40, fat: 4, serving: "1 piece"},
  {name: "Dahi Vada", calories: 250, protein: 10, carbs: 30, fat: 10, serving: "2 pieces"},
  {name: "Rasmalai", calories: 350, protein: 12, carbs: 40, fat: 15, serving: "2 pieces"},
  {name: "Biryani (Vegetable)", calories: 350, protein: 10, carbs: 60, fat: 8, serving: "1 plate"},
  //bengali cusine
  {name: "Ilish Macher Jhol (Hilsa Fish Curry)", calories: 250, protein: 20, carbs: 5, fat: 15, serving: "1 serving"},
  {name: "Chingri Malai Curry (Prawn in Coconut Milk)", calories: 350, protein: 25, carbs: 8, fat: 25, serving: "1 cup"},
  {name: "Kosha Mangsho (Bengali Mutton Curry)", calories: 450, protein: 35, carbs: 10, fat: 30, serving: "1 cup"},
  {name: "Shorshe Ilish (Hilsa in Mustard Sauce)", calories: 300, protein: 22, carbs: 6, fat: 20, serving: "1 serving"},
  {name: "Aloo Posto (Potatoes in Poppy Seed Sauce)", calories: 250, protein: 5, carbs: 30, fat: 12, serving: "1 cup"},
  {name: "Luchi", calories: 89, protein: 1.2, carbs: 8, fat: 5.8, serving: "1 piece (20g)"},
  {name: "Cholar Dal", calories: 200, protein: 10, carbs: 30, fat: 5, serving: "1 cup"},
  {name: "Dhokar Dalna", calories: 300, protein: 15, carbs: 25, fat: 15, serving: "1 cup"},
  {name: "Shukto", calories: 150, protein: 5, carbs: 20, fat: 5, serving: "1 cup"},
  {name: "Begun Bhaja", calories: 150, protein: 2, carbs: 10, fat: 12, serving: "2 pieces"},
  {name: "Macher Matha Diye Dal", calories: 250, protein: 15, carbs: 20, fat: 12, serving: "1 cup"},
  {name: "Bhetki Paturi", calories: 250, protein: 20, carbs: 5, fat: 15, serving: "1 piece"},
  {name: "Pabda Macher Jhal", calories: 200, protein: 18, carbs: 5, fat: 12, serving: "1 serving"},
  {name: "Mochar Ghonto", calories: 200, protein: 5, carbs: 25, fat: 8, serving: "1 cup"},
  {name: "Potoler Dolma", calories: 250, protein: 10, carbs: 20, fat: 15, serving: "2 pieces"},
  {name: "Enchorer Dalna", calories: 250, protein: 8, carbs: 30, fat: 12, serving: "1 cup"},
  {name: "Kathi Roll (Chicken)", calories: 400, protein: 20, carbs: 40, fat: 18, serving: "1 roll"},
  {name: "Mughlai Paratha", calories: 500, protein: 15, carbs: 50, fat: 25, serving: "1 piece"},
  {name: "Ghugni", calories: 250, protein: 12, carbs: 35, fat: 8, serving: "1 cup"},
  {name: "Telebhaja", calories: 150, protein: 3, carbs: 15, fat: 9, serving: "1 piece"},
  {name: "Jhalmuri", calories: 200, protein: 5, carbs: 35, fat: 5, serving: "1 plate"},
  {name: "Phuchka", calories: 250, protein: 6, carbs: 40, fat: 8, serving: "6 pieces"},
  {name: "Kolkata Biryani (Mutton)", calories: 500, protein: 25, carbs: 50, fat: 22, serving: "1 plate"},
  {name: "Radhaballavi", calories: 200, protein: 5, carbs: 30, fat: 7, serving: "2 pieces"},
  {name: "Chhanar Jilipi", calories: 300, protein: 6, carbs: 45, fat: 12, serving: "2 pieces"},
  {name: "Mishti Doi", calories: 250, protein: 8, carbs: 35, fat: 8, serving: "1 cup"},
  {name: "Sondesh", calories: 150, protein: 5, carbs: 20, fat: 5, serving: "2 pieces"},
  {name: "Rasgulla", calories: 150, protein: 4, carbs: 30, fat: 2, serving: "2 pieces"},
  {name: "Patishapta", calories: 200, protein: 4, carbs: 35, fat: 5, serving: "1 piece"},
  {name: "Payesh", calories: 300, protein: 8, carbs: 45, fat: 10, serving: "1 cup"},
  {name: "Labra", calories: 176, protein: 4, carbs: 30, fat: 6, serving: "1 cup"},
  {name: "Kochuri", calories: 150, protein: 4, carbs: 25, fat: 6, serving: "1 piece"},
  {name: "Aloor Dom", calories: 200, protein: 5, carbs: 25, fat: 8, serving: "1 cup"},
  {name: "Kumror Chhokka", calories: 180, protein: 4, carbs: 25, fat: 7, serving: "1 cup"},
  {name: "Lau Ghonto", calories: 150, protein: 4, carbs: 20, fat: 6, serving: "1 cup"},
  {name: "Panta Bhat", calories: 200, protein: 4, carbs: 45, fat: 2, serving: "1 cup"},
  {name: "Chhanar Dalna", calories: 260, protein: 14, carbs: 10, fat: 15, serving: "1 cup"},
  {name: "Kancha Moong Dal", calories: 307, protein: 18, carbs: 48, fat: 5, serving: "1 cup"},
  {name: "Doi Maach", calories: 300, protein: 25, carbs: 8, fat: 18, serving: "1 serving"},
  {name: "Katla Kalia", calories: 350, protein: 30, carbs: 10, fat: 20, serving: "1 serving"},
  {name: "Muri Ghonto", calories: 350, protein: 20, carbs: 30, fat: 15, serving: "1 cup"},
  {name: "Postor Bora", calories: 200, protein: 6, carbs: 15, fat: 12, serving: "4 pieces"},
  {name: "Beguni", calories: 120, protein: 2, carbs: 15, fat: 6, serving: "2 pieces"},
  {name: "Phulkopir Dalna", calories: 200, protein: 6, carbs: 25, fat: 8, serving: "1 cup"},
  {name: "Topse Maach Fry", calories: 200, protein: 15, carbs: 10, fat: 12, serving: "2 pieces"},
  {name: "Parshe Macher Jhal", calories: 220, protein: 18, carbs: 6, fat: 14, serving: "1 serving"},
  {name: "Gokul Pithe", calories: 250, protein: 5, carbs: 40, fat: 8, serving: "2 pieces"},
  {name: "Narkel Naru", calories: 150, protein: 2, carbs: 20, fat: 7, serving: "2 pieces"},
  {name: "Khichuri", calories: 350, protein: 15, carbs: 50, fat: 10, serving: "1 cup"},
  {name: "Bandhakopir Torkari", calories: 180, protein: 5, carbs: 20, fat: 8, serving: "1 cup"},
  {name: "Khandvi", brand: "Generic", calories: 200, protein: 8, carbs: 15, fat: 12, serving: "100g"},
  {name: "Appam with Stew", brand: "Generic", calories: 350, protein: 7, carbs: 45, fat: 15, serving: "2 appams + 1 cup stew"},
  {name: "Avial", brand: "Generic", calories: 180, protein: 5, carbs: 20, fat: 9, serving: "1 cup"},
  {name: "Bisi Bele Bath", brand: "Generic", calories: 400, protein: 12, carbs: 60, fat: 12, serving: "1 cup"},
  {name: "Dal Baati Churma", brand: "Generic", calories: 600, protein: 15, carbs: 70, fat: 28, serving: "2 baatis with dal & churma"},
  {name: "Gatte ki Sabzi", brand: "Generic", calories: 280, protein: 10, carbs: 25, fat: 15, serving: "1 cup"},
  {name: "Undhiyu", brand: "Generic", calories: 350, protein: 8, carbs: 30, fat: 22, serving: "1 cup"},
  {name: "Sabudana Khichdi", brand: "Generic", calories: 450, protein: 5, carbs: 70, fat: 18, serving: "1 cup"},
  {name: "Thalipeeth", brand: "Generic", calories: 250, protein: 8, carbs: 35, fat: 9, serving: "1 piece"},
  {name: "Mutton Korma", brand: "Generic", calories: 480, protein: 30, carbs: 12, fat: 35, serving: "1 cup"},
  {name: "Goan Fish Curry", brand: "Generic", calories: 380, protein: 25, carbs: 10, fat: 26, serving: "1 cup"},
  {name: "Chicken Chettinad", brand: "Generic", calories: 420, protein: 28, carbs: 15, fat: 28, serving: "1 cup"},
  {name: "Keema Matar", brand: "Generic", calories: 390, protein: 25, carbs: 15, fat: 25, serving: "1 cup"},
  {name: "Shami Kebab", brand: "Generic", calories: 180, protein: 12, carbs: 10, fat: 10, serving: "2 pieces"},
  {name: "Galouti Kebab", brand: "Generic", calories: 220, protein: 10, carbs: 8, fat: 18, serving: "2 pieces"},
  {name: "Kadai Paneer", brand: "Generic", calories: 380, protein: 18, carbs: 12, fat: 28, serving: "1 cup"},
  {name: "Matar Paneer", brand: "Generic", calories: 350, protein: 16, carbs: 15, fat: 25, serving: "1 cup"},
  {name: "Kashmiri Dum Aloo", brand: "Generic", calories: 320, protein: 6, carbs: 30, fat: 20, serving: "1 cup"},
  {name: "Methi Malai Matar", brand: "Generic", calories: 300, protein: 10, carbs: 15, fat: 22, serving: "1 cup"},
  {name: "Vegetable Korma", brand: "Generic", calories: 280, protein: 8, carbs: 20, fat: 18, serving: "1 cup"},
  {name: "Dal Fry", brand: "Generic", calories: 220, protein: 10, carbs: 30, fat: 6, serving: "1 cup"},
  {name: "Lemon Rice", brand: "Generic", calories: 350, protein: 6, carbs: 60, fat: 9, serving: "1 cup"},
  {name: "Tamarind Rice (Pulihora)", brand: "Generic", calories: 380, protein: 7, carbs: 65, fat: 10, serving: "1 cup"},
  {name: "Curd Rice (Daddojanam)", brand: "Generic", calories: 300, protein: 8, carbs: 50, fat: 8, serving: "1 cup"},
  {name: "Chapati / Roti", brand: "Generic", calories: 100, protein: 3, carbs: 20, fat: 1, serving: "1 piece"},
  {name: "Rumali Roti", brand: "Generic", calories: 150, protein: 4, carbs: 30, fat: 1, serving: "1 piece"},
  {name: "Puttu with Kadala Curry", brand: "Generic", calories: 450, protein: 12, carbs: 70, fat: 12, serving: "1 serving"},
  {name: "Idiyappam (String Hoppers)", brand: "Generic", calories: 180, protein: 3, carbs: 40, fat: 1, serving: "3 pieces"},
  {name: "Medu Vada", brand: "Generic", calories: 150, protein: 5, carbs: 18, fat: 7, serving: "1 piece"},
  {name: "Rava Dosa", brand: "Generic", calories: 200, protein: 5, carbs: 30, fat: 7, serving: "1 dosa"},
  {name: "Aloo Tikki Chaat", brand: "Generic", calories: 350, protein: 8, carbs: 45, fat: 15, serving: "1 plate"},
  {name: "Sev Puri", brand: "Generic", calories: 300, protein: 7, carbs: 40, fat: 13, serving: "1 plate"},
  {name: "Dahi Puri", brand: "Generic", calories: 280, protein: 8, carbs: 35, fat: 12, serving: "1 plate"},
  {name: "Papdi Chaat", brand: "Generic", calories: 320, protein: 8, carbs: 45, fat: 13, serving: "1 plate"},
  {name: "Dabeli", brand: "Generic", calories: 300, protein: 6, carbs: 45, fat: 10, serving: "1 piece"},
  {name: "Mysore Bonda", brand: "Generic", calories: 220, protein: 6, carbs: 25, fat: 10, serving: "2 pieces"},
  {name: "Chicken 65", brand: "Generic", calories: 380, protein: 25, carbs: 15, fat: 25, serving: "100g"},
  {name: "Mutton Sukka", brand: "Generic", calories: 420, protein: 30, carbs: 8, fat: 30, serving: "100g"},
  {name: "Prawn Koliwada", brand: "Generic", calories: 350, protein: 20, carbs: 20, fat: 20, serving: "100g"},
  {name: "Modak", brand: "Generic", calories: 180, protein: 3, carbs: 25, fat: 8, serving: "1 piece"},
  {name: "Petha", brand: "Generic", calories: 120, protein: 1, carbs: 30, fat: 0, serving: "1 piece"},
  {name: "Soan Papdi", brand: "Generic", calories: 150, protein: 2, carbs: 20, fat: 7, serving: "25g"},
  {name: "Mysore Pak", brand: "Generic", calories: 250, protein: 3, carbs: 30, fat: 14, serving: "1 piece"},
  {name: "Kulfi", brand: "Generic", calories: 200, protein: 5, carbs: 25, fat: 9, serving: "1 stick"},
  {name: "Rabri", brand: "Generic", calories: 280, protein: 8, carbs: 35, fat: 12, serving: "100g"},
  {name: "Shrikhand", brand: "Generic", calories: 250, protein: 6, carbs: 30, fat: 12, serving: "100g"},
  {name: "Barfi", brand: "Generic", calories: 180, protein: 4, carbs: 20, fat: 9, serving: "1 piece"},
  {name: "Vegetable Pulao", brand: "Generic", calories: 300, protein: 7, carbs: 50, fat: 8, serving: "1 cup"},
  {name: "Malabar Parotta", brand: "Generic", calories: 250, protein: 5, carbs: 40, fat: 8, serving: "1 piece"},
  {name: "Bhindi Masala", brand: "Generic", calories: 150, protein: 4, carbs: 15, fat: 9, serving: "1 cup"},
  //indian chinese
  {name: "Gobi Manchurian (Gravy)", brand: "Generic", calories: 250, protein: 6, carbs: 30, fat: 12, serving: "1 cup"},
    {name: "Chicken Manchurian (Dry)", brand: "Generic", calories: 320, protein: 24, carbs: 15, fat: 18, serving: "1 cup"},
    {name: "Vegetable Hakka Noodles", brand: "Generic", calories: 350, protein: 10, carbs: 55, fat: 10, serving: "1 cup"},
    {name: "Chilli Paneer (Gravy)", brand: "Generic", calories: 380, protein: 18, carbs: 20, fat: 25, serving: "1 cup"},
    {name: "Schezwan Fried Rice (Veg)", brand: "Generic", calories: 380, protein: 8, carbs: 60, fat: 12, serving: "1 cup"},
    {name: "Dragon Chicken", brand: "Generic", calories: 420, protein: 28, carbs: 20, fat: 25, serving: "1 cup"},
    {name: "Veg Spring Roll (Fried)", brand: "Generic", calories: 190, protein: 5, carbs: 22, fat: 9, serving: "2 pieces"},
    {name: "American Chopsuey (Veg)", brand: "Generic", calories: 450, protein: 10, carbs: 60, fat: 20, serving: "1 plate"},
    {name: "Sweet Corn Soup (Veg)", brand: "Generic", calories: 120, protein: 4, carbs: 20, fat: 3, serving: "1 bowl"},
    {name: "Chicken Lollipop", brand: "Generic", calories: 400, protein: 30, carbs: 15, fat: 25, serving: "6 pieces"},
    {name: "Paneer 65", brand: "Generic", calories: 390, protein: 16, carbs: 25, fat: 25, serving: "1 cup"},
    {name: "Baby Corn Manchurian", brand: "Generic", calories: 280, protein: 6, carbs: 35, fat: 14, serving: "1 cup"},
    {name: "Chicken Momos (Steamed)", brand: "Generic", calories: 200, protein: 15, carbs: 20, fat: 7, serving: "6 pieces"},
    {name: "Singapore Noodles (Veg)", brand: "Generic", calories: 390, protein: 12, carbs: 60, fat: 12, serving: "1 cup"},
    {name: "Chilli Garlic Noodles (Veg)", brand: "Generic", calories: 370, protein: 9, carbs: 58, fat: 11, serving: "1 cup"},
    {name: "Mushroom Chilli", brand: "Generic", calories: 260, protein: 8, carbs: 25, fat: 14, serving: "1 cup"},
    {name: "Ginger Chicken (Gravy)", brand: "Generic", calories: 340, protein: 26, carbs: 12, fat: 20, serving: "1 cup"},
    {name: "Honey Chilli Potato", brand: "Generic", calories: 450, protein: 5, carbs: 70, fat: 18, serving: "1 plate"},
    {name: "Manchow Soup (Chicken)", brand: "Generic", calories: 150, protein: 10, carbs: 12, fat: 6, serving: "1 bowl"},
    {name: "Drums of Heaven", brand: "Generic", calories: 420, protein: 28, carbs: 20, fat: 25, serving: "6 pieces"},
    {name: "Crispy Chilli Baby Corn", brand: "Generic", calories: 320, protein: 5, carbs: 40, fat: 16, serving: "1 cup"},
    {name: "Veg Fried Momos", brand: "Generic", calories: 350, protein: 8, carbs: 40, fat: 18, serving: "6 pieces"},
    {name: "Chicken Schezwan Fried Rice", brand: "Generic", calories: 480, protein: 20, carbs: 60, fat: 18, serving: "1 cup"},
    {name: "Garlic Prawns", brand: "Generic", calories: 300, protein: 22, carbs: 10, fat: 18, serving: "1 cup"},
    {name: "Hot & Sour Soup (Veg)", brand: "Generic", calories: 110, protein: 3, carbs: 18, fat: 3, serving: "1 bowl"},
    {name: "Veg Manchurian Dry", brand: "Generic", calories: 280, protein: 7, carbs: 35, fat: 13, serving: "1 cup"},
    {name: "Paneer Schezwan Dry", brand: "Generic", calories: 420, protein: 18, carbs: 22, fat: 28, serving: "1 cup"},
    {name: "Chicken 65", brand: "Generic", calories: 400, protein: 30, carbs: 10, fat: 26, serving: "100g"},
    {name: "Egg Fried Rice", brand: "Generic", calories: 380, protein: 12, carbs: 55, fat: 12, serving: "1 cup"},
    {name: "Thread Paneer", brand: "Generic", calories: 400, protein: 15, carbs: 30, fat: 25, serving: "1 cup"},
    {name: "Chilli Fish (Gravy)", brand: "Generic", calories: 360, protein: 25, carbs: 15, fat: 22, serving: "1 cup"},
    {name: "Veg Balls in Hot Garlic Sauce", brand: "Generic", calories: 300, protein: 8, carbs: 40, fat: 14, serving: "1 cup"},
    {name: "Crispy Fried Wontons (Veg)", brand: "Generic", calories: 250, protein: 6, carbs: 30, fat: 12, serving: "6 pieces"},
    {name: "Lemon Coriander Soup (Veg)", brand: "Generic", calories: 90, protein: 2, carbs: 15, fat: 2, serving: "1 bowl"},
    {name: "Burnt Garlic Fried Rice (Veg)", brand: "Generic", calories: 360, protein: 7, carbs: 55, fat: 12, serving: "1 cup"},
    {name: "Kung Pao Paneer", brand: "Generic", calories: 400, protein: 17, carbs: 25, fat: 25, serving: "1 cup"},
    {name: "Date Pancakes with Ice Cream", brand: "Generic", calories: 450, protein: 6, carbs: 60, fat: 20, serving: "1 serving"},
    {name: "Veg Soft Noodles", brand: "Generic", calories: 330, protein: 9, carbs: 52, fat: 10, serving: "1 cup"},
    {name: "Chicken Talumein Soup", brand: "Generic", calories: 180, protein: 12, carbs: 20, fat: 6, serving: "1 bowl"},
    {name: "Stir-Fried Greens in Garlic Sauce", brand: "Generic", calories: 150, protein: 4, carbs: 15, fat: 8, serving: "1 cup"},
    {name: "Fish in Black Bean Sauce", brand: "Generic", calories: 340, protein: 24, carbs: 12, fat: 20, serving: "1 cup"},
    {name: "Triple Schezwan Rice (Veg)", brand: "Generic", calories: 550, protein: 12, carbs: 80, fat: 20, serving: "1 plate"},
    {name: "Chicken Fried Wontons", brand: "Generic", calories: 300, protein: 12, carbs: 30, fat: 15, serving: "6 pieces"},
    {name: "Paneer Satay", brand: "Generic", calories: 320, protein: 15, carbs: 15, fat: 22, serving: "4 skewers"},
    {name: "Crispy Spinach and Corn", brand: "Generic", calories: 280, protein: 6, carbs: 30, fat: 15, serving: "1 cup"},
    {name: "Cauliflower Pepper Salt", brand: "Generic", calories: 260, protein: 5, carbs: 25, fat: 15, serving: "1 cup"},
    {name: "Golden Fried Prawns", brand: "Generic", calories: 380, protein: 18, carbs: 25, fat: 22, serving: "6 pieces"},
    {name: "Thread Chicken", brand: "Generic", calories: 400, protein: 25, carbs: 20, fat: 25, serving: "1 cup"},
    {name: "Okra Chilli", brand: "Generic", calories: 220, protein: 4, carbs: 20, fat: 14, serving: "1 cup"},
    {name: "Chicken Clear Soup", brand: "Generic", calories: 90, protein: 10, carbs: 5, fat: 3, serving: "1 bowl"},
    //continental
    {name: "Grilled Chicken Breast", brand: "Generic", calories: 165, protein: 31, carbs: 0, fat: 4, serving: "100g"},
    {name: "Grilled Salmon", brand: "Generic", calories: 208, protein: 22, carbs: 0, fat: 13, serving: "100g"},
    {name: "Filet Mignon Steak", brand: "Generic", calories: 278, protein: 38, carbs: 0, fat: 13, serving: "150g"},
    {name: "Grilled Lamb Chops", brand: "Generic", calories: 282, protein: 24, carbs: 0, fat: 20, serving: "100g"},
    {name: "Roast Chicken", brand: "Generic", calories: 190, protein: 29, carbs: 0, fat: 8, serving: "100g"},
    {name: "Fish and Chips", brand: "Generic", calories: 550, protein: 30, carbs: 50, fat: 25, serving: "1 serving"},
    {name: "Beef Wellington", brand: "Generic", calories: 450, protein: 35, carbs: 20, fat: 25, serving: "1 slice"},
    {name: "Shepherd's Pie", brand: "Generic", calories: 420, protein: 28, carbs: 40, fat: 18, serving: "1 serving"},
    {name: "Chicken Kiev", brand: "Generic", calories: 420, protein: 30, carbs: 18, fat: 25, serving: "1 piece"},
    {name: "Chicken Cordon Bleu", brand: "Generic", calories: 360, protein: 30, carbs: 10, fat: 20, serving: "1 piece"},
    {name: "Wiener Schnitzel", brand: "Generic", calories: 350, protein: 25, carbs: 20, fat: 18, serving: "1 piece"},
    {name: "Coq au Vin", brand: "Generic", calories: 450, protein: 30, carbs: 18, fat: 28, serving: "1 cup"},
    {name: "Beef Bourguignon", brand: "Generic", calories: 480, protein: 40, carbs: 20, fat: 25, serving: "1 cup"},
    {name: "Beef Stroganoff", brand: "Generic", calories: 420, protein: 24, carbs: 15, fat: 25, serving: "1 cup"},
    {name: "Hungarian Goulash", brand: "Generic", calories: 370, protein: 35, carbs: 10, fat: 20, serving: "1 cup"},
    {name: "Chicken Marsala", brand: "Generic", calories: 390, protein: 30, carbs: 10, fat: 20, serving: "1 cup"},
    {name: "Spaghetti Carbonara", brand: "Generic", calories: 575, protein: 22, carbs: 60, fat: 25, serving: "1 cup"},
    {name: "Fettuccine Alfredo", brand: "Generic", calories: 400, protein: 11, carbs: 45, fat: 19, serving: "1 cup"},
    {name: "Lasagna Bolognese", brand: "Generic", calories: 450, protein: 30, carbs: 40, fat: 20, serving: "1 slice"},
    {name: "Vegetable Lasagna", brand: "Generic", calories: 350, protein: 15, carbs: 35, fat: 15, serving: "1 slice"},
    {name: "Mushroom Risotto", brand: "Generic", calories: 380, protein: 10, carbs: 50, fat: 15, serving: "1 cup"},
    {name: "Shrimp Scampi", brand: "Generic", calories: 320, protein: 25, carbs: 12, fat: 18, serving: "1 cup"},
    {name: "Seafood Paella", brand: "Generic", calories: 345, protein: 16, carbs: 45, fat: 10, serving: "1 cup"},
    {name: "Moussaka", brand: "Generic", calories: 320, protein: 15, carbs: 20, fat: 20, serving: "1 slice"},
    {name: "Quiche Lorraine", brand: "Generic", calories: 450, protein: 20, carbs: 30, fat: 30, serving: "1 slice"},
    {name: "Ratatouille", brand: "Generic", calories: 150, protein: 4, carbs: 20, fat: 7, serving: "1 cup"},
    {name: "Vegetable Au Gratin", brand: "Generic", calories: 250, protein: 10, carbs: 15, fat: 17, serving: "1 cup"},
    {name: "Caesar Salad", brand: "Generic", calories: 180, protein: 7, carbs: 8, fat: 12, serving: "1 cup"},
    {name: "Greek Salad", brand: "Generic", calories: 210, protein: 6, carbs: 10, fat: 16, serving: "1 cup"},
    {name: "Caprese Salad", brand: "Generic", calories: 280, protein: 14, carbs: 10, fat: 20, serving: "1 plate"},
    {name: "French Onion Soup", brand: "Generic", calories: 160, protein: 8, carbs: 18, fat: 6, serving: "1 cup"},
    {name: "Minestrone Soup", brand: "Generic", calories: 90, protein: 4, carbs: 15, fat: 1, serving: "1 cup"},
    {name: "Cream of Mushroom Soup", brand: "Generic", calories: 120, protein: 3, carbs: 9, fat: 7, serving: "1 cup"},
    {name: "Gazpacho", brand: "Generic", calories: 60, protein: 2, carbs: 10, fat: 1.5, serving: "1 cup"},
    {name: "New England Clam Chowder", brand: "Generic", calories: 200, protein: 9, carbs: 18, fat: 10, serving: "1 cup"},
    {name: "Bruschetta", brand: "Generic", calories: 180, protein: 5, carbs: 20, fat: 10, serving: "4 pieces"},
    {name: "Garlic Bread", brand: "Generic", calories: 150, protein: 5, carbs: 15, fat: 7, serving: "1 slice"},
    {name: "Mashed Potatoes", brand: "Generic", calories: 210, protein: 4, carbs: 35, fat: 7, serving: "1 cup"},
    {name: "French Fries", brand: "Generic", calories: 312, protein: 3, carbs: 41, fat: 15, serving: "1 medium serving"},
    {name: "Macaroni and Cheese", brand: "Generic", calories: 400, protein: 15, carbs: 45, fat: 18, serving: "1 cup"},
    {name: "Eggs Benedict", brand: "Generic", calories: 300, protein: 15, carbs: 20, fat: 20, serving: "1 serving (2 halves)"},
    {name: "Pancakes with Maple Syrup", brand: "Generic", calories: 350, protein: 8, carbs: 60, fat: 9, serving: "2 medium pancakes"},
    {name: "Waffles with Berries", brand: "Generic", calories: 400, protein: 10, carbs: 65, fat: 12, serving: "2 waffles"},
    {name: "Tiramisu", brand: "Generic", calories: 450, protein: 8, carbs: 45, fat: 26, serving: "1 slice"},
    {name: "Crème Brûlée", brand: "Generic", calories: 390, protein: 6, carbs: 35, fat: 25, serving: "1 ramekin"},
    {name: "Chocolate Mousse", brand: "Generic", calories: 250, protein: 4, carbs: 20, fat: 18, serving: "1/2 cup"},
    {name: "Apple Pie", brand: "Generic", calories: 410, protein: 4, carbs: 60, fat: 19, serving: "1 slice"},
    {name: "Cheesecake", brand: "Generic", calories: 400, protein: 7, carbs: 35, fat: 26, serving: "1 slice"},
    {name: "Black Forest Cake", brand: "Generic", calories: 380, protein: 5, carbs: 50, fat: 18, serving: "1 slice"},
    {name: "Potato Au Gratin", brand: "Generic", calories: 220, protein: 8, carbs: 20, fat: 12, serving: "1 cup"},
    
    // Snacks & Packaged Foods
    {name: "Maggi Noodles", brand: "Maggi", calories: 385, protein: 9.8, carbs: 60, fat: 12, serving: "1 pack (75g)"},
    {name: "Maggi", brand: "Maggi", calories: 385, protein: 9.8, carbs: 60, fat: 12, serving: "1 pack (75g)"},
    {name: "2-minute Noodles", brand: "Maggi", calories: 385, protein: 9.8, carbs: 60, fat: 12, serving: "1 pack (75g)"},
    {name: "Lays Chips", brand: "Lay's", calories: 160, protein: 2, carbs: 15, fat: 10, serving: "1 oz (28g)"},
    {name: "Oreo Cookies", brand: "Oreo", calories: 160, protein: 2, carbs: 25, fat: 7, serving: "3 cookies"},
    {name: "KitKat", brand: "Nestlé", calories: 218, protein: 3, carbs: 26, fat: 11, serving: "1 bar (42g)"},
    {name: "Coca Cola", brand: "Coca-Cola", calories: 140, protein: 0, carbs: 39, fat: 0, serving: "1 can (355ml)"},
    {name: "Coke", brand: "Coca-Cola", calories: 140, protein: 0, carbs: 39, fat: 0, serving: "1 can (355ml)"},
    {
      name: "Lay's Classic Potato Chips",
      brand: "Lay's",
      calories: 160,
      protein: 2,
      carbs: 15,
      fat: 10,
      serving: "28g (about 15 chips)"
  },
  {
      name: "Oreo Cookies",
      brand: "Nabisco",
      calories: 160,
      protein: 1,
      carbs: 25,
      fat: 7,
      serving: "3 cookies (34g)"
  },
  {
      name: "Pringles Original",
      brand: "Pringles",
      calories: 150,
      protein: 1,
      carbs: 15,
      fat: 9,
      serving: "28g (about 15 crisps)"
  },
  {
      name: "Nutella Hazelnut Spread",
      brand: "Nutella",
      calories: 200,
      protein: 2,
      carbs: 21,
      fat: 12,
      serving: "2 tbsp (37g)"
  },
  {
      name: "Quaker Instant Oatmeal, Apples & Cinnamon",
      brand: "Quaker",
      calories: 160,
      protein: 4,
      carbs: 29,
      fat: 2,
      serving: "1 packet (43g)"
  },
  {
      name: "Kellogg's Corn Flakes",
      brand: "Kellogg's",
      calories: 100,
      protein: 2,
      carbs: 24,
      fat: 0,
      serving: "1 cup (28g)"
  },
  {
      name: "Cadbury Bournvita",
      brand: "Cadbury",
      calories: 78,
      protein: 1.4,
      carbs: 15.6,
      fat: 0.6,
      serving: "20g"
  },
  {
      name: "Cadbury Dairy Milk Chocolate",
      brand: "Cadbury",
      calories: 210,
      protein: 3,
      carbs: 24,
      fat: 13,
      serving: "40g bar"
  },
  {
      name: "Tropicana Orange Juice",
      brand: "Tropicana",
      calories: 110,
      protein: 2,
      carbs: 26,
      fat: 0,
      serving: "240ml"
  },
  {
      name: "Maggi 2-Minute Noodles (Masala)",
      brand: "Maggi",
      calories: 320,
      protein: 7,
      carbs: 45,
      fat: 12,
      serving: "1 packet (70g)"
  },
  {
      name: "Britannia Marie Gold Biscuits",
      brand: "Britannia",
      calories: 50,
      protein: 0.8,
      carbs: 8,
      fat: 1.5,
      serving: "1 biscuit (11g)"
  },
  {
      name: "Amul Butter",
      brand: "Amul",
      calories: 74,
      protein: 0.1,
      carbs: 0,
      fat: 8.2,
      serving: "10g"
  },
  {
      name: "Tata Salt",
      brand: "Tata",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      serving: "1g"
  },
  {
      name: "Coca-Cola Classic",
      brand: "Coca-Cola",
      calories: 140,
      protein: 0,
      carbs: 39,
      fat: 0,
      serving: "355ml can"
  },
  {
      name: "Hershey's Kisses (Milk Chocolate)",
      brand: "Hershey's",
      calories: 200,
      protein: 3,
      carbs: 24,
      fat: 12,
      serving: "9 pieces (41g)"
  },
  {
      name: "Hellmann's Real Mayonnaise",
      brand: "Hellmann's",
      calories: 90,
      protein: 0,
      carbs: 0,
      fat: 10,
      serving: "1 tbsp (14g)"
  },
  {
      name: "Sunfeast Dark Fantasy Choco Fills",
      brand: "Sunfeast",
      calories: 75,
      protein: 0.8,
      carbs: 10,
      fat: 3.5,
      serving: "1 cookie (15g)"
  },
  {
      name: "Britannia Cheese Slices",
      brand: "Britannia",
      calories: 65,
      protein: 4,
      carbs: 0.5,
      fat: 5,
      serving: "1 slice (20g)"
  },
  {
      name: "Cadbury Bournville Dark Chocolate",
      brand: "Cadbury",
      calories: 210,
      protein: 2,
      carbs: 24,
      fat: 13,
      serving: "40g"
  },
  {
      name: "Lay's Magic Masala Potato Chips",
      brand: "Lay's",
      calories: 160,
      protein: 2,
      carbs: 15,
      fat: 10,
      serving: "28g"
  },
  {
      name: "Tata Tea Gold",
      brand: "Tata Tea",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      serving: "1 tea bag"
  },
  {
      name: "MTR Ready to Eat Poha",
      brand: "MTR",
      calories: 240,
      protein: 4,
      carbs: 42,
      fat: 6,
      serving: "1 pack (80g)"
  },
  {
      name: "Dabur Honey",
      brand: "Dabur",
      calories: 64,
      protein: 0,
      carbs: 17,
      fat: 0,
      serving: "1 tbsp (21g)"
  },
  {
      name: "Nestlé Milkmaid",
      brand: "Nestlé",
      calories: 321,
      protein: 8,
      carbs: 55,
      fat: 8,
      serving: "100g"
  },
  {
      name: "Nescafé Classic Instant Coffee",
      brand: "Nescafé",
      calories: 4,
      protein: 0.2,
      carbs: 0.8,
      fat: 0,
      serving: "1 tsp (2g)"
  },
  {
      name: "Parle-G Biscuits",
      brand: "Parle",
      calories: 450,
      protein: 7,
      carbs: 78,
      fat: 12,
      serving: "100g"
  },
  {
      name: "Snickers Chocolate Bar",
      brand: "Snickers",
      calories: 250,
      protein: 4,
      carbs: 33,
      fat: 12,
      serving: "1 bar (52.7g)"
  },
  {
      name: "Uncle Chipps (Spicy Treat)",
      brand: "Uncle Chipps",
      calories: 160,
      protein: 2,
      carbs: 15,
      fat: 10,
      serving: "28g"
  },
  {
      name: "Haldiram's Aloo Bhujia",
      brand: "Haldiram's",
      calories: 170,
      protein: 3,
      carbs: 14,
      fat: 11,
      serving: "28g"
  },
  {
      name: "Amul Kool Kesar",
      brand: "Amul",
      calories: 170,
      protein: 5,
      carbs: 25,
      fat: 5,
      serving: "1 bottle (180ml)"
  },
  {
      name: "Cadbury 5 Star",
      brand: "Cadbury",
      calories: 100,
      protein: 1,
      carbs: 15,
      fat: 4,
      serving: "1 bar (20g)"
  },
  {
      name: "Tang Orange Drink Powder",
      brand: "Tang",
      calories: 90,
      protein: 0,
      carbs: 23,
      fat: 0,
      serving: "2 tbsp (25g)"
  },
  {
      name: "Bingo! Mad Angles (Masala Madness)",
      brand: "Bingo!",
      calories: 140,
      protein: 2,
      carbs: 16,
      fat: 8,
      serving: "25g"
  },
  {
      name: "Kissan Mixed Fruit Jam",
      brand: "Kissan",
      calories: 54,
      protein: 0,
      carbs: 13.5,
      fat: 0,
      serving: "1 tbsp (20g)"
  },
  {
      name: "Yippee! Magic Masala Noodles",
      brand: "Yippee!",
      calories: 300,
      protein: 6,
      carbs: 42,
      fat: 12,
      serving: "1 block (60g)"
  },
  {
      name: "Real Fruit Juice (Mixed Fruit)",
      brand: "Réal",
      calories: 120,
      protein: 0.4,
      carbs: 30,
      fat: 0,
      serving: "200ml"
  },
  {
      name: "Britannia Good Day Butter Cookies",
      brand: "Britannia",
      calories: 100,
      protein: 1,
      carbs: 12,
      fat: 5,
      serving: "2 cookies (20g)"
  },
  {
      name: "Tata Sampann Toor Dal",
      brand: "Tata Sampann",
      calories: 343,
      protein: 22,
      carbs: 63,
      fat: 1.5,
      serving: "100g"
  },
  {
      name: "Cadbury Gems",
      brand: "Cadbury",
      calories: 40,
      protein: 0.4,
      carbs: 6,
      fat: 1.5,
      serving: "1 pack (8g)"
  },
  {
      name: "Patanjali Amla Juice",
      brand: "Patanjali",
      calories: 4,
      protein: 0.1,
      carbs: 1,
      fat: 0,
      serving: "10ml"
  },
  {
      name: "MTR Ready to Eat Paneer Butter Masala",
      brand: "MTR",
      calories: 240,
      protein: 8,
      carbs: 12,
      fat: 18,
      serving: "150g"
  },
  {
      name: "Amul Cheese Spread",
      brand: "Amul",
      calories: 60,
      protein: 3,
      carbs: 1,
      fat: 5,
      serving: "1 tbsp (15g)"
  },
  {
      name: "Yakult Probiotic Drink",
      brand: "Yakult",
      calories: 50,
      protein: 0.8,
      carbs: 11,
      fat: 0,
      serving: "1 bottle (65ml)"
  },
  {
      name: "Chobani Greek Yogurt (Plain)",
      brand: "Chobani",
      calories: 90,
      protein: 17,
      carbs: 5,
      fat: 0,
      serving: "1 container (170g)"
  },
  {
      name: "Banza Chickpea Pasta",
      brand: "Banza",
      calories: 190,
      protein: 11,
      carbs: 35,
      fat: 3,
      serving: "56g"
  },
  {
      name: "Kind Bar (Dark Chocolate Nuts & Sea Salt)",
      brand: "Kind",
      calories: 200,
      protein: 6,
      carbs: 16,
      fat: 15,
      serving: "1 bar (40g)"
  },
  {
      name: "Ben & Jerry's Chocolate Fudge Brownie Ice Cream",
      brand: "Ben & Jerry's",
      calories: 360,
      protein: 5,
      carbs: 47,
      fat: 17,
      serving: "1/2 cup (106g)"
  },
  {
      name: "Heinz Tomato Ketchup",
      brand: "Heinz",
      calories: 20,
      protein: 0,
      carbs: 5,
      fat: 0,
      serving: "1 tbsp (17g)"
  },
  {
      name: "Skippy Creamy Peanut Butter",
      brand: "Skippy",
      calories: 190,
      protein: 7,
      carbs: 7,
      fat: 16,
      serving: "2 tbsp (32g)"
  },
  {
      name: "Nature Valley Crunchy Oats 'n Honey Granola Bar",
      brand: "Nature Valley",
      calories: 190,
      protein: 3,
      carbs: 29,
      fat: 7,
      serving: "2 bars (42g)"
  },
  {
    name: "Maggi 2-Minute Noodles (Masala)",
    brand: "Maggi",
    calories: 320,
    protein: 7,
    carbs: 45,
    fat: 12,
    serving: "1 packet (70g)"
},
{
    name: "Parle-G Biscuits",
    brand: "Parle",
    calories: 452,
    protein: 7,
    carbs: 78,
    fat: 12.5,
    serving: "100g"
},
{
    name: "Britannia Good Day Butter Cookies",
    brand: "Britannia",
    calories: 496,
    protein: 6,
    carbs: 70,
    fat: 22,
    serving: "100g"
},
{
    name: "Lay's India's Magic Masala",
    brand: "Lay's",
    calories: 545,
    protein: 7.1,
    carbs: 53.6,
    fat: 33.7,
    serving: "100g"
},
{
    name: "Kurkure Masala Munch",
    brand: "Kurkure",
    calories: 558,
    protein: 6.5,
    carbs: 55.4,
    fat: 34.6,
    serving: "100g"
},
{
    name: "Cadbury Dairy Milk Chocolate",
    brand: "Cadbury",
    calories: 529,
    protein: 8.1,
    carbs: 58.9,
    fat: 29,
    serving: "100g"
},
{
    name: "Amul Butter",
    brand: "Amul",
    calories: 722,
    protein: 0.8,
    carbs: 0,
    fat: 82,
    serving: "100g"
},
{
    name: "Saffola Masala Oats (Classic Masala)",
    brand: "Saffola",
    calories: 386,
    protein: 11,
    carbs: 66.8,
    fat: 7.9,
    serving: "100g"
},
{
    name: "Haldiram's Aloo Bhujia",
    brand: "Haldiram's",
    calories: 597,
    protein: 12,
    carbs: 42,
    fat: 42,
    serving: "100g"
},
{
    name: "Britannia Marie Gold Biscuits",
    brand: "Britannia",
    calories: 435,
    protein: 8,
    carbs: 76,
    fat: 11,
    serving: "100g"
},
{
    name: "Yippee! Magic Masala Noodles",
    brand: "Yippee!",
    calories: 450,
    protein: 9,
    carbs: 62,
    fat: 18,
    serving: "100g (dry)"
},
{
    name: "Kissan Fresh Tomato Ketchup",
    brand: "Kissan",
    calories: 113,
    protein: 1.2,
    carbs: 26,
    fat: 0.1,
    serving: "100g"
},
{
    name: "Tata Salt",
    brand: "Tata",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    serving: "1g"
},
{
    name: "Paper Boat Aamras",
    brand: "Paper Boat",
    calories: 60,
    protein: 0.2,
    carbs: 15,
    fat: 0,
    serving: "100ml"
},
{
    name: "Too Yumm! Karare (Chilli Achari)",
    brand: "Too Yumm!",
    calories: 489,
    protein: 6.8,
    carbs: 60,
    fat: 24,
    serving: "100g"
},
{
    name: "Uncle Chipps (Spicy Treat)",
    brand: "Uncle Chipps",
    calories: 551,
    protein: 6.9,
    carbs: 52.8,
    fat: 34.3,
    serving: "100g"
},
{
    name: "Cadbury 5 Star",
    brand: "Cadbury",
    calories: 452,
    protein: 4.6,
    carbs: 68.3,
    fat: 18.5,
    serving: "100g"
},
{
    name: "Nestlé KitKat",
    brand: "Nestlé",
    calories: 518,
    protein: 6.3,
    carbs: 63.5,
    fat: 26.8,
    serving: "100g"
},
{
    name: "Thums Up",
    brand: "Coca-Cola",
    calories: 40,
    protein: 0,
    carbs: 10,
    fat: 0,
    serving: "100ml"
},
{
    name: "Frooti Mango Drink",
    brand: "Frooti",
    calories: 65,
    protein: 0,
    carbs: 16.2,
    fat: 0,
    serving: "100ml"
},
{
    name: "Patanjali Atta Noodles (Classic)",
    brand: "Patanjali",
    calories: 427,
    protein: 10,
    carbs: 65,
    fat: 14,
    serving: "100g (dry)"
},
{
    name: "Amul Kool Kesar",
    brand: "Amul",
    calories: 96,
    protein: 3.1,
    carbs: 14.2,
    fat: 3,
    serving: "100ml"
},
{
    name: "Horlicks Classic Malt",
    brand: "Horlicks",
    calories: 377,
    protein: 11,
    carbs: 79,
    fat: 2,
    serving: "100g"
},
{
    name: "Sunfeast Dark Fantasy Choco Fills",
    brand: "Sunfeast",
    calories: 498,
    protein: 5.6,
    carbs: 66.4,
    fat: 24,
    serving: "100g"
},
{
    name: "Aashirvaad Select Sharbati Atta",
    brand: "Aashirvaad",
    calories: 360,
    protein: 12,
    carbs: 75,
    fat: 1.5,
    serving: "100g"
},
{
    name: "Dabur Honey",
    brand: "Dabur",
    calories: 320,
    protein: 0,
    carbs: 80,
    fat: 0,
    serving: "100g"
},
{
    name: "Britannia Bourbon",
    brand: "Britannia",
    calories: 490,
    protein: 6,
    carbs: 68,
    fat: 22,
    serving: "100g"
},
{
    name: "Mother Dairy Classic Dahi",
    brand: "Mother Dairy",
    calories: 60,
    protein: 3.5,
    carbs: 4.5,
    fat: 3,
    serving: "100g"
},
{
    name: "Nestlé Milkmaid",
    brand: "Nestlé",
    calories: 334,
    protein: 7.9,
    carbs: 56.7,
    fat: 8.7,
    serving: "100g"
},
{
    name: "Monaco Salted Biscuits",
    brand: "Parle",
    calories: 492,
    protein: 8,
    carbs: 67,
    fat: 21,
    serving: "100g"
},
{
    name: "Amul Cheese Slices",
    brand: "Amul",
    calories: 313,
    protein: 20,
    carbs: 2,
    fat: 25,
    serving: "100g"
},
{
    name: "Real Fruit Juice (Mixed Fruit)",
    brand: "Réal",
    calories: 60,
    protein: 0.2,
    carbs: 15,
    fat: 0,
    serving: "100ml"
},
{
    name: "Bru Instant Coffee",
    brand: "Bru",
    calories: 353,
    protein: 17.5,
    carbs: 69.5,
    fat: 0.1,
    serving: "100g"
},
{
    name: "Tata Sampann Toor Dal",
    brand: "Tata Sampann",
    calories: 343,
    protein: 22,
    carbs: 63,
    fat: 1.5,
    serving: "100g"
},
{
    name: "Cadbury Bournville (Rich Cocoa)",
    brand: "Cadbury",
    calories: 554,
    protein: 7.8,
    carbs: 51.5,
    fat: 35,
    serving: "100g"
},
{
    name: "Britannia NutriChoice Digestive Biscuits",
    brand: "Britannia",
    calories: 482,
    protein: 8,
    carbs: 68,
    fat: 20,
    serving: "100g"
},
{
    name: "MTR Ready to Eat Poha",
    brand: "MTR",
    calories: 366,
    protein: 8,
    carbs: 64,
    fat: 9,
    serving: "100g (dry)"
},
{
    name: "Bikaji Aloo Bhujia",
    brand: "Bikaji",
    calories: 590,
    protein: 11,
    carbs: 40,
    fat: 42,
    serving: "100g"
},
{
    name: "Patanjali Honey",
    brand: "Patanjali",
    calories: 320,
    protein: 0,
    carbs: 80,
    fat: 0,
    serving: "100g"
},
{
    name: "Kwality Wall's Cornetto (Butterscotch)",
    brand: "Kwality Wall's",
    calories: 248,
    protein: 3.3,
    carbs: 33.2,
    fat: 11.4,
    serving: "1 cone (115ml)"
},
{
    name: "Epigamia Greek Yogurt (Strawberry)",
    brand: "Epigamia",
    calories: 104,
    protein: 8,
    carbs: 12,
    fat: 2.6,
    serving: "100g"
},
{
    name: "Gits Ready to Eat Dal Tadka",
    brand: "Gits",
    calories: 133,
    protein: 5,
    carbs: 15,
    fat: 6,
    serving: "100g"
},
{
    name: "Amul Masti Dahi",
    brand: "Amul",
    calories: 62,
    protein: 3.5,
    carbs: 4.4,
    fat: 3.1,
    serving: "100g"
},
{
    name: "Brooke Bond Taj Mahal Tea",
    brand: "Brooke Bond",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    serving: "1 tea bag"
},
{
    name: "Tang Orange Drink Powder",
    brand: "Tang",
    calories: 380,
    protein: 0,
    carbs: 95,
    fat: 0,
    serving: "100g"
},
{
    name: "Act II Classic Salted Popcorn",
    brand: "Act II",
    calories: 460,
    protein: 10,
    carbs: 53,
    fat: 23,
    serving: "100g (unpopped)"
},
{
    name: "Snickers Chocolate Bar",
    brand: "Snickers",
    calories: 488,
    protein: 8.6,
    carbs: 60.5,
    fat: 22.5,
    serving: "100g"
},
{
    name: "Yakult Probiotic Drink",
    brand: "Yakult",
    calories: 77,
    protein: 1.3,
    carbs: 17.7,
    fat: 0,
    serving: "100ml"
},
{
    name: "Hide & Seek Chocolate Chip Cookies",
    brand: "Parle",
    calories: 511,
    protein: 6.5,
    carbs: 66,
    fat: 25,
    serving: "100g"
},
{
    name: "India Gate Basmati Rice",
    brand: "India Gate",
    calories: 350,
    protein: 8,
    carbs: 78,
    fat: 0.5,
    serving: "100g (uncooked)"
},
    
    // Breakfast Items
    {name: "Cornflakes", brand: "Kellogg's", calories: 110, protein: 2, carbs: 24, fat: 0, serving: "1 cup (30g)"},
    {name: "Granola", brand: "Generic", calories: 150, protein: 4, carbs: 32, fat: 3, serving: "1/3 cup (30g)"},
    {name: "Pancakes", brand: "Generic", calories: 227, protein: 6, carbs: 28, fat: 10, serving: "2 medium"},
    {name: "Waffles", brand: "Generic", calories: 218, protein: 6, carbs: 25, fat: 11, serving: "2 pieces"},
    
    // Beverages
    {name: "Coffee", brand: "Generic", calories: 5, protein: 0.3, carbs: 1, fat: 0, serving: "1 cup (240ml)"},
    {name: "Green Tea", brand: "Generic", calories: 2, protein: 0, carbs: 0, fat: 0, serving: "1 cup (240ml)"},
    {name: "Orange Juice", brand: "Generic", calories: 112, protein: 1.7, carbs: 26, fat: 0.5, serving: "1 cup (248ml)"},
    {name: "Sports Drink", brand: "Gatorade", calories: 80, protein: 0, carbs: 21, fat: 0, serving: "12 fl oz (355ml)"},
    
    // Restaurant Items
    {name: "Greek Salad", brand: "Generic", calories: 180, protein: 6, carbs: 12, fat: 12, serving: "1 cup"},
    {name: "Sushi", brand: "Generic", calories: 200, protein: 9, carbs: 37, fat: 1.5, serving: "6 pieces"},
    {name: "Tacos", brand: "Generic", calories: 220, protein: 12, carbs: 18, fat: 12, serving: "2 tacos"},
    {name: "Pasta Carbonara", brand: "Generic", calories: 420, protein: 18, carbs: 45, fat: 18, serving: "1 cup"},
    
    // Starbucks Items
    {name: "Caffe Latte", brand: "Starbucks", calories: 190, protein: 12, carbs: 18, fat: 7, serving: "Grande (16oz)"},
    {name: "Cappuccino", brand: "Starbucks", calories: 120, protein: 8, carbs: 12, fat: 4, serving: "Grande (16oz)"},
    {name: "Frappuccino", brand: "Starbucks", calories: 420, protein: 5, carbs: 66, fat: 16, serving: "Grande (16oz)"},
    
    // More Fast Food
    {name: "Whopper", brand: "Burger King", calories: 660, protein: 28, carbs: 49, fat: 40, serving: "1 sandwich"},
    {name: "Chicken Sandwich", brand: "KFC", calories: 480, protein: 22, carbs: 45, fat: 22, serving: "1 sandwich"},
    
    // Desserts
    {name: "Ice Cream", brand: "Generic", calories: 207, protein: 3.5, carbs: 24, fat: 11, serving: "1/2 cup (66g)"},
    {name: "Chocolate Cake", brand: "Generic", calories: 235, protein: 3, carbs: 35, fat: 10, serving: "1 slice"},
    {name: "Apple Pie", brand: "Generic", calories: 296, protein: 2.4, carbs: 43, fat: 14, serving: "1 slice"},
    
    // Nuts & Seeds
    {name: "Walnuts", brand: "Generic", calories: 185, protein: 4.3, carbs: 3.9, fat: 18.5, serving: "1 oz (28g)"},
    {name: "Cashews", brand: "Generic", calories: 157, protein: 5.2, carbs: 8.6, fat: 12.4, serving: "1 oz (28g)"},
    {name: "Sunflower Seeds", brand: "Generic", calories: 165, protein: 5.8, carbs: 6.8, fat: 14, serving: "1 oz (28g)"},
    
    // Proteins
    {name: "Tuna", brand: "Generic", calories: 154, protein: 25, carbs: 0, fat: 5.3, serving: "100g"},
    {name: "Shrimp", brand: "Generic", calories: 106, protein: 20, carbs: 0.8, fat: 1.7, serving: "100g"},
    {name: "Turkey", brand: "Generic", calories: 135, protein: 25, carbs: 0, fat: 3.2, serving: "100g"},
    {name: "Tofu", brand: "Generic", calories: 76, protein: 8, carbs: 1.9, fat: 4.8, serving: "100g"},
    
    // Grains & Legumes
    {name: "Quinoa", brand: "Generic", calories: 222, protein: 8, carbs: 39, fat: 3.6, serving: "1 cup cooked (185g)"},
    {name: "Brown Rice", brand: "Generic", calories: 216, protein: 5, carbs: 45, fat: 1.8, serving: "1 cup cooked (195g)"},
    {name: "Black Beans", brand: "Generic", calories: 227, protein: 15, carbs: 41, fat: 0.9, serving: "1 cup cooked (172g)"},
    {name: "Chickpeas", brand: "Generic", calories: 269, protein: 15, carbs: 45, fat: 4.3, serving: "1 cup cooked (164g)"}
  ],

  shoppingList: [
    {
      id: 1, name: "Apples", category: "Fruits", quantity: "1kg", checked: false
    },
    {
      id: 2, name: "Spinach", category: "Vegetables", quantity: "250g", checked: true
    },
    {
      id: 3, name: "Cheese", category: "Dairy", quantity: "200g", checked: false
    },
    {
      id: 4, name: "Pasta", category: "Grains", quantity: "500g", checked: false
    }
  ],

  mealPlannerColumns: [
    {id: "breakfast", name: "Breakfast", icon: "🌅", deletable: false},
    {id: "lunch", name: "Lunch", icon: "☀️", deletable: false},
    {id: "dinner", name: "Dinner", icon: "🌙", deletable: false},
    {id: "snacks", name: "Snacks", icon: "🍿", deletable: true}
  ],

  mealPlan: {
    "Monday": { "breakfast": {recipeId: 4, servings: 1}, "lunch": {recipeId: 2, servings: 2}, "dinner": {recipeId: 1, servings: 4}, "snacks": null },
    "Tuesday": { "breakfast": {recipeId: 4, servings: 1}, "lunch": null, "dinner": null, "snacks": {recipeId: 3, servings: 2} },
    "Wednesday": { "breakfast": null, "lunch": null, "dinner": {recipeId: 5, servings: 4}, "snacks": null },
    "Thursday": { "breakfast": null, "lunch": null, "dinner": null, "snacks": null },
    "Friday": { "breakfast": null, "lunch": {recipeId: 2, servings: 2}, "dinner": null, "snacks": null },
    "Saturday": { "breakfast": null, "lunch": null, "dinner": null, "snacks": null },
    "Sunday": { "breakfast": null, "lunch": null, "dinner": null, "snacks": null }
  },

  moodQuestions: [
    {
      id: 1, 
      question: "How's your energy level today?",
      options: [
        {emoji: "😴", label: "Tired", value: "tired"},
        {emoji: "⚡", label: "Energetic", value: "energetic"}, 
        {emoji: "😌", label: "Calm", value: "calm"}
      ]
    },
    {
      id: 2,
      question: "What kind of meal are you craving?",
      options: [
        {emoji: "🍃", label: "Light", value: "light"},
        {emoji: "🥘", label: "Hearty", value: "hearty"},
        {emoji: "🛋️", label: "Comfort", value: "comfort"}
      ]
    },
    {
      id: 3,
      question: "How much time do you have?",
      options: [
        {emoji: "⏰", label: "Quick", value: "quick"},
        {emoji: "🕐", label: "Moderate", value: "moderate"},
        {emoji: "🕒", label: "Leisurely", value: "leisurely"}
      ]
    },
    {
      id: 4,
      question: "Feeling adventurous with flavors?",
      options: [
        {emoji: "🏠", label: "Familiar", value: "familiar"},
        {emoji: "🌍", label: "International", value: "international"},
        {emoji: "🧪", label: "Experimental", value: "experimental"}
      ]
    }
  ],

  nutritionData: {
    daily: { consumed: 1850, goal: 2000, protein: 85, carbs: 230, fat: 65 },
    weekly: [1800, 1950, 2100, 1850, 1900, 2050, 1850]
  }
};

// Global State
let currentSection = 'dashboard';
let currentQuestionIndex = 0;
let moodAnswers = [];
let pantrySelections = [];
let isListening = false;
let recognition = null;
let calorieChart = null;
let weeklyChart = null;
let currentMealSlot = null; // For meal planner modal
let currentNutritionTab = 'daily'; // For nutrition tabs

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('🛒 SmartCart+ Loading...');
  
  try {
    initializeApp();
    console.log('✅ SmartCart+ loaded successfully!');
  } catch (error) {
    console.error('❌ Error during initialization:', error);
  }
});

function initializeApp() {
  // Load saved data
  loadSavedData();
  
  // Initialize UI
  updateBudgetDisplay();
  updateStatsDisplay();
  updateUserDisplay();
  
  // Setup all components
  setupNavigation();
  setupDashboard();
  setupWhatCanCook();
  setupMoodBites();
  setupPantry();
  setupMealPlanner();
  setupShopping();
  setupNutrition();
  setupRecipes();
  setupProfile();
  setupAIChatbot();
  setupModals();
  
  // Show initial section
  showSection('dashboard');
}
// Chatbot short-term state for multi-turn intents
const chatState = {
  pendingMeal: null // { recipeId, recipeName, day?, expect: 'day' | 'slot' }
};

// Navigation System
function setupNavigation() {
  // Side navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      if (section) showSection(section);
    });
  });

  // Bottom navigation links
  document.querySelectorAll('.bottom-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      if (section) showSection(section);
    });
  });

  // Action buttons
  document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      if (section) showSection(section);
    });
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const sideNav = document.getElementById('sideNav');
  
  if (navToggle && sideNav) {
    navToggle.addEventListener('click', function() {
      sideNav.classList.toggle('nav-open');
    });
  }
}

function showSection(sectionName) {
  console.log('📄 Showing section:', sectionName);
  
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Show target section
  const targetSection = document.getElementById(sectionName + '-section');
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionName;

    // Update navigation active states
    document.querySelectorAll('.nav-link, .bottom-nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === sectionName) {
        link.classList.add('active');
      }
    });

    // Render section content
    setTimeout(() => {
      renderSection(sectionName);
    }, 50);

    // Close mobile nav
    const sideNav = document.getElementById('sideNav');
    if (sideNav) {
      sideNav.classList.remove('nav-open');
    }
  }
}

function renderSection(sectionName) {
  switch(sectionName) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'what-can-cook':
      renderWhatCanCook();
      break;
    case 'moodbites':
      renderMoodBites();
      break;
    case 'pantry':
      renderPantry();
      break;
    case 'meal-planner':
      renderMealPlanner();
      break;
    case 'shopping':
      renderShopping();
      break;
    case 'nutrition':
      renderNutrition();
      break;
    case 'recipes':
      renderRecipes();
      break;
    case 'profile':
      renderProfile();
      break;
  }
}

// Dashboard Functions
function setupDashboard() {
  // Dashboard is mostly static, rendered on load
}

function renderDashboard() {
  updateStatsDisplay();
  renderAlerts();
}

function renderAlerts() {
  const alertList = document.getElementById('alertList');
  if (!alertList) return;

  const criticalItems = appData.pantryItems.filter(item => 
    item.status === 'critical' || item.status === 'warning'
  );

  alertList.innerHTML = criticalItems.map(item => `
    <div class="alert-item ${item.status}">
      <div class="alert-content">
        <strong>${item.emoji} ${item.name}</strong> expires in ${item.expiry}
      </div>
      <button class="btn btn--sm btn--primary" onclick="addToShoppingList('${item.name}')">
        Add to Cart
      </button>
    </div>
  `).join('');
}

// What Can I Cook Functions
function setupWhatCanCook() {
  const findRecipesBtn = document.getElementById('findRecipesBtn');
  const ingredientSearch = document.getElementById('ingredientSearch');
  const categoryFilter = document.getElementById('categoryFilter');

  if (findRecipesBtn) {
    findRecipesBtn.addEventListener('click', findMatchingRecipes);
  }

  if (ingredientSearch) {
    ingredientSearch.addEventListener('input', filterIngredients);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterIngredients);
  }
}

function renderWhatCanCook() {
  renderIngredientGrid();
  updateSelectionCounter();
}

function renderIngredientGrid() {
  const grid = document.getElementById('ingredientsGrid');
  if (!grid) return;

  grid.innerHTML = appData.pantryItems.map(item => `
    <div class="ingredient-card ${pantrySelections.includes(item.id) ? 'selected' : ''}" 
         data-ingredient-id="${item.id}" data-category="${item.category}">
      <div class="ingredient-header">
        <span class="ingredient-emoji">${item.emoji}</span>
        <h4 class="ingredient-name">${item.name}</h4>
      </div>
      <p class="ingredient-details">${item.quantity} ${item.unit} • Expires ${item.expiry}</p>
    </div>
  `).join('');

  // Add click handlers
  grid.querySelectorAll('.ingredient-card').forEach(card => {
    card.addEventListener('click', function() {
      const ingredientId = parseInt(this.getAttribute('data-ingredient-id'));
      toggleIngredientSelection(ingredientId);
    });
  });
}

function toggleIngredientSelection(ingredientId) {
  const index = pantrySelections.indexOf(ingredientId);
  
  if (index === -1) {
    pantrySelections.push(ingredientId);
  } else {
    pantrySelections.splice(index, 1);
  }

  renderIngredientGrid();
  updateSelectionCounter();
}

function updateSelectionCounter() {
  const counter = document.getElementById('selectionCounter');
  const findBtn = document.getElementById('findRecipesBtn');
  
  if (counter) {
    counter.textContent = `${pantrySelections.length} ingredients selected`;
  }
  
  if (findBtn) {
    findBtn.disabled = pantrySelections.length === 0;
  }
}

function findMatchingRecipes() {
  const selectedIngredients = appData.pantryItems
    .filter(item => pantrySelections.includes(item.id))
    .map(item => item.name.toLowerCase());

  const matchingRecipes = appData.recipes.filter(recipe => {
    const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
    const matches = selectedIngredients.filter(selected => 
      recipeIngredients.some(recipeIng => recipeIng.includes(selected))
    );
    return matches.length > 0;
  }).map(recipe => {
    const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
    const matches = selectedIngredients.filter(selected => 
      recipeIngredients.some(recipeIng => recipeIng.includes(selected))
    );
    return {
      ...recipe,
      matchScore: Math.round((matches.length / recipe.ingredients.length) * 100)
    };
  }).sort((a, b) => b.matchScore - a.matchScore);

  displayRecipeResults(matchingRecipes);
}

function displayRecipeResults(recipes) {
  const resultsContainer = document.getElementById('recipeResults');
  const resultsGrid = document.getElementById('resultsGrid');
  const resultsTitle = document.getElementById('resultsTitle');
  const resultsSubtitle = document.getElementById('resultsSubtitle');

  if (!resultsContainer || !resultsGrid) return;

  resultsContainer.classList.remove('hidden');
  
  if (resultsTitle) {
    resultsTitle.textContent = `${recipes.length} Recipe${recipes.length !== 1 ? 's' : ''} Found`;
  }
  
  if (resultsSubtitle) {
    resultsSubtitle.textContent = `Based on ${pantrySelections.length} selected ingredients`;
  }

  resultsGrid.innerHTML = recipes.map(recipe => `
    <div class="recipe-card" data-recipe-id="${recipe.id}">
      <div class="recipe-image-container">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="recipe-image-fallback" style="display: none;">${recipe.image ? '🍽️' : '🍽️'}</div>
      </div>
      <div class="recipe-content">
        <h4 class="recipe-name">${recipe.name}</h4>
        <div class="recipe-meta">
          <span>⏱️ ${recipe.time}</span>
          <span>📊 ${recipe.difficulty}</span>
          <span class="match-score">✨ ${recipe.matchScore}% match</span>
        </div>
        <p class="recipe-cuisine">${recipe.cuisine}</p>
        <div class="recipe-actions">
          <button class="btn btn--secondary" onclick="showRecipeModal(${recipe.id})">View Recipe</button>
          <button class="btn btn--primary" onclick="addRecipeToShoppingList(${recipe.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');

  if (recipes.length === 0) {
    resultsGrid.innerHTML = '<div class="no-results"><h3>No matching recipes found</h3><p>Try selecting more ingredients or different combinations.</p></div>';
  }
}

function filterIngredients() {
  const searchTerm = document.getElementById('ingredientSearch')?.value.toLowerCase() || '';
  const category = document.getElementById('categoryFilter')?.value || 'all';
  
  const cards = document.querySelectorAll('.ingredient-card');
  
  cards.forEach(card => {
    const ingredientId = parseInt(card.getAttribute('data-ingredient-id'));
    const ingredient = appData.pantryItems.find(item => item.id === ingredientId);
    
    if (!ingredient) return;
    
    const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm);
    const matchesCategory = category === 'all' || ingredient.category === category;
    
    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// MoodBites Functions
function setupMoodBites() {
  const nextBtn = document.getElementById('nextQuestion');
  const prevBtn = document.getElementById('prevQuestion');
  const retakeBtn = document.getElementById('retakeQuiz');

  if (nextBtn) {
    nextBtn.addEventListener('click', handleNextQuestion);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', handlePrevQuestion);
  }

  if (retakeBtn) {
    retakeBtn.addEventListener('click', resetMoodQuiz);
  }
}

function renderMoodBites() {
  resetMoodQuiz();
}

function resetMoodQuiz() {
  currentQuestionIndex = 0;
  moodAnswers = [];
  
  const moodQuiz = document.getElementById('moodQuiz');
  const moodResults = document.getElementById('moodResults');
  
  if (moodQuiz) moodQuiz.classList.remove('hidden');
  if (moodResults) moodResults.classList.add('hidden');
  
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const question = appData.moodQuestions[currentQuestionIndex];
  const container = document.getElementById('questionContainer');
  const progressFill = document.getElementById('quizProgress');
  const currentQuestionSpan = document.getElementById('currentQuestion');
  const nextBtn = document.getElementById('nextQuestion');
  const prevBtn = document.getElementById('prevQuestion');

  if (!container || !question) return;

  // Update progress
  const progress = ((currentQuestionIndex + 1) / appData.moodQuestions.length) * 100;
  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }
  
  if (currentQuestionSpan) {
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
  }

  // Update navigation buttons
  if (prevBtn) {
    prevBtn.disabled = currentQuestionIndex === 0;
  }
  
  if (nextBtn) {
    const isLastQuestion = currentQuestionIndex === appData.moodQuestions.length - 1;
    nextBtn.textContent = isLastQuestion ? 'Get Results ✨' : 'Next →';
    nextBtn.disabled = !moodAnswers[currentQuestionIndex];
  }

  // Render question
  container.innerHTML = `
    <h3 class="question-title">${question.question}</h3>
    <div class="mood-options">
      ${question.options.map(option => `
        <button class="mood-option" data-value="${option.value}">
          <div class="emoji">${option.emoji}</div>
          <div class="label">${option.label}</div>
        </button>
      `).join('')}
    </div>
  `;

  // Add option click handlers
  container.querySelectorAll('.mood-option').forEach(option => {
    option.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      selectMoodOption(value);
    });
  });

  // Restore previous selection if exists
  if (moodAnswers[currentQuestionIndex]) {
    const selectedOption = container.querySelector(`[data-value="${moodAnswers[currentQuestionIndex]}"]`);
    if (selectedOption) {
      selectedOption.classList.add('selected');
      if (nextBtn) nextBtn.disabled = false;
    }
  }
}

function selectMoodOption(value) {
  moodAnswers[currentQuestionIndex] = value;
  
  // Update UI
  document.querySelectorAll('.mood-option').forEach(opt => opt.classList.remove('selected'));
  document.querySelector(`[data-value="${value}"]`)?.classList.add('selected');
  
  const nextBtn = document.getElementById('nextQuestion');
  if (nextBtn) nextBtn.disabled = false;
}

function handleNextQuestion() {
  if (!moodAnswers[currentQuestionIndex]) {
    showNotification('Please select an answer before continuing');
    return;
  }
  
  if (currentQuestionIndex < appData.moodQuestions.length - 1) {
    currentQuestionIndex++;
    renderCurrentQuestion();
  } else {
    showMoodResults();
  }
}

function handlePrevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderCurrentQuestion();
  }
}

function showMoodResults() {
  const moodQuiz = document.getElementById('moodQuiz');
  const moodResults = document.getElementById('moodResults');
  const recipeSuggestions = document.getElementById('recipeSuggestions');

  if (moodQuiz) moodQuiz.classList.add('hidden');
  if (moodResults) moodResults.classList.remove('hidden');

  // Find matching recipes based on mood
  const matchingRecipes = findRecipesByMood(moodAnswers);
  
  if (recipeSuggestions) {
    recipeSuggestions.innerHTML = matchingRecipes.map(recipe => `
      <div class="recipe-card mood-suggestion" data-recipe-id="${recipe.id}">
        <div class="recipe-image-container">
          <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="recipe-image-fallback" style="display: none;">🍽️</div>
        </div>
        <div class="recipe-content">
          <h4 class="recipe-name">${recipe.name}</h4>
          <div class="recipe-meta">
            <span>⏱️ ${recipe.time}</span>
            <span>📊 ${recipe.difficulty}</span>
            <span>✨ Perfect for your mood!</span>
          </div>
          <p class="recipe-cuisine">${recipe.cuisine}</p>
          <div class="recipe-actions">
            <button class="btn btn--secondary" onclick="addToMealPlan(${recipe.id})">Add to Plan</button>
            <button class="btn btn--primary" onclick="addRecipeToShoppingList(${recipe.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function findRecipesByMood(answers) {
  // Simple mood matching algorithm
  const moodProfile = answers.join(',');
  
  // Return top 3 recipes that match the mood
  let matchingRecipes = appData.recipes.filter(recipe => {
    if (!recipe.mood) return false;
    return answers.some(answer => recipe.mood.includes(answer));
  });
  
  if (matchingRecipes.length === 0) {
    matchingRecipes = appData.recipes.slice(0, 3); // Fallback to first 3 recipes
  }
  
  return matchingRecipes.slice(0, 3);
}

// Enhanced Pantry Functions with Working Actions
function setupPantry() {
  const addBtn = document.getElementById('addPantryItem');
  const searchInput = document.getElementById('pantrySearch');
  const filterSelect = document.getElementById('pantryFilter');

  if (addBtn) {
    addBtn.addEventListener('click', openAddPantryModal);
  }

  if (searchInput) searchInput.addEventListener('input', filterPantryItems);
  if (filterSelect) filterSelect.addEventListener('change', filterPantryItems);
}
// Add Pantry Modal logic
function openAddPantryModal() {
  const modal = document.getElementById('addPantryItemModal');
  if (!modal) return;
  // reset fields
  document.getElementById('pantryItemName').value = '';
  document.getElementById('pantryItemQty').value = '';
  document.getElementById('pantryItemUnit').value = 'pieces';
  document.getElementById('pantryItemExpiry').value = '';
  const preview = document.getElementById('pantryImagePreview');
  const previewImg = document.getElementById('pantryImagePreviewImg');
  if (preview && previewImg) {
    preview.style.display = 'none';
    previewImg.src = '';
  }
  // Reset captured flag and any selected file
  const fileInput = document.getElementById('pantryItemImage');
  if (fileInput) {
    if (fileInput.dataset && fileInput.dataset.captured) delete fileInput.dataset.captured;
    fileInput.value = '';
  }
  modal.classList.remove('hidden');
  document.getElementById('pantryItemName').focus();
}

(function wireAddPantryModal() {
  const modal = document.getElementById('addPantryItemModal');
  const closeBtn = document.getElementById('closeAddPantryModal');
  const cancelBtn = document.getElementById('cancelAddPantry');
  const confirmBtn = document.getElementById('confirmAddPantry');
  const fileInput = document.getElementById('pantryItemImage');

  if (!modal) return;

  // Close on X, cancel, or backdrop click
  const close = () => modal.classList.add('hidden');
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (cancelBtn) cancelBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  // Image preview
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      const file = this.files && this.files[0];
      const preview = document.getElementById('pantryImagePreview');
      const previewImg = document.getElementById('pantryImagePreviewImg');
      if (!preview || !previewImg) return;
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          previewImg.src = evt.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        preview.style.display = 'none';
        previewImg.src = '';
      }
    });
  }

  // Confirm add
  if (confirmBtn) {
    confirmBtn.addEventListener('click', handleConfirmAddPantryItem);
  }
})();

// Camera state
let pantryCameraStream = null;

(function wireAddPantryCamera() {
  const openBtn = document.getElementById('openCameraBtn');
  const closeBtn = document.getElementById('closeCameraBtn');
  const cameraArea = document.getElementById('cameraArea');
  const video = document.getElementById('cameraStream');
  const canvas = document.getElementById('cameraCanvas');
  const captureBtn = document.getElementById('capturePhotoBtn');
  const modal = document.getElementById('addPantryItemModal');

  if (!openBtn || !closeBtn || !cameraArea || !video || !canvas || !captureBtn || !modal) return;

  async function openCamera() {
    try {
      pantryCameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      video.srcObject = pantryCameraStream;
      cameraArea.style.display = 'block';
      openBtn.style.display = 'none';
      closeBtn.style.display = 'inline-block';
    } catch (err) {
      showNotification('Camera access denied or unavailable.');
    }
  }

  function stopCamera() {
    if (pantryCameraStream) {
      pantryCameraStream.getTracks().forEach(t => t.stop());
      pantryCameraStream = null;
    }
    video.srcObject = null;
    cameraArea.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
  }

  function capturePhoto() {
    // Size canvas to video frame
    const w = video.videoWidth || 640;
    const h = video.videoHeight || 480;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    // Convert to data URL and show in existing preview image
    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
    const preview = document.getElementById('pantryImagePreview');
    const previewImg = document.getElementById('pantryImagePreviewImg');
    if (preview && previewImg) {
      previewImg.src = dataUrl;
      preview.style.display = 'block';
      // Also stash the captured image on the file input element for the add handler to read
      const fileInput = document.getElementById('pantryItemImage');
      if (fileInput) {
        fileInput.dataset.captured = dataUrl;
        // Clear any selected file to avoid ambiguity
        fileInput.value = '';
      }
    }
    showNotification('Photo captured.');
  }

  openBtn.addEventListener('click', openCamera);
  closeBtn.addEventListener('click', stopCamera);
  captureBtn.addEventListener('click', capturePhoto);

  // Ensure camera stops when modal closes
  const closeModal = () => stopCamera();
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  const xBtn = document.getElementById('closeAddPantryModal');
  const cancelBtn = document.getElementById('cancelAddPantry');
  if (xBtn) xBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
})();

function handleConfirmAddPantryItem() {
  const nameEl = document.getElementById('pantryItemName');
  const qtyEl = document.getElementById('pantryItemQty');
  const unitEl = document.getElementById('pantryItemUnit');
  const expiryEl = document.getElementById('pantryItemExpiry');


  const name = nameEl?.value.trim();
  const qty = qtyEl?.value ? Number(qtyEl.value) : null;
  const unit = unitEl?.value || 'pieces';
  const expiryDate = expiryEl?.value || ''; // YYYY-MM-DD or empty

  if (!name) {
    showNotification('Please enter an item name.');
    return;
  }
  if (qty === null || Number.isNaN(qty) || qty < 0) {
    showNotification('Please enter a valid quantity.');
    return;
  }

  // Prefer captured camera image, then file, else none
  const fileInput = document.getElementById('pantryItemImage');
  const captured = fileInput?.dataset?.captured || '';

  const addItem = (imageUrl) => {
    const { expiryLabel, statusGuess } = computeExpiryAndStatus(expiryDate);
    const newItem = {
    id: Date.now(),
    name,
    quantity: qty,
    unit,
    expiry: expiryLabel,
    status: statusGuess,
    category: categorizeIngredient(name),
    emoji: '',
    image: imageUrl || ''
  };
  appData.pantryItems.push(newItem);
  savePantryData();
  renderPantry();
  updateStatsDisplay();
  showNotification(`${name} added to pantry!`);
  const modal = document.getElementById('addPantryItemModal');
  if (modal) modal.classList.add('hidden');
};

if (captured) {
  addItem(captured);
  delete fileInput.dataset.captured;
} else {
  const file = fileInput?.files && fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => addItem(e.target.result);
    reader.readAsDataURL(file);
  } else {
    addItem('');
  }
}

    appData.pantryItems.push(newItem);
    // Persist pantry separately alongside existing stores
    savePantryData();
    renderPantry();
    updateStatsDisplay();
    showNotification(`${name} added to pantry!`);

    const modal = document.getElementById('addPantryItemModal');
    if (modal) modal.classList.add('hidden');
  };

  const file = fileInput?.files && fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => addItem(e.target.result);
    reader.readAsDataURL(file);
  } else {
    addItem('');
}


function computeExpiryAndStatus(yyyyMmDd) {
  if (!yyyyMmDd) {
    // For non-perishables or unknown, default to good
    return { expiryLabel: '—', statusGuess: 'good' };
  }
  try {
    const today = new Date();
    today.setHours(0,0,0,0);
    const exp = new Date(yyyyMmDd);
    exp.setHours(0,0,0,0);
    const diffMs = exp.getTime() - today.getTime();
    const days = Math.round(diffMs / (1000 * 60 * 60 * 24));
    let status = 'good';
    if (days <= 0) status = 'critical';
    else if (days <= 2) status = 'warning';
    const label = days < 0 ? `${Math.abs(days)} days ago` : days === 0 ? 'today' : days === 1 ? '1 day' : `${days} days`;
    return { expiryLabel: label, statusGuess: status };
  } catch {
    return { expiryLabel: '—', statusGuess: 'good' };
  }
}

// Persist pantry array similar to shopping/meal plan
function savePantryData() {
  try {
    localStorage.setItem('smartcart-pantry', JSON.stringify(appData.pantryItems));
  } catch (error) {
    console.error('Error saving pantry data', error);
  }
}


function renderPantry() {
  const grid = document.getElementById('pantryGrid');
  if (!grid) return;

  grid.innerHTML = appData.pantryItems.map(item => `
    <div class="pantry-item" data-status="${item.status}" data-name="${item.name.toLowerCase()}">
      <div class="pantry-image-container">
        <img src="${item.image}" alt="${item.name}" class="pantry-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="pantry-image-fallback" style="display: none;">${item.emoji}</div>
      </div>
      <div class="pantry-content">
        <div class="pantry-header">
          <h4 class="pantry-name">${item.emoji} ${item.name}</h4>
          <span class="pantry-status ${item.status}">${item.status}</span>
        </div>
        <div class="pantry-details">
          <p><strong>📏 Quantity:</strong> ${item.quantity} ${item.unit}</p>
          <p><strong>⏰ Expires:</strong> ${item.expiry}</p>
          <p><strong>🏷️ Category:</strong> ${item.category}</p>
        </div>
        <div class="pantry-actions">
          <button class="btn btn--sm restock-btn" onclick="restockItem(${item.id})">Restock</button>
          <button class="btn btn--sm used-btn" onclick="markAsUsed(${item.id})">Used</button>
          <button class="btn btn--sm remove-pantry-btn" onclick="removePantryItem(${item.id})" title="Remove Item">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterPantryItems() {
  const searchTerm = document.getElementById('pantrySearch')?.value.toLowerCase() || '';
  const statusFilter = document.getElementById('pantryFilter')?.value || 'all';
  
  const items = document.querySelectorAll('.pantry-item');
  
  items.forEach(item => {
    const name = item.getAttribute('data-name') || '';
    const status = item.getAttribute('data-status') || '';
    
    const matchesSearch = name.includes(searchTerm);
    const matchesFilter = statusFilter === 'all' || status === statusFilter;
    
    item.style.display = (matchesSearch && matchesFilter) ? 'block' : 'none';
  });
}

// Fixed Pantry Action Functions
function restockItem(itemId) {
  const item = appData.pantryItems.find(item => item.id === itemId);
  if (!item) return;

  // Increase quantity by 1 or reset expiry
  if (typeof item.quantity === 'number') {
    item.quantity += 1;
  }
  
  // Reset expiry status to good
  item.status = 'good';
  item.expiry = '2 weeks'; // Reset expiry
  
  renderPantry();
  updateStatsDisplay();
  showNotification(`${item.name} restocked successfully!`);
}

function markAsUsed(itemId) {
  const item = appData.pantryItems.find(item => item.id === itemId);
  if (!item) return;

  // Decrease quantity by 1
  if (typeof item.quantity === 'number' && item.quantity > 0) {
    item.quantity -= 1;
    
    if (item.quantity === 0) {
      // Remove item if quantity reaches 0
      appData.pantryItems = appData.pantryItems.filter(pantryItem => pantryItem.id !== itemId);
      showNotification(`${item.name} used up and removed from pantry!`);
    } else {
      showNotification(`${item.name} quantity reduced to ${item.quantity}!`);
    }
  } else {
    // If not numeric, just mark as used up
    appData.pantryItems = appData.pantryItems.filter(pantryItem => pantryItem.id !== itemId);
    showNotification(`${item.name} marked as used and removed from pantry!`);
  }
  
  renderPantry();
  updateStatsDisplay();
}

function removePantryItem(itemId) {
  const item = appData.pantryItems.find(item => item.id === itemId);
  if (!item) return;

  if (confirm(`Are you sure you want to remove ${item.name} from your pantry?`)) {
    appData.pantryItems = appData.pantryItems.filter(pantryItem => pantryItem.id !== itemId);
    renderPantry();
    updateStatsDisplay();
    showNotification(`${item.name} removed from pantry!`);
  }
}

// Meal Planner Functions
function setupMealPlanner() {
  const addColumnBtn = document.getElementById('addCustomColumn');
  const generateBtn = document.getElementById('generateShoppingList');
  const clearBtn = document.getElementById('clearMealPlan');

  if (addColumnBtn) {
    addColumnBtn.addEventListener('click', function() {
      const name = prompt('Enter custom meal type name:');
      if (name) {
        addCustomMealColumn(name);
      }
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', generateShoppingListFromMealPlan);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      if (confirm('Clear all meals for this week?')) {
        clearMealPlan();
      }
    });
  }
}

function renderMealPlanner() {
  const grid = document.getElementById('mealPlannerGrid');
  if (!grid) return;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Create day labels column
  let dayColumn = `
    <div class="meal-column">
      <div class="meal-column-header">Days</div>
      ${days.map(day => `<div class="meal-slot day-label">${day}</div>`).join('')}
    </div>
  `;

  // Create meal type columns
  let mealColumns = appData.mealPlannerColumns.map(column => `
    <div class="meal-column">
      <div class="meal-column-header">
        ${column.icon} ${column.name}
        ${column.deletable ? `<button class="delete-column-btn" onclick="deleteCustomColumn('${column.id}')">×</button>` : ''}
      </div>
      ${days.map(day => {
        const meal = appData.mealPlan[day]?.[column.id];
        const recipe = meal ? appData.recipes.find(r => r.id === meal.recipeId) : null;
        
        return `
          <div class="meal-slot" onclick="showAddMealModal('${day}', '${column.id}')">
            ${recipe ? `
              <div class="meal-box">
                <div class="meal-recipe-name">${recipe.name}</div>
                <div class="meal-servings">${meal.servings} servings</div>
                <button class="remove-meal-btn" onclick="event.stopPropagation(); removeMealFromSlot('${day}', '${column.id}')">×</button>
              </div>
            ` : meal && meal.foodName ? `
              <div class="meal-box">
                <div class="meal-recipe-name">${meal.foodName}</div>
                <div class="meal-servings">${meal.servings} servings</div>
                <button class="remove-meal-btn" onclick="event.stopPropagation(); removeMealFromSlot('${day}', '${column.id}')">×</button>
              </div>
            ` : `
              <div class="meal-placeholder">+ Add Meal</div>
            `}
          </div>
        `;
      }).join('')}
    </div>
  `).join('');

  grid.innerHTML = dayColumn + mealColumns;
}

function showAddMealModal(day, mealType) {
  currentMealSlot = { day, mealType };
  const modal = document.getElementById('addMealModal');
  const recipeDropdown = document.getElementById('recipeDropdown');
  const mealNameInput = document.getElementById('mealNameInput');
  const servingInput = document.getElementById('servingInput');
  
  if (modal && recipeDropdown) {
    // Populate recipe dropdown
    recipeDropdown.innerHTML = '<option value="">Choose a recipe or enter manually below</option>' +
      appData.recipes.map(recipe => 
        `<option value="${recipe.id}">${recipe.name} (${recipe.time})</option>`
      ).join('');
    
    // Reset form
    if (mealNameInput) mealNameInput.value = '';
    if (servingInput) servingInput.value = '1';
    
    modal.classList.remove('hidden');
    if (mealNameInput) mealNameInput.focus();
  }
}

function removeMealFromSlot(day, mealType) {
  if (appData.mealPlan[day]) {
    appData.mealPlan[day][mealType] = null;
    renderMealPlanner();
    saveMealPlanData();
    showNotification('Meal removed from plan');
  }
}

function addCustomMealColumn(name) {
  const id = name.toLowerCase().replace(/\s+/g, '-');
  const newColumn = {
    id: id,
    name: name,
    icon: '🍽️',
    deletable: true
  };
  
  appData.mealPlannerColumns.push(newColumn);
  
  // Initialize slots for all days
  Object.keys(appData.mealPlan).forEach(day => {
    appData.mealPlan[day][id] = null;
  });
  
  renderMealPlanner();
  saveMealPlanData();
  showNotification(`${name} column added!`);
}

function deleteCustomColumn(columnId) {
  appData.mealPlannerColumns = appData.mealPlannerColumns.filter(col => col.id !== columnId);
  
  Object.keys(appData.mealPlan).forEach(day => {
    delete appData.mealPlan[day][columnId];
  });
  
  renderMealPlanner();
  saveMealPlanData();
  showNotification('Meal type deleted!');
}

function generateShoppingListFromMealPlan() {
  const ingredients = [];
  
  Object.values(appData.mealPlan).forEach(day => {
    Object.values(day).forEach(meal => {
      if (meal && meal.recipeId) {
        const recipe = appData.recipes.find(r => r.id === meal.recipeId);
        if (recipe) {
          recipe.ingredients.forEach(ingredient => {
            if (!ingredients.some(item => item.name.toLowerCase() === ingredient.toLowerCase())) {
              ingredients.push({
                name: ingredient,
                category: categorizeIngredient(ingredient),
                addedFrom: recipe.name
              });
            }
          });
        }
      }
    });
  });
  
  ingredients.forEach(ingredient => {
    addToShoppingList(ingredient.name, ingredient.category);
  });
  
  showNotification(`Added ${ingredients.length} ingredients to shopping list!`);
  showSection('shopping');
}

function clearMealPlan() {
  Object.keys(appData.mealPlan).forEach(day => {
    Object.keys(appData.mealPlan[day]).forEach(mealType => {
      appData.mealPlan[day][mealType] = null;
    });
  });
  
  renderMealPlanner();
  saveMealPlanData();
  showNotification('Meal plan cleared!');
}

// Enhanced Shopping Functions - Clean Design, No Price Comparison
function setupShopping() {
  const addBtn = document.getElementById('addShoppingItem');
  const newItemInput = document.getElementById('newItemInput');

  if (addBtn) {
    addBtn.addEventListener('click', function () {
      // Open the modal instead of directly adding
      document.getElementById('addShoppingItemModal').classList.remove('hidden');
      document.getElementById('shopItemName').value = '';
      document.getElementById('shopItemQty').value = '';
      document.getElementById('shopItemUnit').value = 'pieces';
      document.getElementById('shopItemPrice').value = '';
      document.getElementById('shopItemName').focus();
    });
  }

  if (newItemInput) {
    newItemInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        // Optional: open modal here too, or keep as quick add
        addNewShoppingItem();
      }
    });
  }

  // Modal event handlers (add these here):
  document.getElementById('closeAddShoppingModal').addEventListener('click', function () {
    document.getElementById('addShoppingItemModal').classList.add('hidden');
  });
  document.getElementById('cancelAddShoppingCancel').addEventListener('click', function () {
    document.getElementById('addShoppingItemModal').classList.add('hidden');
  });
  document.getElementById('addShoppingItemModal').addEventListener('click', function (e) {
    if (e.target === this) this.classList.add('hidden');
  });
  document.getElementById('confirmAddShopping').addEventListener('click', function () {
    const name = document.getElementById('shopItemName').value.trim();
    const qty = Number(document.getElementById('shopItemQty').value);
    const unit = document.getElementById('shopItemUnit').value;
    const priceVal = document.getElementById('shopItemPrice').value;
    const price = priceVal ? Number(priceVal) : null;

    if (!name) {
      alert('Please enter an item name.');
      return;
    }
    if (!qty || qty < 1) {
      alert('Please enter a valid quantity.');
      return;
    }
    const newItem = {
      id: Date.now(),
      name,
      quantity: qty,
      unit,
      price,
      checked: false
    };
    appData.shoppingList.push(newItem);
    renderShopping();
    saveShoppingData();
    document.getElementById('addShoppingItemModal').classList.add('hidden');
  });
}


function renderShopping() {
  renderShoppingCategories();
  updateShoppingTotals();
}

function renderShoppingCategories() {
  const container = document.getElementById('shoppingCategories');
  if (!container) return;

  // Group items by category
  const categories = {};
  appData.shoppingList.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  container.innerHTML = Object.entries(categories).map(([category, items]) => `
  <div class="category-section">
    <h3 class="category-header">${category}</h3>
    <div class="category-items">
      ${items.map(item => `
        <div class="shopping-item ${item.checked ? 'checked' : ''}" data-item-id="${item.id}">
          <div class="item-checkbox" onclick="toggleShoppingItem(${item.id})">${item.checked ? '✓' : ''}</div>
          <div class="item-details">
            <div class="item-name">${item.name}</div>
            <div class="item-quantity">${item.quantity} ${item.unit || ''}</div>
            <div class="item-price">
              ₹<span class="price-text">${item.price ? item.price.toFixed(2) : '0.00'}</span>
              <button class="edit-price-btn" onclick="editPrice(${item.id})">Edit</button>
            </div>
          </div>
          <button class="btn btn--sm remove-item-btn" onclick="removeShoppingItem(${item.id})">Remove</button>
        </div>
      `).join('')}
    </div>
  </div>
`).join('');
}

function editPrice(itemId) {
  const item = appData.shoppingList.find(i => i.id === itemId);
  if (!item) return;

  const newPrice = prompt(`Enter new price for ${item.name}`, item.price ? item.price.toFixed(2) : "0.00");
  if (newPrice !== null) {
    const priceValue = parseFloat(newPrice);
    if (!isNaN(priceValue) && priceValue >= 0) {
      item.price = priceValue;
      saveShoppingData();
      renderShopping();
      updateShoppingTotals();
    } else {
      alert("Please enter a valid non-negative number for price.");
    }
  }
}

function addNewShoppingItem() {
  const input = document.getElementById('newItemInput');
  if (!input || !input.value.trim()) return;

  addToShoppingList(input.value.trim());
  input.value = '';
}

function addToShoppingList(itemName, category = null) {
  const newItem = {
    id: Date.now(),
    name: itemName,
    category: category || categorizeIngredient(itemName),
    quantity: '1 unit',
    checked: false
  };

  appData.shoppingList.push(newItem);
  
  if (currentSection === 'shopping') {
    renderShopping();
  }
  
  saveShoppingData();
}

function toggleShoppingItem(itemId) {
  const item = appData.shoppingList.find(item => item.id === itemId);
  if (item) {
    item.checked = !item.checked;
    renderShopping();
    saveShoppingData();
  }
}

function removeShoppingItem(id) {
  // Find item index by id
  const index = appData.shoppingList.findIndex(item => item.id === id);
  
  // If found, remove from shoppingList array
  if (index !== -1) {
    appData.shoppingList.splice(index, 1);
    
    // Save updated shoppingList
    saveShoppingData();
    
    // Re-render shopping list UI
    renderShopping();
    
    // Update totals at bottom
    updateShoppingTotals();
  }
}


function updateShoppingTotals() {
  const totalItems = appData.shoppingList.length;
  
  const totalPrice = appData.shoppingList.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    let quantity = item.quantity;

    // Convert quantity if string with units
    if (typeof quantity === 'string') {
      const quantityNum = parseFloat(quantity);
      quantity = isNaN(quantityNum) ? 1 : quantityNum;
    }

    quantity = Number(quantity) || 1;
    return sum + price * quantity;
  }, 0);

  const budgetLimit = Number(appData.user.budgetLimit) || 0;
  const currentSpent = Number(appData.user.currentSpent) || 0;
  const budgetLeft = budgetLimit - totalPrice;

  updateElement('totalItems', totalItems);
  updateElement('totalPrice', totalPrice.toFixed(2));
  updateElement('budgetLeft', budgetLeft.toFixed(2));
}

function categorizeIngredient(ingredient) {
  const categories = {
    'Vegetables': ['tomato', 'onion', 'garlic', 'ginger', 'carrot', 'potato', 'spinach'],
    'Fruits': ['apple', 'banana', 'orange', 'berry', 'lemon'],
    'Dairy': ['milk', 'cheese', 'yogurt', 'butter', 'cream'],
    'Grains': ['rice', 'pasta', 'bread', 'flour', 'oats'],
    'Protein': ['chicken', 'beef', 'fish', 'egg', 'tofu', 'lentil'],
    'Condiments': ['oil', 'salt', 'pepper', 'sauce', 'spice', 'honey']
  };
  
  const lowerIngredient = ingredient.toLowerCase();
  for (const [category, items] of Object.entries(categories)) {
    if (items.some(item => lowerIngredient.includes(item))) {
      return category;
    }
  }
  
  return 'Other';
}

// Nutrition Functions - FIXED IMPLEMENTATION
function setupNutrition() {
  console.log('🔬 Setting up nutrition functionality...');
  
  // Setup nutrition tabs
  const nutritionTabs = document.querySelectorAll('.nutrition-tab');
  nutritionTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      console.log('🔄 Tab clicked:', tabName);
      switchNutritionTab(tabName);
    });
  });

  // Setup food search with proper event listeners
  const searchBtn = document.getElementById('searchFoodBtn');
  const foodInput = document.getElementById('foodSearchInput');

  if (searchBtn) {
    console.log('✅ Search button found, adding click listener');
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('🔍 Search button clicked');
      performFoodSearch();
    });
  } else {
    console.error('❌ Search button not found');
  }

  if (foodInput) {
    console.log('✅ Food input found, adding keypress listener');
    foodInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        console.log('🔍 Enter key pressed in search input');
        performFoodSearch();
      }
    });
  } else {
    console.error('❌ Food input not found');
  }

  // Setup remove food buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-food-btn')) {
      removeFoodItem(e.target);
    }
  });

  console.log('✅ Nutrition setup completed');
}

function switchNutritionTab(tabName) {
  currentNutritionTab = tabName;
  
  console.log('🔄 Switching nutrition tab to:', tabName);
  
  // Update tab buttons
  document.querySelectorAll('.nutrition-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-tab') === tabName) {
      tab.classList.add('active');
    }
  });
  
  // Update tab panels
  document.querySelectorAll('.nutrition-tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  let targetPanel = null;
  if (tabName === 'daily') {
    targetPanel = document.getElementById('dailyTrackingPanel');
  } else if (tabName === 'search') {
    targetPanel = document.getElementById('foodSearchPanel');
  }
  
  if (targetPanel) {
    targetPanel.classList.add('active');
    console.log('✅ Tab panel activated successfully');
  } else {
    console.error('❌ Could not find target panel for tab:', tabName);
  }
  
  // Clear search results when switching away from search tab
  if (tabName !== 'search') {
    clearSearchResults();
  }
}

function renderNutrition() {
  console.log('🎨 Rendering nutrition section');
  renderNutritionCharts();
  updateNutritionStats();
  switchNutritionTab(currentNutritionTab);
}

function renderNutritionCharts() {
  renderCalorieChart();
  renderWeeklyChart();
}

function renderCalorieChart() {
  const ctx = document.getElementById('calorieChart');
  if (!ctx) return;

  const consumed = appData.nutritionData.daily.consumed;
  const goal = appData.nutritionData.daily.goal;
  const remaining = Math.max(0, goal - consumed);

  if (calorieChart) {
    calorieChart.destroy();
  }

  calorieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Consumed', 'Remaining'],
      datasets: [{
        data: [consumed, remaining],
        backgroundColor: ['#1FB8CD', '#ECEBD5'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      cutout: '70%'
    }
  });
}

function renderWeeklyChart() {
  const ctx = document.getElementById('weeklyChart');
  if (!ctx) return;

  if (weeklyChart) {
    weeklyChart.destroy();
  }

  weeklyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Calories',
        data: appData.nutritionData.weekly,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 2500
        }
      }
    }
  });
}

function updateNutritionStats() {
  const consumed = appData.nutritionData.daily.consumed;
  const goal = appData.nutritionData.daily.goal;
  const remaining = Math.max(0, goal - consumed);

  updateElement('consumedCalories', consumed.toLocaleString());
  updateElement()
  updateElement('remainingCalories', remaining);
}

// FIXED Food Search Functions
function performFoodSearch() {
  const input = document.getElementById('foodSearchInput');
  if (!input || !input.value.trim()) {
    console.log('❌ No search term provided');
    showNotification('Please enter a food name to search');
    return;
  }

  const searchTerm = input.value.trim().toLowerCase();
  console.log('🔍 Searching for:', searchTerm);
  
  // Show loading state
  showSearchLoading(true);
  
  // Hide previous results and errors
  const searchResults = document.getElementById('searchResults');
  const noResults = document.getElementById('noResults');
  if (searchResults) searchResults.classList.add('hidden');
  if (noResults) noResults.classList.add('hidden');
  
  // Simulate API delay for realistic UX
  setTimeout(() => {
    try {
      const results = searchFoodDatabase(searchTerm);
      console.log('📊 Search completed, found', results.length, 'results');
      displaySearchResults(results);
    } catch (error) {
      console.error('❌ Search error:', error);
      showNotification('Search failed. Please try again.');
    }
    showSearchLoading(false);
  }, 800);
}

function searchFoodDatabase(searchTerm) {
  console.log('📊 Searching database for:', searchTerm);

  if (!appData.foodDatabase || !Array.isArray(appData.foodDatabase)) {
    console.error('❌ Food database not loaded or invalid');
    return [];
  }

  const lowerTerm = searchTerm.toLowerCase();
  let variations = [];
  try {
    variations = getSearchVariations(searchTerm) || [];
  } catch (e) {
    console.warn('⚠️ getSearchVariations failed:', e);
  }

  const results = appData.foodDatabase.filter(food => {
    const name = food.name.toLowerCase();
    const brand = (food.brand || '').toLowerCase();
    const nameMatch = name.includes(lowerTerm);
    const brandMatch = brand.includes(lowerTerm);
    const variationMatch = variations.some(v => name.includes(v) || brand.includes(v));
    return nameMatch || brandMatch || variationMatch;
  });

  console.log('📋 Found', results.length, 'results');
  return results.slice(0, 15);
}


function getSearchVariations(searchTerm) {
  // Common variations and synonyms for better search results
  const variations = {
    'mcd': ['mcdonald', "mcdonald's", 'mcdonalds'],
    'mcdonalds': ["mcdonald's", 'mcd'],
    'kfc': ['kentucky fried chicken'],
    'big mac': ['bigmac'],
    'mcnugget': ['chicken mcnuggets', 'nuggets'],
    'fries': ['french fries', 'potato'],
    'coke': ['coca cola', 'coca-cola'],
    'pizza': ['margherita', 'pepperoni'],
    'naan': ['nan bread'],
    'dal': ['lentil', 'daal', 'dal tadka'],
    'roti': ['chapati', 'bread'],
    'maggi': ['noodles', 'instant noodles', '2-minute'],
    'biryani': ['chicken biryani', 'rice'],
    'chai': ['masala chai', 'tea'],
    'paneer': ['paneer tikka', 'paneer makhani'],
    'subway': ['sub', 'sandwich']
  };
  
  const term = searchTerm.toLowerCase();
  const matchedVariations = [];
  
  // Add original term
  matchedVariations.push(term);
  
  // Check if search term matches any key
  if (variations[term]) {
    matchedVariations.push(...variations[term]);
  }
  
  // Check if search term is contained in any variation
  Object.entries(variations).forEach(([key, values]) => {
    if (key.includes(term) || values.some(v => v.includes(term))) {
      matchedVariations.push(key);
      matchedVariations.push(...values);
    }
  });
  
  return [...new Set(matchedVariations)]; // Remove duplicates
}

function showSearchLoading(show) {
  const loadingElement = document.getElementById('searchLoading');
  if (loadingElement) {
    if (show) {
      loadingElement.classList.remove('hidden');
      console.log('🔄 Showing loading spinner');
    } else {
      loadingElement.classList.add('hidden');
      console.log('⏹️ Hiding loading spinner');
    }
  }
}

function displaySearchResults(results) {
  const searchResults = document.getElementById('searchResults');
  const noResults = document.getElementById('noResults');
  
  if (!searchResults || !noResults) {
    console.error('❌ Search results containers not found');
    return;
  }
  
  // Clear previous results
  searchResults.innerHTML = '';
  
  if (results.length === 0) {
    console.log('❌ No results to display');
    searchResults.classList.add('hidden');
    noResults.classList.remove('hidden');
    return;
  }
  
  // Show results
  console.log('✅ Displaying', results.length, 'search results');
  noResults.classList.add('hidden');
  searchResults.classList.remove('hidden');
  
  searchResults.innerHTML = results.map(food => `
    <div class="food-result" onclick="addFoodFromSearch('${food.name.replace(/'/g, "\\'")}', ${food.calories})">
      <div class="food-result-header">
        <h4 class="food-result-name">${food.name}</h4>
        ${food.brand !== 'Generic' ? `<span class="food-result-brand">${food.brand}</span>` : ''}
      </div>
      <div class="food-result-nutrition">
        <div class="nutrition-item">
          <span class="nutrition-label">Calories</span>
          <span class="nutrition-value calories">${food.calories}</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Protein</span>
          <span class="nutrition-value">${food.protein}g</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Carbs</span>
          <span class="nutrition-value">${food.carbs}g</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Fat</span>
          <span class="nutrition-value">${food.fat}g</span>
        </div>
      </div>
      <div class="food-result-serving">
        <strong>Per serving:</strong> ${food.serving}
      </div>
    </div>
  `).join('');
  
  console.log('✅ Search results displayed successfully');
}

function clearSearchResults() {
  const searchResults = document.getElementById('searchResults');
  const noResults = document.getElementById('noResults');
  const searchInput = document.getElementById('foodSearchInput');
  
  if (searchResults) {
    searchResults.innerHTML = '';
    searchResults.classList.add('hidden');
  }
  if (noResults) noResults.classList.add('hidden');
  if (searchInput) searchInput.value = '';
  
  console.log('🧹 Search results cleared');
}

function addFoodFromSearch(foodName, calories) {
  console.log('➕ Adding food from search:', foodName, calories, 'calories');
  
  // Add to food log
  addFoodToLog(foodName, calories);
  
  // Clear search and switch back to daily tracking
  clearSearchResults();
  switchNutritionTab('daily');
  
  showNotification(`Added ${foodName} to your food log!`);
}

function addFoodToLog(foodName, calories) {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  const logList = document.getElementById('foodLogList');
  if (!logList) {
    console.error('❌ Food log list not found');
    return;
  }

  const foodItem = document.createElement('div');
  foodItem.className = 'food-log-item';
  foodItem.innerHTML = `
    <div class="food-info">
      <span class="food-name">${foodName}</span>
      <span class="food-time">${currentTime}</span>
    </div>
    <div class="food-nutrition">
      <span class="food-calories">${calories} cal</span>
      <button class="btn btn--sm remove-food-btn">Remove</button>
    </div>
  `;

  logList.appendChild(foodItem);

  // Update nutrition data
  appData.nutritionData.daily.consumed += calories;
  updateNutritionStats();
  renderCalorieChart();
  
  console.log('✅ Food added to log successfully');
}

function removeFoodItem(button) {
  const foodItem = button.closest('.food-log-item');
  if (foodItem) {
    const caloriesText = foodItem.querySelector('.food-calories').textContent;
    const calories = parseInt(caloriesText.match(/\d+/)[0]);
    
    appData.nutritionData.daily.consumed -= calories;
    updateNutritionStats();
    renderCalorieChart();
    
    foodItem.remove();
    showNotification('Food item removed from log');
  }
}

// Recipes Functions with Images
function setupRecipes() {
  const searchInput = document.getElementById('recipeSearch');
  const cuisineFilter = document.getElementById('cuisineFilter');

  if (searchInput) {
    searchInput.addEventListener('input', filterRecipes);
  }

  if (cuisineFilter) {
    cuisineFilter.addEventListener('change', filterRecipes);
  }
}

function renderRecipes() {
  const grid = document.getElementById('recipeGrid');
  if (!grid) return;

  grid.innerHTML = appData.recipes.map(recipe => `
    <div class="recipe-card" data-recipe-id="${recipe.id}" data-cuisine="${recipe.cuisine}" data-name="${recipe.name.toLowerCase()}">
      <div class="recipe-image-container">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="recipe-image-fallback" style="display: none;">🍽️</div>
      </div>
      <div class="recipe-content">
        <h4 class="recipe-name">${recipe.name}</h4>
        <div class="recipe-meta">
          <span>⏱️ ${recipe.time}</span>
          <span>📊 ${recipe.difficulty}</span>
          <span>🔥 ${recipe.calories} cal</span>
        </div>
        <p class="recipe-cuisine">${recipe.cuisine} • Serves ${recipe.servings}</p>
        <div class="recipe-actions">
          <button class="btn btn--secondary" onclick="showRecipeModal(${recipe.id})">View Recipe</button>
          <button class="btn btn--primary" onclick="addRecipeToShoppingList(${recipe.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Add the new filterRecipes function here:
function filterRecipes() {
  const searchTerm = document.getElementById('recipeSearch')?.value.toLowerCase() || '';
  const cuisineFilter = document.getElementById('cuisineFilter')?.value || 'all';

  const vegFilter = document.getElementById('vegFilter')?.value || 'all';
  const difficultyFilter = document.getElementById('difficultyFilter')?.value || 'all';
  const spicinessFilter = document.getElementById('spicinessFilter')?.value || 'all';
  const healthFilter = document.getElementById('healthFilter')?.value || 'all';
  const timeFilter = document.getElementById('timeFilter')?.value || 'all';

  const cards = document.querySelectorAll('.recipe-card');

  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const cuisine = card.getAttribute('data-cuisine');

    const recipeId = parseInt(card.getAttribute('data-recipe-id'));
    const recipe = appData.recipes.find(r => r.id === recipeId);

    if (!recipe) {
      card.style.display = 'none';
      return;
    }

    const matchesSearch = name.includes(searchTerm);
    const matchesCuisine = cuisineFilter === 'all' || cuisine === cuisineFilter;
    const matchesVeg = vegFilter === 'all' || (vegFilter === 'veg' ? recipe.veg === true : recipe.veg === false);
    const matchesDifficulty = difficultyFilter === 'all' || recipe.difficulty === difficultyFilter;
    const matchesSpiciness = spicinessFilter === 'all' || recipe.spiciness === spicinessFilter;
    const matchesHealth = healthFilter === 'all' || (recipe.healthCondition?.includes(healthFilter) || false);
    const matchesTime = timeFilter === 'all' || recipe.time <= parseInt(timeFilter);

    if (matchesSearch && matchesCuisine && matchesVeg && matchesDifficulty && matchesSpiciness && matchesHealth && matchesTime) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


function setupRecipes() {
  const searchInput = document.getElementById('recipeSearch');
  const cuisineFilter = document.getElementById('cuisineFilter');
  const vegFilter = document.getElementById('vegFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const spicinessFilter = document.getElementById('spicinessFilter');
  const healthFilter = document.getElementById('healthFilter');
  const timeFilter = document.getElementById('timeFilter');

  if (searchInput) {
    searchInput.addEventListener('input', filterRecipes);
  }

  if (cuisineFilter) {
    cuisineFilter.addEventListener('change', filterRecipes);
  }

  if (vegFilter) {
    vegFilter.addEventListener('change', filterRecipes);
  }

  if (difficultyFilter) {
    difficultyFilter.addEventListener('change', filterRecipes);
  }

  if (spicinessFilter) {
    spicinessFilter.addEventListener('change', filterRecipes);
  }

  if (healthFilter) {
    healthFilter.addEventListener('change', filterRecipes);
  }

  
  if (timeFilter) {
    timeFilter.addEventListener('change', filterRecipes);
  }
}


function showRecipeModal(recipeId) {
  const recipe = appData.recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  const modal = document.getElementById('recipeModal');
  const recipeName = document.getElementById('modalRecipeName');
  const recipeTime = document.getElementById('modalRecipeTime');
  const recipeDifficulty = document.getElementById('modalRecipeDifficulty');
  const ingredients = document.getElementById('modalIngredients');
  const instructions = document.getElementById('modalInstructions');

  if (recipeName) recipeName.textContent = recipe.name;
  if (recipeTime) recipeTime.textContent = recipe.time;
  if (recipeDifficulty) recipeDifficulty.textContent = recipe.difficulty;

  if (ingredients) {
    ingredients.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
  }

  if (instructions) {
    instructions.innerHTML = recipe.instructions.map(inst => `<li>${inst}</li>`).join('');
  }

  if (modal) modal.classList.remove('hidden');
}

function addRecipeToShoppingList(recipeId) {
  const recipe = appData.recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  recipe.ingredients.forEach(ingredient => {
    if (!appData.shoppingList.some(item => 
      item.name.toLowerCase() === ingredient.toLowerCase())) {
      addToShoppingList(ingredient);
    }
  });

  showNotification(`Added ${recipe.ingredients.length} ingredients from ${recipe.name} to shopping list!`);
}

function addToMealPlan(recipeId) {
  // Simple implementation - add to next available slot
  const days = Object.keys(appData.mealPlan);
  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snacks'];
  
  for (const day of days) {
    for (const mealType of mealTypes) {
      if (!appData.mealPlan[day][mealType]) {
        appData.mealPlan[day][mealType] = {
          recipeId: recipeId,
          servings: 2
        };
        
        const recipe = appData.recipes.find(r => r.id === recipeId);
        showNotification(`Added ${recipe?.name} to ${day} ${mealType}!`);
        saveMealPlanData();
        return;
      }
    }
  }
  
  showNotification('Meal plan is full! Please remove a meal first.');
}

// Profile Functions
function setupProfile() {
  const themeToggle = document.getElementById('themeToggle');
  const budgetSlider = document.getElementById('budgetSlider');
  const saveBtn = document.getElementById('saveProfileBtn');
  const cancelBtn = document.getElementById('cancelProfileBtn');

  if (themeToggle) {
    themeToggle.addEventListener('change', toggleTheme);
  }

  if (budgetSlider) {
    budgetSlider.addEventListener('input', updateBudget);
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', saveProfileChanges);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', cancelProfileChanges);
  }
}

function renderProfile() {
  const editableName = document.getElementById('editableName');
  const editableEmail = document.getElementById('editableEmail');
  const editablePhone = document.getElementById('editablePhone');
  const themeToggle = document.getElementById('themeToggle');
  const budgetSlider = document.getElementById('budgetSlider');
  const sliderValue = document.getElementById('sliderValue');

  if (editableName) editableName.value = appData.user.name;
  if (editableEmail) editableEmail.value = appData.user.email;
  if (editablePhone) editablePhone.value = appData.user.phone;

  if (themeToggle) {
    themeToggle.checked = appData.user.theme === 'dark';
  }

  if (budgetSlider) {
    budgetSlider.value = appData.user.budgetLimit;
  }

  if (sliderValue) {
    sliderValue.textContent = appData.user.budgetLimit.toLocaleString();
  }
}

function saveProfileChanges() {
  const editableName = document.getElementById('editableName');
  const editableEmail = document.getElementById('editableEmail');
  const editablePhone = document.getElementById('editablePhone');

  if (editableName && editableEmail && editablePhone) {
    // Update user data
    appData.user.name = editableName.value.trim();
    appData.user.email = editableEmail.value.trim();
    appData.user.phone = editablePhone.value.trim();
    
    // Update first and last name if needed
    const nameParts = appData.user.name.split(' ');
    appData.user.firstName = nameParts[0] || 'User';
    appData.user.lastName = nameParts.slice(1).join(' ') || '';
    
    // Update display
    updateUserDisplay();
    saveUserData();
    
    showNotification('Profile information saved successfully!');
  }
}

function cancelProfileChanges() {
  // Reset fields to original values
  renderProfile();
  showNotification('Changes cancelled');
}

function toggleTheme() {
  const isDark = document.getElementById('themeToggle')?.checked || false;
  appData.user.theme = isDark ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-color-scheme', appData.user.theme);
  
  saveUserData();
  showNotification(`Switched to ${appData.user.theme} theme`);
}

function updateBudget() {
  const slider = document.getElementById('budgetSlider');
  const sliderValue = document.getElementById('sliderValue');
  
  if (slider) {
    const newBudget = parseInt(slider.value);
    appData.user.budgetLimit = newBudget;
    
    if (sliderValue) {
      sliderValue.textContent = newBudget.toLocaleString();
    }
    
    updateBudgetDisplay();
    saveUserData();
  }
}

// AI Chatbot Functions
function setupAIChatbot() {
  const floatBtn = document.getElementById('chatbotFloatBtn');
  const closeBtn = document.getElementById('chatbotCloseBtn');
  const sendBtn = document.getElementById('sendBtn');
  const voiceBtn = document.getElementById('voiceBtn');
  const chatInput = document.getElementById('chatbotInput');

  if (floatBtn) {
    floatBtn.addEventListener('click', toggleChatbot);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeChatbot);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
  }

  if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  if (voiceBtn) {
    voiceBtn.addEventListener('click', toggleVoice);
    setupSpeechRecognition();
  }
}

function setupSpeechRecognition() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = function() {
      isListening = true;
      showVoiceIndicator(true);
    };

    recognition.onresult = function (event) {
      const transcript = (event.results[0][0].transcript || '').trim();
      const chatInput = document.getElementById('chatbotInput');
    
      // Normalize common mishears for better intent matching
      const normalized = transcript
        .toLowerCase()
        .replace(/\bshocking\b/g, 'shopping')
        .replace(/\bshoppings?\b/g, 'shopping')
        .replace(/\bplanet\b/g, 'plan')
        .replace(/\blaunch\b/g, 'lunch')
        .replace(/\bbreak fast\b/g, 'breakfast')
        .replace(/\bdiner\b/g, 'dinner')
        .replace(/\brecipes?\b/g, 'recipe')
        .replace(/\bpan three\b/g, 'pantry')
        .replace(/\bexpiring?\b/g, 'expire')
        .replace(/\bbudget\b/g, 'budget')
        .replace(/\btheme\b/g, 'theme');
    
      // Optional wake word: "smart cart ..." or "hey smart cart ..."
      const wake = /^(hey\s+)?smart\s*cart[, ]\s*/i;
      const finalCmd = normalized.replace(wake, '').trim();
    
      if (chatInput) chatInput.value = finalCmd || normalized;
    
      // Add user bubble and dispatch to the same text pipeline
      addChatMessage(finalCmd || transcript, 'user');
      setTimeout(() => processAIMessage(finalCmd || transcript), 200);
    };
    

    recognition.onend = function() {
      isListening = false;
      showVoiceIndicator(false);
    };

    recognition.onerror = function(event) {
      console.error('Speech recognition error:', event.error);
      isListening = false;
      showVoiceIndicator(false);
      showNotification('Voice recognition error. Please try again.');
    };
    // Auto-stop after 7s of silence fallback (for browsers with onend quirks)
let voiceTimeout = null;
recognition.onstart = function () {
  isListening = true;
  showVoiceIndicator(true);
  clearTimeout(voiceTimeout);
  voiceTimeout = setTimeout(() => { try { recognition.stop(); } catch {} }, 7000);
};

recognition.onend = function () {
  isListening = false;
  showVoiceIndicator(false);
  clearTimeout(voiceTimeout);
};

// Gentle auto-retry for "no-speech" once
let retried = false;
recognition.onerror = function (event) {
  console.error('Speech recognition error:', event.error);
  isListening = false;
  showVoiceIndicator(false);
  if (event.error === 'no-speech' && !retried) {
    retried = true;
    setTimeout(() => { try { recognition.start(); } catch {} }, 400);
    return;
  }
  retried = false;
  showNotification('Voice recognition error. Please try again.');
};

  }
}

function toggleChatbot() {
  const popup = document.getElementById('chatbotPopup');
  if (popup) {
    popup.classList.toggle('hidden');
    
    if (!popup.classList.contains('hidden')) {
      const chatInput = document.getElementById('chatbotInput');
      if (chatInput) {
        setTimeout(() => chatInput.focus(), 100);
      }
    }
  }
}

function closeChatbot() {
  const popup = document.getElementById('chatbotPopup');
  if (popup) {
    popup.classList.add('hidden');
  }
}

function sendMessage() {
  const chatInput = document.getElementById('chatbotInput');
  const message = chatInput?.value.trim();
  
  if (!message) return;

  // Add user message
  addChatMessage(message, 'user');
  
  // Clear input
  if (chatInput) {
    chatInput.value = '';
  }

  // Process AI response
  setTimeout(() => {
    processAIMessage(message);
  }, 500);
}

function addChatMessage(message, type) {
  const messagesContainer = document.getElementById('chatbotMessages');
  if (!messagesContainer) return;

  const messageDiv = document.createElement('div');
  messageDiv.className = `chatbot-message ${type}-message`;
  
  const avatar = type === 'bot' ? '🤖' : '👤';
  
  messageDiv.innerHTML = `
    <div class="message-avatar">${avatar}</div>
    <div class="message-content">
      <p>${message}</p>
    </div>
  `;

  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function processAIMessage(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  let response = '';

  // Shopping commands
  if (lowerMessage.includes('add') && lowerMessage.includes('shopping')) {
    const itemMatch = userMessage.match(/add\s+(.+?)\s+to\s+shopping/i);
    if (itemMatch) {
      const itemName = itemMatch[1];
      addToShoppingList(itemName);
      response = `✅ Added "${itemName}" to your shopping list!`;
    } else {
      response = "What item would you like me to add to your shopping list?";
    }
  }

  // Remove from shopping list
else if (lowerMessage.includes('remove') && lowerMessage.includes('shopping')) {
  const itemMatch = userMessage.match(/remove\s+(.+?)\s+from\s+shopping/i);
  if (itemMatch) {
    const itemName = itemMatch[1].toLowerCase();
    const item = appData.shoppingList.find(i => i.name.toLowerCase().includes(itemName));
    if (item) {
      removeShoppingItem(item.id);
      response = `🗑️ Removed "${item.name}" from the shopping list.`;
    } else {
      response = "Couldn't find that item in shopping. Try the exact name shown in your list.";
    }
  } else {
    response = "What item should be removed from the shopping list?";
  }
}

// Increase budget by amount
else if (lowerMessage.match(/increase\s+budget\s+by\s+(\d+)/i)) {
  const amt = parseInt(lowerMessage.match(/increase\s+budget\s+by\s+(\d+)/i)[1], 10);
  const slider = document.getElementById('budgetSlider');
  if (!Number.isNaN(amt) && slider) {
    const newVal = Math.max(0, (parseInt(slider.value, 10) || appData.user.budgetLimit) + amt);
    slider.value = String(newVal);
    updateBudget();
    response = `⬆️ Budget increased by ₹${amt} to ₹${newVal}.`;
  } else {
    response = "Provide a valid amount, e.g., 'increase budget by 500'.";
  }
}

// Search for a specific recipe by name and show its details
else if (lowerMessage.match(/(?:search|find|details|info on|recipe for|how to make)\s+(.+)|(.+)\s+recipe/i)) {
  const match = lowerMessage.match(/(?:search|find|details|info on|recipe for|how to make)\s+(.+)|(.+)\s+recipe/i);
  // The recipe name will be in either the first or second capture group
  const recipeNameQuery = (match[1] || match[2] || "").trim();

  if (recipeNameQuery) {
    // Find the recipe in your data using a case-insensitive, partial match
    const recipe = appData.recipes.find(r => r.name.toLowerCase().includes(recipeNameQuery.toLowerCase()));

    if (recipe) {
      // This function already exists in your code and opens the recipe details modal
      showRecipeModal(recipe.id);
      response = `🍽️ Here are the details for "${recipe.name}". I have opened the recipe card for you.`;
    } else {
      // If no recipe is found, inform the user
      response = `Sorry, I couldn't find a recipe matching "${recipeNameQuery}". Please check the spelling or try another dish.`;
    }
  } else {
    // A fallback response, though unlikely to be triggered with this regular expression
    response = "Which recipe would you like to see the details for?";
  }
}

// Decrease budget by amount
else if (lowerMessage.match(/decrease\s+budget\s+by\s+(\d+)/i)) {
  const amt = parseInt(lowerMessage.match(/decrease\s+budget\s+by\s+(\d+)/i)[1], 10);
  const slider = document.getElementById('budgetSlider');
  if (!Number.isNaN(amt) && slider) {
    const newVal = Math.max(0, (parseInt(slider.value, 10) || appData.user.budgetLimit) - amt);
    slider.value = String(newVal);
    updateBudget();
    response = `⬇️ Budget decreased by ₹${amt} to ₹${newVal}.`;
  } else {
    response = "Provide a valid amount, e.g., 'decrease budget by 300'.";
  }
}

// Meal plan: add recipe by name -> then ask day and slot
else if (lowerMessage.includes('add') && lowerMessage.includes('to plan')) {
  // Try to extract recipe name from fragments like: "add Butter Chicken to plan"
  const m = userMessage.match(/add\s+(.+?)\s+to\s+plan/i);
  const nameRaw = m ? m[1] : userMessage.replace(/add|to|plan/gi, '').trim();
  const recipeName = nameRaw?.toLowerCase();

  if (!recipeName) {
    response = "Which recipe should be added to the plan?";
  } else {
    const recipe = appData.recipes.find(r => r.name.toLowerCase().includes(recipeName));
    if (!recipe) {
      response = "Recipe not found. Use the exact name shown in Recipes.";
    } else {
      chatState.pendingMeal = {
        recipeId: recipe.id,
        recipeName: recipe.name,
        expect: 'day'
      };
      response = `📅 Adding "${recipe.name}". Which day? (Mon, Tue, Wed, Thu, Fri, Sat, Sun)`;
    }
  }
}
// Continue flow: expect day
else if (chatState.pendingMeal && chatState.pendingMeal.expect === 'day') {
  // Accept variants like "monday", "mon"
  const dayMap = {
    mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday',
    thu: 'Thursday', fri: 'Friday', sat: 'Saturday', sun: 'Sunday'
  };
  const token = lowerMessage.slice(0, 3); // crude but effective for mon/tue/...
  const day =
    Object.values(dayMap).find(d => lowerMessage.includes(d.toLowerCase())) ||
    (dayMap[token] || null);

  if (!day) {
    response = "Please provide a valid day: Mon, Tue, Wed, Thu, Fri, Sat, or Sun.";
  } else {
    chatState.pendingMeal.day = day;
    chatState.pendingMeal.expect = 'slot';
    // Offer known meal slots (plus any custom columns)
    const baseSlots = ['breakfast', 'lunch', 'dinner', 'snacks'];
    const customSlots = appData.mealPlannerColumns
      .filter(c => !['breakfast','lunch','dinner','snacks'].includes(c.id))
      .map(c => c.name.toLowerCase());
    const options = [...baseSlots, ...customSlots].map(s => s.charAt(0).toUpperCase() + s.slice(1));
    response = `Great, ${day}. Which slot? (${options.join(', ')})`;
  }
}

// Continue flow: expect slot
else if (chatState.pendingMeal && chatState.pendingMeal.expect === 'slot') {
  // Normalize slot against columns
  const col = appData.mealPlannerColumns.find(c => {
    const byId = lowerMessage.includes(c.id.toLowerCase());
    const byName = lowerMessage.includes(c.name.toLowerCase());
    return byId || byName;
  });

  if (!col) {
    const options = appData.mealPlannerColumns.map(c => c.name).join(', ');
    response = `Please choose a valid slot: ${options}.`;
  } else {
    const { recipeId, recipeName, day } = chatState.pendingMeal;
    // Place recipe into chosen day/slot
    if (!appData.mealPlan[day]) appData.mealPlan[day] = {};
    appData.mealPlan[day][col.id] = { recipeId, servings: 2 };
    saveMealPlanData();
    renderMealPlanner();

    response = `✅ Added "${recipeName}" to ${day} • ${col.name}.`;
    chatState.pendingMeal = null; // clear state
  }
}
// Fast path: "add Butter Chicken to plan monday dinner"
else if (lowerMessage.includes('add') && lowerMessage.includes('to plan') && /mon|tue|wed|thu|fri|sat|sun/i.test(lowerMessage)) {
  const m = userMessage.match(/add\s+(.+?)\s+to\s+plan/i);
  const recipeName = m ? m[1] : null;
  const recipe = recipeName ? appData.recipes.find(r => r.name.toLowerCase().includes(recipeName.toLowerCase())) : null;

  // Resolve day
  const dayMap = { mon:'Monday', tue:'Tuesday', wed:'Wednesday', thu:'Thursday', fri:'Friday', sat:'Saturday', sun:'Sunday' };
  const dayToken = (lowerMessage.match(/\b(mon|tue|wed|thu|fri|sat|sun)\b/i) || [])[1];
  const day = dayToken ? dayMap[dayToken.toLowerCase()] : null;

  // Resolve slot
  const col = appData.mealPlannerColumns.find(c => {
    const idHit = lowerMessage.includes(c.id.toLowerCase());
    const nameHit = lowerMessage.includes(c.name.toLowerCase());
    return idHit || nameHit;
  });

  if (!recipe) {
    response = "Recipe not found. Provide a valid recipe name.";
  } else if (!day) {
    response = "Provide a valid day (Mon–Sun).";
  } else if (!col) {
    const options = appData.mealPlannerColumns.map(c => c.name).join(', ');
    response = `Provide a valid slot: ${options}.`;
  } else {
    if (!appData.mealPlan[day]) appData.mealPlan[day] = {};
    appData.mealPlan[day][col.id] = { recipeId: recipe.id, servings: 2 };
    saveMealPlanData();
    renderMealPlanner();
    response = `✅ Added "${recipe.name}" to ${day} • ${col.name}.`;
  }
}


// Mark shopping item bought/done
else if (lowerMessage.includes('mark') && (lowerMessage.includes('bought') || lowerMessage.includes('done'))) {
  const itemMatch = userMessage.match(/mark\s+(.+?)\s+(bought|done)/i);
  if (itemMatch) {
    const itemName = itemMatch[1].toLowerCase();
    const item = appData.shoppingList.find(i => i.name.toLowerCase().includes(itemName));
    if (item) {
      toggleShoppingItem(item.id);
      response = `✅ Marked "${item.name}" as bought.`;
    } else {
      response = "Item not found in shopping list. Use the name as it appears.";
    }
  } else {
    response = "Which shopping item should be marked as bought?";
  }
}

// Direct navigation by section name
else if (lowerMessage.startsWith('go to ') || lowerMessage.startsWith('open ')) {
  const sectionMap = {
    'dashboard': 'dashboard',
    'pantry': 'pantry',
    'shopping': 'shopping',
    'recipes': 'recipes',
    'nutrition': 'nutrition',
    'meal plan': 'meal-planner',
    'meal-planner': 'meal-planner',
    'mood': 'moodbites',
    'what can i cook': 'what-can-cook'
  };
  const key = Object.keys(sectionMap).find(k => lowerMessage.includes(k));
  if (key) {
    showSection(sectionMap[key]);
    response = `➡️ Opening ${key} section.`;
  } else {
    response = "Which section should be opened? Try dashboard, pantry, shopping, recipes, nutrition, or meal plan.";
  }
}
// Undo last logged food
else if (lowerMessage.includes('undo food') || lowerMessage.includes('remove last food')) {
  const list = document.getElementById('foodLogList');
  const last = list?.lastElementChild;
  if (last) {
    const cText = last.querySelector('.food-calories')?.textContent || '0';
    const calories = parseInt(cText.match(/\d+/)?.[0] || '0', 10);
    appData.nutritionData.daily.consumed -= calories;
    updateNutritionStats();
    renderCalorieChart();
    last.remove();
    response = "↩️ Removed the last logged food item.";
  } else {
    response = "No food items to remove.";
  }
}

// Nutrition search and quick log
else if (lowerMessage.includes('calories in') || lowerMessage.startsWith('nutrition ') || lowerMessage.includes('add calories')) {
  const m = userMessage.match(/calories in\s+(.+)|nutrition\s+(.+)|add calories\s+(.+)/i);
  const term = m ? (m[1] || m[2] || m[3]) : null;
  if (term) {
    const results = searchFoodDatabase(term.toLowerCase());
    if (results && results.length) {
      const top = results[0];
      addFoodFromSearch(top.name, top.calories);
      response = `📊 Logged ${top.calories} cal for ${top.name}.`;
    } else {
      response = "No nutrition match found. Try a simpler name like 'banana' or a brand item.";
    }
  } else {
    response = "Provide a food, e.g., 'calories in dal tadka' or 'nutrition banana'.";
  }
}
// Mood-based suggestions
else if (lowerMessage.includes('mood') || lowerMessage.includes('tired') || lowerMessage.includes('energetic') || lowerMessage.includes('comfort') || lowerMessage.includes('light') || lowerMessage.includes('hearty')) {
  const keys = ['tired','energetic','calm','light','hearty','comfort','familiar','international','experimental','quick','moderate','leisurely'];
  const found = keys.filter(k => lowerMessage.includes(k));
  const suggestions = findRecipesByMood(found.length ? found : ['comfort']);
  response = `🎯 Mood picks:\n\n• ${suggestions.map(r => `${r.name} (${r.time})`).slice(0,3).join('\n• ')}`;
}
// Recipes by ingredient
else if ((lowerMessage.includes('recipe') || lowerMessage.includes('cook')) && lowerMessage.includes('with')) {
  const m = userMessage.match(/with\s+(.+)/i);
  if (m) {
    const ingredient = m[1].toLowerCase().trim();
    const matches = appData.recipes
      .filter(r => r.ingredients.some(ing => ing.toLowerCase().includes(ingredient)))
      .slice(0, 3);
    response = matches.length
      ? `🔎 Recipes with ${ingredient}:\n\n• ${matches.map(r => `${r.name} (${r.time})`).join('\n• ')}`
      : `No recipes found using ${ingredient}. Try another ingredient.`;
  } else {
    response = "Specify an ingredient, e.g., 'recipes with spinach'.";
  }
}
// Clear the meal plan
else if (lowerMessage.includes('clear') && (lowerMessage.includes('meal plan') || lowerMessage.includes('plan'))) {
  clearMealPlan();
  response = "🗓️ Cleared the meal plan for the week.";
}
// Generate shopping list from meal plan
else if (lowerMessage.includes('generate') && lowerMessage.includes('shopping')) {
  generateShoppingListFromMealPlan();
  response = "🧾 Generated shopping list from the meal plan and opened shopping.";
}
// Restock pantry item
else if (lowerMessage.includes('restock') && lowerMessage.includes('pantry')) {
  const m = userMessage.match(/restock\s+(.+)/i);
  if (m) {
    const name = m[1].toLowerCase();
    const item = appData.pantryItems.find(p => p.name.toLowerCase().includes(name));
    if (item) {
      restockItem(item.id);
      response = `🔄 Restocked "${item.name}".`;
    } else {
      response = "No matching pantry item found to restock.";
    }
  } else {
    response = "Which pantry item should be restocked?";
  }
}
// Add item to a specific category
else if (lowerMessage.match(/add\s+(.+?)\s+to\s+(vegetables|fruits|dairy|grains|protein|condiments)/i)) {
  const [, name, category] = lowerMessage.match(/add\s+(.+?)\s+to\s+(vegetables|fruits|dairy|grains|protein|condiments)/i);
  addToShoppingList(name, category.charAt(0).toUpperCase() + category.slice(1));
  response = `➕ Added "${name}" to ${category} in shopping.`;
}
// Clear shopping list
else if (lowerMessage.includes('clear') && lowerMessage.includes('shopping')) {
  const count = appData.shoppingList.length;
  appData.shoppingList = [];
  renderShopping();
  saveShoppingData();
  response = count > 0 ? `🧹 Cleared ${count} items from shopping list.` : "Shopping list is already empty.";
}


  
  // Recipe recommendations
  else if (lowerMessage.includes('recipe') || lowerMessage.includes('cook') || lowerMessage.includes('dinner')) {
    const randomRecipes = appData.recipes.sort(() => 0.5 - Math.random()).slice(0, 2);
    response = `🍽️ Here are some great recipes for you:\n\n• ${randomRecipes[0].name} (${randomRecipes[0].time})\n• ${randomRecipes[1].name} (${randomRecipes[1].time})`;
  }
  
  // Pantry status
  else if (lowerMessage.includes('pantry') || lowerMessage.includes('expire')) {
    const criticalItems = appData.pantryItems.filter(item => item.status === 'critical');
    if (criticalItems.length > 0) {
      response = `⚠️ You have ${criticalItems.length} items expiring soon: ${criticalItems.map(item => item.name).join(', ')}`;
    } else {
      response = "✅ All your pantry items are fresh!";
    }
  }
  
  // Budget information
  else if (lowerMessage.includes('budget') || lowerMessage.includes('money')) {
    const remaining = appData.user.budgetLimit - appData.user.currentSpent;
    response = `💰 Budget: ₹${appData.user.currentSpent}/₹${appData.user.budgetLimit} spent. ₹${remaining} remaining.`;
  }

  // Set monthly budget
else if (lowerMessage.match(/set\s+budget\s+to\s+(\d+)/i)) {
  const amt = parseInt(lowerMessage.match(/set\s+budget\s+to\s+(\d+)/i)[1], 10);
  const slider = document.getElementById('budgetSlider');
  if (!Number.isNaN(amt) && slider) {
    slider.value = String(amt);
    updateBudget();
    response = `💰 Budget set to ₹${amt}.`;
  } else {
    response = "Provide a valid amount, e.g., 'set budget to 2000'.";
  }
}


  // Theme switching
else if (lowerMessage.includes('switch theme') || lowerMessage.includes('dark mode') || lowerMessage.includes('light mode')) {
  const wantDark = lowerMessage.includes('dark');
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.checked = wantDark;
    toggleTheme();
    response = `🎨 Switched to ${wantDark ? 'dark' : 'light'} theme.`;
  } else {
    response = "Theme control not found.";
  }
}


  
  // Navigation
  else if (lowerMessage.includes('show') || lowerMessage.includes('open')) {
    if (lowerMessage.includes('recipe')) {
      showSection('recipes');
      response = "📖 Opening recipes section for you!";
    } else if (lowerMessage.includes('pantry')) {
      showSection('pantry');
      response = "📦 Opening pantry section for you!";
    } else if (lowerMessage.includes('shopping')) {
      showSection('shopping');
      response = "🛒 Opening shopping list for you!";
    } else {
      response = "Which section would you like me to open?";
    }
  }
  
  // Greetings
  else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    response = "👋 Hello! I'm your SmartCart AI assistant. I can help you manage your shopping list, find recipes, check your pantry, and more!";
  }
  
  // Help
  else if (lowerMessage.includes('help')) {
    response = `🤖 I can help you with:\n\n• Adding items to shopping list\n• Finding recipes\n• Checking pantry status\n• Budget information\n• Navigation\n\nTry: "Add milk to shopping list" or "Show me recipes"`;
  }
  
  // Default response
  else {
    const responses = [
      "🤔 I'm not sure about that. Try asking me about recipes, shopping, or your pantry!",
      "💡 You can ask me to add items to your shopping list or find recipes.",
      "🛒 Need help with shopping or cooking? Just ask!",
      "📱 Try saying 'help' to see what I can do for you."
    ];
    response = responses[Math.floor(Math.random() * responses.length)];
  }

  addChatMessage(response, 'bot');
}

function toggleVoice() {
  if (!recognition) {
    showNotification('Voice recognition not supported');
    return;
  }
  if (isListening) {
    try { recognition.stop(); } catch {}
    finally { isListening = false; showVoiceIndicator(false); }
  } else {
    try {
      isListening = true;
      showVoiceIndicator(true);
      recognition.start();
    } catch (e) {
      isListening = false;
      showVoiceIndicator(false);
      showNotification('Microphone error. Please allow mic access and try again.');
    }
  }
}



function showVoiceIndicator(show) {
  const indicator = document.getElementById('voiceRecording');
  if (indicator) {
    if (show) {
      indicator.classList.remove('hidden');
    } else {
      indicator.classList.add('hidden');
    }
  }
}

// Modal Functions
function setupModals() {
  const recipeModal = document.getElementById('recipeModal');
  const closeModal = document.getElementById('closeModal');
  const addMealModal = document.getElementById('addMealModal');
  const closeMealModal = document.getElementById('closeMealModal');
  const cancelMealBtn = document.getElementById('cancelMealBtn');
  const addMealBtn = document.getElementById('addMealBtn');
  const decreaseServing = document.getElementById('decreaseServing');
  const increaseServing = document.getElementById('increaseServing');
  const servingInput = document.getElementById('servingInput');
  const recipeDropdown = document.getElementById('recipeDropdown');

  if (closeModal) {
    closeModal.addEventListener('click', function() {
      if (recipeModal) {
        recipeModal.classList.add('hidden');
      }
    });
  }

  if (recipeModal) {
    recipeModal.addEventListener('click', function(e) {
      if (e.target === recipeModal) {
        recipeModal.classList.add('hidden');
      }
    });
  }

  // Add Meal Modal handlers
  if (closeMealModal) {
    closeMealModal.addEventListener('click', function() {
      if (addMealModal) {
        addMealModal.classList.add('hidden');
      }
    });
  }

  if (cancelMealBtn) {
    cancelMealBtn.addEventListener('click', function() {
      if (addMealModal) {
        addMealModal.classList.add('hidden');
      }
    });
  }

  if (addMealBtn) {
    addMealBtn.addEventListener('click', handleAddMeal);
  }

  if (addMealModal) {
    addMealModal.addEventListener('click', function(e) {
      if (e.target === addMealModal) {
        addMealModal.classList.add('hidden');
      }
    });
  }

  // Recipe dropdown handler - auto-populate meal name when recipe is selected
  if (recipeDropdown) {
    recipeDropdown.addEventListener('change', function() {
      const selectedRecipeId = this.value;
      const mealNameInput = document.getElementById('mealNameInput');
      
      if (selectedRecipeId && mealNameInput) {
        const selectedRecipe = appData.recipes.find(r => r.id == selectedRecipeId);
        if (selectedRecipe) {
          mealNameInput.value = selectedRecipe.name;
        }
      } else if (mealNameInput) {
        // Clear if no recipe selected
        mealNameInput.value = '';
      }
    });
  }

  // Serving controls
  if (decreaseServing && servingInput) {
    decreaseServing.addEventListener('click', function() {
      const currentValue = parseInt(servingInput.value) || 1;
      if (currentValue > 1) {
        servingInput.value = currentValue - 1;
      }
    });
  }

  if (increaseServing && servingInput) {
    increaseServing.addEventListener('click', function() {
      const currentValue = parseInt(servingInput.value) || 1;
      if (currentValue < 10) {
        servingInput.value = currentValue + 1;
      }
    });
  }

  // Setup modal action buttons
  const addToMealPlanBtn = document.getElementById('addToMealPlan');
  const addToShoppingBtn = document.getElementById('addToShopping');

  if (addToMealPlanBtn) {
    addToMealPlanBtn.addEventListener('click', function() {
      showNotification('Recipe added to meal plan!');
      document.getElementById('recipeModal')?.classList.add('hidden');
    });
  }

  if (addToShoppingBtn) {
    addToShoppingBtn.addEventListener('click', function() {
      showNotification('Recipe ingredients added to shopping list!');
      document.getElementById('recipeModal')?.classList.add('hidden');
    });
  }
}

function handleAddMeal() {
  const recipeDropdown = document.getElementById('recipeDropdown');
  const mealNameInput = document.getElementById('mealNameInput');
  const servingInput = document.getElementById('servingInput');
  
  if (!mealNameInput || !servingInput || !currentMealSlot) {
    showNotification('Please fill in all fields');
    return;
  }
  
  const selectedRecipeId = recipeDropdown?.value;
  const mealName = mealNameInput.value.trim();
  const servings = parseInt(servingInput.value) || 1;
  
  if (!mealName) {
    showNotification('Please enter a meal name or select a recipe');
    return;
  }
  
  // Add meal to plan
  if (!appData.mealPlan[currentMealSlot.day]) {
    appData.mealPlan[currentMealSlot.day] = {};
  }
  
  // If a recipe was selected from dropdown, use its ID
  if (selectedRecipeId) {
    appData.mealPlan[currentMealSlot.day][currentMealSlot.mealType] = {
      recipeId: parseInt(selectedRecipeId),
      servings: servings
    };
  } else {
    // Manual entry
    appData.mealPlan[currentMealSlot.day][currentMealSlot.mealType] = {
      foodName: mealName,
      servings: servings
    };
  }
  
  // Close modal and refresh view
  document.getElementById('addMealModal')?.classList.add('hidden');
  renderMealPlanner();
  saveMealPlanData();
  
  showNotification(`Added ${mealName} (${servings} servings) to ${currentMealSlot.day} ${currentMealSlot.mealType}!`);
  currentMealSlot = null;
}

// Utility Functions
function updateElement(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function updateStatsDisplay() {
  updateElement('currentSpent', appData.user.currentSpent);
  updateElement('budgetLimit', appData.user.budgetLimit);
  updateElement('pantryCount', appData.pantryItems.length);
  updateElement('streak', appData.user.streak);
  
  // Calculate planned meals
  let plannedMeals = 0;
  Object.values(appData.mealPlan).forEach(day => {
    Object.values(day).forEach(meal => {
      if (meal && (meal.recipeId || meal.foodName)) plannedMeals++;
    });
  });
  updateElement('plannedMeals', plannedMeals);
}

function updateUserDisplay() {
  const userNameEl = document.querySelector('.user-name');
  const userAvatarEl = document.getElementById('userAvatar');
  
  if (userNameEl) {
    userNameEl.textContent = appData.user.firstName;
  }
  
  if (userAvatarEl) {
    const initials = appData.user.firstName[0] + (appData.user.lastName[0] || '');
    userAvatarEl.textContent = initials.toUpperCase();
  }
}

function updateBudgetDisplay() {
  updateElement('currentSpent', appData.user.currentSpent);
  updateElement('budgetLimit', appData.user.budgetLimit);
  
  const budgetPercentage = (appData.user.currentSpent / appData.user.budgetLimit) * 100;
  const budgetProgress = document.getElementById('budgetProgress');
  if (budgetProgress) {
    budgetProgress.style.width = `${Math.min(budgetPercentage, 100)}%`;
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 9999;
    font-weight: 500;
    box-shadow: var(--shadow-lg);
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Data Persistence Functions
function loadSavedData() {
  try {
    const savedUser = localStorage.getItem('smartcart-user');
    if (savedUser) {
      Object.assign(appData.user, JSON.parse(savedUser));
    }

    const savedShoppingList = localStorage.getItem('smartcart-shopping');
    if (savedShoppingList) {
      appData.shoppingList = JSON.parse(savedShoppingList);
    }

    const savedMealPlan = localStorage.getItem('smartcart-mealplan');
    if (savedMealPlan) {
      appData.mealPlan = JSON.parse(savedMealPlan);
    }

    const savedColumns = localStorage.getItem('smartcart-columns');
    if (savedColumns) {
      appData.mealPlannerColumns = JSON.parse(savedColumns);
    }

    const savedPantry = localStorage.getItem('smartcart-pantry');
    if (savedPantry) {
      appData.pantryItems = JSON.parse(savedPantry);
    }

    // Apply theme
    document.documentElement.setAttribute('data-color-scheme', appData.user.theme);
  } catch (error) {
    console.error('Error loading saved data:', error);
  }
}

function saveUserData() {
  try {
    localStorage.setItem('smartcart-user', JSON.stringify(appData.user));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
}

function saveShoppingData() {
  try {
    localStorage.setItem('smartcart-shopping', JSON.stringify(appData.shoppingList));
  } catch (error) {
    console.error('Error saving shopping data:', error);
  }
}

function saveMealPlanData() {
  try {
    localStorage.setItem('smartcart-mealplan', JSON.stringify(appData.mealPlan));
    localStorage.setItem('smartcart-columns', JSON.stringify(appData.mealPlannerColumns));
  } catch (error) {
    console.error('Error saving meal plan data:', error);
  }
}

// Initialize the application
console.log('🎉 SmartCart+ Enhanced - Ready to load!');