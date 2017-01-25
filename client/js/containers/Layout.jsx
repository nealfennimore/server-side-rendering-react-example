import React, {Component, PropTypes} from 'react';
import Navigation from 'components/global/Navigation';
import Footer from 'components/global/Footer';

import styles from './Layout.scss';

export default class Layout extends Component {
    inverse(){
        const { location: {pathname} } = this.props;
        return pathname === '/' ? 'inverse' : '';
    }
    render() {
        return (
            <div className={`${styles.container} ${this.inverse()}`}>
                <Navigation />
                { this.props.children }
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
