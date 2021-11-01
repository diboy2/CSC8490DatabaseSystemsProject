##################################################
## Author: Matt McGauley
##################################################

import os
import csv
import shutil
import random
import string
import itertools
import json
import requests
import pandas as pd
import numpy as np

outputPath = os.path.join(os.getcwd(), "Data")
if not os.path.exists(outputPath):
    os.makedirs(outputPath)

def generateAddresses():
    addressData = json.loads(requests.get("https://raw.githubusercontent.com/EthanRBrown/rrad/master/addresses-us-all.json").content)
    addresses = pd.DataFrame.from_dict(addressData["addresses"], orient = "columns")
    addresses = addresses.sample(1000).reset_index(drop = True)
    addresses = addresses.drop(columns = ["coordinates"])

    addresses = addresses.rename(columns = {
        "city" : "City",
        "address1" : "Street",
        "state" : "State",
        "address2" : "Address2",
        "postalCode" : "Zip_code"
    })

    addresses["Address2"] = np.where(addresses["Address2"] == "", "NULL", addresses["Address2"])
    addresses["Address_name"] = np.random.choice(["Home", "Business", "Secondary", "School", "Work", "PO BOX", "NULL"], size = len(addresses))
    addresses["Address_type"] = np.random.choice(["Billing", "Shipping", "Billing and Shipping"], size = len(addresses))
    addresses["Customer_id"] = np.random.choice(list(range(1000)), size = len(addresses), replace = False)

    addresses.to_excel(os.path.join(outputPath, "addresses.xlsx"), index_label = "Address_id")


generateAddresses()
