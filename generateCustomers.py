##################################################
## Author: Matt McGauley
##################################################

import os
import csv
import shutil
import random
import string
import itertools
import pandas as pd
import numpy as np
from phone_gen import PhoneNumber


outputPath = os.path.join(os.getcwd(), "Data")
if not os.path.exists(outputPath):
    os.makedirs(outputPath)

def generateCustomers():
    buildings = pd.read_excel(os.path.join(outputPath, "buildings.xlsx"))
    dormBuildings = buildings[(buildings["Type"] == "Dorm") | (buildings["Type"] == "Both")]["Building_id"].to_list()
    dormNums = [str(num) for num in list(range(25))]
    dormCodes = ["".join(x) for x in itertools.product(list(string.ascii_uppercase[:7]), dormNums)]

    customers = pd.DataFrame()
    customers["First_name"] = pd.read_csv("https://github.com/smashew/NameDatabases/blob/master/NamesDatabases/first%20names/us.txt?raw=True", names = ["firstName"]).sample(1000).reset_index()["firstName"]
    customers["Middle_name"] =  np.random.choice(list(string.ascii_uppercase), size = len(customers))
    customers["Last_name"] = pd.read_csv("https://github.com/smashew/NameDatabases/blob/master/NamesDatabases/surnames/us.txt?raw=True", names = ["lastName"]).sample(1000).reset_index()["lastName"]
    customers["Building_id"] = np.random.choice(dormBuildings, size = len(customers))
    customers["Room_num"] = np.random.choice(dormCodes, size = len(customers))
    customers["Phone"] = np.random.choice([PhoneNumber("USA").get_number(full = False) for i in range(1000)], size = len(customers))
    customers["Email"] = customers["First_name"].str.lower() + "." + customers["Last_name"].str.lower() + "@villanova.edu"

    customers.to_excel(os.path.join(outputPath, "customers.xlsx"), index = True, index_label = "Customer_id")
generateCustomers()
