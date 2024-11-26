import { Html } from '@elysiajs/html';

import CustomMetaTag from '../components/custom-meta-tag';

export default function MainLayout({
  title,
  description,
  image,
  children,
}: {
  title?: string;
  description?: string;
  image?: string;
  children: JSX.Element;
}) {
  return (
    <html>
      <head>
        <title>I don't have spotify</title>
        <meta charset='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#000000' />

        <meta
          name='description'
          content='Effortlessly convert Spotify links to your preferred streaming service'
        />
        <meta
          name='keywords'
          content='Spotify,YouTube,Deezer,Apple Music,Tidal,SoundCloud,converter,search,listen'
        />

        <CustomMetaTag property='og:type' content='website' />
        <CustomMetaTag property='og:site_name' content="I Don't Have Spotify" />
        <CustomMetaTag
          property='og:title'
          content={title ?? "I Don't Have Spotify"}
        />
        <CustomMetaTag
          property='og:description'
          content={
            description ??
            'Effortlessly convert Spotify links to your preferred streaming service'
          }
        />
        <CustomMetaTag
          property='og:image:alt'
          content="I Don't Have Spotify favicon"
        />

        {/* <link href="/assets/css/fontawesome.css" rel="stylesheet" /> */}
        <link href='/assets/index.min.css' rel='stylesheet' />

        {/* <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" /> */}

        <script src='https://unpkg.com/htmx.org@2.0.3'></script>
      </head>

      <body class='h-screen bg-black font-light text-white'>{children}</body>

      {/* <script
        defer
        src='https://umami.sjdonado.com/script.js'
        data-website-id='da89a7a2-dd17-4c7f-b7ff-de28a7046a0e'
      /> */}

      <script src='assets/app.js' />
    </html>
  );
}
