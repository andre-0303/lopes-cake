/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$transaction(async (tx: any) => {
    // Limpa os produtos antes de popular
    await tx.product.deleteMany();

    // --- DOCES ---
    await tx.product.createMany({
      data: [
        {
          name: "Pudim",
          price: 7.00,
          imageUrl:
            "https://receitatodahora.com.br/wp-content/uploads/2025/02/pudim-de-leite-condensado1802.webp",
            category: "doces"
        },
        {
          name: "Mousse de Maracujá",
          price: 5.00,
          imageUrl:
            "https://guiadacozinha.com.br/wp-content/uploads/2021/11/mousse-maracuja-licor.jpg",
            category: "doces"
        },
        {
          name: "Brigadeiro Gourmet",
          price: 3.50,
          imageUrl:
            "https://www.sabornamesa.com.br/media/k2/items/cache/5003d452a8da016f3ed02a6385cf54e8_XL.jpg",
            category: "doces"
        },
      ],
    });

    // --- SALGADOS ---
    await tx.product.createMany({
      data: [
        {
          name: "Lasanha à Bolonhesa",
          price: 5.00,
          imageUrl:
            "https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg",
            category: "salgados"
        },
        {
          name: "Coxinha de Frango",
          price: 2.50,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUh_MAwGDys4wQt6-IOxXF0yfYwzqJk-08g&s",
            category: "salgados"
        },
        {
          name: "Empada de frango",
          price: 3.0,
          imageUrl:
            "https://zayaflour.com/wp-content/uploads/2021/06/209041939_332096688532498_4563438401343223032_n.jpg",
            category: "salgados"
        },
      ],
    });

    // --- COMBOS ---
    await tx.product.createMany({
      data: [
        {
          name: "Combo de Brigadeiros (20 unidades)",
          price: 22.9,
          imageUrl:
            "https://salgados.nilsabor.com.br/sabores/imagens/doces-para-festas-docinhos-para-festa-infantil.jpg",
            category: "combos"
        },
        {
          name: "Combo Salgado (Coxinha e Coca-Cola)",
          price: 10.0,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIwhfRX0L9pewApcnoflr8ANj3Ru6U_XX1A&s",
            category: "combos"
        },
        {
          name: "Combo Pastel e Caldo de Cana",
          price: 10.0,
          imageUrl:
            "https://i0.wp.com/bernadetealves.com/wp-content/uploads/2021/12/Pastel-e-caldo-de-cana-combinacao-que-resiste-ao-tempo-e-movimenta-a-economia-Bernadete-Alves.jpg?fit=1200%2C645&ssl=1",
            category: "combos"
        },
      ],
    });
  });

  console.log("✅ Banco populado com sucesso!");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
