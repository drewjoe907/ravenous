const apiKey = 'DCKJKUaHTU0AEJrxn_0Nk_Bu8Ct6Vx_4J8B3Q1cwIBAVgmRaDGxsMBap7mJGBaWf1iPjOgSHTvMXgyisj3GovfWnTdPz4r9zIPgkPOaUAF0XzVD3z8NkM5PtN26QX3Yx';
//const clientId = 'kLQrm0Tlddvw3LwnLdofhg';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
