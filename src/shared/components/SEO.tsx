import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: React.PropsWithChildren<SEOProps>) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
