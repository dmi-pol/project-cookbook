const { Cat } = require("../db/models");

class CatService {
  static async getCats() {
    try {
      return await Cat.findAll();
    } catch (error) {
      return error;
    }
  }

  static async createCats(data) {
    try {
      return Cat.create(data);
    } catch (error) {
      return error;
    }
  }

  static async updateCats(id, data, userId) {
    try {
      const cat = await Cat.findOne({ where: { id, userId } });
     
      if (cat) {
        return await cat.update(data);
      } else {
        return { message: "Cat not found" };
      }
    } catch (error) {
        console.log(error);
        
      return error;
    }
  }

  static async deleteCats(id, userId) {
    try {
      const cat = await Cat.findOne({ where: { id, userId } });
      if (cat) {
         await cat.destroy();
         return { isDeleted: true, message: "Success" };
      } else {
        return { isDeleted: false, message: "Cat not found" };
      }
    } catch (error) {
        return error;
    }
  }
}

module.exports = CatService;