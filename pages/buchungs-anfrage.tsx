import FormBookingRequest from 'components/FormBookingRequest';
import SEO from 'components/seo';
import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';

const BuchungsAnfrage: NextPage<BuchungsAnfrageProps> = () => {
  return (
    <div>
      <SEO
        title="Buchungsanfrage | Tesla mieten - Itana GmbH"
        description="Sofort eine Anfrage stellen"
      />
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://mobility.itana.de/buchungs-anfrage/"
        />
      </Head>
      <div>
        <FormBookingRequest />
      </div>
    </div>
  );
};

type BuchungsAnfrageProps = {};

export default BuchungsAnfrage;
