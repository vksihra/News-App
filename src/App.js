import { useEffect, useState } from "react";
import Navnews from "./components/Navnews";
import axios from "axios";
import Newscontent from "./components/newscontent/Newscontent";
import apikey from "./data/apikey";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsapi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      setnewsArray(news.data.articles);
      setnewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsapi();
  }, [newsResults, category, loadmore]);

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
