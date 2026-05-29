import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto w-full max-w-3xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
