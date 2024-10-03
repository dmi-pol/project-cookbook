const CatService = require("../services/Cat.service");

async function getCatsController(req, res) {
  try {
    const cats = await CatService.getCats();
    res.status(200).json({ cats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteCatsController(req, res) {
  const { id } = req.params;
  const user = res.locals.user;

  try {
    const { isDeleted } = await CatService.deleteCats(id, user.id);
   

    if (isDeleted) {
      res.status(200).json({ message: "Deleted" });
    } else {
      res.status(400).json({ message: "Not found record" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateCatsController(req, res) {
  const { id } = req.params;
  const { user } = res.locals;
  const {name,breed} = req.body
  
  
  try {
    const cat = await CatService.updateCats(id, {name,breed}, user.id);
    console.log(cat)
    if (cat) {
      res.status(200).json({cat});
    } else {
      res.status(400).json({ message: "Not update" });
    }
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: error.message });
  }
}

async function createCatsController(req, res) {
  const { user } = res.locals;
  console.log(req.body)
//   req.body = { ...req.body, userId: user.id };

try {
  const cat = await CatService.createCats(req.body);
  res.status(200).json({ cat });
} catch (error) {
  res.status(500).json({ message: error.message });
}
}

module.exports = {
  getCatsController,
  deleteCatsController,
  updateCatsController,
  createCatsController,
};
