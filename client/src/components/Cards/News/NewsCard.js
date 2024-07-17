import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import "./NewsCard.css";

function NewsCard() {
  const itemsPerPage = 2;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [NewsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch news data from the API endpoint
    axios.get("http://localhost:8080/api/news") // Update the endpoint URL
      .then((response) => {
        setNewsData(response.data); // Set the fetched news data in state
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => {
      const nextVisibleItems = prevVisibleItems + itemsPerPage;
      return Math.min(nextVisibleItems, NewsData.length);
    });
  };

  const slideInFromLeftVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideInFromRightVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }

    console.log("inView", inView);
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <h1 className="newsHeading">Recent News</h1>
        <div className="newsContainer">
        {NewsData.slice(NewsData.length - visibleItems, NewsData.length).reverse().map((newsDetail, index) => {
            const animationVariants =
              index % 2 === 0
                ? slideInFromLeftVariants
                : slideInFromRightVariants;

            return (
              <motion.div
                className="newsCard"
                key={index}
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="newsCardImage">
                  <img src={newsDetail.imageUrl} alt="news" />
                </div>
                <div className="newsCardText">
                  <h3 className="newTitle">{newsDetail.title}</h3>
                  <p>{newsDetail.description}</p>
                  <Link to={`/news/${newsDetail._id}`} className="readMoreLink">
                    Read More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="loadMoreWrapper">
          {visibleItems < NewsData.length && (
            <button className="loadMoreButton" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default NewsCard;
