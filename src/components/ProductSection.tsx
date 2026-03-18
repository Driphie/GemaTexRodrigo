import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ColorSwatch {
  name: string;
  color: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  corte?: string;
  material?: string;
  colors?: ColorSwatch[];
  reverse?: boolean;
  showGallery?: boolean;
  galleryImages?: string[];
  productImage?: string;
  sizeChartImage?: string;
}

const ProductSection = ({
  id,
  title,
  corte = "Información del corte",
  material = "Información del material",
  colors = [
    { name: "Negro", color: "#0a0a0a" },
    { name: "Blanco", color: "#ffffff" },
  ],
  reverse = false,
  showGallery = false,
  galleryImages = [],
  productImage = "",
  sizeChartImage = "",
}: ProductSectionProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-12 md:mb-16"
        >
          {title}
        </motion.h2>

        {/* Two-column layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${
            reverse ? "direction-rtl" : ""
          }`}
          style={reverse ? { direction: "rtl" } : undefined}
        >
          {/* Left: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ direction: "ltr" }}
          >
            <div
              className="aspect-[9/16] bg-muted flex items-center justify-center overflow-hidden group cursor-pointer"
              style={{
                outline: "1px solid rgba(0,0,0,0.1)",
                outlineOffset: "-1px",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full h-full flex items-center justify-center will-change-transform"
              >
                {productImage ? (
                  <img src={productImage} alt={title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                    Imagen del Producto
                  </span>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Size Chart */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ direction: "ltr" }}
          >
            <div
              className="aspect-[9/16] bg-muted flex items-center justify-center overflow-hidden"
              style={{
                outline: "1px solid rgba(0,0,0,0.1)",
                outlineOffset: "-1px",
              }}
            >
              {sizeChartImage ? (
                <img src={sizeChartImage} alt={`${title} - Tabla de Talles`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                  Tabla de Talles
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Gallery Button & Expanded Gallery - between images and details */}
        {showGallery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Button
              onClick={() => setGalleryOpen(!galleryOpen)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold tracking-widest uppercase text-sm px-8 py-6 transition-all duration-300"
            >
              {galleryOpen ? "OCULTAR FOTOS" : "VER MÁS FOTOS"}
              {galleryOpen ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>

            <AnimatePresence>
              {galleryOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
                    {galleryImages.length > 0 ? (
                      galleryImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="aspect-[9/16] bg-muted overflow-hidden"
                          style={{
                            outline: "1px solid rgba(0,0,0,0.1)",
                            outlineOffset: "-1px",
                          }}
                        >
                          <img
                            src={img}
                            alt={`${title} foto ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))
                    ) : (
                      <>
                        {[1, 2].map((n) => (
                          <div
                            key={n}
                            className="aspect-[3/4] bg-muted flex items-center justify-center"
                            style={{
                              outline: "1px solid rgba(0,0,0,0.1)",
                              outlineOffset: "-1px",
                            }}
                          >
                            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                              Foto {n}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:mt-14 space-y-4 max-w-xl"
        >
          <div>
            <span className="text-sm font-bold tracking-widest uppercase">
              Corte:
            </span>
            <p className="text-lg leading-relaxed text-muted-foreground mt-1">
              {corte}
            </p>
          </div>
          <div>
            <span className="text-sm font-bold tracking-widest uppercase">
              Material:
            </span>
            <p className="text-lg leading-relaxed text-muted-foreground mt-1">
              {material}
            </p>
          </div>

          {/* Color Swatches */}
          <div>
            <span className="text-sm font-bold tracking-widest uppercase">
              Colores:
            </span>
            <div className="flex gap-3 mt-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  title={c.name}
                  className="w-8 h-8 rounded-full transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
                  style={{
                    backgroundColor: c.color,
                    boxShadow:
                      c.color === "#ffffff"
                        ? "inset 0 0 0 1px rgba(0,0,0,0.15)"
                        : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
