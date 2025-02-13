const Club = require("../model/clubModel");

const createClub = async (req, res) => {
  try {
    const { title, venue } = req.body;

    if (!title || !venue) {
      return res.status(400).json({
        success: false,
        message: "please provide all data for club creation",
      });
    }

    const response = await Club.create({ title, venue });

    res.status(200).json({
      success: true,
      message: "club created successfully",
      data: response,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to create Club data",
      err,
    });
  }
};

const showClub = async (req, res) => {
  try {
    const response = await Club.find();

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "club data not found",
        err,
      });
    }

    res.status(200).json({
      success: true,
      message: "club fetched successfully",
      response,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to get Club data",
      err,
    });
  }
};

const deleteClub = async (req, res) => {
  try {
    const { clubId } = req.params;

    if (!clubId) {
      return res.status(400).json({
        success: false,
        message: "please provide Club id for deletion",
        err,
      });
    }

    const response = await Club.findByIdAndDelete(clubId);

    res.status(200).json({
      success: true,
      message: "club deleted successfully",
      response,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to delete Club data",
      err,
    });
  }
};

const updateClub = async (req, res) => {
  try {
    const { clubId } = req.params;
    // console.log(clubId)

    // const { title, venue } = req.body;
    
    const venue = req.body.venue
    const title = req.body.title
    // console.log(title, venue)

 

    if (!clubId) {
      return res.status(400).json({
        success: false,
        message: "please provide Club id for updataion",
        err,
      });
    }
 
    const clubData = await Club.findById(clubId);

    if (!clubData) {
      return res.status(400).json({
        success: false,
        message: "club not found by given Id for updation",
        err,
      });
    }

    console.log('club data',clubData)

    // if (!title) {
    //   title = clubData.title;
    // }

    // console.log('title',title)

    // if (!venue) {
    //   venue = clubData[venue];
    // }

    console.log('venue',venue)

    console.log('hii',title,venue)

    const response = await Club.findByIdAndUpdate(clubId, { title, venue });

    if (!response) {
      return res.status(400).json({
        success: false,
        message: "failed to updata club data by mongodb",
      });
    }

    res.status(200).json({
      success: true,
      message: "Club updateed successfully",
      response
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to update Club data",
      err,
    });
  }
};


module.exports = {createClub,showClub,deleteClub,updateClub}