import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // when user visits root
        destination: "/en/home", // default locale (English)
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
