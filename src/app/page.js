import Image from "next/image";
import { MainHome } from "./components/main/MainHome";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
      <>
      <Header />
      <MainHome />
      <Footer />
      </>
  );
}
