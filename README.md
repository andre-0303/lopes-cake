# LopesCake - Sistema de Encomendas

Sistema de encomendas para a LopesCake, uma vendora local que não possui um espaço físico para vendas. Desenvolvido com **React (Mobile-first)** e **TailwindCSS**, o aplicativo permite que clientes escolham produtos, adicionem ao carrinho e finalizem o pedido com um QR Code PIX ou código de pagamento para copiar e colar.

## ⚙️ Funcionalidades Principais

### 📋 Cardápio Digital
- Listagem de produtos (doces, salgados, combos).
- Preço e descrição de cada item.
- Fotos atrativas dos produtos.

### 🛒 Carrinho de Compras
- Adição de itens e visualização do subtotal.
- Opção para remover ou alterar quantidades.

### 💳 Checkout e Pagamento
- Geração automática de PIX QR Code ou código para copiar e colar.
- Exibição do valor total consolidado.
- Confirmação de pedido após pagamento.

## 🚀 Benefícios
- **Para o cliente**: Facilidade para escolher, pagar e encomendar sem contato direto com a vendedora.
- **Para a vendedora**: Redução de trabalho manual, organização de pedidos e pagamentos automáticos via PIX.
- **Para o negócio**: Profissionalismo, agilidade e escalabilidade sem desorganização.

## 🛠️ Tecnologias Utilizadas
- **Front-end (Cardápio e App)**: React (web/mobile-first), TailwindCSS, Lucide Icons.
- **Back-end (integrado na mesma pasta para rodar localmente)**: Prisma, Node.js + Express, NeonDB.
- **Gerenciamento**: Git Flow para branches e features.

> **Nota**: O aplicativo será executado localmente por enquanto.

## 📦 Como Instalar as Dependências

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/andre-0303/lopes-cake.git
   cd lopes-cake
   ```

2. **Instale as dependências do front-end e back-end**:
   Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, execute:
   ```bash
   npm install
   ```
   Isso instalará as dependências listadas no `package.json`, incluindo:
   - `react`, `react-dom`
   - `tailwindcss`
   - `lucide-react`
   - `express`
   - `prisma`
   - `@neondatabase/serverless`


3. **Inicie o servidor back-end**:
   ```bash
   npm run server
   ```

4. **Inicie o front-end**:
   Em outro terminal, na mesma pasta do projeto:
   ```bash
   npm start
   ```

5. **Acesse o aplicativo**:
   Abra o navegador em `http://localhost:3000` para visualizar o cardápio e testar as funcionalidades.

## 🔗 Links Úteis
- 📂 [Repositório no GitHub](https://github.com/andre-0303/lopes-cake)
- 🎨 [Protótipo no Figma](https://www.figma.com/design/OVgtawux6s08MjKC3p7ZZk/lopes-cake?node-id=1-2&t=qXUBIs7XyS3j8SJM-0)

## 🤝 Como Contribuir
- 🍴 Faça um fork do projeto.
- 🌿 Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
- ✅ Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
- 🚀 Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
- 📬 Abra um Pull Request ou crie uma Issue para sugestões.

## 🖌️ Feito por
Bandeira Dev