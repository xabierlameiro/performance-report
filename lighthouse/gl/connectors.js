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
          "href": "../gl/home.html"
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
                  "name": "arranxar-direccion-en-uso-erro"
                },
                "link": {
                  "href": "../gl/gl-blog-error-arranxar-direccion-en-uso-erro.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "npm-token-solucion-erro"
                },
                "link": {
                  "href": "../gl/gl-blog-error-npm-token-solucion-erro.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "erro-non-detectado-react-minificado"
                },
                "link": {
                  "href": "../gl/gl-blog-error-erro-non-detectado-react-minificado.html"
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
                  "name": "automatizacion-dos-informes-de-lighthouse"
                },
                "link": {
                  "href": "../gl/gl-blog-javascript-automatizacion-dos-informes-de-lighthouse.html"
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
                  "name": "tema-escuro"
                },
                "link": {
                  "href": "../gl/gl-blog-nextjs-tema-escuro.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "integracion-continua-con-github-actions-workflow"
                },
                "link": {
                  "href": "../gl/gl-blog-nextjs-integracion-continua-con-github-actions-workflow.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "contador-de-estrelas-de-github"
                },
                "link": {
                  "href": "../gl/gl-blog-nextjs-contador-de-estrelas-de-github.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "facer-un-contador-de-vistas-con-google-analytics"
                },
                "link": {
                  "href": "../gl/gl-blog-nextjs-facer-un-contador-de-vistas-con-google-analytics.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "medir-fuga-de-memoria-en-nextjs"
                },
                "link": {
                  "href": "../gl/gl-blog-nextjs-medir-fuga-de-memoria-en-nextjs.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "fuga-de-memoria-nextjs-en-producion"
                },
                "link": {
                  "href": "../gl/gl-blog-nextjs-fuga-de-memoria-nextjs-en-producion.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "como-traducir-as-urls"
                },
                "link": {
                  "href": "../gl/gl-blog-nextjs-como-traducir-as-urls.html"
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
                  "name": "documentar-os-meus-compoñentes-de-react"
                },
                "link": {
                  "href": "../gl/gl-blog-react-documentar-os-meus-compoñentes-de-react.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "filtro-para-posicions"
                },
                "link": {
                  "href": "../gl/gl-blog-react-filtro-para-posicions.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "publicar-informe-probas-react"
                },
                "link": {
                  "href": "../gl/gl-blog-react-publicar-informe-probas-react.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "despregar-storybook-facilmente"
                },
                "link": {
                  "href": "../gl/gl-blog-react-despregar-storybook-facilmente.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              }
            ]
          }
        ]
      }
    ]
  }
}