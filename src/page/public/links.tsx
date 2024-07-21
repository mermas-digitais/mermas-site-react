import React from 'react';

const LinksPage: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <iframe
        src="https://bento.me/mermasdigitais"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="Mermas Digitais"
      ></iframe>
    </div>
  );
};

export default LinksPage;
