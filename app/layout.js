import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './navbar';
import Footer from './footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ma premiere app Next.js",
  description: "création d'une premiere application en Next.js",
};
export async function generateMetada({params, searchParams}){
  const product = await getProduct(params.id);

  return {
    title: product.title
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
