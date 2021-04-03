import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import BrightTitle from '../components/bright-title';

const IndexPage = () => (
    <Layout>
        <BrightTitle>Hello world!</BrightTitle>
        <Link to="/blog/">Go to blog</Link>
    </Layout>
);

export default IndexPage;
