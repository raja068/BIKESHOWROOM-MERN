import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Bike Showroom',
  description: 'Unveiling Excellence, Riding Dreams – Your Journey Begins Here',
  keywords: 'Bikes, Accesories',
};

export default Meta;
