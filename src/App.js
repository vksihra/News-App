import { useEffect, useState } from "react";
import Navnews from "./components/Navnews";
import Newscontent from "./components/newscontent/Newscontent";
import apikey from "./data/apikey";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsapi = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      const data = await response.json();
      setNewsArray(data.articles);
      setNewsResults(data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsapi();
  }, [category, loadmore]);

  return (
    <div className="App">
      <Navnews setCategory={setCategory} />
      <Newscontent
        loadmore={loadmore}
        setLoadmore={setLoadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  );
}

export default App;
