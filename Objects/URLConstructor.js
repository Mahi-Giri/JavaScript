// function URLconstructor(queryParameters, domain, path) {
//     let url = domain + path + '?';
//     const keys = Object.keys(queryParameters);
//     console.log(keys);
//     const queryStrings = [];
//     for (const key of keys) {
//         queryStrings.push(`${encodeURIComponent(key)}=${encodeURIComponent(queryParameters[key])}`);
//     }
//     const queryString = queryStrings.join('?');
//     url += queryString;
//     return url;
// }

// const queryParameters = {
//     name: 'John',
//     age: '28'
// };
// const domain = "google.com";
// const path = '/search';
// let url = URLconstructor(queryParameters, domain, path);
// console.log(`https://${url}`);
// //output: https://google.com/search?name=John?age=28



function URLconstructor(queryParameters, domain, path) {
    let finalurl = "";
    finalurl = "https://" + domain + path;
    for (let key in queryParameters) {
        finalurl += '?';
        finalurl += key;
        finalurl += '=';
        finalurl += queryParameters[key];
    }
    return finalurl;
}

const queryParameters = {
    name: 'John',
    age: '28'
};
const domain = "google.com";
const path = '/search';
console.log(URLconstructor(queryParameters, domain, path));
// console.log(`https://${url}`);
//output: https://google.com/search?name=John?age=28
