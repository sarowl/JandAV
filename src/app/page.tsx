import Image from "next/image";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Gem, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal"; 

export const metadata: Metadata = {
  title: "J and AV Poultry Wholesaling — Premium Eggs & Quail Chicks",
  description: "Your trusted source for high-quality eggs and day-old quail chicks. Supplying stores and farms across the Visayas region.",
  openGraph: {
    title: "J and AV Poultry Wholesaling",
    description: "Premium poultry wholesaling — fresh quail eggs, chicken eggs, salted eggs, and day-old quail chicks.",
  },
};

const products = [
  { title: "Fresh", title2: "Quail Eggs", desc: "Nutritious, delicious, and perfect for every need.", img: "/Quail Eggs.png", bg: "bg-[#1d3520]", gradient: "from-[#1d3520] via-[#1d3520]/80 to-transparent" },
  { title: "Premium", title2: "Chicken Eggs", desc: "Farm-fresh chicken eggs with rich quality and excellent value.", img: "/brown.webp", bg: "bg-[#a8472a]", gradient: "from-[#a8472a] via-[#a8472a]/80 to-transparent" },
  { title: "Salted", title2: "Eggs", desc: "Traditionally crafted for rich flavor and longer shelf life.", img: "/Salted.webp", bg: "bg-[#c98a2b]", gradient: "from-[#c98a2b] via-[#c98a2b]/80 to-transparent" },
  { title: "Day-old", title2: "Quail Chicks", desc: "Healthy, active, and ready for a strong start.", img: "/Quail.webp", bg: "bg-[#475c4a]", gradient: "from-[#475c4a] via-[#475c4a]/80 to-transparent" },
];

const accreds = [
  { title: "DTI Registered Entity", sub: "BN No. 2816828", logo: "/DTI.png" },
  { title: "Accredited Poultry Establishment", sub: "Dept. of Agriculture", logo: "/DA.png" },
  { title: "Non - VAT Registered", sub: "BIR Philippines", logo: "/BIR.png" },
  { title: "Licensed Business Operator", sub: "City of Cebu", logo: "/CebuCityLogo.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section id="home" className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col justify-center">
          <ScrollReveal direction="right">
            <h1 className="font-serif text-5xl leading-[1.05] text-[var(--brand-green-deep)] md:text-6xl lg:text-7xl">
              Premium Poultry<br />Wholesaling
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.1}>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Your trusted source for high-quality eggs and day-old quail chicks. Supplying stores and farms across the Visayas region with fresh and consistent quality poultry products.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="group flex items-center gap-2 rounded-full bg-[#1a2614] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2a3c21]">
                View Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="flex items-center gap-2 rounded-full border-2 border-[#1a2614] px-6 py-3 text-sm font-semibold text-[#1a2614] transition-all hover:bg-[#1a2614] hover:text-white">
                Get in Touch
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { Icon: Gem, label: "PREMIUM QUALITY", desc: "Every batch carefully selected for freshness and purity.", color: "bg-[#1a2614]" },
              { Icon: ShieldCheck, label: "BIO-SECURE PROCESSES", desc: "Strict farm-to-market protocols for your peace of mind.", color: "bg-[#a8472a]" },
              { Icon: Truck, label: "RELIABLE SUPPLY", desc: "Consistent availability and on-time delivery.", color: "bg-[#d1932b]" },
            ].map(({ Icon, label, desc, color }, i) => (
              <ScrollReveal direction="up" delay={0.3 + (i * 0.1)} key={label}>
                <div className="group cursor-default">
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-sm font-bold tracking-wide text-foreground">{label}</div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="left" delay={0.2}>
          <div className="relative flex justify-center">
            <Image
              src="/BrownEggs.png"
              alt="Basket of fresh brown eggs"
              width={746}     
              height={590}    
              quality={100}   
              className="w-full h-auto max-w-lg object-contain lg:max-w-none lg:scale-110"
              priority
            />
          </div>
        </ScrollReveal>
      </section>



      {/* Products */}
      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-20">
        
        {/* Products Title Section */}
        <ScrollReveal direction="up">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="mb-4 font-serif text-4xl text-[var(--brand-green-deep)] md:text-5xl">
              Featured Products
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ScrollReveal direction="up" delay={i * 0.15} key={p.title}>
              <article className={`relative group flex flex-col justify-between h-[360px] overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${p.bg}`}>
                <div className="absolute inset-y-0 right-0 w-2/3 z-0">
                  <Image src={p.img} alt={`${p.title} ${p.title2}`} fill className="object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r z-10 p-6 flex flex-col justify-between w-[75%] ${p.gradient}`}>
                  <div>
                    <h3 className="text-white font-serif text-3xl font-bold mb-2 leading-tight transition-transform duration-300 group-hover:translate-x-1">
                      {p.title}<br/>{p.title2}
                    </h3>
                    <p className="text-white/80 text-[13px] leading-relaxed mt-4 pr-2">{p.desc}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Accreditation */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <ScrollReveal direction="none">
          <h2 className="text-center font-serif text-4xl text-[var(--brand-green-deep)] md:text-5xl">
            Accreditation & Permits
          </h2>
        </ScrollReveal>
        
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {accreds.map((a, i) => (
            <ScrollReveal direction="up" delay={i * 0.1} key={a.title}>
              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--brand-cream)] p-2">
                  <Image src={a.logo} alt={`${a.title} logo`} fill className="object-contain p-2" />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-snug text-foreground">{a.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{a.sub}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-10">
        <ScrollReveal direction="up">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="md:border-r md:border-border md:pr-10">
                <h2 className="font-serif text-3xl text-[#1a2614]">GET IN TOUCH</h2>
                <h3 className="mt-8 text-lg font-semibold text-foreground">Contact Information</h3>
                <ul className="mt-6 space-y-6 text-sm">
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 text-[var(--brand-green-deep)]" />
                  <div>
                    <div className="font-medium text-foreground">+63 932 328 3463</div>
                    <div className="text-xs text-muted-foreground">Available Mon – Sat, 7AM – 6PM</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 text-[var(--brand-green-deep)]" />
                  <div>
                    <div className="font-medium text-foreground">jandavgenmerch@gmail.com</div>
                    <div className="text-xs text-muted-foreground">Email us for inquiries</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[var(--brand-green-deep)]" />
                  <div>
                    <div className="font-medium text-foreground">Basak Pardo, Cebu City</div>
                    <div className="text-xs text-muted-foreground">Serving farms and stores across the Visayas region.</div>
                  </div>
                </li>
              </ul>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="group mt-10 h-[400px] w-full overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="J and AV Poultry Location"
              src="https://maps.google.com/maps?q=Basak%20Pardo,%20Cebu%20City&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-125 transition-all duration-700 group-hover:grayscale-0"
            ></iframe>
          </div>
        </ScrollReveal>
      </section>
         
      {/* Footer */}
      <footer className="bg-[#1a2614] py-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs">
          <span className="opacity-80">© 2021 J and AV Poultry Wholesaling. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a 
              href="https://web.facebook.com/profile.php?id=100054682843278" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="hover:opacity-80 transition-opacity"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}