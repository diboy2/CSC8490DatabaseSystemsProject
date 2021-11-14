import numpy as np
from nltk.corpus import wordnet as wn


dining_place = pd.read_excel('dining_places.xlsx')

# Delivery Details
def generate_delivery_details(dining_place : pd.DataFrame) -> pd.DataFrame:
    dining_ids = dining_place['Dining_id'].tolist()
    
    delivery_types = ['Pick-up','Delivery','Dine in']
    
    delivery_details = pd.DataFrame()
    
    delivery_details["Delivery_id"] = np.arange(57)
    delivery_details["Dining_id"] = np.random.choice(dining_ids, size = 57)
    delivery_details["Delivery_type"] = np.random.choice(delivery_types, size = 57)
    
    return delivery_details

# Menu
def generate_menu(dining_place : pd.DataFrame) -> pd.DataFrame:
    dining_ids = dining_place['Dining_id'].tolist()
    
    menu_types = ['Breakfast','Lunch','Dinner']
    
    menu = pd.DataFrame()
    
    menu["Menu_type"] = np.random.choice(menu_types, size = 57)
    menu["Dining_id"] = np.random.choice(dining_ids, size = 57)
    menu["Menu_id"] = np.arange(57)
    
    return menu

menu = generate_menu(dining_place)
menu.to_excel('Menu.xlsx')


# Food
def generate_food() -> pd.DataFrame:
    food = wn.synset('food.n.02')
    foods = list(set([w for s in food.closure(lambda s:s.hyponyms()) for w in s.lemma_names()]))
    
    food = pd.DataFrame()
    
    food["Food_id"] = np.arange(1000)
    food["Food_price"] = np.round(np.random.uniform(5, 15, size=(1000)), 2)
    food["Food_name"] = np.random.choice(foods, size = 1000)
    
    return food

foods = generate_food()
foods.to_excel('Food.xlsx')

# Menu Food Bridge
def generate_menu_food_bridge(menu : pd.DataFrame , food : pd.DataFrame) -> pd.DataFrame:
    
    menu_ids = menu['Menu_id'].tolist()
    food_ids = food['Food_id'].tolist()
    
    mf_bridge = pd.DataFrame()
    
    mf_bridge["Menu_id"] = np.random.choice(menu_ids, size = 1000)
    mf_bridge["Food_id"] = np.random.choice(food_ids, size = 1000)
    
    return mf_bridge

mf_bridge = generate_menu_food_bridge(menu, foods)
mf_bridge.to_excel('Menu_food_bridge.xlsx')

# Nutritional Information
def generate_nutritional_information(food : pd.DataFrame) -> pd.DataFrame:
    food_ids = food['Food_id'].tolist()
    
    nut_info = pd.DataFrame()
    
    nut_info["Food_id"] = np.arange(1, 1001)
    nut_info["Protein"] = np.round(np.random.uniform(1, 30, size=(1000)), 1)
    nut_info["Carbs"] = np.round(np.random.uniform(50, 200, size=(1000)), 1)
    nut_info["Fat"] = np.round(np.random.uniform(4, 20, size=(1000)), 1)
    nut_info["Calories"] = np.round(np.random.uniform(200, 600, size=(1000)), 1)
    
    return nut_info

nut_info = generate_nutritional_information(foods)
nut_info.to_excel('Nutritional_Information.xlsx')

# Shopping Cart
def generate_shopping_cart(food : pd.DataFrame) -> pd.DataFrame:
    food_ids = food['Food_id'].tolist()
    
    shop_cart = pd.DataFrame()
    
    shop_cart["Shopping_cart_id"] = np.arange(1, 1001)
    shop_cart["Quantity"] = np.round(np.random.uniform(1, 4, size=(1000)), 0).astype('int')
    shop_cart["Food_id"] = np.random.choice(food_ids, size = 1000).astype('int')
    
    return shop_cart

shopping_cart = generate_shopping_cart(foods)
shopping_cart.to_excel('Shopping_cart.xlsx')


# Payment Instrument
payment_instruments = ['American Express','Discover','Visa','Mastercard','Paypal','Venmo','Cashapp','Duo']
payment_type_id = np.arange(len(payment_instruments))

pmt_instr = pd.DataFrame()
pmt_instr['PAYMENT_TYPE_ID'] = payment_type_id
pmt_instr['PAYMENT_TYPE_NAME'] = payment_instruments

pmt_instr.to_excel('Payment_Instrument.xlsx')


# Payment Details
def generate_payment_details(customer : pd.DataFrame, pmt_instr : pd.DataFrame) -> pd.DataFrame:
    customer_ids = customer['Customer_id'].tolist()
    pmt_instr_ids = np.arange(1, len(pmt_instr))
    
    pmt_details = pd.DataFrame()
    
    pmt_details["Payment_Details_id"] = np.arange(1, 1001)
    pmt_details["Customer_id"] = np.random.choice(customer_ids, size = 1000).astype('int')
    pmt_details["Payment_type_id"] = np.random.choice(pmt_instr_ids, size = 1000).astype('int')
    
    return pmt_details


customer = pd.read_excel('customers.xlsx')
pmt_instr = pd.read_excel('Payment_Instrument.xlsx')

pmt_details = generate_payment_details(customer,pmt_instr)
pmt_details.to_excel('Payment_Details.xlsx')


# Vendor Details
def generate_vendor_details(pmt_details : pd.DataFrame) -> pd.DataFrame:
    vendors = ['Paypal','Venmo','Cashapp', 'ApplePay' ]
    
    vnd_details = pd.DataFrame()
    vnd_details["VName"] = np.random.choice(vendors, size = 500)
    vnd_details["Name"] = pd.read_csv("https://github.com/smashew/NameDatabases/blob/master/NamesDatabases/first%20names/us.txt?raw=True", names = ["firstName"]).sample(1000).reset_index()["firstName"]
    vnd_details["VEmail"] = vnd_details["Name"].str.lower() + "@" + vnd_details["VName"].str.lower() + '.com'
    vnd_details["Payment_Details_id"] = np.arange(1,501).tolist()
    
    return vnd_details[['VName','VEmail','Payment_Details_id']]

vnd_details = generate_vendor_details(pmt_details)
vnd_details.to_excel('Vendor_details.xlsx')

# Card Details

import ccard

def generate_card_details(address : pd.DataFrame, pmt_detail : pd.DataFrame) -> pd.DataFrame:
    cards = [ccard.visa, ccard.discover, ccard.mastercard, ccard.americanexpress]
    
    address_ids = address['Address_id'].tolist()
    pmt_detail_ids = pmt_detail['Payment_Details_id'].tolist()
    
    first_names = pd.read_csv("https://github.com/smashew/NameDatabases/blob/master/NamesDatabases/first%20names/us.txt?raw=True", names = ["firstName"]).sample(500).reset_index()
    last_names = pd.read_csv("https://github.com/smashew/NameDatabases/blob/master/NamesDatabases/surnames/us.txt?raw=True", names = ["lastName"]).sample(500).reset_index()
    card_numbers = [cards[np.random.randint(4)]() for x in range(500)]
    
    card_details = pd.DataFrame()
    
    card_details["Card_Name"] = first_names['firstName'] + ' ' + last_names['lastName']
    card_details["Card_number"] = card_numbers
    card_details["Security_code"] = np.round(np.random.uniform(100, 999, size=(500)), 0).astype('int')
    card_details["Exp_Month"] = np.random.randint(1,13, (500))
    card_details["Exp_Year"] = np.random.randint(2021,2030, (500))
    card_details["Address_id"] = np.random.choice(address_ids, size = 500).astype('int')
    card_details["Payment_details_id"] = np.random.choice(pmt_detail_ids, size = 500).astype('int')
    
    return card_details

address = pd.read_excel('addresses.xlsx')
pmt_details = pd.read_excel('Payment_Details.xlsx')

card_details = generate_card_details(address, pmt_details)

card_details.to_excel('Card_Details.xlsx')