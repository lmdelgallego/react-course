import fs from 'fs/promises';
import path from 'path';
import { Fragment } from "react"

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  )
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}


export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find(p => p.id === productId);

  return {
    props: {
      loadedProduct: product
    }
  };
}

export const getStaticPaths = async () => {
  const data = await getData();
  const ids = data.products.map(p => p.id);

  const pathWithParams = ids.map(id => ({
    params: {
      pid: id
    }
  }));

  return {
    paths: pathWithParams,
    fallback: false, // false, true, or 'blocking'
  }
}

export default ProductDetailPage