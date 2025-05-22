import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us" style={{ padding: '2rem', maxWidth: 1280, margin: 'auto' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '1rem' }}>About Us</h2>
      <div
        className="cards"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div className="card" style={{ flex: '1 1 30%', minWidth: 280 }}>
          <img
            src="/images/community.jpg" // Replace with your actual image path or URL
            alt="Build Your Communities"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
          />
          <h3 style={{ fontWeight: 'bold' }}>Build Your Communities</h3>
          <p style={{ color: '#888' }}>Anything you want, every skill you need</p>
        </div>

        <div className="card" style={{ flex: '1 1 30%', minWidth: 280, textAlign: 'center' }}>
          <img
            src="/images/experts.png" // Replace with your actual image path or URL
            alt="Learn From The Experts"
            style={{ width: '100%', maxWidth: 300, margin: '0 auto 1rem' }}
          />
          <h3 style={{ fontWeight: 'bold' }}>Learn From The Experts</h3>
          <p style={{ color: '#888' }}>Have verified users share their knowledge and experience</p>
        </div>

        <div className="card" style={{ flex: '1 1 30%', minWidth: 280 }}>
          <img
            src="/images/compete.jpg" // Replace with your actual image path or URL
            alt="Compete Against Others"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
          />
          <h3 style={{ fontWeight: 'bold' }}>Compete Against Others</h3>
          <p style={{ color: '#888' }}>Gamify your experience, topple the leaderboards</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;