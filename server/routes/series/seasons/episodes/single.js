module.exports = (req, res) => {
  // const modelId = req.params.modelId * 1;
  const episode = {};
  // const episode = data.models.find(m => m.id === modelId);

  res.status(200).json({ episode });
};
