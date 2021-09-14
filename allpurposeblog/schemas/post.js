const post = {
  title: "Post",
  type: "document",
  name: "post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
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
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author",
        },
      ],
    },
    {
      name: "body",
      type: "richText",
      title: "Content",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 25,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      options: {
        maxLength: 50,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    // {
    //   title: "Categories", // new
    //   name: "categories",
    //   type: "array",
    //   of: [{ type: "string" }],
    //   options: {
    //     layout: "tags",
    //     list: [
    //       { value: "Local", title: "Local" },
    //       { value: "Politics", title: "Politics" },
    //       { value: "Economy", title: "Economy" },
    //       { value: "Corruption", title: "Corruption" },
    //       { value: "Border", title: "Border" },
    //       { value: "Power Grab", title: "Power Grabs" },
    //       { value: "COVID", title: "COVID" },
    //       { value: "International", title: "International" },
    //       { value: "Citizen Author", title: "Anonymous" },
    //       { value: "China", title: "China" },
    //       { value: "Antifa", title: "Antifa" },
    //       { value: "Terrorism", title: "Terrorism" },
    //       { value: "Policy", title: "Policy" },
    //       { value: "RINO Watch", title: "RINO Watch" },
    //       { value: "Commie Watch", title: "Commie Watch" },
    //     ],
    //   },
    // },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
    },
    {
      name: "date",
      title: "Publish Date",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
      },
    },
  ],
};
export default post;
