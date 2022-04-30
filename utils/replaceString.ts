// alternative to replaceAll()
const replaceString = (str: string, searchValue: string, replaceValue: string): string => {
    while (str.includes(searchValue)) {
        str = str.replace(searchValue, replaceValue);
    }

    return str;
};

export default replaceString; 
