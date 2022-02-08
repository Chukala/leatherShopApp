import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ScrollView } from 'react-native';

/** Higher order component, it displays other child components */
const Layout = (props) => {
    return(
        <ScrollView>
          <Header props/>
            { props.children }
          <Footer />
        </ScrollView>
    );
}

export default Layout;