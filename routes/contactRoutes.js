const express = require("express");
const router = express.Router();
const {
    getContacts, 
    createContact, 
    getContact, 
    deleteContact, 
    updateContact
} =  require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

//will remove /api/contacts as it is common for all api and make changes in server.js
router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);
//you can group the common routes like "/" and "/:id"
//ex: router.route("/").get(getContacts).post(createContact);


module.exports = router;