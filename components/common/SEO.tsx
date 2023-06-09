import Head from 'next/head';

interface ISEO {
  data: {
    title: string;
    description: string;
    url: string;
    thumbnailUrl: string;
  };
}

const SEO: React.FC<ISEO> = ({ data }) => {
  return (
    <Head>
      <title>Next Blog | Mark Study</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.url} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content={data.thumbnailUrl}></meta>
    </Head>
  );
};

export { SEO };
