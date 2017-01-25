import home from './home';

export default function meta(args){
    switch (args.page) {

    case 'home':
    default:
        return home(args);
    }
}