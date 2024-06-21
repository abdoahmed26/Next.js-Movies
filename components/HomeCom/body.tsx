import { getData } from '@/Functions/getData';
import BackMovie from './backMovie';

const Body = async() => {
    const data = await getData('https://api.themoviedb.org/3/discover/movie')
    const results = data.results;
    return (
        <BackMovie data={results} />
    );
}

export default Body;