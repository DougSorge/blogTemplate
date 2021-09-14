import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "d5iw0oly",
  dataset: "production",
  useCdn: true,
});
