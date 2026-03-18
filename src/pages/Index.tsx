import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import remeraImg from "@/assets/remera-basica.png";
import remeraImg2 from "@/assets/remera-basica2.png";
import remeraImg3 from "@/assets/remera-basica3.png";
import remeraImg4 from "@/assets/remera-basica4.png";

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
    corte: "Oversize Fit",
    material: "100% Algodón Pima 30/1",
    productImage: "",
    sizeChartImage: "",
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "remeras-escote-en-v",
    title: "Remera Escote en V",
    corte: "Regular Fit - Escote V",
    material: "100% Algodón Pima 30/1",
    productImage: "",
    sizeChartImage: "",
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "buzos-canguro",
    title: "Buzo Canguro",
    corte: "Regular Fit con bolsillo canguro",
    material: "Frisa algodón 100%",
    showGallery: true,
    productImage: "",
    sizeChartImage: "",
    galleryImages: [] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "buzos-clasico",
    title: "Buzo Clásico",
    corte: "Regular Fit",
    material: "Frisa algodón 100%",
    showGallery: true,
    productImage: "",
    sizeChartImage: "",
    galleryImages: [] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "buzos-medio-cierre-polar",
    title: "Buzo 1/2 Cierre Polar",
    corte: "Regular Fit con medio cierre",
    material: "Polar anti-pilling",
    productImage: "",
    sizeChartImage: "",
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "chombas-pique",
    title: "Chomba Piqué",
    corte: "Regular Fit",
    material: "Piqué premium",
    showGallery: true,
    productImage: "",
    sizeChartImage: "",
    galleryImages: [] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "chalecos-polar",
    title: "Chaleco Polar",
    corte: "Regular Fit",
    material: "Polar anti-pilling",
    showGallery: true,
    productImage: "",
    sizeChartImage: "",
    galleryImages: [] as string[],
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "camperas-polar",
    title: "Campera Polar",
    corte: "Regular Fit",
    material: "Polar anti-pilling premium",
    productImage: "",
    sizeChartImage: "",
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "gorras-trucker",
    title: "Gorra Trucker",
    corte: "Ajustable",
    material: "Frente algodón / Malla trasera",
    productImage: "",
    sizeChartImage: "",
    colors: [
      { name: "Negro", color: "#0a0a0a" },
      { name: "Blanco", color: "#ffffff" },
    ],
  },
  {
    id: "tazas-ceramica-aaa",
    title: "Taza Cerámica AAA",
    corte: "—",
    material: "Cerámica calidad AAA",
    productImage: "",
    sizeChartImage: "",
    colors: [
      { name: "Blanco", color: "#ffffff" },
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
