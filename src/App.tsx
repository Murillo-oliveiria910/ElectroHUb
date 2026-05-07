import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Watch, 
  Cpu, 
  ExternalLink, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  CreditCard,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Pro Max Smartphone',
    description: 'Tela 6.7", Chip A17 Bionic, Câmera 48MP.',
    price: 'R$ 7.499',
    icon: <Smartphone className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/phone/600/600?grayscale'
  },
  {
    id: 2,
    name: 'EliteBook G9',
    description: '16GB RAM, 512GB SSD, Processador i7.',
    price: 'R$ 5.899',
    icon: <Laptop className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/laptop/600/600?grayscale'
  },
  {
    id: 3,
    name: 'SoundPro Wireless',
    description: 'Cancelamento de ruído ativo, 30h de bateria.',
    price: 'R$ 1.299',
    icon: <Headphones className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/headphones/600/600?grayscale'
  },
  {
    id: 4,
    name: 'SmartWatch S3',
    description: 'Monitoramento cardíaco e GPS integrado.',
    price: 'R$ 899',
    icon: <Watch className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/watch/600/600?grayscale'
  }
];

// --- ADICIONE SEUS LINKS AQUI ---
const SHOPEE_LINK = "https://shopee.com.br/Notebook-Dell-Latitude-3480-i5-6200U-8GB-256GB-SSD-14-R%C3%A1pido-para-Trabalho-1-i.1502006118.58209357560?extraParams=%7B%22display_model_id%22%3A139839649847%2C%22model_selection_logic%22%3A3%7D&sp_atk=33f88c15-15b0-4d6e-a490-8931e71a575d&xptdk=33f88c15-15b0-4d6e-a490-8931e71a575d";
const MERCADO_LIVRE_LINK = "https://www.mercadolivre.com.br/notebook-dell-inspiron-i15-i1300-a15p-core-3-8gb-512gb-w11-preto/p/MLB52728444?pdp_filters=item_id%3AMLB5512463698&matt_tool=38524122#origin=share&sid=share&wid=MLB5512463698&action=copy";
// ------------------------------

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-brand-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter">ELECTRO<span className="text-brand-primary">HUB</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Produtos', 'Vantagens', 'Onde Comprar', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neutral-800 overflow-hidden bg-neutral-950"
            >
              <div className="p-6 flex flex-col gap-4">
                {['Produtos', 'Vantagens', 'Onde Comprar', 'Contato'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-lg font-medium text-neutral-400 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              TECNOLOGIA PREMIUM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[0.9]">
              ELETRÔNICOS <br />
              <span className="text-neutral-600 italic font-mono font-medium">QUE REDEFINEM</span> <br />
              SEU DIA A DIA.
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-lg mb-10">
              Produtos selecionados, garantia nacional e o melhor preço do mercado. Explore nossa curadoria de tecnologia de ponta.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#onde-comprar" 
                className="px-8 py-4 bg-brand-primary rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
              >
                Comprar Agora <ShoppingCart className="w-5 h-5" />
              </a>
              <a 
                href="#produtos" 
                className="px-8 py-4 border border-neutral-700 rounded-full font-bold hover:bg-neutral-800 transition-colors"
              >
                Ver Produtos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/setup/1200/1200?grayscale" 
                alt="Tech Setup" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 p-6 bg-neutral-950/40 backdrop-blur-xl border border-white/5 rounded-2xl max-w-[280px]">
                <p className="text-sm font-mono text-brand-primary mb-1">01 / DESTAQUE</p>
                <h3 className="text-xl font-bold mb-2">Setup Gamer Ultimate</h3>
                <p className="text-sm text-neutral-400">Transforme sua experiência de jogo com acessórios certificados.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vantagens" className="py-20 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck />, title: 'Garantia Premium', desc: '1 ano de proteção em todos os produtos eletrônicos.' },
              { icon: <Truck />, title: 'Envio Imediato', desc: 'Postamos seu pedido em até 24 horas úteis.' },
              { icon: <CreditCard />, title: 'Compra Segura', desc: 'Sua transação protegida pelos maiores marketplaces.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-neutral-800 bg-neutral-950/20"
              >
                <div className="text-brand-primary mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-neutral-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produtos" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-brand-primary font-mono text-sm tracking-widest mb-2 uppercase">Nosso Catálogo</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">LANÇAMENTOS EM <br /> DESTAQUE</h2>
          </div>
          <p className="text-neutral-500 max-w-xs">
            As tecnologias mais recentes dos líderes do setor, agora ao seu alcance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 p-2 bg-neutral-950 border border-neutral-700/50 rounded-full text-white">
                  {product.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-neutral-500 text-sm mb-3">{product.description}</p>
              <p className="text-xl font-mono font-medium text-white">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marketplaces Section */}
      <section id="onde-comprar" className="py-32 bg-brand-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">COMPRE COM SEGURANÇA</h2>
            <p className="text-neutral-400 text-lg mb-12">
              Escolha sua plataforma favorita para finalizar sua compra. Garantimos a mesma qualidade e atendimento em todos os nossos canais oficiais.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <a 
                href={SHOPEE_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="group p-8 rounded-3xl bg-brand-shopee flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-all shadow-xl shadow-brand-shopee/20"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="text-white w-8 h-8" />
                </div>
                <span className="text-2xl font-bold text-white">Shopee</span>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  Ir para loja oficial <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              <a 
                href={MERCADO_LIVRE_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="group p-8 rounded-3xl bg-brand-mercadolivre flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-all shadow-xl shadow-brand-mercadolivre/20"
              >
                <div className="w-16 h-16 bg-brand-mercadolivre-text/10 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="text-brand-mercadolivre-text w-8 h-8" />
                </div>
                <span className="text-2xl font-bold text-brand-mercadolivre-text">Mercado Livre</span>
                <div className="flex items-center gap-2 text-brand-mercadolivre-text/70 text-sm font-medium">
                  Ir para loja oficial <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-20 border-t border-neutral-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tighter">ELECTRO<span className="text-brand-primary">HUB</span></span>
            </div>
            <p className="text-neutral-500 text-sm">
              Sua referência em eletrônicos de alta performance e última geração. Compromisso com a qualidade e satisfação do cliente.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            {[
              { title: 'MENU', items: ['Produtos', 'Vantagens', 'Onde Comprar'] },
              { title: 'SUPORTE', items: ['Garantia', 'Rastreio', 'Devoluções'] },
              { title: 'CONTATO', items: ['WhatsApp', 'Instagram', 'E-mail'] }
            ].map((col, i) => (
              <div key={i}>
                <h5 className="text-xs font-bold font-mono tracking-widest text-neutral-400 mb-6 uppercase">{col.title}</h5>
                <ul className="flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>© 2024 ElectroHub. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
