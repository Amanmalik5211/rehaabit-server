const express = require("express");
const {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
} = require("../controllers/EnquiryController");
const { auth, isAdmin } = require("../middlewares/auth");
const router = express.Router();

router.post("/enquire", createEnquiry);
router.get("/getAllEnquiries", auth, isAdmin, getAllEnquiries);
router.post("/getEnquiryById", auth, isAdmin, getEnquiryById);
router.patch("/updateEnquiry/:id", auth, isAdmin, updateEnquiry);
router.delete("/deleteEnquiry/:id", auth, isAdmin, deleteEnquiry);

module.exports = router;
