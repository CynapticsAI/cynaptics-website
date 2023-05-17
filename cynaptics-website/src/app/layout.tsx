
import "./globals.css";


import Navbar from "@/components/Navbar";

import Footer from '@/components/Footer'


export const metadata = {
  title: {
    default: "The Cynaptics Club - IIT Indore",
    template: "Cynaptics | %s"
  },
  description: "The Cynaptics Club(AI/ML) - IIT INDORE",
  keywords: ['Next.js', 'React', 'Javascript', 'Artificial Intilligence', 'Machine Learning', 'Indian Institute of Technology Indore', 'IIT INDORE', 'The Cynaptics Club']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  

  return (
    <html lang="en">
      <head>
      <meta property="twitter:image" content={`${process.env.SITE_URL}/images/Logos/Logo.jpg`} />
      <meta property="twitter:title" content="The Cynaptics Club - IIT Indore" />
      <meta property="og:title" content={`${process.env.SITE_URL}/images/Logos/Logo.jpg`} />
      <meta property="twitter:description" content="The Cynaptics Club(AI/ML) - IIT INDORE"/>
      <meta property="og:description" content="The Cynaptics Club(AI/ML) - IIT INDORE" />
        <meta property="og:image" content={`${process.env.SITE_URL}/images/Logos/Logo.jpg`} />
        <meta property="og:image:type" content="jpg" />
        <meta property="og:url" content={process.env.SITE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body >

        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
