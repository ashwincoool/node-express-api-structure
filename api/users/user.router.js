const { 
    createUser,
    getList,
    update,
    deleteData,
    login,
    checkUseOfLibrary
} = require("./user.controller");

const router = require("express").Router();

const { checkToken } = require("./../../auth/token_auth");

router.post("/",checkToken,getList);
router.post("/create",checkToken,createUser);
router.post("/update",checkToken,update);
router.post("/delete",checkToken,deleteData);
router.post("/login",login);
router.post("/checkLib",checkUseOfLibrary);

module.exports = router;