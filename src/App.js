import React from 'react';
import './App.css';

function App() {
    return (
        <main>
            <article>
                <h2>People</h2>
                <ul>
                    <li><a href={"https://beta.yearn.finance"} target={"_blank"}
                           rel="noopener noreferrer">Yearn new beta site</a></li>
                    <li><a href={"https://yearn.finance"} target={"_blank"}
                           rel="noopener noreferrer">Yearn vaults current site for a bit longer</a></li>
                    <li><a href={"https://yearn.fi"} target={"_blank"}
                           rel="noopener noreferrer">The other UI for Yearn (unofficial but good)</a></li>
                </ul>
            </article>
            <article>
                <h2>Partners</h2>
                <ul>
                    <li>Ecosystem partners</li>
                    <li>Fee-sharing partners</li>
                </ul>
            </article>
            <article>
                <h2>Contributors</h2>
                <ul>
                    <li>Github open issues</li>
                    <li>Bounties</li>
                    <li>New contributor registration</li>
                    <li>Pool of ideas</li>
                    <li>Coordinape (for existing contributors)</li>
                </ul>
            </article>
            <article>
                <ul>
                    <h2>Brand assets</h2>
                    <li>Yearn mini guidelines and brand assets</li>s
                </ul>
            </article>
        </main>
    );
}

export default App;
