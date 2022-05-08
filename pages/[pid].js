import fs from 'fs/promises';
import path from 'path';
import { Fragment } from "react"

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  )
}

export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find(p => p.id === productId);

  return {
    props: {
      loadedProduct: product
    }
  };
}

export default ProductDetailPage