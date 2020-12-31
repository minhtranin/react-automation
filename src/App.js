import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

function App({ articles }) {
    const defaultArticles = articles.sort((a, b) => b.upvotes - a.upvotes);
    const [atc, setAtc] = useState(defaultArticles);

    const handleUpvote = () => {
        const rs = atc.sort((a, b) => b.upvotes - a.upvotes);
        setAtc([...rs]);
    };

    const handleRecent = () => {
        const rs = atc.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        console.log(rs);
        setAtc([...rs]);
    };

    return (
        <div className="App">
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button
                    data-testid="most-upvoted-link"
                    className="small"
                    onClick={handleUpvote}
                >
                    Most Upvoted
                </button>
                <button
                    data-testid="most-recent-link"
                    className="small"
                    onClick={handleRecent}
                >
                    Most Recent
                </button>
            </div>
            <Articles articles={atc}/>
        </div>
    );

}

export default App;
