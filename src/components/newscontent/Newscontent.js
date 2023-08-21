import { Container } from "@mui/material";
import React from "react";
import "./Newscontent.css";
import NewsCard from "../Newscard/NewsCard";

const Newscontent = ({ newsArray, newsResults, loadmore, setLoadmore }) => {
  return (
    <Container maxWidth="md">
      <div>
       
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadmore <=  newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadmore(loadmore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Newscontent;
