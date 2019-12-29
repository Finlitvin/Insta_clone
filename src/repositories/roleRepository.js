const Role = require('../models/roles');

class RoleRepository{
    async getRole(id) {
        const role = await Role.findByPk(id);
    
        return role;
      }
    
      async getRoleByValue(value) {
        const role = await Role.findOne({ where: { value: value } });
    
        return role;
      }
    
      async getAllRoles() {
        const roles = await Role.findAll();
    
        return roles;
      }
    
      async addRole(role) {
        await Role.create(role);
      }
    
      async deleteRole(id) {
        await Role.destroy({ where: { id: id } });
      }
    
      async updateRole(id, newRoleData) {
        const role = await this.getRole(id);
        await role.update(newRoleData);
      }
}

module.exports = new RoleRepository();