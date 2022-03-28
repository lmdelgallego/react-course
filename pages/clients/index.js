import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    {
      name: 'Maximilian',
      id: 'max',
    },
    {
      name: 'Manuel',
      id: 'manu',
    },
    {
      name: 'Luis Miguel',
      id: 'luismi',
    },
  ];

  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id} test-id={`link-client-${client.id}`}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
