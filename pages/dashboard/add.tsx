import dash from "./styles/dash.module.css";
import Aside from "./Aside";
import Head from "next/head";

function dashNewProduct() {
  return (
    <>
      <Head>
        <title> Panel kontrolny </title>
      </Head>
      <div className={dash.general}>
        <Aside />
        <main className={dash.main}>
          <section className={dash.add}></section>
          <form>
            <input type='text' placeholder='Nazwa produktu' />
            <input type='text' placeholder='Nazwa produktu' />
            <input type='text' placeholder='Nazwa produktu' />
            <input type='text' placeholder='Nazwa produktu' />
          </form>
        </main>
      </div>
    </>
  );
}

export default dashNewProduct;

dashNewProduct.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
