import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import remeraImg from "@/assets/remera-basica.png";
import remeraImg2 from "@/assets/remera-basica2.png";
import remeraImg3 from "@/assets/remera-basica3.png";
import remeraImg4 from "@/assets/remera-basica4.png";
import remeraOvImg from "@/assets/remera-oversize.png";
import remeraOvImg2 from "@/assets/remera-oversize2.png";
import remeraOvImg3 from "@/assets/remera-oversize3.png";
import remeraOvImg4 from "@/assets/remera-oversize4.png";
import remerav from "@/assets/remera-escotev.png";
import remerav2 from "@/assets/remera-escotev2.png";
import remerav3 from "@/assets/remera-escotev3.png";
import buzoc1 from "@/assets/buzo-canguro.png";
import buzoc2 from "@/assets/buzo-canguro2.png";
import buzoc3 from "@/assets/buzo-canguro3.png";
import buzoc4 from "@/assets/buzo-canguro4.png";
import buzoclas1 from "@/assets/buzo-clasico.png";
import buzoclas2 from "@/assets/buzo-clasico2.png";
import buzoclas3 from "@/assets/buzo-clasico3.png";
import buzoclas4 from "@/assets/buzo-clasico4.png";
import chombap1 from "@/assets/chomba-pique2.png";
import chombap2 from "@/assets/chomba-pique4.png";
import chombap3 from "@/assets/chomba-pique3.png";
import chombap4 from "@/assets/chomba-pique.png";
import chalecop1 from "@/assets/chaleco-polar.png";
import chalecop2 from "@/assets/chaleco-polar4.png";
import chalecop3 from "@/assets/chaleco-polar2.png";
import chalecop4 from "@/assets/chaleco-polar3.png";
import camperap1 from "@/assets/campera-polar.png";
import camperap2 from "@/assets/campera-polar3.png";
import camperap3 from "@/assets/campera-polar2.png";
import gorra1 from "@/assets/gorra.png";
import gorra2 from "@/assets/gorra2.png";
// ============================================================
// INSTRUCCIONES PARA AGREGAR IMÁGENES:
// 1. Colocá tus imágenes en la carpeta src/assets/
// 2. Importalas acá arriba (ejemplo abajo)
// 3. Asignalas a productImage, sizeChartImage o galleryImages
//
// Ejemplo:
// import remeraImg from "@/assets/remera-basica.jpg";
// import remeraTalles from "@/assets/remera-basica-talles.jpg";
// import remeraGal1 from "@/assets/remera-basica-gal1.jpg";
// import remeraGal2 from "@/assets/remera-basica-gal2.jpg";
//
// Luego usá: productImage: remeraImg, sizeChartImage: remeraTalles, galleryImages: [remeraGal1, remeraGal2]
// ============================================================

const products = [
  {
    id: "remeras-basica",
    title: "Remera Básica",
    corte: "Unisex",
    material: "Algodon Peinado 24/1",
    showGallery: true,
    productImage: [remeraImg],      // ← pegá tu import acá
    sizeChartImage: [remeraImg2],    // ← pegá tu import acá
    galleryImages: [remeraImg3, remeraImg4] as string[],  // ← [img1, img2]
    colors: [
      { name: "Blanco", color: "#ffffff" },
      { name: "Negro", color: "#0a0a0a" },
      { name: "Gris oscuro", color: "#7c7d86" },
      { name: "Gris Claro", color: "#dadbe0" },
      { name: "Azul Marino", color: "#041b43" },
      { name: "Off White", color: "#ebebdf" },
      { name: "Verde Militar", color: "#5c6a4f" },
      { name: "Azul Francia", color: "#3580f4" },
      { name: "Granate", color: "#cd0643" },
      { name: "Moca", color: "#8e6054" },
      { name: "Verde Benneton", color: "#163f43" },
      // Agregá más colores: { name: "Azul", color: "#1e40af" },
    ],
  },
  {
    id: "remeras-oversize",
    title: "Remera Oversize",
    corte: "Unisex",
    material: "Algodon Peinado 24/1",
    showGallery: true,
    productImage: [remeraOvImg2],
    sizeChartImage: [remeraOvImg],
    galleryImages: [remeraOvImg3, remeraOvImg4] as string[],  // ← [img1, img2]
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "remeras-escote-en-v",
    title: "Remera Escote en V",
    corte: "Entallado dama",
    material: "Algodon Peinado 24/1",
    showGallery: true,
    productImage: [remerav],
    sizeChartImage: [remerav2],
    galleryImages: [remerav3] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "buzos-canguro",
    title: "Buzo Canguro",
    corte: "Unisex",
    material: "Friza invisible 30/1",
    showGallery: true,
    productImage: [buzoc2],
    sizeChartImage: [buzoc1],
    galleryImages: [buzoc3, buzoc4] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
      { name: "Gris Melange", color: "#deded6" },
      { name: "Azul Marino", color: "#1a2238" },
      { name: "Verde Militar", color: "#747a72" },
      { name: "Verde Benneton", color: "#58777a" },
      { name: "Gris Titanio", color: "#b2c0d8" },
      { name: "Gris Topo", color: "#444754" },
      { name: "Vino", color: "#ac83bc" },
      { name: "Beige Claro", color: "#ece8df" },
      { name: "Beige Oscuro", color: "#c9c4b0" },
      { name: "Ladrillo", color: "#a9734e" },
      { name: "Marron", color: "#725c57" },
    ],
  },
  {
    id: "buzos-clasico",
    title: "Buzo Clásico",
    corte: "Unisex",
    material: "Friza invisible 30/1",
    showGallery: true,
    productImage: [buzoclas1],
    sizeChartImage: [buzoclas2],
    galleryImages: [buzoclas3, buzoclas4] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
      { name: "Gris Melange", color: "#deded6" },
    ],
  },
  {
    id: "buzos-medio-cierre-polar",
    title: "Buzo 1/2 Cierre Polar",
    corte: "Unisex",
    material: "Polar",
    productImage: "",
    sizeChartImage: "",
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
      { name: "Azul", color: "#2f348c" },
    ],
  },
  {
    id: "chombas-pique",
    title: "Chomba Piqué",
    corte: "Unisex",
    material: "Pique algodon con poliester",
    showGallery: true,
    productImage: [chombap1],
    sizeChartImage: [chombap2],
    galleryImages: [chombap3, chombap4] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
      { name: "Azul", color: "#2f348c" },
      { name: "Gris Melange", color: "#deded6" },
    ],
  },
  {
    id: "chalecos-polar",
    title: "Chaleco Polar",
    corte: "Unisex",
    material: "Polar",
    showGallery: true,
    productImage: [chalecop2],
    sizeChartImage: [chalecop1],
    galleryImages: [chalecop3, chalecop4] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: ".", color: "#f8f5e6" },
      { name: ".", color: "#8d898a" },
      { name: ".", color: "#2d2e42" },
    ],
  },
  {
    id: "camperas-polar",
    title: "Campera Polar",
    corte: "Unisex",
    material: "Polar",
    showGallery: true,
    productImage: [camperap1],
    sizeChartImage: [camperap2],
    galleryImages: [camperap3] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
      { name: "Azul", color: "#2f348c" },
    ],
  },
  {
    id: "gorras-trucker",
    title: "Gorra Trucker",
    corte: "Gorra Trucker",
    material: "Trucker",
    productImage: [gorra2],
    sizeChartImage: [gorra1],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: ".", color: "#dcaeb8" },
      { name: ".", color: "#91836c" },
      { name: ".", color: "#52061e" },
      { name: ".", color: "#740000" },
      { name: ".", color: "#1f1c12" },
      { name: ".", color: "#1c202d" },
      { name: ".", color: "#0f174f" },
      { name: ".", color: "#669ac4" },
      { name: ".", color: "#2b2d36" },
      { name: ".", color: "#979a99" },
      { name: ".", color: "#9c9793" },
    ],
  },
];

const GeometricDivider = ({ variant = 1 }: { variant?: number }) => (
  <div className="relative h-24 md:h-32 overflow-hidden">
    {variant === 1 ? (
      <>
        <div
          className="absolute inset-0 bg-primary"
          style={{ clipPath: "polygon(0 0, 100% 60%, 100% 100%, 0 40%)" }}
        />
        <div
          className="absolute inset-0 bg-foreground"
          style={{ clipPath: "polygon(0 60%, 100% 100%, 100% 100%, 0 100%)" }}
        />
      </>
    ) : (
      <>
        <div
          className="absolute inset-0 bg-foreground diagonal-texture"
          style={{ clipPath: "polygon(0 40%, 100% 0, 100% 60%, 0 100%)" }}
        />
        <div
          className="absolute inset-0 bg-primary"
          style={{ clipPath: "polygon(60% 0, 100% 0, 100% 40%, 80% 60%)" }}
        />
      </>
    )}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {products.map((product, i) => (
        <div key={product.id}>
          {i % 4 === 0 && i > 0 && <GeometricDivider variant={1} />}
          {i % 4 === 2 && <GeometricDivider variant={2} />}
          <ProductSection
            id={product.id}
            title={product.title}
            corte={product.corte}
            material={product.material}
            reverse={i % 2 === 1}
            showGallery={product.showGallery}
            productImage={product.productImage}
            sizeChartImage={product.sizeChartImage}
            galleryImages={(product as any).galleryImages}
            colors={product.colors}
          />
        </div>
      ))}

      <GeometricDivider variant={1} />
      <Footer />
    </div>
  );
};

export default Index;
