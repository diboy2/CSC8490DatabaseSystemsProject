CREATE TABLE Hours_of_operation (
    Days_of_week VARCHAR(20),
    Open_time CHAR(8),
    Close_time CHAR(8),
    Dining_id INTEGER,
    -- CONSTRAINT Hours_of_operationPK
    -- PRIMARY KEY(Days_of_week, Dining_id),  
    CONSTRAINT Hours_of_operationDining_idFK
    FOREIGN KEY(Dining_id) REFERENCES Dining_place(Dining_id)
);



Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (1, 'MTuWThF' , '07:00:00' , '20:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (1, 'SaSu' , '08:00:00' , '20:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (2, 'MTuWTh' , '07:30:00' , '20:15:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (2, 'F' , '07:30:00' , '14:30:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (3, 'MTuWTh' , '07:30:00' , '20:15:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (3, 'F' , '07:30:00' , '14:30:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (4, 'MTuWTh' , '07:30:00' , '20:15:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (4, 'F' , '07:30:00' , '14:30:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (5, 'MTuWThFSaSu' , '11:00:00' , '22:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (6, 'MTuWThFSaSu' , '13:00:00' , '01:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (7, 'MTuWThF' , '08:00:00' , '23:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (7, 'SaSu' , '11:00:00' , '23:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (8, 'MTuWTh' , '08:00:00' , '17:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (8, 'F' , '08:00:00' , '14:30:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (9, 'MTuWTh' , '10:45:00' , '17:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (9, 'F' , '10:45:00' , '15:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (10, 'MTuWThF' , '08:00:00' , '18:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (10, 'Sa' , '08:00:00' , '16:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (10, 'Su' , '12:00:00' , '18:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (11, 'MTuWTh' , '08:00:00' , '14:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (12, 'MTuWThFSaSu' , '12:00:00' , '19:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (12, 'MTuWThFSaSu' , '20:00:00' , '01:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (13, 'MTuWThF' , '07:00:00' , '20:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (13, 'SaSu' , '08:00:00' , '20:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (14, 'MTuWThFSaSu' , '13:00:00' , '01:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (15, 'MTuWThF' , '07:30:00' , '13:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (16, 'MTuWThF' , '07:30:00' , '20:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (16, 'SaSu' , '10:00:00' , '20:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (17, 'MTuWThF' , '07:30:00' , '14:30:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (18, 'MTuWTh' , '08:00:00' , '21:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (18, 'F' , '08:00:00' , '15:00:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (19, 'MTuWThF' , '08:30:00' , '01:30:00' );
Insert into hours_of_operation (Dining_id,Days_of_week,Open_time,Close_time) values (19, 'SaSu' , '12:00:00' , '01:30:00' );
