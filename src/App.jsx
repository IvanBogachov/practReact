import { useEffect, useState } from "react";
import MyComponent from "./components/MyComponent/MyComponent";
import SearchForm from "./components/SearchForm/SearchForm";
import { fetchArticlesWithTopic } from "./articles-api";
import axios from "axios";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   // 1. Оголошуємо асинхронну функцію
  //   async function fetchArticles() {
  //     try {
  //       // 1. Встановлюємо індикатор в true перед запитом
  //       setLoading(true);
  //       // 2. Використовуємо HTTP-функцію
  //       const data = await fetchArticlesWithTopic("react");
  //       setArticles(data);
  //     } catch (error) {
  //       // Встановлюємо стан error в true
  //       setError(true);
  //     } finally {
  //       // 2. Встановлюємо індикатор в false після запиту
  //       setLoading(false);
  //     }
  //   }

  //   // 2. Викликаємо її одразу після оголошення
  //   fetchArticles();
  // }, []);

  return (
    <div>
      <div>
        <h1>Latest articles</h1>
        <SearchForm onSearch={handleSearch} />
        {/* {loading && <Loader />}
        {error && <Error />} */}
        {/* {loading && (
          <p style={{ fontSize: 20 }}>Loading data, please wait...</p>
        )}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )} */}
        <MyComponent articles={articles} />
      </div>
    </div>
  );
}

export default App;
