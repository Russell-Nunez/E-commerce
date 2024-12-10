import json
import os

PRODUCTS_FILE = 'products.json'


class ProductModel:
    @staticmethod
    def load_products():
        if os.path.exists(PRODUCTS_FILE):
            with open(PRODUCTS_FILE, 'r') as file:
                return json.load(file)
        return []

    @staticmethod
    def save_products(products):
        with open(PRODUCTS_FILE, 'w') as file:
            json.dump(products, file, indent=4)

    @staticmethod
    def get_all():
        return ProductModel.load_products()

    @staticmethod
    def get_by_id(product_id):
        products = ProductModel.load_products()
        return next((p for p in products if p['id'] == product_id), None)

    @staticmethod
    def add(product_data):
        products = ProductModel.load_products()
        new_id = max([p['id'] for p in products], default=0) + 1
        product_data['id'] = new_id
        products.append(product_data)
        ProductModel.save_products(products)
        return product_data

    @staticmethod
    def update(product_id, product_data):
        products = ProductModel.load_products()
        product = next((p for p in products if p['id'] == product_id), None)
        if product:
            for key, value in product_data.items():
                product[key] = value
            ProductModel.save_products(products)
        return product

    @staticmethod
    def delete(product_id):
        products = ProductModel.load_products()
        product = next((p for p in products if p['id'] == product_id), None)
        if product:
            products.remove(product)
            ProductModel.save_products(products)
        return product
