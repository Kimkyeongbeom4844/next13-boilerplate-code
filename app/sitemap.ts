import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.DOMAIN}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.DOMAIN}/sub`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.DOMAIN}/store`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.DOMAIN}/fetch`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.DOMAIN}/image`,
      lastModified: new Date(),
    },
  ];
}
