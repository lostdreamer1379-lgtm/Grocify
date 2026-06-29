// SmartCart+ - Complete JavaScript Implementation
// Enhanced with AI Chatbot, MoodBites, Custom Meal Planner, and Fixed Pantry Actions

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
    greenCoins: 150,
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
      id: 1, name: "Tomato Rice", cuisine: "Indian", time: "25 mins", difficulty: "Easy", 
      mood: ["comfort", "familiar"], image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=200&fit=crop", calories: 350, servings: 4,
      ingredients: ["Rice", "Tomatoes", "Onions", "Turmeric", "Salt", "Oil"],
      instructions: [
        "Cook rice separately until fluffy",
        "Heat oil in a large pan over medium heat", 
        "Sauté onions until golden brown",
        "Add chopped tomatoes and cook until soft",
        "Add turmeric and salt to taste",
        "Mix in the cooked rice gently",
        "Simmer for 5 minutes and serve hot"
      ]
    },
    {
      id: 2, name: "Veggie Stir Fry", cuisine: "Asian", time: "15 mins", difficulty: "Easy",
      mood: ["energetic", "light"], image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop", calories: 200, servings: 3,
      ingredients: ["Spinach", "Onions", "Soy sauce", "Garlic", "Ginger", "Oil"],
      instructions: [
        "Heat oil in a wok over high heat",
        "Add minced garlic and ginger, stir for 30 seconds",
        "Add vegetables and stir fry for 5-7 minutes",
        "Add soy sauce and toss well",
        "Serve immediately while hot"
      ]
    },
    {
      id: 3, name: "Comfort Mac & Cheese", cuisine: "American", time: "30 mins", difficulty: "Medium",
      mood: ["comfort", "hearty"], image: "https://images.unsplash.com/photo-1543826173-1c6b99c6c4fe?w=300&h=200&fit=crop", calories: 450, servings: 4,
      ingredients: ["Pasta", "Cheese", "Milk", "Butter", "Flour"],
      instructions: [
        "Boil pasta until al dente, then drain",
        "Make a roux with butter and flour in a saucepan",
        "Gradually add milk, whisking constantly",
        "Add cheese and melt until smooth",
        "Combine pasta with cheese sauce",
        "Bake in oven for 15 minutes until golden"
      ]
    },
    {
      id: 4, name: "Energy Smoothie Bowl", cuisine: "Healthy", time: "10 mins", difficulty: "Easy",
      mood: ["energetic", "light"], image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=300&h=200&fit=crop", calories: 250, servings: 1,
      ingredients: ["Banana", "Berries", "Yogurt", "Honey", "Granola"],
      instructions: [
        "Blend frozen banana and berries until smooth",
        "Add yogurt and honey, blend again",
        "Pour into a bowl",
        "Top with granola and fresh fruit",
        "Serve immediately"
      ]
    },
    {
      id: 5, name: "Spicy Lentil Curry", cuisine: "Indian", time: "45 mins", difficulty: "Medium",
      mood: ["adventurous", "hearty"], image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop", calories: 300, servings: 6,
      ingredients: ["Lentils", "Onions", "Tomatoes", "Garam masala", "Turmeric", "Coconut milk"],
      instructions: [
        "Wash and soak lentils for 30 minutes",
        "Sauté onions until soft and golden",
        "Add spices and cook for 1 minute",
        "Add tomatoes and cook until broken down",
        "Add lentils and water, simmer for 30 minutes",
        "Stir in coconut milk and serve with rice"
      ]
    },
    {
      id: 6, name: "Chicken Stir Fry", cuisine: "Asian", time: "20 mins", difficulty: "Medium",
      mood: ["energetic", "hearty"], image: "https://images.unsplash.com/photo-1603073906972-749d39b8bff4?w=300&h=200&fit=crop", calories: 400, servings: 4,
      ingredients: ["Chicken", "Spinach", "Onions", "Soy sauce", "Garlic", "Oil"],
      instructions: [
        "Cut chicken into bite-sized pieces",
        "Heat oil in wok and cook chicken until done",
        "Add vegetables and stir fry quickly",
        "Season with soy sauce and garlic",
        "Serve hot over rice"
      ]
    }
  ],

  // Comprehensive Food Database for Nutrition Search
  foodDatabase: [
    // Generic Foods
    {name: "Banana", brand: "Generic", calories: 105, protein: 1.3, carbs: 27, fat: 0.3, serving: "1 medium (118g)"},
    {name: "Apple", brand: "Generic", calories: 95, protein: 0.5, carbs: 25, fat: 0.3, serving: "1 medium (182g)"},
    {name: "Orange", brand: "Generic", calories: 62, protein: 1.2, carbs: 15.4, fat: 0.2, serving: "1 medium (131g)"},
    {name: "Chicken Breast", brand: "Generic", calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: "100g"},
    {name: "Rice", brand: "Generic", calories: 130, protein: 2.7, carbs: 28, fat: 0.3, serving: "1/3 cup (45g) dry"},
    {name: "Bread", brand: "Generic", calories: 265, protein: 9, carbs: 49, fat: 3.2, serving: "100g"},
    {name: "Milk", brand: "Generic", calories: 150, protein: 8, carbs: 12, fat: 8, serving: "1 cup (244ml)"},
    {name: "Egg", brand: "Generic", calories: 155, protein: 13, carbs: 1.1, fat: 11, serving: "2 large eggs"},
    {name: "Yogurt", brand: "Generic", calories: 100, protein: 17, carbs: 6, fat: 0, serving: "170g container"},
    {name: "Cheese", brand: "Generic", calories: 113, protein: 7, carbs: 1, fat: 9, serving: "1 oz (28g)"},
    {name: "Pasta", brand: "Generic", calories: 220, protein: 8, carbs: 44, fat: 1.1, serving: "2 oz (56g) dry"},
    {name: "Oatmeal", brand: "Generic", calories: 150, protein: 5, carbs: 27, fat: 3, serving: "1/2 cup (40g) dry"},
    {name: "Salmon", brand: "Generic", calories: 206, protein: 22, carbs: 0, fat: 12, serving: "100g"},
    {name: "Broccoli", brand: "Generic", calories: 55, protein: 4, carbs: 11, fat: 0.6, serving: "1 cup (156g)"},
    {name: "Sweet Potato", brand: "Generic", calories: 112, protein: 2, carbs: 26, fat: 0.1, serving: "1 medium (128g)"},
    {name: "Spinach", brand: "Generic", calories: 7, protein: 0.9, carbs: 1.1, fat: 0.1, serving: "1 cup (30g)"},
    {name: "Tomato", brand: "Generic", calories: 22, protein: 1.1, carbs: 4.8, fat: 0.2, serving: "1 medium (123g)"},
    {name: "Avocado", brand: "Generic", calories: 234, protein: 2.9, carbs: 12, fat: 21, serving: "1/2 avocado (100g)"},
    {name: "Almonds", brand: "Generic", calories: 164, protein: 6, carbs: 6.1, fat: 14.2, serving: "1 oz (28g)"},
    {name: "Peanut Butter", brand: "Generic", calories: 188, protein: 8, carbs: 8, fat: 16, serving: "2 tbsp (32g)"},
    
    // Fast Food - McDonald's
    {name: "Big Mac", brand: "McDonald's", calories: 550, protein: 25, carbs: 45, fat: 31, serving: "1 sandwich"},
    {name: "Quarter Pounder", brand: "McDonald's", calories: 520, protein: 26, carbs: 42, fat: 26, serving: "1 sandwich"},
    {name: "Chicken McNuggets", brand: "McDonald's", calories: 250, protein: 15, carbs: 15, fat: 15, serving: "6 pieces"},
    {name: "French Fries", brand: "McDonald's", calories: 365, protein: 4, carbs: 63, fat: 17, serving: "Large"},
    {name: "McFlurry Oreo", brand: "McDonald's", calories: 510, protein: 13, carbs: 82, fat: 15, serving: "Medium"},
    
    // Fast Food - KFC
    {name: "Original Recipe Chicken", brand: "KFC", calories: 320, protein: 19, carbs: 8, fat: 24, serving: "1 piece (thigh)"},
    {name: "Popcorn Chicken", brand: "KFC", calories: 400, protein: 18, carbs: 19, fat: 28, serving: "Regular"},
    {name: "Coleslaw", brand: "KFC", calories: 170, protein: 1, carbs: 13, fat: 13, serving: "Regular"},
    
    // Fast Food - Subway
    {name: "Turkey Breast Sub", brand: "Subway", calories: 280, protein: 18, carbs: 46, fat: 3.5, serving: "6-inch"},
    {name: "Chicken Teriyaki Sub", brand: "Subway", calories: 370, protein: 25, carbs: 59, fat: 4.5, serving: "6-inch"},
    {name: "BMT Sub", brand: "Subway", calories: 410, protein: 19, carbs: 46, fat: 16, serving: "6-inch"},
    
    // Pizza
    {name: "Margherita Pizza", brand: "Pizza Hut", calories: 300, protein: 12, carbs: 36, fat: 12, serving: "1 slice"},
    {name: "Pepperoni Pizza", brand: "Domino's", calories: 290, protein: 12, carbs: 36, fat: 11, serving: "1 slice"},
    
    // Indian Foods
    {name: "Dal", brand: "Generic", calories: 180, protein: 12, carbs: 32, fat: 0.8, serving: "1 cup (200g)"},
    {name: "Dal Tadka", brand: "Generic", calories: 200, protein: 13, carbs: 30, fat: 5, serving: "1 cup (200g)"},
    {name: "Chicken Biryani", brand: "Generic", calories: 320, protein: 18, carbs: 45, fat: 8, serving: "1 cup (200g)"},
    {name: "Biryani", brand: "Generic", calories: 280, protein: 8, carbs: 45, fat: 8, serving: "1 cup (200g)"},
    {name: "Roti", brand: "Generic", calories: 120, protein: 4, carbs: 22, fat: 2.8, serving: "1 piece"},
    {name: "Samosa", brand: "Generic", calories: 150, protein: 4, carbs: 18, fat: 7, serving: "1 piece"},
    {name: "Butter Chicken", brand: "Generic", calories: 350, protein: 28, carbs: 12, fat: 22, serving: "1 cup (240g)"},
    {name: "Paneer Makhani", brand: "Generic", calories: 320, protein: 14, carbs: 10, fat: 26, serving: "1 cup (240g)"},
    {name: "Paneer Tikka", brand: "Generic", calories: 280, protein: 16, carbs: 8, fat: 20, serving: "100g"},
    {name: "Naan", brand: "Generic", calories: 262, protein: 9, carbs: 45, fat: 5, serving: "1 piece"},
    {name: "Dosa", brand: "Generic", calories: 168, protein: 4, carbs: 33, fat: 2, serving: "1 piece"},
    {name: "Idli", brand: "Generic", calories: 58, protein: 2, carbs: 12, fat: 0.2, serving: "2 pieces"},
    {name: "Chole", brand: "Generic", calories: 200, protein: 8, carbs: 35, fat: 4, serving: "1 cup (200g)"},
    {name: "Masala Chai", brand: "Generic", calories: 60, protein: 2, carbs: 10, fat: 2, serving: "1 cup (240ml)"},
    {name: "Chai", brand: "Generic", calories: 60, protein: 2, carbs: 10, fat: 2, serving: "1 cup (240ml)"},
    
    // Snacks & Packaged Foods
    {name: "Maggi Noodles", brand: "Maggi", calories: 385, protein: 9.8, carbs: 60, fat: 12, serving: "1 pack (75g)"},
    {name: "Maggi", brand: "Maggi", calories: 385, protein: 9.8, carbs: 60, fat: 12, serving: "1 pack (75g)"},
    {name: "2-minute Noodles", brand: "Maggi", calories: 385, protein: 9.8, carbs: 60, fat: 12, serving: "1 pack (75g)"},
    {name: "Lays Chips", brand: "Lay's", calories: 160, protein: 2, carbs: 15, fat: 10, serving: "1 oz (28g)"},
    {name: "Oreo Cookies", brand: "Oreo", calories: 160, protein: 2, carbs: 25, fat: 7, serving: "3 cookies"},
    {name: "KitKat", brand: "Nestlé", calories: 218, protein: 3, carbs: 26, fat: 11, serving: "1 bar (42g)"},
    {name: "Coca Cola", brand: "Coca-Cola", calories: 140, protein: 0, carbs: 39, fat: 0, serving: "1 can (355ml)"},
    {name: "Coke", brand: "Coca-Cola", calories: 140, protein: 0, carbs: 39, fat: 0, serving: "1 can (355ml)"},
    
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
    
    // More Vegetables & Fruits
    {name: "Carrot", brand: "Generic", calories: 25, protein: 0.5, carbs: 6, fat: 0.1, serving: "1 medium (61g)"},
    {name: "Cucumber", brand: "Generic", calories: 16, protein: 0.7, carbs: 4, fat: 0.1, serving: "1 cup (119g)"},
    {name: "Bell Pepper", brand: "Generic", calories: 24, protein: 1, carbs: 7, fat: 0.3, serving: "1 medium (119g)"},
    {name: "Grapes", brand: "Generic", calories: 104, protein: 1.1, carbs: 27, fat: 0.2, serving: "1 cup (151g)"},
    {name: "Strawberries", brand: "Generic", calories: 49, protein: 1, carbs: 12, fat: 0.5, serving: "1 cup (152g)"},
    {name: "Blueberries", brand: "Generic", calories: 84, protein: 1.1, carbs: 21, fat: 0.5, serving: "1 cup (148g)"},
    
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
    addBtn.addEventListener('click', addNewShoppingItem);
  }

  if (newItemInput) {
    newItemInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addNewShoppingItem();
      }
    });
  }
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
              <div class="item-quantity">${item.quantity}</div>
            </div>
            <button class="btn btn--sm remove-item-btn" onclick="removeShoppingItem(${item.id})">Remove</button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
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

function removeShoppingItem(itemId) {
  appData.shoppingList = appData.shoppingList.filter(item => item.id !== itemId);
  renderShopping();
  saveShoppingData();
}

function updateShoppingTotals() {
  const totalItems = appData.shoppingList.length;
  const completedItems = appData.shoppingList.filter(item => item.checked).length;
  const remainingItems = totalItems - completedItems;

  updateElement('totalItems', totalItems);
  updateElement('completedItems', completedItems);
  updateElement('remainingItems', remainingItems);
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
  
  if (!appData.foodDatabase || appData.foodDatabase.length === 0) {
    console.error('❌ Food database not loaded');
    return [];
  }
  
  // Filter foods based on name or brand (case-insensitive, partial matches)
  const results = appData.foodDatabase.filter(food => {
    const nameMatch = food.name.toLowerCase().includes(searchTerm);
    const brandMatch = food.brand.toLowerCase().includes(searchTerm);
    
    // Also check for common variations
    const variations = getSearchVariations(searchTerm);
    const variationMatch = variations.some(variation => 
      food.name.toLowerCase().includes(variation) || 
      food.brand.toLowerCase().includes(variation)
    );
    
    return nameMatch || brandMatch || variationMatch;
  });
  
  console.log('📋 Found', results.length, 'results');
  return results.slice(0, 12); // Limit to 12 results for better UX
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

function filterRecipes() {
  const searchTerm = document.getElementById('recipeSearch')?.value.toLowerCase() || '';
  const cuisineFilter = document.getElementById('cuisineFilter')?.value || 'all';
  
  const cards = document.querySelectorAll('.recipe-card');
  
  cards.forEach(card => {
    const name = card.getAttribute('data-name') || '';
    const cuisine = card.getAttribute('data-cuisine') || '';
    
    const matchesSearch = name.includes(searchTerm);
    const matchesCuisine = cuisineFilter === 'all' || cuisine === cuisineFilter;
    
    card.style.display = (matchesSearch && matchesCuisine) ? 'block' : 'none';
  });
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

    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      const chatInput = document.getElementById('chatbotInput');
      if (chatInput) {
        chatInput.value = transcript;
      }
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
    recognition.stop();
  } else {
    recognition.start();
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
  updateElement('greenCoins', appData.user.greenCoins);
  updateElement('headerGreenCoins', appData.user.greenCoins);
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