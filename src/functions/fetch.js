const fetch = async() =>{
    const response = await fetch("http://wordpress.test/wp-json/wp/v2/posts");
    const response2 = await response.json;
    console.log(response2);
}

export default fetch;