import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-sm">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        
        <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border">
            <Image 
                src="/Logo.png" 
                alt="J and AV Poultry Wholesaling Logo" 
                fill
                className="object-contain"
            />
            </div>
            
            <div className="leading-tight">
            <div className="font-serif text-lg text-[var(--brand-green-deep)]">J and AV</div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">POULTRY WHOLESALING</div>
            </div>
        </div>
        
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
            <Link href="#home" className="text-foreground hover:text-[var(--brand-green-deep)]">Home</Link>
            <Link href="#products" className="text-foreground hover:text-[var(--brand-green-deep)]">Products</Link>
            <Link href="#contact" className="text-foreground hover:text-[var(--brand-green-deep)]">Contact Us</Link>
        </nav>
        
        <a
            href="tel:+639323283463"
            className="inline-flex items-center gap-2 rounded-full bg-[#1a2614] px-5 py-3 text-white text-foreground shadow-sm ring-1 ring-border hover:bg-secondary"
        >
            <Phone className="h-4 w-4" />
            +63 932 328 3463
        </a>
        
        </header>
    </div>
  );
}