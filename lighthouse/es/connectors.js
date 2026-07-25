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
          "href": "../es/home.html"
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
                  "name": "resolver-direccion-en-uso-error"
                },
                "link": {
                  "href": "../es/es-blog-error-resolver-direccion-en-uso-error.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "npm-token-solucion-error"
                },
                "link": {
                  "href": "../es/es-blog-error-npm-token-solucion-error.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "error-no-detectado-react-minificado"
                },
                "link": {
                  "href": "../es/es-blog-error-error-no-detectado-react-minificado.html"
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
                  "name": "automatizacion-de-informes-de-lighthouse"
                },
                "link": {
                  "href": "../es/es-blog-javascript-automatizacion-de-informes-de-lighthouse.html"
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
                  "name": "tema-oscuro"
                },
                "link": {
                  "href": "../es/es-blog-nextjs-tema-oscuro.html"
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
                  "href": "../es/es-blog-nextjs-integracion-continua-con-github-actions-workflow.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "contador-de-estrellas-de-github"
                },
                "link": {
                  "href": "../es/es-blog-nextjs-contador-de-estrellas-de-github.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "hacer-un-contador-de-vistas-con-google-analytics"
                },
                "link": {
                  "href": "../es/es-blog-nextjs-hacer-un-contador-de-vistas-con-google-analytics.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "medir-fuga-de-memoria-nextjs"
                },
                "link": {
                  "href": "../es/es-blog-nextjs-medir-fuga-de-memoria-nextjs.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "fuga-de-memoria-nextjs-en-produccion"
                },
                "link": {
                  "href": "../es/es-blog-nextjs-fuga-de-memoria-nextjs-en-produccion.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "como-traducir-las-urls"
                },
                "link": {
                  "href": "../es/es-blog-nextjs-como-traducir-las-urls.html"
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
                  "name": "documentar-mis-componentes-de-react"
                },
                "link": {
                  "href": "../es/es-blog-react-documentar-mis-componentes-de-react.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "filtro-para-posiciones"
                },
                "link": {
                  "href": "../es/es-blog-react-filtro-para-posiciones.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "publicar-reporte-pruebas-react"
                },
                "link": {
                  "href": "../es/es-blog-react-publicar-reporte-pruebas-react.html"
                },
                "drawLineThrough": true,
                "collapsable": true,
                "stackChildren": true
              },
              {
                "text": {
                  "name": "desplegar-storybook-facilmente"
                },
                "link": {
                  "href": "../es/es-blog-react-desplegar-storybook-facilmente.html"
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
              "href": "../es/es-legal-cookies-policy.html"
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
              "href": "../es/es-legal-legal-notice.html"
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
              "href": "../es/es-legal-privacy-policy.html"
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