(() => {
    var n = {
        275: (n, e, t) => {
            "use strict";
            t.d(e, {A: () => s});
            var r = t(601), o = t.n(r), i = t(314), a = t.n(i)()(o());
            a.push([n.id, "/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.m-4 {\n  margin: 1rem;\n}\n.flex {\n  display: flex;\n}\n.justify-center {\n  justify-content: center;\n}\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-fuchsia-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(232 121 249 / var(--tw-border-opacity));\n}\n.bg-amber-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 191 36 / var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n\n#title {\n  margin: 1rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 191 36 / var(--tw-bg-opacity));\n  padding: 1rem;\n  text-align: center;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}", ""]);
            const s = a
        }, 314: n => {
            "use strict";
            n.exports = function (n) {
                var e = [];
                return e.toString = function () {
                    return this.map((function (e) {
                        var t = "", r = void 0 !== e[5];
                        return e[4] && (t += "@supports (".concat(e[4], ") {")), e[2] && (t += "@media ".concat(e[2], " {")), r && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), t += n(e), r && (t += "}"), e[2] && (t += "}"), e[4] && (t += "}"), t
                    })).join("")
                }, e.i = function (n, t, r, o, i) {
                    "string" == typeof n && (n = [[null, n, void 0]]);
                    var a = {};
                    if (r) for (var s = 0; s < this.length; s++) {
                        var c = this[s][0];
                        null != c && (a[c] = !0)
                    }
                    for (var d = 0; d < n.length; d++) {
                        var l = [].concat(n[d]);
                        r && a[l[0]] || (void 0 !== i && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = i), t && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = t) : l[2] = t), o && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = o) : l[4] = "".concat(o)), e.push(l))
                    }
                }, e
            }
        }, 601: n => {
            "use strict";
            n.exports = function (n) {
                return n[1]
            }
        }, 72: n => {
            "use strict";
            var e = [];

            function t(n) {
                for (var t = -1, r = 0; r < e.length; r++) if (e[r].identifier === n) {
                    t = r;
                    break
                }
                return t
            }

            function r(n, r) {
                for (var i = {}, a = [], s = 0; s < n.length; s++) {
                    var c = n[s], d = r.base ? c[0] + r.base : c[0], l = i[d] || 0, u = "".concat(d, " ").concat(l);
                    i[d] = l + 1;
                    var p = t(u), h = {css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5]};
                    if (-1 !== p) e[p].references++, e[p].updater(h); else {
                        var f = o(h, r);
                        r.byIndex = s, e.splice(s, 0, {identifier: u, updater: f, references: 1})
                    }
                    a.push(u)
                }
                return a
            }

            function o(n, e) {
                var t = e.domAPI(e);
                return t.update(n), function (e) {
                    if (e) {
                        if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer) return;
                        t.update(n = e)
                    } else t.remove()
                }
            }

            n.exports = function (n, o) {
                var i = r(n = n || [], o = o || {});
                return function (n) {
                    n = n || [];
                    for (var a = 0; a < i.length; a++) {
                        var s = t(i[a]);
                        e[s].references--
                    }
                    for (var c = r(n, o), d = 0; d < i.length; d++) {
                        var l = t(i[d]);
                        0 === e[l].references && (e[l].updater(), e.splice(l, 1))
                    }
                    i = c
                }
            }
        }, 659: n => {
            "use strict";
            var e = {};
            n.exports = function (n, t) {
                var r = function (n) {
                    if (void 0 === e[n]) {
                        var t = document.querySelector(n);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                            t = t.contentDocument.head
                        } catch (n) {
                            t = null
                        }
                        e[n] = t
                    }
                    return e[n]
                }(n);
                if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(t)
            }
        }, 540: n => {
            "use strict";
            n.exports = function (n) {
                var e = document.createElement("style");
                return n.setAttributes(e, n.attributes), n.insert(e, n.options), e
            }
        }, 56: (n, e, t) => {
            "use strict";
            n.exports = function (n) {
                var e = t.nc;
                e && n.setAttribute("nonce", e)
            }
        }, 825: n => {
            "use strict";
            n.exports = function (n) {
                if ("undefined" == typeof document) return {
                    update: function () {
                    }, remove: function () {
                    }
                };
                var e = n.insertStyleElement(n);
                return {
                    update: function (t) {
                        !function (n, e, t) {
                            var r = "";
                            t.supports && (r += "@supports (".concat(t.supports, ") {")), t.media && (r += "@media ".concat(t.media, " {"));
                            var o = void 0 !== t.layer;
                            o && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), r += t.css, o && (r += "}"), t.media && (r += "}"), t.supports && (r += "}");
                            var i = t.sourceMap;
                            i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleTagTransform(r, n, e.options)
                        }(e, n, t)
                    }, remove: function () {
                        !function (n) {
                            if (null === n.parentNode) return !1;
                            n.parentNode.removeChild(n)
                        }(e)
                    }
                }
            }
        }, 113: n => {
            "use strict";
            n.exports = function (n, e) {
                if (e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
        }, 177: () => {
            window.onload = function () {
                let n = document.getElementById("cities");
                ["Quimper", "Brest", "Concarneau", "Toulouse"].forEach((function (e) {
                    let t = document.createElement("option");
                    t.value = e.toLowerCase(), t.innerText = e, n.append(t)
                })), n.addEventListener("change", (function () {
                    console.log(this);
                    let n = document.createElement("p");
                    n.innerText = this.value, document.body.append(n)
                }))
            }
        }
    }, e = {};

    function t(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {id: r, exports: {}};
        return n[r](i, i.exports, t), i.exports
    }

    t.n = n => {
        var e = n && n.__esModule ? () => n.default : () => n;
        return t.d(e, {a: e}), e
    }, t.d = (n, e) => {
        for (var r in e) t.o(e, r) && !t.o(n, r) && Object.defineProperty(n, r, {enumerable: !0, get: e[r]})
    }, t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), t.nc = void 0, (() => {
        "use strict";
        t(177);
        var n = t(72), e = t.n(n), r = t(825), o = t.n(r), i = t(659), a = t.n(i), s = t(56), c = t.n(s), d = t(540),
            l = t.n(d), u = t(113), p = t.n(u), h = t(275), f = {};
        f.styleTagTransform = p(), f.setAttributes = c(), f.insert = a().bind(null, "head"), f.domAPI = o(), f.insertStyleElement = l(), e()(h.A, f), h.A && h.A.locals && h.A.locals, console.log("Coucou")
    })()
})();