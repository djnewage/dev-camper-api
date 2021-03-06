//@desc Get all Bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: "Show all bootcamps", hello: req.hello });
};

//@desc Get single Bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get Bootcamp ${req.params.id}` });
};

//@desc Create new bootcamp
//@route POST /api/v1/bootcamps
//@access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
};

//@desc Update bootcamp
//@route PUT /api/v1/bootcamps/:ID
//@access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
};

//@desc Delete bootcamp
//@route DELETE /api/v1/bootcamps/:ID
//@access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};

console.log(this.getBootcamp);
