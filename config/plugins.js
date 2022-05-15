module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 10 * 1024 * 1024 * 1024,
      },
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },
  meilisearch: {
    config: {
      // Your meili host
      host: env("MEILISEARCH_HOST"),
      // Your master key or private key
      apiKey: env("MEILISEARCH_SECRET_KEY"),
    },
  },
  sentry: {
    enabled: env("NODE_ENV") === "production",
    config: {
      dsn: env("SENTRY_DSN"),
      sendMetadata: true,
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      plugin: {
        styles: `--ck-color-editor-base-text:red;`,
      },
      editor: {
        // editor default config
        // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
        // if you need markdown support and output set it to removePlugins: [''],
        // default is removePlugins: ['Markdown'],
        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
        toolbar: {
          items: [
            "paragraph",
            "heading1",
            "heading2",
            "|",
            "bold",
            "italic",
            "fontColor",
            "fontBackgroundColor",
            "fontFamily",
            "underline",
            "fontSize",
            "removeFormat",
            "|",
            "bulletedList",
            "todoList",
            "numberedList",
            "|",
            "alignment",
            "outdent",
            "indent",
            "horizontalLine",
            "|",
            "StrapiMediaLib",
            "insertTable",
            "blockQuote",
            "mediaEmbed",
            "link",
            "highlight",
            "|",
            "htmlEmbed",
            "sourceEditing",
            "code",
            "codeBlock",
            "|",
            "subscript",
            "superscript",
            "strikethrough",
            "specialCharacters",
            "|",
            "heading",
            "fullScreen",
            "undo",
            "redo",
          ],
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
        fontSize: {
          options: [
            9,
            11,
            13,
            "default",
            17,
            19,
            21,
            27,
            35,
            "tiny",
            "small",
            "big",
            "huge",
          ],
          supportAllValues: false,
        },
        fontFamily: {
          options: [
            "default",
            "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
            "Courier New, Courier, monospace",
            "Georgia, serif",
            "Lucida Sans Unicode, Lucida Grande, sans-serif",
            "Tahoma, Geneva, sans-serif",
            "Times New Roman, Times, serif",
            "Trebuchet MS, Helvetica, sans-serif",
            "Verdana, Geneva, sans-serif",
            "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
          ],
          supportAllValues: true,
        },
        fontColor: {
          columns: 5,
          documentColors: 10,
        },
        fontBackgroundColor: {
          columns: 5,
          documentColors: 10,
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        // default language: 'en',
        // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
        image: {
          resizeUnit: "%",
          resizeOptions: [
            {
              name: "resizeImage:original",
              value: null,
              icon: "original",
            },
            {
              name: "resizeImage:25",
              value: "25",
              icon: "small",
            },
            {
              name: "resizeImage:50",
              value: "50",
              icon: "medium",
            },
            {
              name: "resizeImage:75",
              value: "75",
              icon: "large",
            },
          ],
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
            "linkImage",
            "resizeImage:25",
            "resizeImage:50",
            "resizeImage:75",
            "resizeImage:original",
          ],
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
            "tableProperties",
            "toggleTableCaption",
          ],
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
            {
              model: "h1b",
              view: { name: "h1", classes: "ck-heading_h1_b" },
              title: "H1 (border)",
              class: "ck-heading_heading1",
              converterPriority: "high",
            },
            {
              model: "h2b",
              view: { name: "h2", classes: "ck-heading_h2_b" },
              title: "H2 (border)",
              class: "ck-heading_heading2",
              converterPriority: "high",
            },
            {
              model: "h3b",
              view: { name: "h3", classes: "ck-heading_h3_b" },
              title: "H3 (border)",
              class: "ck-heading_heading3",
              converterPriority: "high",
            },
            {
              model: "custom",
              view: { name: "custom", classes: "Heading 1" },
              title: "custom",
              class: "ck-heading_heading3",
              converterPriority: "high",
            },
          ],
        },
      },
    },
  },
});
