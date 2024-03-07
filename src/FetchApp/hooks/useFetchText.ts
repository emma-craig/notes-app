
const useFetchText = async() => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

    
    try {
        const response = await fetch(url);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export default useFetchText