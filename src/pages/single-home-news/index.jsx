import React, { Component } from "react";
import Layout from "../../components/layout";

import styles from "./SingleNews.module.css";
import request from "../../helpers/request";
import { APIKEY, PAGE, PAGESIZE } from "../../helpers/constants";

export class SingleNews extends Component {
  state = {
    allData: [],
    data: [],
    search: "",
    page: PAGE,
    urlId: window.location.pathname.split("/").at(-1),
    urlCat: window.location.pathname.split("/").at(-2),
    pageSize: PAGESIZE,
    category: window.location.pathname.split("/").at(-2) === 'all' ? "general" : window.location.pathname.split("/").at(-2),
    apiKey: APIKEY,
    country: "us",
    totalResults: null,
    loading: false,
  };
  async getData() {
    this.setState({ loading: true });
    console.log(window.location.pathname.split("/").at(-2))
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
          category: this.state.category,
          apiKey: this.state.apiKey,
          country: this.state.country,
        },
      });
      console.log(this.state.urlId.split('_').join(' '))
      console.log(articles);
      this.setState({
        data: articles.find(art => art.title.toLowerCase().split(' ').join('') === this.state.urlId.split('_').join('')),
        allData: data.articles,
        totalResults: data.totalResults,
      });
      console.log(articles[this.state.urlId - 1])
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    return (
      <Layout>
        <section className={styles.single__top}>
          <div className="container">
            <div className={styles.singleTopWrapper}>
              <p>Published at {data.publishedAt}</p>
              <h1>
                {data.title}
              </h1>
              <div className={styles.author}>
                {data.author}
                </div>
            </div>
          </div>
        </section>
        <section className={styles.single__bottom}>
          <div className="container">
            <div className={styles.singleBottomWrapper}>
              <p>
                {data.description} <br /><br /> {data.content}
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default SingleNews;
