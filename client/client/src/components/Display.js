import React from 'react'

export default function Display({ userData }) {
  return (
    <div><h1>{userData.login}</h1>
    <img src={userData.avatar_url} alt="picture of person"/></div>
  )
}
