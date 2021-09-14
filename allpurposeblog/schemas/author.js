const author = {
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "bio",
      type: "richText",
      title: "Bio",
    },
    {
      name: "role",
      type: "string",
      title: "Role",
    },
    {
      name: "authorImage",
      type: "image",
      title: "Author Image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
    },
  ],
};

export default author;
