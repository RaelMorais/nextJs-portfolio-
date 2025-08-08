import Image from "next/image";
import { MainHome } from "./components/MainHome";
import { Header } from "./components/Header";
export default function Home() {
  return (
      <>
      <Header />
      <MainHome />
      </>
  );
}
