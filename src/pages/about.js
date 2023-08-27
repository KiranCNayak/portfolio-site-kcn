import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <h2>About Page</h2>
      <p>Namaskāra&nbsp;🙏</p>
      <p>I am Kiran C Nayak</p>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;
