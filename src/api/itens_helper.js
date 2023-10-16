import { v4 as uuid } from "uuid";
import esmalteColorama from "../assets/images/esmaltesImg/esmalte1.png";
import esmalteImpala from "../assets/images/esmaltesImg/esmalte2.png";
import esmalteRisqué from "../assets/images/esmaltesImg/esmalte3.png";
import macBatom from "../assets/images/batomsImg/batom1.jpg";
import macVetor from "../assets/images/batomsImg/batom2.png";
import macRelentless from "../assets/images/batomsImg/batom3.jpg";
import hidratanteNivea from "../assets/images/hidratantesImg/hidratante1.jpg";
import antioxidanteHibisco from "../assets/images/hidratantesImg/hidratante2.jpg";
import cetaphilLoção from "../assets/images/hidratantesImg/hidratante3.jpg";
import mariaMakeUp from "../assets/images/basesImg/base1.jpg";
import matteTracta from "../assets/images/basesImg/base2.jpg";
import studioWaterweight from "../assets/images/basesImg/base3.jpg";
const initialState = [
  {
    titulo: "Esmalte Colorama",
    descricao: "Esmalte Colorama Cremoso Chic Pele",
    foto: esmalteColorama,
    favorito: false,
    preco: 95,
    id: uuid(),
    categoria: "esmalte",
  },
  {
    titulo: "Esmalte Impala",
    descricao: "Esmalte Impala Cremoso A Cor da Sua Moda Chamego Meu",
    foto: esmalteImpala,
    favorito: false,
    preco: 85,
    id: uuid(),
    categoria: "esmalte",
  },
  {
    titulo: "Esmalte Risqué",
    descricao: "Esmalte Risqué Vermelho Felicidade",
    foto: esmalteRisqué,
    favorito: false,
    preco: 110,
    id: uuid(),
    categoria: "esmalte",
  },
  {
    titulo: "Mac Batom Matte",
    descricao: "Mac Batom Matte 3G (10 Tons)",
    foto: macBatom,
    favorito: false,
    preco: 150,
    id: uuid(),
    categoria: "batom",
  },
  {
    titulo: "Batom Mac Vetor",
    descricao: "Batom Mac Vetor",
    foto: macVetor,
    favorito: false,
    preco: 230,
    id: uuid(),
    categoria: "batom",
  },
  {
    titulo: "Mac Relentless Red Lipstick",
    descricao:
      "Mac Relentless Red Lipstick - Mac Matte Lipstick Lady Danger Clipart",
    foto: macRelentless,
    favorito: false,
    preco: 125.9,
    id: uuid(),
    categoria: "batom",
  },
  {
    titulo: "Hidratante Nívea",
    descricao: "Loção Hidratante Nívea",
    foto: hidratanteNivea,
    favorito: false,
    preco: 25,
    id: uuid(),
    categoria: "hidratante",
  },
  {
    titulo: "Hidratante Corporal Antioxidante",
    descricao: "Hidratante Corporal Antioxidante Hibisco E Framboesa",
    foto: antioxidanteHibisco,
    favorito: false,
    preco: 41,
    id: uuid(),
    categoria: "hidratante",
  },
  {
    titulo: "Cetaphil Loção Hidratante",
    descricao:
      "Cetaphil, Loção Hidratante Corporal, 460ml, Pele Sensível e Seca | apotekos ",
    foto: cetaphilLoção,
    favorito: false,
    preco: 99.99,
    id: uuid(),
    categoria: "hidratante",
  },
  {
    titulo: "Base Mari Maria MakeUp",
    descricao: "Base Mari Maria MakeUp | 50 Ml",
    foto: mariaMakeUp,
    favorito: false,
    preco: 125.99,
    id: uuid(),
    categoria: "base",
  },
  {
    titulo: "Base Matte Tracta",
    descricao: "Base Matte Tracta Alta Cobertura Cor 05C – 40G",
    foto: matteTracta,
    favorito: false,
    preco: 89.99,
    id: uuid(),
    categoria: "base",
  },
  {
    titulo: "MAC Studio Waterweight",
    descricao: "MAC Studio Waterweight Foundation SPF30 | 50G ",
    foto: studioWaterweight,
    favorito: false,
    preco: 299.9,
    id: uuid(),
    categoria: "base",
  },
];
export function getStoreItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(initialState);
    }, 500);
  });
}
