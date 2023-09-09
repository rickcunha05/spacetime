exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 1134:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 4744:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6203))

/***/ }),

/***/ 5720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Roboto_Flex","arguments":[{"subsets":["latin"],"variable":"--font-roboto"}],"variableName":"roboto"}
var target_path_src_app_layout_tsx_import_Roboto_Flex_arguments_subsets_latin_variable_font_roboto_variableName_roboto_ = __webpack_require__(407);
var target_path_src_app_layout_tsx_import_Roboto_Flex_arguments_subsets_latin_variable_font_roboto_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Roboto_Flex_arguments_subsets_latin_variable_font_roboto_variableName_roboto_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Bai_Jamjuree","arguments":[{"subsets":["latin"],"weight":"700","variable":"--font-bai-jamjuree"}],"variableName":"baiJamjuree"}
var target_path_src_app_layout_tsx_import_Bai_Jamjuree_arguments_subsets_latin_weight_700_variable_font_bai_jamjuree_variableName_baiJamjuree_ = __webpack_require__(5878);
var target_path_src_app_layout_tsx_import_Bai_Jamjuree_arguments_subsets_latin_weight_700_variable_font_bai_jamjuree_variableName_baiJamjuree_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Bai_Jamjuree_arguments_subsets_latin_weight_700_variable_font_bai_jamjuree_variableName_baiJamjuree_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(63);
// EXTERNAL MODULE: ./node_modules/jwt-decode/build/jwt-decode.cjs.js
var jwt_decode_cjs = __webpack_require__(2968);
var jwt_decode_cjs_default = /*#__PURE__*/__webpack_require__.n(jwt_decode_cjs);
;// CONCATENATED MODULE: ./src/lib/auth.ts


function getUser() {
    const token = (0,headers.cookies)().get("token")?.value;
    if (!token) {
        throw new Error("Unauthenticated.");
    }
    const user = jwt_decode_cjs_default()(token);
    return user;
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Profile.tsx



function Profile() {
    const { name, avatarUrl } = getUser();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center gap-3 text-left transition-colors",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: avatarUrl,
                width: 40,
                height: 40,
                alt: "",
                className: "h-10 w-10 rounded-full"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "max-w-[140px] text-sm leading-snug",
                children: [
                    name,
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/api/auth/logout",
                        className: "block cursor-pointer text-red-400 hover:text-red-300",
                        children: "Quero sair"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(7507);
;// CONCATENATED MODULE: ./src/components/SignIn.tsx


function SignIN() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: `https://github.com/login/oauth/authorize?client_id=${"958424e96dd75437dd99"}`,
        className: "flex items-center gap-3 text-left transition-colors hover:text-gray-50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex h-10 w-10 items-center justify-center rounded-full bg-gray-400",
                children: /*#__PURE__*/ jsx_runtime_.jsx(user/* default */.Z, {
                    className: "h-5 w-5 text-gray-500"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "max-w-[140px] text-sm leading-snug",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "underline",
                        children: "Crie sua conta "
                    }),
                    " e salve suas mem\xf3rias!"
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/assets/nlw-spacetime-logo.svg
/* harmony default export */ const nlw_spacetime_logo = ({"src":"/_next/static/media/nlw-spacetime-logo.889c2ce4.svg","height":48,"width":161,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/HeroSection.tsx




function HeroSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: nlw_spacetime_logo,
                alt: "NLW Spacetime"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-[420px] space-y-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-5xl font-bold leading-tight text-gray-50",
                        children: "Sua c\xe1psula do tempo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-lg leading-relaxed",
                        children: "Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                className: "br-green-500 inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600",
                href: "/memories/new",
                children: [
                    " ",
                    "CADASTRAR LEMBRAN\xc7A"
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Copyrigth.tsx

function Copyright() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-sm leading-relaxed text-gray-200",
        children: [
            "Feito com \uD83D\uDC9C no NLW da",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                target: "_blank",
                rel: "noreferrer",
                className: "uppercase underline hover:text-gray-100 ",
                href: "https://github.com/rickcunha05",
                children: "Rocketseat"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/layout.tsx









const metadata = {
    title: "NLW Spacetime",
    description: "Uma c\xe1psula do tempo constru\xedda com React, Next,js, TailwindCSS, TypeScript."
};
function RootLayout({ children }) {
    const isAuthenticated = (0,headers.cookies)().has("token");
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: `${(target_path_src_app_layout_tsx_import_Roboto_Flex_arguments_subsets_latin_variable_font_roboto_variableName_roboto_default()).variable} ${(target_path_src_app_layout_tsx_import_Bai_Jamjuree_arguments_subsets_latin_weight_700_variable_font_bai_jamjuree_variableName_baiJamjuree_default()).variable} bg-gray-900 font-sans text-gray-100`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: " grid min-h-screen grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute bottom-0 right-2 top-0 w-2 bg-stripes"
                            }),
                            isAuthenticated ? /*#__PURE__*/ jsx_runtime_.jsx(Profile, {}) : /*#__PURE__*/ jsx_runtime_.jsx(SignIN, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(HeroSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover",
                        children: children
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 6203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/nlw-spacetime-logo.889c2ce4.svg","height":48,"width":161,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/png","sizes":"400x400"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.png")

    return [{
      ...imageData,
      url: imageUrl + "?68c6afaf1f4f00fb",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;