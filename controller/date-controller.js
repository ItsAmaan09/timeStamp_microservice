const getTime = (req, res) => {
  const { date } = req.params;

  var formattedParsedDate;

  if (!date) {
    formattedParsedDate = new Date();
  } else {
    if (isNaN(date)) {
      formattedParsedDate = new Date(date);
    } else {
      formattedParsedDate = new Date(parseInt(date));
    }
  }

  if (isNaN(formattedParsedDate.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: formattedParsedDate.getTime(),
    utc: formattedParsedDate.toUTCString(),
  });
};

module.exports = {
  getTime,
};
