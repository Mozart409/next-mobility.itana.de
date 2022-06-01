import React from 'react';
import {NextPage} from 'next';
import FormBookingRequest from 'components/FormBookingRequest';
import SEO from 'components/seo';
import Head from 'next/head';

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
