import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = (props) => {

  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR('https://goalcoach-a4187.firebaseio.com/sales.json', (url) => fetch(url).then(res => res.json()));

  useEffect(() => {
    if (data) {
      const transformedData = [];
      for (let key in data) {
        transformedData.push({
          id: key,
          ...data[key],
        });
      }
      console.log('transformedData', transformedData);
      setSales(transformedData);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('https://goalcoach-a4187.firebaseio.com/sales.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const transformedData = [];
  //       for (let key in data) {
  //         transformedData.push({
  //           id: key,
  //           ...data[key],
  //         });
  //       }
  //       console.log('transformedData', transformedData);
  //       setSales(transformedData);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <h1>No sales found</h1>;
  }
  if (!data || !sales) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {sales.map(sale => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://goalcoach-a4187.firebaseio.com/sales.json');
  const data = await response.json();
  const transformedData = [];

  for (let key in data) {
    transformedData.push({
      id: key,
      ...data[key],
    });
  }
  console.log('transformedData', transformedData);
  return {
    props: {
      sales: transformedData,
    },
    // revalidate: 10,
  }

}

export default LastSalesPage