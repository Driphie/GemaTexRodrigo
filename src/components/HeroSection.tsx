import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-foreground geometric-clip-hero">
      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-primary"
          style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-foreground diagonal-texture"
          style={{ clipPath: "polygon(0 30%, 80% 0, 60% 100%, 0 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-48 lg:py-56">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter leading-none text-primary-foreground"
        >
          FORMA Y<br />
          FUNCIÓN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/60 max-w-md leading-relaxed"
        >
          Indumentaria premium con identidad. Calidad que se siente.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
