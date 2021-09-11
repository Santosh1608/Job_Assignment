const router = require("express").Router();
const Salary = require("../models/Salary");
const { isSignedIn } = require("../middleware/auth");
router.post("/addIncome", isSignedIn, async (req, res) => {
  const { user, body } = req;
  try {
    body.userId = user._id;
    body.AppHRA = body.CityType === "Metro" ? 100 : 50;
    await Salary.findOneAndUpdate({ userId: user._id }, body, {
      upsert: true,
    });
    res.send(body);
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "Cannot add data" });
  }
});

router.post("/calculateTax", isSignedIn, async (req, res) => {
  const { user } = req;
  try {
    const salary = await Salary.findOne({ userId: user._id });
    console.log(salary);
    const TaxInc =
      salary.Basic +
      salary.LTA +
      salary.HRA +
      salary.FA -
      salary.AppHRA -
      salary.Inv -
      salary.Med;
    res.send({ TaxInc });
  } catch (error) {
    res.status(404).send({ error: "Cannot calculate tax" });
  }
});

module.exports = router;
