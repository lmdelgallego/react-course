function UserProfilePage(props) {
  return (
    <div>{props.username}</div>
  )
}

export default UserProfilePage

export async function getServerSideProps(context) {
  return {
    props: {
      username: 'Luis Miguel'
    }
  };
}