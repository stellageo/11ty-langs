export const homePageEL = `query NewQuery {
    pageBy(uri: "/arxiki") {
      title
      status
      language {
        code
      }
      editorBlocks(flat: false) {
        clientId
        ... on CoreGroup {
          anchor
          innerBlocks {
            ... on CoreHeading {
              name
              attributes {
                content
                level
              }
            }
            ... on CoreVideo {
              name
              attributes {
                src
              }
            }
            ... on CoreParagraph {
              name
              attributes {
                content
              }
            }
            ... on CoreImage {
              name
              attributes {
                src
              }
            }
            ... on CoreColumns {
              name
              innerBlocks {
                ... on CoreColumn {
                  innerBlocks {
                    ... on CoreButton {
                      name
                      attributes {
                        url
                      }
                    }
                    ... on CoreParagraph {
                      name
                      attributes {
                        content
                      }
                    }
                    ... on CoreHeading {
                      name
                      attributes {
                        content
                        level
                      }
                    }
                    ... on CoreImage {
                      name
                      attributes {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;
