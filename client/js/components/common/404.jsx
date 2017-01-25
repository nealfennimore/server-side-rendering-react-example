import React, { PropTypes } from 'react';
import styles from './404.scss';


const _404 = () => {
    return (
        <div className={`row align-center align-middle ${styles._404}`}>
            <main className='column'>
                <h1>404 <small>:(</small></h1>
            </main>
        </div>
    );
};

_404.propTypes = {

};

export default _404;