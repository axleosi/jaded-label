import Hero from "./components/Hero";
import Card from "./components/Card";
import TopCollection from "./components/TopCollection";
import TopSellers from "./components/TopSellers";
import ItGirl from "./components/ItGirl";
import ProductList from "./components/ProductList";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
    <Hero/>
    <Card/>
    <TopCollection/>
    <TopSellers/>
    <ItGirl/>
    <ProductList/>
    </>
  );
}
