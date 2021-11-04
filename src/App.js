import React, { useEffect, useState } from 'react';
const url = 'https://api.github.com/users';
const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // update
    setUsers(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1 className='title'>github api</h1>
      <section className='container two-col'>
        {users.map((person) => {
          const { id, login, avatar_url, html_url } = person;
          return (
            <a href={html_url} target='_blank'>
              <article key={id} className='user'>
                <img src={avatar_url} alt='' />
                <div>
                  <h4>{login}</h4>
                  <hr />
                  <h5>
                    <a href={html_url}>Profile</a>
                  </h5>
                </div>
              </article>
            </a>
          );
        })}
      </section>
    </>
  );
};

export default App;
