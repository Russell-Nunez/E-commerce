from flask import Blueprint, jsonify, request, abort
from controllers.product_controller import ProductController

product_bp = Blueprint('products', __name__)


@product_bp.route('/', methods=['GET'])
def get_products():
    products = ProductController.get_all_products()
    return jsonify(products)


@product_bp.route('/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = ProductController.get_product_by_id(product_id)
    if not product:
        abort(404, description="Produto não encontrado")
    return jsonify(product)


@product_bp.route('/', methods=['POST'])
def create_product():
    data = request.json
    if not data or not all(k in data for k in ('nome', 'descricao', 'imagem', 'valor', 'nota', 'categoria')):
        abort(400, description="Dados do produto incompletos")
    product = ProductController.create_product(data)
    return jsonify(product), 201


@product_bp.route('/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    data = request.json
    if not data:
        abort(400, description="Dados do produto não fornecidos")
    product = ProductController.update_product(product_id, data)
    if not product:
        abort(404, description="Produto não encontrado")
    return jsonify(product)


@product_bp.route('/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = ProductController.delete_product(product_id)
    if not product:
        abort(404, description="Produto não encontrado")
    return jsonify({'result': True})
