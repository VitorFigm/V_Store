import pandas as pd

products = pd.read_csv('products_table.csv')

num_of_products = products.shape[0]

brand_list = products['brand'].unique()
brand_list.sort()