export default function homeMeta({initialState, router}) {
    const title = '';
    const url   = '';
    const description = '';

    return `
        <meta name="description" content="${description}">
        <link rel="canonical" href="${url}">
        <meta name="referrer" content="origin">

        <meta property="og:site_name" content="neal.codes">
        <meta property="og:type" content="website">
        <meta property="og:title" content="${title}">
        <meta property="og:url" content="${url}">

        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:url" content="${url}">
    `;
}