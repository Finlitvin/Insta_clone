const Tag = require('../models/tags');

class TagRepository{

    async getTag(id) {
        const tag = await Tag.findByPk(id);
    
        return tag;
      }
    
      async getTagByValue(value) {
        const tag = await Tag.findOne({ where: { value: value } });
    
        return tag;
      }
    
      async getAllTags() {
        const tags = await Tag.findAll();
    
        return tags;
      }
    
      async addTag(role) {
        await Tag.create(role);
      }
    
      async deleteTag(id) {
        await Tag.destroy({ where: { id: id } });
      }
    
      async updateTag(id, newTagData) {
        const tag = await this.getTag(id);
        await tag.update(newTagData);
      }

}

module.exports = new TagRepository();