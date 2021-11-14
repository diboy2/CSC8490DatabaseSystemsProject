import pandas as pd
import math

import sys
import datetime

# transform column types to appropriate query strings
def transform_data_types(val):      
    if isinstance(val, str):        
        return f''' '{val.replace("'", " ")}' '''
    elif isinstance(val, datetime.time):
        return f" '{val}' "
    elif np.isnan(val):
        return  "' '"
    else:
        return f'{val}'
        

## SQL script generator
def generate_sql_scripts(data_file : pd.DataFrame, table_name : str) -> str:
    columns = data_file.columns
    column_string = ','.join(columns)
    
    BASE = f'Insert into {table_name} ({column_string}) values '
        
    columns = data_file.columns
    
    sql_scripts = []
    
    for index, row in data_file.iterrows():
        query = BASE + '(' 
        
        query_comp = [transform_data_types(row[x]) for x in columns]
        
        query += ','.join(query_comp)
        
        query += ');'
        sql_scripts.append(query)
    
    return sql_scripts


if __name__ == "__main__":

    if len(sys.argv) > 1:
        csv_or_excel_path = sys.argv[1]
        table_name = sys.argv[2]

    data = pd.read_excel(csv_or_excel_path)

    s = generate_sql_scripts(data, table_name)

    textfile = open(f"{table_name}.sql", "w")
    for element in s:
        textfile.write(element + "\n")
    textfile.close()

    print(f'{table_name}.sql generated!')
        



