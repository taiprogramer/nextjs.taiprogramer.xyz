/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.gravatar.com"],
  },
  i18n: {
    locales: ["en-US", "vi"],
    defaultLocale: "en-US",
  },
};
