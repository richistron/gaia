const {geolocation} = navigator;

const Geo = () => {
  if (!geolocation) {
    return;
  }
  return new Promise((resolve, reject) => {
    geolocation
      .getCurrentPosition(
        ({coords}) => resolve(coords),
        err => reject(err),
        {enableHighAccuracy: true}
      );
  });
};

export default Geo;
