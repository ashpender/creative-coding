// Culinary-inspired House of Dust Poem by Alison Knowles
// My adaptation of her poem has a focus on the five tastes. I've been watching a lot of shows recenty that involve food, and the most recent holidays focus on food. So I wanted to make something with a culinary aspect to it.

let poem = ''; // Initialize poem as an empty string

let grammar = tracery.createGrammar({
    "material": [ // Culinary materials
        "SWEET SYRUP",
        "BITTER COFFEE",
        "SOUR LEMONS",
        "SALTY SEAWEED",
        "UMAMI MUSHROOMS",
        "SPICY CHILI",
        "HONEY",
        "VINEGAR",
        "FERMENTED SOYBEANS",
        "ROASTED GARLIC",
        "CINNAMON",
        "HERBAL TEA",
        "CRUSTY BREAD",
        "AGED CHEESE",
        "SMOKED PAPRIKA",
        "RAW SUGAR",
        "TOASTED SESAME"
    ],

    "place": [ // Places tied to culinary settings
        "IN A BAKERY",
        "IN A CAFE",
        "IN A SPICE MARKET",
        "IN A STREET FOOD STALL",
        "IN A GOURMET RESTAURANT",
        "IN A FARMHOUSE KITCHEN",
        "IN A FOOD TRUCK",
        "IN A CHOCOLATE FACTORY",
        "IN A WINE CELLAR",
        "IN AN ICE CREAM PARLOR",
        "IN A CHEF'S LABORATORY",
        "ON A PICNIC BLANKET",
        "IN A TEAHOUSE",
        "IN A HERB GARDEN",
        "IN A FISH MARKET",
        "BY A WOOD-FIRED OVEN",
        "IN A FOOD COURT",
        "AT A FARMERS' MARKET",
        "NEAR A BREWERY",
        "IN A SOUP KITCHEN",
        "IN A GASTROPUB",
        "IN A CANDY STORE",
        "BY A COMMUNITY GARDEN",
        "AT A STREET FAIR",
        "IN A KITCHEN STADIUM",
        "IN A CULINARY SCHOOL"
    ],

    "light": [ // Culinary-inspired light sources
        "USING CANDLELIGHT",
        "USING THE GLOW OF A WOOD-FIRE OVEN",
        "USING FLUORESCENT KITCHEN LIGHTS",
        "USING THE LIGHT FROM A BURNER",
        "USING THE AMBER LIGHT OF A HEAT LAMP"
    ],

    "inhabitants": [ // Culinary inhabitants
        "ASPIRING CHEFS",
        "FOOD CRITICS",
        "HUNGRY CHILDREN",
        "WANDERING FOODIES",
        "FARMERS",
        "BEES",
        "SPICE TRADERS",
        "BREAD BAKERS",
        "SUGAR ARTISTS",
        "FISHERMEN",
        "CULINARY STUDENTS",
        "STREET VENDORS",
        "FOOD PHOTOGRAPHERS",
        "GOURMET TASTERS",
        "HERBALISTS",
        "CHOCOLATIERS",
        "BARISTAS",
        "BREWMASTERS",
        "SOUS CHEFS",
        "PICKLERS",
        "PASTRY CHEFS",
        "COOKBOOK AUTHORS"
    ],

    "origin": "A HOUSE OF #material# \n \t #place# \n \t \t #light# \n \t \t \t INHABITED BY #inhabitants#"
});

function setup() {
    createCanvas(1000, 1000);
     frameRate(.5);
}

function draw() {
    background(245); // Light beige background 
    textFont('Courier New'); // Typewriter font 
    textSize(20);

    let y = 50; // Initial  position
    for (let i = 0; i < 6; i++) { // Make multiple stanzas
        poem = grammar.flatten("#origin#"); // Make a stanza
        text(poem, 50, y, width - 100, height - 100); 
        y += 150; // Space between stanzas
    }
}
