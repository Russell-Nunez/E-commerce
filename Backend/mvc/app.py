from flask import Flask
from flask_cors import CORS
from views.product_view import product_bp

app = Flask(__name__)
CORS(app)

# Registra o Blueprint das rotas
app.register_blueprint(product_bp, url_prefix='/products')

if __name__ == '__main__':
    app.run(debug=True)
