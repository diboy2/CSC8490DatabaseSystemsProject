CREATE TABLE Building (
    Building_id INTEGER,
    Building_name VARCHAR(50),
    CONSTRAINT BuildingPK
    PRIMARY KEY(Building_id)
);

CREATE TABLE Customer (
    Customer_id INTEGER,
    Room_num INTEGER,-- how do university room numbers work.
    Phone INTEGER,
    Email VARCHAR(50),
    First_name VARCHAR(50),
    Middle_name VARCHAR(50),
    Last_name VARCHAR(50),
    Building_id INTEGER,
    CONSTRAINT CustomerPK
    PRIMARY KEY(Customer_id),
    CONSTRAINT CustomerBuilding_idFK
    FOREIGN KEY(Building_id) REFERENCES Building(Building_id)
);

CREATE TABLE Address (
    Address_id INTEGER,
    Address_name VARCHAR(50) NULL,
    Address2 VARCHAR(50),
    City VARCHAR(50),
    State CHAR(2),
    Street VARCHAR(50),
    Zip_code NUMBER(5,0),
    Address_type VARCHAR(50) ,-- add check constraint
    Customer_id INTEGER,
    Constraint AddressPK
    PRIMARY KEY (Address_id),
    CONSTRAINT AddressCustomer_idFK
    FOREIGN KEY(Customer_id) REFERENCES Customer(Customer_id)
);

CREATE TABLE Dining_place (
    Building_id INTEGER,
    Dining_name VARCHAR(50) NULL,
    Dining_id Integer,
    Constraint Dining_placePK
    PRIMARY KEY (Dining_id),
    CONSTRAINT Dining_placeBuilding_idFK
    FOREIGN KEY(Building_id) REFERENCES Building(Building_id)
);

CREATE TABLE Delivery_details (
    Dining_id INTEGER,
    Delivery_type VARCHAR(50),
    Delivery_id INTEGER,
    Constraint Delivery_detailsPK
    PRIMARY KEY (Delivery_id),
    Constraint Delivery_detailsDining_idFK
    FOREIGN KEY (Dining_id) REFERENCES Dining_place(Dining_id)
);