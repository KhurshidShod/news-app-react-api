import React, { Component } from "react";
import Layout from "../../components/layout";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NoImage from "../../assets/images/no-image.png";

import styles from "./Sports.module.css";
import request from "../../helpers/request";
import SkeletonCard from "../../components/skeleton-card";
import Filter from "../../components/filter";
import { APIKEY, PAGE, PAGESIZE } from "../../helpers/constants";
import { Link } from "react-router-dom";

export class Sports extends Component {
  state = {
    allData: [],
    data: [],
    search: "",
    page: PAGE,
    pageSize: PAGESIZE,
    category: window.location.pathname.split('/').at(-1),
    apiKey: APIKEY,
    country: "us",
    totalResults: null,
    loading: false,
    url: window.location.pathname.split('/').at(-1)
  };
  async getData() {
    this.setState({ loading: true })
    try {
      const { data } = await request("", {
        params: {
          apiKey: this.state.apiKey,
          country: this.state.country,
          category: this.state.category,
          q: this.state.search,
        },
      });
      const {
        data: { articles },
      } = await request("", {
        params: {
          page: this.state.page,
          pageSize: this.state.pageSize,
          category: this.state.category,
          apiKey: this.state.apiKey,
          country: this.state.country,
          q: this.state.search,
        },
      });
      console.log(data);
      this.setState({
        data: articles,
        allData: data.articles,
        totalResults: data.totalResults,
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false })
    }
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    let { data, page, loading, url } = this.state;
    const pages = Math.ceil(this.state.totalResults / 8);
    const setCountry = (e) => {
      this.setState({ country: e.target.value });
      this.getData();
    };

    const searchNews = (e) => {
      this.setState({ search: e.target.value });
      this.getData();
    };

    const changePage = (pg) => {
      if (pg === "+") {
        this.setState({ page: page + 1 });
      } else if (pg === "-") {
        this.setState({ page: page - 1 });
      } else {
        this.setState({ page: pg });
      }
      this.getData();
    };
    return (
      <Layout>
        <section>
          <div className="container">
            <div className={styles.wrapper}>
            <Filter searchNews={searchNews} title='Sports News' setCountry={setCountry} />
              <div className={styles.content}>
                {loading ? (
                  <React.Fragment>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                  </React.Fragment>
                ) : (
                  data.map((el, inx) => (
                    <Link to={`/sports/${el.title.toLowerCase().split(' ').join('_')}`} className={styles.card} key={inx}>
                      <div className={styles.card__img}>
                        <img
                          src={el.urlToImage ? el.urlToImage : NoImage}
                          alt="No image"
                        />
                      </div>
                      <div className={styles.card__text}>
                        <h1>{el.title}</h1>
                        <div className={styles.card__bottom}>
                          <p>{el.author ? el.author : "Anonymous"}</p>
                          <p>3 Days Ago</p>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
              <div className={styles.pagination}>
                {this.state.page === 1 ? (
                  <button disabled>
                    <FiChevronLeft size={30} />
                  </button>
                ) : (
                  <button onClick={() => changePage("-")}>
                    <FiChevronLeft size={30} />
                  </button>
                )}
                {Array(pages)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <button
                        key={idx}
                        className={`${
                          page === idx + 1 ? styles.active__page : null
                        }`}
                        onClick={() => changePage(idx + 1)}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                {this.state.page === pages ? (
                  <button disabled>
                    <FiChevronRight size={30} />
                  </button>
                ) : (
                  <button onClick={() => changePage("+")}>
                    <FiChevronRight size={30} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Sports;
