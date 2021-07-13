const query = `
  query {
    launchesPast(limit: 10) {
      links {
        video_link
      }
      mission_name
    }
  }
`;

const url = 'https://api.spacex.land/graphql/';

const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

function FetchDataFromAPI() {
  const retrieveData = fetch(url, options)
    .then(res => res.json())
    .catch(console.error);
  return retrieveData;
};

export default FetchDataFromAPI;