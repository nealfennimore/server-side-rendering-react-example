import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { fetchHomeData } from 'actions/home';

import styles from './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className={`${styles.home} row align-middle align-center`}>
                <div className='column small-10'>

                </div>
            </div>
        );
    }
}

Home.fetchData = ({store}) => store.dispatch(fetchHomeData());

Home.propTypes = {

};
