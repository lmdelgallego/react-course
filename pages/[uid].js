import React from 'react'

const UserIdPage = (props) => {
  return (
    <div>{props.id}</div>
  )
}

export default UserIdPage

export const getServerSideProps = async (context) => {
  const {params} = context;
  const userId = params.uid
  return {
    props: {
      id: 'userId-'+userId
    }
  }
}