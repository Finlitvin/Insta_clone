const roleRepository = require('../repositories/roleRepository');

class RoleService{
    async getRole(id) {
        const role = await roleRepository.getRole(id);
    
        return role;
      }
    
      async getRoleByValue(value) {
        const role = await roleRepository.getRoleByValue(value);
    
        return role;
      }
    
      async getAllRoles() {
        const roles = await roleRepository.getAllRoles();
    
        return roles;
      }
    
      async addRole(role) {
        await roleRepository.addRole(role);
      }
    
      async deleteRole(id) {
        await roleRepository.deleteRole(id);
      }
    
      async updateRole(id, data) {
        await roleRepository.updateRole(id, data);
      }
}

module.exports = new RoleService();