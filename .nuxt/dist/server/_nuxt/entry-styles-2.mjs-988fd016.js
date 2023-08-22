const nuxtGoogleFonts = "@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:200;src:url(" + __buildAssetsURL("Poppins-200-1.1407f197.woff2") + ') format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:200;src:url(' + __buildAssetsURL("Poppins-200-2.f5bed652.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:200;src:url(' + __buildAssetsURL("Poppins-200-3.6f0c5725.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:300;src:url(' + __buildAssetsURL("Poppins-300-4.d531423e.woff2") + ') format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:300;src:url(' + __buildAssetsURL("Poppins-300-5.32282e10.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:300;src:url(' + __buildAssetsURL("Poppins-300-6.78bc3aa7.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Poppins-400-7.478b3ab7.woff2") + ') format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Poppins-400-8.cb8bdeab.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Poppins-400-9.7d93459d.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:500;src:url(' + __buildAssetsURL("Poppins-500-10.721c714f.woff2") + ') format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:500;src:url(' + __buildAssetsURL("Poppins-500-11.5f9d6298.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:500;src:url(' + __buildAssetsURL("Poppins-500-12.cd36de20.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:600;src:url(' + __buildAssetsURL("Poppins-600-13.d036ece3.woff2") + ') format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:600;src:url(' + __buildAssetsURL("Poppins-600-14.9c15f7b0.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:600;src:url(' + __buildAssetsURL("Poppins-600-15.f4e80d9d.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:700;src:url(' + __buildAssetsURL("Poppins-700-16.6197a412.woff2") + ') format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:700;src:url(' + __buildAssetsURL("Poppins-700-17.4ce2c84c.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:700;src:url(' + __buildAssetsURL("Poppins-700-18.9338e65f.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:800;src:url(' + __buildAssetsURL("Poppins-800-19.41f4bb66.woff2") + ') format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:800;src:url(' + __buildAssetsURL("Poppins-800-20.e1a48072.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:800;src:url(' + __buildAssetsURL("Poppins-800-21.60bf0aba.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}';
export {
  nuxtGoogleFonts as default
};
//# sourceMappingURL=entry-styles-2.mjs-988fd016.js.map