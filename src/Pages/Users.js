import React from 'react';

export function User({ user }) {
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.id}</p>
    </div>
  )
}