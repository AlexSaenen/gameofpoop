module.exports = (req, res) => {
  const seasons = {};

  res.status(200).json({ seasons });
};
