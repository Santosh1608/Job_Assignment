const router = require("express").Router();
const Salary = require("../models/Salary");
const { isSignedIn } = require("../middleware/auth");
router.post("/addIncome", isSignedIn, async (req, res) => {
  const { user, body } = req;
  try {
    body.userId = user._id;
    body.AppHRA =
      body.CityType === "Metro"
        ? Math.min(
            Number(body.Basic) * 0.5,
            Number(body.Basic) * 0.1,
            Number(body.HRA)
          )
        : Math.min(
            Number(body.Basic) * 0.4,
            Number(body.Basic) * 0.1,
            Number(body.HRA)
          );
    await Salary.findOneAndUpdate({ userId: user._id }, body, {
      upsert: true,
    });
    res.send(body);
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "Cannot add data" });
  }
});

router.get("/calculateTax", isSignedIn, async (req, res) => {
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
