import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Sobre</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/sobre">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/equipe">
                  Equipe
                </Link>
              </li>
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/carreiras">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/produtos">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/ofertas">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/novidades">
                  Novidades
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/contato">
                  Contato
                </Link>
              </li>
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/ajuda">
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Sua Empresa. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/privacidade">
                Política de Privacidade
              </Link>
              <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" to="/termos">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
