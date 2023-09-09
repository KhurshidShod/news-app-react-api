import React, { Component } from "react";
import styles from './Filter.module.css'

export class Filter extends Component {
  render() {
    const { searchNews, setCountry, title } = this.props;
    return (
      <div className={styles.top}>
        <h1>{title}</h1>
        <div className={styles.filter}>
          <input
            type="text"
            name=""
            id="search"
            placeholder="Search"
            onChange={searchNews}
          />
          <select name="" id="" onChange={setCountry}>
            <option value="us" selected>
              United States of America
            </option>
            <option value="ua">Ukraine</option>
            <option value="ru">Russia</option>
            <option value="jp">Japan</option>
            <option value="kr">South Korea</option>
            <option value="ca">Canada</option>
            <option value="fr">France</option>
            <option value="ae">United Arab Amirates</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
