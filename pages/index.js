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

export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: 'p1', title: 'Project 1' }
      ]
    }
  };
}

export default HomePage;
