const tagService = require('../services/tagService');

class TagController{

    async getTag(req, res, next) {
        try {
          const id = req.params.id;
          const tag = await tagsService.getTag(id);
          
          if (!tag) {
            next(new EmptyResExeption('Empty result body.'));
          }
    
          res.send(tag);

        } catch (err) {
          next(err);
        }
      }
    
      async getAllTags(req, res, next) {
        try {
          const tags = await tagsService.getAllTags();
          
          if (!tags || !tags.length) {
            next(new EmptyResExeption('Empty result body.'));
          }
    
          res.send(tags);

        } catch (err) {
          next(err);
        }
      }
    
      async addTag(req, res, next) {
        try {
          const role = {
              value: req.body.value,
          }
          
          await tagsService.addTag(role);
    
          res.send('add tag');

        } catch (err) {
          next(err);
        }
      }
    
      async deleteTag(req, res, next) {
        try {
          const id = req.params.id;
          
          await tagsService.deleteTag(id);
    
          res.send('delete tag');

        } catch (err) {
          next(err);
        }
      }
    
      async updateTag(req, res, next) {
        try {
          const id = req.params.id;
          const role = req.body;
          
          await tagsService.updateTag(id, role);
    
          res.send('update tag');

        } catch (err) {
          next(err);
        }
      }
}

module.exports = TagController();