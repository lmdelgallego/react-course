import fs from 'fs/promises';
import path from 'path';

const HomePage = (props) => {

  const { products } = props;

  return (
    <div>
      <ul>
        {products.map(product => (<li key={product.id}>{product.title}</li>))}
      </ul>
    </div>
  );
};

export async function getStaticProps(context) {
  console.log('(Re)building products...');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if (data.producs.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10,
  };
}

export default HomePage;
