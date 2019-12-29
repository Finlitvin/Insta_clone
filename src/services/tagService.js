const tagRepository = require('../repositories/tagRepository');

class TagService{

    async getTag(id) {
        const tag = await tagRepository.getTag(id);
    
        return tag;
      }
    
      async getTagByValue(value) {
        const tag = await tagRepository.getTagByValue(value);
    
        return tag;
      }
    
      async getAllTags() {
        const tags = await tagRepository.getAllTags();
    
        return tags;
      }
    
      async addTag(role) {
        await tagRepository.addTag(role);
      }
    
      async deleteTag(id) {
        await tagRepository.deleteTag(id);
      }
    
      async updateTag(id, data) {
        await tagRepository.updateTag(id, data);
      }
}

module.exports = new TagService();