(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(a,t,s){a.exports=s.p+"assets/img/harbor_login_page.703b5e90.png"},212:function(a,t,s){a.exports=s.p+"assets/img/harbor_projects.338db00b.png"},226:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"install-harbor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-harbor"}},[a._v("#")]),a._v(" Install Harbor")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/cncf/artwork/c33a8386bce4eabc36e1d4972e0996db4630037b/projects/harbor/horizontal/color/harbor-horizontal-color.svg?sanitize=true",alt:"Harbor logo",title:"Harbor logo"}})]),a._v(" "),e("p",[a._v("Label Harbor namespace and copy there the secret with certificates signed by\nLet's Encrypt certificate:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("kubectl create namespace harbor\nkubectl label namespace harbor "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("kubed\n")])])]),e("p",[a._v('Create Istio Gateways and VirtualServices to allow accessing Harbor from\n"outside":')]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" EOF "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" kubectl apply -f -\napiVersion: networking.istio.io/v1alpha3\nkind: Gateway\nmetadata:\n  name: harbor-gateway\n  namespace: harbor\nspec:\n  selector:\n    istio: ingressgateway\n  servers:\n  - port:\n      number: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n      name: http-harbor\n      protocol: HTTP\n    hosts:\n    - harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n  - port:\n      number: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("\n      name: https-harbor\n      protocol: HTTPS\n    hosts:\n    - harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n    - notary."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n    tls:\n      mode: PASSTHROUGH\n---\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: harbor-http-virtual-service\n  namespace: harbor\nspec:\n  hosts:\n  - harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n  gateways:\n  - harbor-gateway\n  http:\n  - match:\n    - port: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n    route:\n    - destination:\n        host: harbor.harbor.svc.cluster.local\n        port:\n          number: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n---\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: harbor-https-virtual-service\n  namespace: harbor\nspec:\n  hosts:\n  - harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n  gateways:\n  - harbor-gateway\n  tls:\n  - match:\n    - port: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("\n      sniHosts:\n      - harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n    route:\n    - destination:\n        host: harbor.harbor.svc.cluster.local\n        port:\n          number: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("\n---\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: harbor-notary-virtual-service\n  namespace: harbor\nspec:\n  hosts:\n  - notary."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n  gateways:\n  - harbor-gateway\n  tls:\n  - match:\n    - port: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("\n      sniHosts:\n      - notary."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n    route:\n    - destination:\n        host: harbor.harbor.svc.cluster.local\n        port:\n          number: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4443")]),a._v("\nEOF\n")])])]),e("p",[a._v("Add Harbor Helm repository:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("helm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" harbor https://helm.goharbor.io\nhelm repo update\n")])])]),e("p",[a._v("Install Harbor using Helm:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("helm "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" harbor harbor/harbor --namespace harbor --version v1.2.3 --wait "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --set expose.tls.enabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --set expose.tls.secretName"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ingress-cert-"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${LETSENCRYPT_ENVIRONMENT}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --set expose.type"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("clusterIP "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --set "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("externalURL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --set "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("harborAdminPassword")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("admin "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --set persistence.enabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),e("p",[a._v("Output:")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("NAME: harbor\nLAST DEPLOYED: Fri Dec 27 10:54:23 2019\nNAMESPACE: harbor\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nPlease wait for several minutes for Harbor deployment to complete.\nThen you should be able to visit the Harbor portal at https://harbor.mylabs.dev.\nFor more details, please visit https://github.com/goharbor/harbor.\n")])])]),e("p",[a._v("Open the "),e("a",{attrs:{href:"https://harbor.mylabs.dev",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://harbor.mylabs.dev"),e("OutboundLink")],1),a._v(":")]),a._v(" "),e("p",[e("img",{attrs:{src:s(211),alt:"Harbor login page",title:"Harbor login page"}})]),a._v(" "),e("p",[a._v("Log in:")]),a._v(" "),e("ul",[e("li",[a._v("User: "),e("code",[a._v("admin")])]),a._v(" "),e("li",[a._v("Password: "),e("code",[a._v("admin")])])]),a._v(" "),e("p",[a._v("You should see the Web UI:")]),a._v(" "),e("p",[e("img",{attrs:{src:s(212),alt:"Harbor",title:"Harbor"}})]),a._v(" "),e("p",[a._v("Create new robot account for "),e("code",[a._v("library")]),a._v(" project:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HARBOR_ROBOT_TOKEN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s -k -u "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"admin:admin"')]),a._v(" -X POST -H "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v('/api/projects/1/robots"')]),a._v(" -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("name"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("myrobot"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("description"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("Robot account with Push/Pull access to library project"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("access"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(": [\n    {\n      "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("resource"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("/project/1/repository"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(",\n      "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("action"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("push"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v('\n    }\n  ]\n}"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq -r "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('".token"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${HARBOR_ROBOT_TOKEN}")]),a._v("\n")])])]),e("p",[a._v("Output:")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("eyJhbGciO .... oOFJvwidsQ\n")])])]),e("p",[a._v('Enable automated vulnerability scan after each "image push" to the project\n'),e("code",[a._v("library")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s -k -u "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"admin:admin"')]),a._v(" -X PUT "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v('/api/projects/1"')]),a._v(" -H  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("metadata"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(": {\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("auto_scan"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("true"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v('\n  }\n}"')]),a._v("\n")])])]),e("p",[a._v("Test Harbor functionality by uploading docker image (optional):")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${LETSENCRYPT_ENVIRONMENT}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"staging"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SSL_CERT_FILE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v("/tmp/fakelerootx1.pem\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n\ndocker pull gcr.io/kuar-demo/kuard-amd64:blue\n\ndocker tag gcr.io/kuar-demo/kuard-amd64:blue harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("/library/kuard-amd64:blue\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HARBOR_ROBOT_TOKEN")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" docker login --username "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"robot\\'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$myrobot")]),a._v('"')]),a._v(" --password-stdin harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\ndocker push harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("/library/kuard-amd64:blue\n\ndocker tag gcr.io/kuar-demo/kuard-amd64:blue harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("/library/kuard-amd64:blue2\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" admin "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" docker login --username admin --password-stdin harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOCKER_CONTENT_TRUST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOCKER_CONTENT_TRUST_SERVER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://notary."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mypassphrase123"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOCKER_CONTENT_TRUST_ROOT_PASSPHRASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rootpassphrase123"')]),a._v("\ndocker push harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("/library/kuard-amd64:blue2\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" DOCKER_CONTENT_TRUST\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" SSL_CERT_FILE\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);