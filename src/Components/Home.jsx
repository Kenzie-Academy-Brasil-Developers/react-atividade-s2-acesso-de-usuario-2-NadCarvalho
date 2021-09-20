import React from 'react';
import { Link } from 'react-router-dom'


const Home = ({ members }) => {
  return (
    <div className="home">
      {members.map((member, index) => {
        const url = member.type === 'pj' ? `/company/${member.id}` : `/customer/${member.id}`
        return (<Link key={member.id} to={url}>{member.name}</Link>)
      })}
    </div>
  )
}

export default Home;