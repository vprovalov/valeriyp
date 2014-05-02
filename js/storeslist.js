var stores = [
    { latitude: 47.6652769, longitude: -122.3171982, name: "Plaid Pantry", radius: 20, type: "convenience" },
    { latitude: 47.5465707, longitude: -122.3257943, name: "Shell", radius: 20, type: "convenience" },
    { latitude: 47.5472427, longitude: -122.3212796, name: "Shell", radius: 20, type: "convenience" },
    { latitude: 47.6889648, longitude: -122.3095922, name: "7-11", radius: 20, type: "convenience" },
    { latitude: 47.7216924, longitude: -122.2951694, name: "Grocery Outlet", radius: 20, type: "supermarket" },
    { latitude: 47.7343394, longitude: -122.1524727, name: "Columbia Winery", radius: 20, type: "wine" },
    { latitude: 47.735539, longitude: -122.1536087, name: "Novelty Hill Winery", radius: 20, type: "wine" },
    { latitude: 47.7371942, longitude: -122.1558453, name: "Silver Lake Winery", radius: 20, type: "wine" },
    { latitude: 47.7336446, longitude: -122.148126, name: "Red Hook Brewery", radius: 20, type: "beer" },
    { latitude: 47.7330963, longitude: -122.1416027, name: "Ross Andrew Winery", radius: 20, type: "wine" },
    { latitude: 47.7278074, longitude: -122.1365505, name: "DeLille Cellars", radius: 20, type: "wine" },
    { latitude: 47.6286434, longitude: -122.134176, name: "Trader Joe's", radius: 20, type: "supermarket" },
    { latitude: 47.6179383, longitude: -122.1272633, name: "Old Country Bakery", radius: 20, type: "bakery" },
    { latitude: 47.6178165, longitude: -122.12726, name: "Armenia Gastronom", radius: 20, type: "grocery" },
    { latitude: 47.6307975, longitude: -122.1449164, name: "Apna Bazar", radius: 20, type: "supermarket" },
    { latitude: 47.6290464, longitude: -122.1462613, name: "Continental Spices & Meat Market", radius: 20, type: "food" },
    { latitude: 47.6270473, longitude: -122.1502503, name: "Liquor & Wine", radius: 20, type: "alcohol" },
    { latitude: 47.6203933, longitude: -122.2007695, name: "", radius: 20, type: "alcohol" },
    { latitude: 47.6327351, longitude: -122.137165, name: "Mayuri Foods", radius: 20, type: "food" },
    { latitude: 47.6285771, longitude: -122.1350822, name: "Zip Market & Deli", radius: 20, type: "food" },
    { latitude: 47.5952, longitude: -122.19688, name: "", radius: 20, type: "convenience" },
    { latitude: 47.6757479, longitude: -122.1288173, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.7015875, longitude: -122.0934016, name: "PCC", radius: 20, type: "supermarket" },
    { latitude: 47.7024828, longitude: -122.0923545, name: "Avondale Food Mart", radius: 20, type: "supermarket" },
    { latitude: 47.5643993, longitude: -122.3757757, name: "7-Eleven", radius: 20, type: "convenience" },
    { latitude: 47.561239, longitude: -122.386517, name: "Cupcake Royale", radius: 20, type: "bakery" },
    { latitude: 47.5607877, longitude: -122.3870238, name: "Great Harvest Baking Company", radius: 20, type: "bakery" },
    { latitude: 47.5599942, longitude: -122.3870153, name: "Bakery Nouveau", radius: 20, type: "bakery" },
    { latitude: 47.7374433, longitude: -122.249049, name: "Rocky's Place", radius: 20, type: "convenience" },
    { latitude: 47.6397016, longitude: -122.4002553, name: "WSLCB Store #83", radius: 20, type: "alcohol" },
    { latitude: 47.6397038, longitude: -122.3987258, name: "Finn's Bakery", radius: 20, type: "bakery" },
    { latitude: 47.639256, longitude: -122.4000371, name: "Magnolia Coffee Company", radius: 20, type: "convenience" },
    { latitude: 47.6902782, longitude: -122.3228263, name: "San Marco Grocery", radius: 20, type: "supermarket" },
    { latitude: 47.6956077, longitude: -122.3171538, name: "7-Eleven", radius: 20, type: "convenience" },
    { latitude: 47.687202, longitude: -122.3120086, name: "Jack's Cellar", radius: 20, type: "wine" },
    { latitude: 47.5326643, longitude: -122.2884147, name: "Aloha Market", radius: 20, type: "convenience" },
    { latitude: 47.5383026, longitude: -122.2945687, name: "", radius: 20, type: "convenience" },
    { latitude: 47.5593321, longitude: -122.3048619, name: "Seattle Supermarket", radius: 20, type: "supermarket" },
    { latitude: 47.5993543, longitude: -122.3247, name: "Sun Bakery & Deli", radius: 20, type: "bakery" },
    { latitude: 47.6557668, longitude: -122.3360082, name: "Durn Good Grocery", radius: 20, type: "convenience" },
    { latitude: 47.6617829, longitude: -122.3358726, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.6825966, longitude: -122.3440051, name: "7-11", radius: 20, type: "convenience" },
    { latitude: 47.6689742, longitude: -122.1125482, name: "", radius: 20, type: "supermarket" },
    { latitude: 47.6107719, longitude: -122.1998591, name: "Pete's Wine Shop", radius: 20, type: "beverages" },
    { latitude: 47.6186715, longitude: -122.2049995, name: "Mr J Culinary Essentials", radius: 20, type: "supermarket" },
    { latitude: 47.6698646, longitude: -122.3744262, name: "Ballard Market", radius: 20, type: "supermarket" },
    { latitude: 47.6749846, longitude: -122.3985311, name: "Susnset Hill GreenGrocer", radius: 20, type: "convenience" },
    { latitude: 47.6714665, longitude: -122.1193503, name: "Fine Wine & Cigars", radius: 20, type: "alcohol" },
    { latitude: 47.6909158, longitude: -122.3657171, name: "Chuck's 85th Street Market", radius: 20, type: "convenience" },
    { latitude: 47.733871, longitude: -122.3550837, name: "AM/PM", radius: 20, type: "convenience" },
    { latitude: 47.6049394, longitude: -122.1326767, name: "", radius: 20, type: "grocery" },
    { latitude: 47.6041901, longitude: -122.1326879, name: "", radius: 20, type: "supermarket" },
    { latitude: 47.667268, longitude: -122.1062298, name: "Blazing Bagels", radius: 20, type: "bakery" },
    { latitude: 47.7238506, longitude: -122.29214, name: "Fred Meyer", radius: 20, type: "supermarket" },
    { latitude: 47.6308829, longitude: -122.1542696, name: "Pars Market", radius: 20, type: "grocery" },
    { latitude: 47.5787167, longitude: -122.1672877, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.5348988, longitude: -122.0323437, name: "Boehm's Candies", radius: 20, type: "convenience" },
    { latitude: 47.5387184, longitude: -122.3200884, name: "AM/PM", radius: 20, type: "convenience" },
    { latitude: 47.7191003, longitude: -122.3132115, name: "7-Eleven", radius: 20, type: "convenience" },
    { latitude: 47.6987682, longitude: -122.025939, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.7082004, longitude: -122.3173841, name: "AM-PM", radius: 20, type: "supermarket" },
    { latitude: 47.5512473, longitude: -122.0527538, name: "Costco", radius: 20, type: "supermarket" },
    { latitude: 47.5294457, longitude: -122.0354337, name: "Front Street Market", radius: 20, type: "supermarket" },
    { latitude: 47.5435807, longitude: -122.0520216, name: "Trader Joes", radius: 20, type: "supermarket" },
    { latitude: 47.5465756, longitude: -122.0603568, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.689003, longitude: -122.3550765, name: "Vineyard Wine Shop", radius: 20, type: "alcohol" },
    { latitude: 47.583281, longitude: -122.0331011, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.666223, longitude: -122.1011282, name: "Whole Foods", radius: 20, type: "supermarket" },
    { latitude: 47.675984, longitude: -122.126263, name: "The British Pantry & Restaurant", radius: 20, type: "convenience" },
    { latitude: 47.6658533, longitude: -122.1971814, name: "Metropolitan Market", radius: 20, type: "supermarket" },
    { latitude: 47.6809938, longitude: -122.1264992, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.7194084, longitude: -122.3443296, name: "76", radius: 20, type: "convenience" },
    { latitude: 47.675693, longitude: -122.127775, name: "Trader Joe's", radius: 20, type: "supermarket" },
    { latitude: 47.6769441, longitude: -122.1210972, name: "7-11", radius: 20, type: "convenience" },
    { latitude: 47.6954059, longitude: -122.0408246, name: "Food Mart", radius: 20, type: "convenience" },
    { latitude: 47.6944741, longitude: -122.0420174, name: "Liquor & Wine", radius: 20, type: "alcohol" },
    { latitude: 47.6454277, longitude: -122.0263182, name: "Albertsons", radius: 20, type: "supermarket" },
    { latitude: 47.6183648, longitude: -122.1914435, name: "The French Bakery", radius: 20, type: "bakery" },
    { latitude: 47.6190518, longitude: -122.1917921, name: "Ashwood Urban Market", radius: 20, type: "convenience" },
    { latitude: 47.5814704, longitude: -122.3874322, name: "7-Eleven", radius: 20, type: "convenience" },
    { latitude: 47.5609189, longitude: -122.3869873, name: "Bin 41", radius: 20, type: "alcohol" },
    { latitude: 47.5612845, longitude: -122.3850454, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.5604465, longitude: -122.3870061, name: "Husky Deli", radius: 20, type: "convenience" },
    { latitude: 47.5809986, longitude: -122.335387, name: "Office Max", radius: 20, type: "convenience" },
    { latitude: 47.5514603, longitude: -122.0563101, name: "PCC", radius: 20, type: "supermarket" },
    { latitude: 47.6146402, longitude: -122.0337242, name: "GNC", radius: 20, type: "nutrition" },
    { latitude: 47.6141592, longitude: -122.033759, name: "Washington State Liquor and Wine", radius: 20, type: "alcohol" },
    { latitude: 47.7315749, longitude: -122.1511586, name: "Chateau Ste. Michelle Winery", radius: 20, type: "wine" },
    { latitude: 47.6726596, longitude: -122.1107374, name: "Great Harvest Bread", radius: 20, type: "bakery" },
    { latitude: 47.6624099, longitude: -122.3504533, name: "Shell", radius: 20, type: "convenience" },
    { latitude: 47.6623954, longitude: -122.3496379, name: "76", radius: 20, type: "convenience" },
    { latitude: 47.6604799, longitude: -122.3498663, name: "Marketime", radius: 20, type: "supermarket" },
    { latitude: 47.7137741, longitude: -122.1803164, name: "Trader Joes's", radius: 20, type: "supermarket" },
    { latitude: 47.7316502, longitude: -122.1553465, name: "JM Cellars", radius: 20, type: "wine" },
    { latitude: 47.7353083, longitude: -122.1534415, name: "Januik Winery", radius: 20, type: "wine" },
    { latitude: 47.603058, longitude: -122.3319436, name: "Pioneer Mart", radius: 20, type: "convenience" },
    { latitude: 47.6684117, longitude: -122.3128251, name: "Sidecar For Pigs Peace", radius: 20, type: "convenience" },
    { latitude: 47.719082, longitude: -122.1337152, name: "Betz Winery", radius: 20, type: "wine" },
    { latitude: 47.7308221, longitude: -122.1233593, name: "Adams Bench Winery", radius: 20, type: "wine" },
    { latitude: 47.7318231, longitude: -122.1402996, name: "Village Wines", radius: 20, type: "wine" },
    { latitude: 47.7320584, longitude: -122.1405671, name: "Airfield Estates", radius: 20, type: "wine" },
    { latitude: 47.7330133, longitude: -122.1417536, name: "Alexandria Nicole Winery", radius: 20, type: "wine" },
    { latitude: 47.7330917, longitude: -122.1417536, name: "Amavi Cellars", radius: 20, type: "wine" },
    { latitude: 47.7319523, longitude: -122.1404505, name: "Alder Ridge Winery", radius: 20, type: "wine" },
    { latitude: 47.7314587, longitude: -122.1412255, name: "Brian Carter Cellars", radius: 20, type: "wine" },
    { latitude: 47.7321922, longitude: -122.1407043, name: "Canon de sol winery", radius: 20, type: "wine" },
    { latitude: 47.7308682, longitude: -122.1395177, name: "Challenger Ridge Winery", radius: 20, type: "wine" },
    { latitude: 47.7337237, longitude: -122.142508, name: "Covey Run Winery", radius: 20, type: "wine" },
    { latitude: 47.7317955, longitude: -122.1420835, name: "Dusted Valley Winery", radius: 20, type: "wine" },
    { latitude: 47.7319354, longitude: -122.1420835, name: "Gifford Hirlinger Winery", radius: 20, type: "wine" },
    { latitude: 47.7323167, longitude: -122.1408414, name: "Goose Ridge Winery", radius: 20, type: "wine" },
    { latitude: 47.7311127, longitude: -122.1397441, name: "Hollywood Hill Winery", radius: 20, type: "wine" },
    { latitude: 47.7369572, longitude: -122.1556351, name: "Isenhower Cellars", radius: 20, type: "wine" },
    { latitude: 47.7339912, longitude: -122.1413832, name: "J Bookwalter Winery", radius: 20, type: "wine" },
    { latitude: 47.7330825, longitude: -122.141349, name: "Mark Ryan Winery", radius: 20, type: "wine" },
    { latitude: 47.7379857, longitude: -122.1546543, name: "Woodhouse Winery", radius: 20, type: "wine" },
    { latitude: 47.6770601, longitude: -122.2037709, name: "The market on central", radius: 20, type: "convenience" },
    { latitude: 47.6771028, longitude: -122.1996068, name: "Tim's Seafood", radius: 20, type: "seafood" },
    { latitude: 47.6771985, longitude: -122.199611, name: "Hoffman's Fine Pastries", radius: 20, type: "bakery" },
    { latitude: 47.6801045, longitude: -122.1250303, name: "Flavor Bakery & Cafe", radius: 20, type: "bakery" },
    { latitude: 47.6159501, longitude: -122.1826533, name: "Uwajimaya", radius: 20, type: "supermarket" },
    { latitude: 47.6522019, longitude: -122.3535722, name: "M & S Grocery & Deli?", radius: 20, type: "convenience" },
    { latitude: 47.6321322, longitude: -122.3601339, name: "T", radius: 20, type: "alcohol" },
    { latitude: 47.5384576, longitude: -122.0358159, name: "AM PM", radius: 20, type: "convenience" },
    { latitude: 47.6616661, longitude: -122.3395181, name: "Extra Mile", radius: 20, type: "convenience" },
    { latitude: 47.662757, longitude: -122.374352, name: "Trader Joes", radius: 20, type: "supermarket" },
    { latitude: 47.6385488, longitude: -122.3405474, name: "Westlake Deli & Grocery", radius: 20, type: "convenience" },
    { latitude: 47.6478776, longitude: -122.3421465, name: "Lake Deli Mart", radius: 20, type: "convenience" },
    { latitude: 47.6527629, longitude: -122.3552195, name: "7 Eleven", radius: 20, type: "convenience" },
    { latitude: 47.6686092, longitude: -122.3326924, name: "56th Street Market", radius: 20, type: "convenience" },
    { latitude: 47.6585068, longitude: -122.3133686, name: "University Food & Beverages Market", radius: 20, type: "convenience" },
    { latitude: 47.6582025, longitude: -122.3130175, name: "Madeleine Bread & Dessert", radius: 20, type: "bakery" },
    { latitude: 47.6569967, longitude: -122.3139873, name: "University Market", radius: 20, type: "convenience" },
    { latitude: 47.6645953, longitude: -122.3280823, name: "7-11", radius: 20, type: "convenience" },
    { latitude: 47.673742, longitude: -122.1218441, name: "Liquor Stor", radius: 20, type: "alcohol" },
    { latitude: 47.6616872, longitude: -122.3237502, name: "Wine World", radius: 20, type: "alcohol" },
    { latitude: 47.6897692, longitude: -122.2901308, name: "QFC Grocery", radius: 20, type: "supermarket" },
    { latitude: 47.7200041, longitude: -122.29506, name: "Kaffeeklatsch", radius: 20, type: "bakery" },
    { latitude: 47.7197645, longitude: -122.294653, name: "Lake City Bakery", radius: 20, type: "bakery" },
    { latitude: 47.5782616, longitude: -122.1674824, name: "Great Harvest Bread", radius: 20, type: "bakery" },
    { latitude: 47.7035484, longitude: -122.1770204, name: "Food Mart", radius: 20, type: "convenience" },
    { latitude: 47.6686281, longitude: -122.3132245, name: "R & M Market", radius: 20, type: "convenience" },
    { latitude: 47.6246921, longitude: -122.3472754, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.6614929, longitude: -122.3323884, name: "La Boulanerie", radius: 20, type: "bakery" },
    { latitude: 47.6515323, longitude: -122.3565445, name: "Mischief", radius: 20, type: "alcohol" },
    { latitude: 47.6688852, longitude: -122.394986, name: "State Wine and Liqour Store", radius: 20, type: "alcohol" },
    { latitude: 47.6154334, longitude: -122.0335087, name: "Safeway", radius: 20, type: "supermarket" },
    { latitude: 47.6756568, longitude: -122.3121383, name: "Rising Sun Fruit Stand", radius: 20, type: "greengrocer" },
    { latitude: 47.6499316, longitude: -122.3507433, name: "PCC", radius: 20, type: "supermarket" },
    { latitude: 47.663469, longitude: -122.2973897, name: "Bartell Drugs", radius: 20, type: "convenience" },
    { latitude: 47.6624568, longitude: -122.3176383, name: "Trader Joe's", radius: 20, type: "supermarket" },
    { latitude: 47.6682293, longitude: -122.283684, name: "Metropolitan Market", radius: 20, type: "supermarket" },
    { latitude: 47.6625492, longitude: -122.2967604, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.6224924, longitude: -122.3215114, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.6348154, longitude: -122.2799124, name: "Bert's Red Apple Market", radius: 20, type: "supermarket" },
    { latitude: 47.6226666, longitude: -122.3124016, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.5851869, longitude: -122.2354938, name: "Albertsons", radius: 20, type: "supermarket" },
    { latitude: 47.6018388, longitude: -122.2855388, name: "Leschi Market", radius: 20, type: "supermarket" },
    { latitude: 47.5850259, longitude: -122.2329051, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.5556992, longitude: -122.2705828, name: "PCC", radius: 20, type: "supermarket" },
    { latitude: 47.5970673, longitude: -122.3269779, name: "Uwajimaya", radius: 20, type: "supermarket" },
    { latitude: 47.5946029, longitude: -122.310095, name: "", radius: 20, type: "convenience" },
    { latitude: 47.5811938, longitude: -122.3145058, name: "", radius: 20, type: "convenience" },
    { latitude: 47.5814551, longitude: -122.313784, name: "", radius: 20, type: "convenience" },
    { latitude: 47.5985098, longitude: -122.3009901, name: "Red Apple Market", radius: 20, type: "supermarket" },
    { latitude: 47.6396272, longitude: -122.325518, name: "Eastlake Market", radius: 20, type: "convenience" },
    { latitude: 47.7237273, longitude: -122.3433051, name: "Albertson's", radius: 20, type: "supermarket" },
    { latitude: 47.6797002, longitude: -122.2906625, name: "Grateful Bread Baking Co", radius: 20, type: "bakery" },
    { latitude: 47.6761289, longitude: -122.2843554, name: "View Ridge PCC", radius: 20, type: "supermarket" },
    { latitude: 47.7092311, longitude: -122.325169, name: "Target", radius: 20, type: "convenience" },
    { latitude: 47.6157986, longitude: -122.3100354, name: "Trader Joe's", radius: 20, type: "supermarket" },
    { latitude: 47.5354229, longitude: -122.3763293, name: "John's Deli Market", radius: 20, type: "convenience" },
    { latitude: 47.6347691, longitude: -122.2007349, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.5220629, longitude: -122.3659807, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.4879057, longitude: -122.1477848, name: "", radius: 20, type: "convenience" },
    { latitude: 47.4898957, longitude: -122.1612012, name: "Safeway", radius: 20, type: "supermarket" },
    { latitude: 47.4898015, longitude: -122.1547853, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.4881993, longitude: -122.1471893, name: "Chuck's Donuts", radius: 20, type: "bakery" },
    { latitude: 47.4876229, longitude: -122.1472054, name: "", radius: 20, type: "greengrocer" },
    { latitude: 47.6757826, longitude: -122.3665438, name: "Choice Deli & Grocery", radius: 20, type: "convenience" },
    { latitude: 47.5815311, longitude: -122.3863293, name: "The Cask", radius: 20, type: "alcohol" },
    { latitude: 47.5816252, longitude: -122.3863347, name: "Zatz a Better Bagel", radius: 20, type: "bakery" },
    { latitude: 47.6555698, longitude: -122.3810061, name: "Wild Salmon Seafood Market", radius: 20, type: "seafood" },
    { latitude: 47.6479131, longitude: -122.3528511, name: "BYOB Vintners", radius: 20, type: "beverages" },
    { latitude: 47.58202, longitude: -122.3847965, name: "Metropolitan Market", radius: 20, type: "supermarket" },
    { latitude: 47.6869257, longitude: -122.3873766, name: "Larsens", radius: 20, type: "bakery" },
    { latitude: 47.6869004, longitude: -122.3872639, name: "Fresh Fish Company", radius: 20, type: "fishmonger" },
    { latitude: 47.66276, longitude: -122.373824, name: "Top Pot Doughnuts", radius: 20, type: "bakery" },
    { latitude: 47.6178279, longitude: -122.3263165, name: "Crumble & Flake Patisserie", radius: 20, type: "bakery" },
    { latitude: 47.6183176, longitude: -122.3380073, name: "Whole Foods", radius: 20, type: "supermarket" },
    { latitude: 47.6394797, longitude: -122.3659746, name: "Macrina", radius: 20, type: "bakery" },
    { latitude: 47.6178514, longitude: -122.3458452, name: "City Foods", radius: 20, type: "supermarket" },
    { latitude: 47.6763293, longitude: -122.2055344, name: "Sweet Cakes", radius: 20, type: "bakery" },
    { latitude: 47.679464, longitude: -122.3662151, name: "Take 5 Urban Market", radius: 20, type: "supermarket" },
    { latitude: 47.6247495, longitude: -122.355052, name: "Metropolitan Market", radius: 20, type: "supermarket" },
    { latitude: 47.4802675, longitude: -122.2145608, name: "Safeway", radius: 20, type: "supermarket" },
    { latitude: 47.5473703, longitude: -122.2847224, name: "Viet Wah", radius: 20, type: "supermarket" },
    { latitude: 47.5464198, longitude: -122.2851972, name: "Circle K", radius: 20, type: "convenience" },
    { latitude: 47.5792192, longitude: -122.2998444, name: "QFC", radius: 20, type: "supermarket" },
    { latitude: 47.5852098, longitude: -122.3040348, name: "711", radius: 20, type: "convenience" },
    { latitude: 47.581961, longitude: -122.3013122, name: "Mutual Fish Company", radius: 20, type: "fishmonger" },
    { latitude: 47.6039608, longitude: -122.3353182, name: "Drug Store", radius: 20, type: "drugstore" },
    { latitude: 47.5261201, longitude: -122.2695388, name: "", radius: 20, type: "convenience" },
    { latitude: 47.6232934, longitude: -122.3210871, name: "Eat Local Prepared Meals", radius: 20, type: "food" },
    { latitude: 47.6369893, longitude: -122.3767401, name: "Whole Foods", radius: 20, type: "supermarket" },
    { latitude: 47.6235109, longitude: -122.3577948, name: "Safeway", radius: 20, type: "supermarket" },
    { latitude: 47.6878169, longitude: -122.3549265, name: "Greenwood Quik-Stop", radius: 20, type: "convenience" },
    { latitude: 47.5226243, longitude: -122.2681174, name: "Saar's Marketplace", radius: 20, type: "supermarket" },
    { latitude: 47.5600427, longitude: -122.3040661, name: "", radius: 20, type: "convenience" },
    { latitude: 47.6670213, longitude: -122.1957611, name: "7-Eleven", radius: 20, type: "convenience" },
    { latitude: 47.6398628, longitude: -122.3292301, name: "Pete's Wine Shop And Groceries", radius: 20, type: "convenience" },
    { latitude: 47.5345541, longitude: -122.2804176, name: "", radius: 20, type: "convenience" },
    { latitude: 47.6657161, longitude: -122.1659472, name: "Red Apple Market", radius: 20, type: "supermarket" },
    { latitude: 47.5462361, longitude: -122.286324, name: "Speed-E-mart", radius: 20, type: "convenience" },
    { latitude: 47.5514445, longitude: -122.2876517, name: "am/pm", radius: 20, type: "convenience" },
    { latitude: 47.7200816, longitude: -122.2944688, name: "Dollar Plus", radius: 20, type: "convenience" },
    { latitude: 47.6201227, longitude: -122.3228832, name: "Vino Verite", radius: 20, type: "alcohol" },
    { latitude: 47.6206599, longitude: -122.3254596, name: "Thomas Street Market", radius: 20, type: "convenience" },
    { latitude: 47.6188364, longitude: -122.3251193, name: "Hillcrest Market", radius: 20, type: "convenience" },
    { latitude: 47.6197555, longitude: -122.3230854, name: "King of the Hill Market", radius: 20, type: "convenience" },
    { latitude: 47.6240948, longitude: -122.3251505, name: "Summit Foods", radius: 20, type: "convenience" },
    { latitude: 47.6142092, longitude: -122.3211502, name: "Paris Eastside", radius: 20, type: "deli" },
    { latitude: 47.6095966, longitude: -122.3418127, name: "Beechers Handmade Cheese", radius: 20, type: "deli" },
    { latitude: 47.6094241, longitude: -122.3414784, name: "Cinnamon Works", radius: 20, type: "bakery" },
    { latitude: 47.6098696, longitude: -122.34221, name: "Le Panier Very French Bakery", radius: 20, type: "bakery" },
    { latitude: 47.6103053, longitude: -122.3429494, name: "Pear Delicatessen & Shoppe", radius: 20, type: "deli" },
    { latitude: 47.6104263, longitude: -122.3431893, name: "Pike & Western Wine Shop", radius: 20, type: "deli" },
    { latitude: 47.5839187, longitude: -122.3288164, name: "", radius: 20, type: "convenience" },
    { latitude: 47.5289901, longitude: -122.0352264, name: "Capri Cellars", radius: 20, type: "beverages" },
    { latitude: 47.6616594, longitude: -122.3308528, name: "", radius: 20, type: "bakery" },
    { latitude: 47.5440007, longitude: -122.0520323, name: "Ross", radius: 20, type: "supermarket" },
    { latitude: 47.544457, longitude: -122.0521504, name: "Petco", radius: 20, type: "supermarket" },
    { latitude: 47.544127, longitude: -122.0566839, name: "Sports Authority", radius: 20, type: "supermarket" },
    { latitude: 47.4805158, longitude: -122.2052665, name: "Tienda Mi Familia", radius: 20, type: "convenience" },
    { latitude: 47.5612646, longitude: -122.3847211, name: "Petco", radius: 20, type: "supermarket" },
    { latitude: 47.5191267, longitude: -122.3129477, name: "Cadence Winery", radius: 20, type: "alcohol" },
    { latitude: 47.558769, longitude: -122.2848633, name: "Shola", radius: 20, type: "convenience" },
    { latitude: 47.5581793, longitude: -122.2854482, name: "Columbia City Bakery", radius: 20, type: "bakery" },
    { latitude: 47.5777257, longitude: -122.3870669, name: "PCC", radius: 20, type: "supermarket" },
    { latitude: 47.6013263, longitude: -122.3330874, name: "Saveway Grocery", radius: 20, type: "supermarket" },
    { latitude: 47.6025477, longitude: -122.3314421, name: "Drexel Deli & Grocery", radius: 20, type: "convenience" },
    { latitude: 47.5987837, longitude: -122.3344132, name: "Pop - In Market", radius: 20, type: "convenience" },
    { latitude: 47.5988584, longitude: -122.3339215, name: "Dry Soda Co.", radius: 20, type: "specialty_food" },
    { latitude: 47.6289365, longitude: -122.14471165, name: "Fred Meyer", radius: 112.20, type: "supermarket" },
    { latitude: 47.62270915, longitude: -122.12898, name: "TOP Food & Drug", radius: 65.83, type: "supermarket" },
    { latitude: 47.6318398, longitude: -122.1436904, name: "Hungry Bear Market", radius: 5.94, type: "convenience" },
    { latitude: 47.62681895, longitude: -122.1438202, name: "ampm", radius: 14.81, type: "convenience" },
    { latitude: 47.6185736, longitude: -122.2053639, name: "QFC", radius: 56.73, type: "grocery" },
    { latitude: 47.6271144, longitude: -122.14659415, name: "Asian Food Center", radius: 23.85, type: "supermarket" },
    { latitude: 47.6545065, longitude: -122.1424572, name: "7-11", radius: 12.42, type: "convenience" },
    { latitude: 47.6318586, longitude: -122.13326175, name: "7-11", radius: 18.22, type: "convenience" },
    { latitude: 47.6319737, longitude: -122.13291415, name: "ExtraMile", radius: 22.65, type: "convenience" },
    { latitude: 47.6307504, longitude: -122.1332149, name: "Uwajimaya", radius: 27.21, type: "supermarket" },
    { latitude: 47.6604058, longitude: -122.360516, name: "Oh No Mr. Bill's", radius: 12.56, type: "convenience" },
    { latitude: 47.62142575, longitude: -122.17760335, name: "Safeway", radius: 140.89, type: "supermarket" },
    { latitude: 47.6908754, longitude: -122.34513045, name: "AM/PM Mini Mart", radius: 10.78, type: "convenience" },
    { latitude: 47.6835243, longitude: -122.34409725, name: "PCC", radius: 25.01, type: "supermarket" },
    { latitude: 47.69279165, longitude: -122.3545964, name: "Safeway 1845", radius: 52.53, type: "supermarket" },
    { latitude: 47.70532775, longitude: -122.3442699, name: "AM/PM Mini Mart", radius: 21.11, type: "convenience" },
    { latitude: 47.54447785, longitude: -122.38624385, name: "Thriftway", radius: 42.68, type: "supermarket" },
    { latitude: 47.61820175, longitude: -122.18451895, name: "Whole Foods", radius: 57.70, type: "supermarket" },
    { latitude: 47.64249975, longitude: -122.3979417, name: "Albertson's", radius: 34.23, type: "supermarket" },
    { latitude: 47.6552782, longitude: -122.4004457, name: "Thriftway", radius: 32.67, type: "supermarket" },
    { latitude: 47.64947285, longitude: -122.3778663, name: "QFC", radius: 39.78, type: "supermarket" },
    { latitude: 47.6753681, longitude: -122.31691265, name: "Bartells", radius: 26.25, type: "convenience" },
    { latitude: 47.67520525, longitude: -122.31616045, name: "Whole Foods", radius: 30.52, type: "supermarket" },
    { latitude: 47.6377227, longitude: -122.3561254, name: "Safeway 0368", radius: 40.93, type: "supermarket" },
    { latitude: 47.54652865, longitude: -122.0389118, name: "Krispy Kreme Doughnuts", radius: 23.46, type: "bakery" },
    { latitude: 47.5780322, longitude: -122.29740865, name: "Chevron", radius: 17.52, type: "convenience" },
    { latitude: 47.60781145, longitude: -122.3032624, name: "AM/PM", radius: 12.25, type: "convenience" },
    { latitude: 47.67880235, longitude: -122.17341955, name: "Safeway 1142", radius: 55.28, type: "supermarket" },
    { latitude: 47.6167084, longitude: -122.1812674, name: "Food Mart", radius: 6.44, type: "convenience" },
    { latitude: 47.61689605, longitude: -122.1852263, name: "AMPM", radius: 14.65, type: "convenience" },
    { latitude: 47.6768779, longitude: -122.2001301, name: "QFC", radius: 37.33, type: "supermarket" },
    { latitude: 47.66982295, longitude: -122.1310533, name: "7-11", radius: 16.39, type: "convenience" },
    { latitude: 47.61783555, longitude: -122.12210795, name: "7-11", radius: 29.20, type: "convenience" },
    { latitude: 47.6173687, longitude: -122.1221632, name: "Food Mart", radius: 15.31, type: "convenience" },
    { latitude: 47.70937625, longitude: -122.31722585, name: "QFC", radius: 51.37, type: "supermarket" },
    { latitude: 47.7082568, longitude: -122.31825505, name: "Walgreens", radius: 28.88, type: "supermarket" },
    { latitude: 47.6901961, longitude: -122.3761117, name: "Safeway 1143", radius: 53.71, type: "supermarket" },
    { latitude: 47.7332644, longitude: -122.3131099, name: "Liquor & Wine", radius: 18.79, type: "alcohol" },
    { latitude: 47.56539645, longitude: -122.33035055, name: "Costco", radius: 95.37, type: "supermarket" },
    { latitude: 47.64012465, longitude: -122.30165735, name: "Monts Market", radius: 11.94, type: "convenience" },
    { latitude: 47.64336725, longitude: -122.30406715, name: "Montlake Boulevard Market", radius: 19.12, type: "convenience" },
    { latitude: 47.6627695, longitude: -122.37314225, name: "Cash & Carry", radius: 20.36, type: "supermarket" },
    { latitude: 47.6643205, longitude: -122.31389275, name: "Safeway 3091", radius: 31.59, type: "supermarket" },
    { latitude: 47.67088535, longitude: -122.31339, name: "Cowen Park Grocer", radius: 22.26, type: "greengrocer" },
    { latitude: 47.6163216, longitude: -122.0351109, name: "Safeway 0555 Fuel Station", radius: 16.36, type: "convenience" },
    { latitude: 47.54106905, longitude: -122.2260534, name: "QFC", radius: 45.60, type: "supermarket" },
    { latitude: 47.61359555, longitude: -122.3412969, name: "Ralph's Grocery and Deli", radius: 13.58, type: "supermarket" },
    { latitude: 47.53750125, longitude: -122.28302945, name: "Safeway 0219", radius: 42.19, type: "supermarket" },
    { latitude: 47.62562275, longitude: -122.15504595, name: "Safeway 0490", radius: 48.38, type: "supermarket" },
    { latitude: 47.5760145, longitude: -122.17136605, name: "Safeway 3472", radius: 40.93, type: "supermarket" },
    { latitude: 47.61332335, longitude: -122.20089315, name: "Safeway 1600", radius: 58.52, type: "supermarket" },
    { latitude: 47.49910675, longitude: -122.1802073, name: "Safeway 0366", radius: 45.93, type: "supermarket" },
    { latitude: 47.48050275, longitude: -122.21437775, name: "Safeway 1563", radius: 39.76, type: "supermarket" },
    { latitude: 47.48995995, longitude: -122.16138445, name: "Safeway 1468", radius: 61.25, type: "supermarket" },
    { latitude: 47.66213765, longitude: -122.2951247, name: "Safeway 0488", radius: 48.59, type: "supermarket" },
    { latitude: 47.6823795, longitude: -122.2894002, name: "Safeway 0423", radius: 63.85, type: "supermarket" },
    { latitude: 47.5798333, longitude: -122.38604715, name: "Safeway 2932", radius: 57.71, type: "supermarket" },
    { latitude: 47.5166915, longitude: -122.36671855, name: "Safeway 1923", radius: 65.19, type: "supermarket" },
    { latitude: 47.6179921, longitude: -122.30353165, name: "Safeway 1993", radius: 62.33, type: "supermarket" },
    { latitude: 47.5210136, longitude: -122.26805005, name: "Safeway 1965", radius: 52.64, type: "supermarket" },
    { latitude: 47.52093595, longitude: -122.2687822, name: "", radius: 18.89, type: "alcohol" },
    { latitude: 47.62360165, longitude: -122.3577314, name: "Safeway 1885", radius: 27.14, type: "supermarket" },
    { latitude: 47.7180113, longitude: -122.311979, name: "Safeway", radius: 53.41, type: "supermarket" },
    { latitude: 47.6204833, longitude: -122.31315, name: "Safeway 1551", radius: 52.89, type: "supermarket" },
    { latitude: 47.6819501, longitude: -122.31692425, name: "Safeway 1550", radius: 45.84, type: "supermarket" },
    { latitude: 47.56927215, longitude: -122.28793465, name: "Safeway 1508", radius: 58.54, type: "supermarket" },
    { latitude: 47.66827275, longitude: -122.3742883, name: "Safeway 1477", radius: 48.92, type: "supermarket" },
    { latitude: 47.5596142, longitude: -122.38487275, name: "Safeway 1062", radius: 44.25, type: "supermarket" },
    { latitude: 47.63269315, longitude: -122.14013875, name: "Safeway 0496", radius: 52.80, type: "supermarket" },
    { latitude: 47.6717285, longitude: -122.10959935, name: "Safeway 0464", radius: 63.62, type: "supermarket" },
    { latitude: 47.53951165, longitude: -122.1677972, name: "Safeway 0558", radius: 49.04, type: "supermarket" },
    { latitude: 47.7325469, longitude: -122.17412595, name: "Safeway 0526", radius: 51.83, type: "supermarket" },
    { latitude: 47.72357025, longitude: -122.20643565, name: "Safeway 2734", radius: 57.65, type: "supermarket" },
    { latitude: 47.7408225, longitude: -122.34356845, name: "Safeway 0442", radius: 48.40, type: "supermarket" },
    { latitude: 47.6154081, longitude: -122.03351055, name: "Safeway 0555", radius: 55.16, type: "supermarket" },
    { latitude: 47.5414932, longitude: -122.04808025, name: "Safeway 1624", radius: 56.73, type: "supermarket" },
    { latitude: 47.6174495, longitude: -122.13145375, name: "New York Cupcakes", radius: 8.31, type: "bakery" },
    { latitude: 47.5578736, longitude: -122.11585365, name: "Matthew's Thriftway", radius: 49.68, type: "supermarket" },
    { latitude: 47.57759245, longitude: -122.16980955, name: "7-11", radius: 12.94, type: "convenience" },
    { latitude: 47.5889596, longitude: -122.1912985, name: "Bill Pace Produce", radius: 24.23, type: "greengrocer" },
    { latitude: 47.6154863, longitude: -122.3110171, name: "Central Co-op", radius: 33.77, type: "supermarket" },
    { latitude: 47.56307055, longitude: -122.3130531, name: "MacPherson's Produce", radius: 23.53, type: "convenience" },
    { latitude: 47.5789555, longitude: -122.31290565, name: "Red Apple", radius: 33.32, type: "supermarket" },
    { latitude: 47.7123902, longitude: -122.1911754, name: "QFC", radius: 47.23, type: "supermarket" },
    { latitude: 47.6200556, longitude: -122.13086995, name: "QFC", radius: 52.02, type: "supermarket" },
    { latitude: 47.6311606, longitude: -122.154433, name: "7-11", radius: 11.21, type: "convenience" },
    { latitude: 47.60189365, longitude: -122.28566405, name: "Leschi Market", radius: 27.22, type: "supermarket" },
    { latitude: 47.6397974, longitude: -122.36455035, name: "Ken's Market", radius: 19.54, type: "supermarket" },
    { latitude: 47.63388, longitude: -122.3574496, name: "7-Eleven", radius: 12.14, type: "convenience" },
    { latitude: 47.63250655, longitude: -122.3587293, name: "Trader Joe's", radius: 19.97, type: "supermarket" },
    { latitude: 47.6349681, longitude: -122.3573831, name: "Le Reve", radius: 10.21, type: "bakery" },
    { latitude: 47.6103928, longitude: -122.20230635, name: "7-11", radius: 12.48, type: "convenience" },
    { latitude: 47.6789798, longitude: -122.17531985, name: "Walgreens Pharmacy", radius: 26.38, type: "supermarket" },
    { latitude: 47.66047935, longitude: -122.34964295, name: "Marketime", radius: 21.75, type: "supermarket" },
    { latitude: 47.5388081, longitude: -122.1647676, name: "QFC", radius: 42.74, type: "supermarket" },
    { latitude: 47.54531545, longitude: -122.0618967, name: "", radius: 11.09, type: "convenience" },
    { latitude: 47.6123463, longitude: -122.29550935, name: "Grocery Outlet", radius: 33.16, type: "supermarket" },
]