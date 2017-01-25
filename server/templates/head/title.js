import get from 'lodash/get';

const baseTitle = '';

function title({page, router, initialState}){
    switch (page) {
    default:
        return baseTitle;
    }
}

export default function titleTag(args){
    return `<title>${title(args)}</title>`;
}