import dash from "./dash.module.css";
import WindowDashboard from "../../components/window/windowDashboard";
import WindowDashboardBar from "../../components/window/windowDashboardBar";
import add from "../../public/icons/add.svg";
import Image from "next/image";

function ProductList() {
  return (
    <>
      <WindowDashboard>
        <WindowDashboardBar>
          <Image src={add} alt='dodaj produkt' className={dash.add} />
        </WindowDashboardBar>
      </WindowDashboard>
    </>
  );
}

export default ProductList;

ProductList.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
