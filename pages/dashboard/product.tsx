import dash from "./dash.module.css";
import WindowDashboard from "../../components/window/windowDashboard";
import WindowDashboardBar from "../../components/window/windowDashboardBar";
import Image from "next/image";
import StandardButton from "../../components/button/Standard";
import { Variant } from "../../components/button/Variant";
import { useState } from "react";
import WindowDashboardBody from "../../components/window/windowDashboardBody";
import AddNewProduct from "../../components/dashboard/add";

function ProductList() {
  const [isAddProductClicked, setIsAddProductClicked] = useState(false);
  return (
    <>
      <WindowDashboard>
        <WindowDashboardBar>
          {isAddProductClicked ? (
            <Variant
              name='Wróć do listy'
              handleClick={() => setIsAddProductClicked(false)}
            />
          ) : (
            <Variant
              name={"Dodaj produkt"}
              handleClick={() => setIsAddProductClicked(true)}
            />
          )}
        </WindowDashboardBar>
        <WindowDashboardBody>
          {isAddProductClicked ? <AddNewProduct /> : <h1> Lista Porduktów</h1>}
        </WindowDashboardBody>
      </WindowDashboard>
    </>
  );
}

export default ProductList;

ProductList.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
