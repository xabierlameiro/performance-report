const config = {
  "chart": {
    "container": "#OrganiseChart-big-commpany",
    "levelSeparation": 40,
    "siblingSeparation": 20,
    "subTeeSeparation": 30,
    "rootOrientation": "NORTH",
    "nodeAlign": "BOTTOM",
    "connectors": {
      "type": "step",
      "style": {
        "stroke-width": 2
      }
    },
    "node": {
      "HTMLclass": "big-commpany"
    }
  },
  "nodeStructure": {
    "text": {
      "name": "xabierlameiro.com"
    },
    "HTMLclass": "domain",
    "drawLineThrough": true,
    "collapsable": true,
    "connectors": {
      "style": {
        "stroke": "blue",
        "arrow-end": "oval-wide-long"
      }
    },
    "children": [
      {
        "text": {
          "name": "home"
        },
        "link": {
          "href": "../home.html"
        },
        "stackChildren": true,
        "connectors": {
          "style": {
            "stroke": "#8080FF",
            "arrow-end": "block-wide-long"
          }
        }
      },
      {
        "text": {
          "name": "blog"
        },
        "stackChildren": true,
        "connectors": {
          "style": {
            "stroke": "#8080FF",
            "arrow-end": "block-wide-long"
          }
        },
        "children": [
          {
            "text": {
              "name": "error"
            },
            "drawLineThrough": true,
            "collapsable": true,
            "stackChildren": true,
            "connectors": {
              "stackIndent": 30,
              "style": {
                "stroke": "#E3C61A",
                "arrow-end": "block-wide-long"
              }
            },
            "children": [
              {
                "text": {
                  "name": "solve-address-in-use-error"
                },
                "link": {
                  "href": "../blog-error-solve-address-in-use-error.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "npm-token-solution-error"
                },
                "link": {
                  "href": "../blog-error-npm-token-solution-error.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "uncaught-error-minified-react-error"
                },
                "link": {
                  "href": "../blog-error-uncaught-error-minified-react-error.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              }
            ]
          },
          {
            "text": {
              "name": "javascript"
            },
            "drawLineThrough": true,
            "collapsable": true,
            "stackChildren": true,
            "connectors": {
              "stackIndent": 30,
              "style": {
                "stroke": "#E3C61A",
                "arrow-end": "block-wide-long"
              }
            },
            "children": [
              {
                "text": {
                  "name": "lighthouse-reporting-automation"
                },
                "link": {
                  "href": "../blog-javascript-lighthouse-reporting-automation.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              }
            ]
          },
          {
            "text": {
              "name": "nextjs"
            },
            "drawLineThrough": true,
            "collapsable": true,
            "stackChildren": true,
            "connectors": {
              "stackIndent": 30,
              "style": {
                "stroke": "#E3C61A",
                "arrow-end": "block-wide-long"
              }
            },
            "children": [
              {
                "text": {
                  "name": "dark-theme"
                },
                "link": {
                  "href": "../blog-nextjs-dark-theme.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "continuous-integration-with-github-actions-workflow"
                },
                "link": {
                  "href": "../blog-nextjs-continuous-integration-with-github-actions-workflow.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "counter-for-github-stars-repository"
                },
                "link": {
                  "href": "../blog-nextjs-counter-for-github-stars-repository.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "make-a-views-counter-with-google-analytics"
                },
                "link": {
                  "href": "../blog-nextjs-make-a-views-counter-with-google-analytics.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "measure-nextjs-memory-leak"
                },
                "link": {
                  "href": "../blog-nextjs-measure-nextjs-memory-leak.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "nextjs-memory-leak-in-production"
                },
                "link": {
                  "href": "../blog-nextjs-nextjs-memory-leak-in-production.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "translate-slugs-web-pages"
                },
                "link": {
                  "href": "../blog-nextjs-translate-slugs-web-pages.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              }
            ]
          },
          {
            "text": {
              "name": "react"
            },
            "drawLineThrough": true,
            "collapsable": true,
            "stackChildren": true,
            "connectors": {
              "stackIndent": 30,
              "style": {
                "stroke": "#E3C61A",
                "arrow-end": "block-wide-long"
              }
            },
            "children": [
              {
                "text": {
                  "name": "how-document-my-react-components-with-jsdoc"
                },
                "link": {
                  "href": "../blog-react-how-document-my-react-components-with-jsdoc.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "filter-for-positions"
                },
                "link": {
                  "href": "../blog-react-filter-for-positions.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "publish-report-testing-react"
                },
                "link": {
                  "href": "../blog-react-publish-report-testing-react.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "deploying-my-storybook-is-very-simple"
                },
                "link": {
                  "href": "../blog-react-deploying-my-storybook-is-very-simple.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              }
            ]
          }
        ]
      },
      {
        "text": {
          "name": "legal"
        },
        "stackChildren": true,
        "connectors": {
          "style": {
            "stroke": "#8080FF",
            "arrow-end": "block-wide-long"
          }
        },
        "children": [
          {
            "text": {
              "name": "cookies-policy"
            },
            "link": {
              "href": "../legal-cookies-policy.html"
            },
            "drawLineThrough": true,
            "collapsable": true,
            "stackChildren": true,
            "connectors": {
              "stackIndent": 30,
              "style": {
                "stroke": "#E3C61A",
                "arrow-end": "block-wide-long"
              }
            }
          },
          {
            "text": {
              "name": "legal-notice"
            },
            "link": {
              "href": "../legal-legal-notice.html"
            },
            "drawLineThrough": true,
            "collapsable": true,
            "stackChildren": true,
            "connectors": {
              "stackIndent": 30,
              "style": {
                "stroke": "#E3C61A",
                "arrow-end": "block-wide-long"
              }
            }
          },
          {
            "text": {
              "name": "privacy-policy"
            },
            "link": {
              "href": "../legal-privacy-policy.html"
            },
            "drawLineThrough": true,
            "collapsable": true,
            "stackChildren": true,
            "connectors": {
              "stackIndent": 30,
              "style": {
                "stroke": "#E3C61A",
                "arrow-end": "block-wide-long"
              }
            }
          }
        ]
      }
    ]
  }
}