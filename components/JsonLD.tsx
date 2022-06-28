import Head from 'next/head';
import React from 'react';

interface Props {
  jsonld: object;
}

export const JsonLD = ({jsonld}: Props) => {
  const str = JSON.stringify(jsonld);
  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: str,
          }}
        />
      </Head>
    </div>
  );
};
