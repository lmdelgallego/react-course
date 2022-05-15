import { useEffect, useState } from 'react';

const LastSalesPage = () => {

  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://goalcoach-a4187.firebaseio.com/sales.json')
      .then(res => res.json())
      .then(data => {
        const transformedData = [];
        for (let key in data) {
          transformedData.push({
            id: key,
            ...data[key],
          });
        }
        console.log('transformedData', transformedData);
        setSales(transformedData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!sales) {
    return <h1>No sales found</h1>;
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

export default LastSalesPage