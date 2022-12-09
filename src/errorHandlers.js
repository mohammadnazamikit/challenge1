export const genericServerErrorHandler = (err, req, res, next) => {
  console.log("ERR: ", err);
  res.statue(500).send({ message: "An error occured on our side" });
};
