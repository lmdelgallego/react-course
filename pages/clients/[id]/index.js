import { useRouter } from 'next/router';

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // Load the project
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: router.query.id,
        clientprojectid: 'project13',
      },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
