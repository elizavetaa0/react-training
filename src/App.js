import React, { useEffect, useState } from 'react';
import './index.scss';
import { Collection } from './Collection';

const cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
];

const BASE_URL = 'https://66db0344f47a05d55be6c834.mockapi.io/photos';

function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const category = categoryId ? `category=${categoryId}`: '';

    fetch(`${BASE_URL}?page=${page}&limit=3&${category}`)
    .then((res) => res.json())
    .then((json) => {
      setCollections(json);
    })
    .catch((err) => {
      console.error(err);
      alert('Ошибка получения данных');
    })
    .finally(() => setLoading(false))
  }, [categoryId], page);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, index) => (
            <li
              onClick={() => setCategoryId(index)}
              className={categoryId === index ? 'active' : ''}
              key={obj.name}
            >{obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoading ? (<h2>Идет загрузка...</h2>) : (
          collections.filter((obj) => 
            obj.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
          ).map((obj, index) => (
            <Collection
              key={index}
              name={obj.name}
              images={obj.photos}
            />
          ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, i) => (
          <li
            className={page === (i + 1) ? 'active' : ''}
            onClick={() => setPage(i + 1)}
          >{i + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
