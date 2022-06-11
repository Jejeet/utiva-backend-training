const mutateCountry = (req, res, next) => {
  // Anything
  console.log("Hello from a middlware 👋");

  const originalValue = req.params.country;
  console.log(originalValue);

  const mutatedValue = (req.params.country = "Portugal");
  console.log(mutatedValue);

  next();
};

module.exports = mutateCountry;
