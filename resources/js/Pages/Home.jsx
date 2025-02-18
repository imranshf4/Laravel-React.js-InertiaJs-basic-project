import React from 'react';
import Layout from '../Layouts/Layout'; // Ensure this is the correct path

const Home = () => {
  return (
    <Layout>
        <div className="max-w-screen-2xl mx-auto items-center container px-5 py-20 bg-gray-200">
          <h1>Welcome to the Home Page</h1>
          <p>This is the home page content.</p>
        </div>
    </Layout>
  );
}

export default Home;
