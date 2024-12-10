from models.product_model import ProductModel


class ProductController:
    @staticmethod
    def get_all_products():
        return ProductModel.get_all()

    @staticmethod
    def get_product_by_id(product_id):
        return ProductModel.get_by_id(product_id)

    @staticmethod
    def create_product(data):
        return ProductModel.add(data)

    @staticmethod
    def update_product(product_id, data):
        return ProductModel.update(product_id, data)

    @staticmethod
    def delete_product(product_id):
        return ProductModel.delete(product_id)
