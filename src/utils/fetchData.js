export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '61e8330247msh6c9d7770178733cp154fafjsn1aa72534d5c4',
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}