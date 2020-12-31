import React from 'react';

function Articles({ articles }) {

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                {
                    articles.map(e => {
                        return (
                            <tbody>
                            <tr data-testid="article" key="article-index">
                                <td data-testid="article-title">{e.title}</td>
                                <td data-testid="article-upvotes">{e.upvotes}</td>
                                <td data-testid="article-date">{e.date}</td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    );

}

export default Articles;
