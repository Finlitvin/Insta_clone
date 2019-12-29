const roleService = require('../services/roleService');

class RoleController{

    async getRole(req, res, next) {
        try {
          const id = req.params.id;
          const role = await roleService.getRole(id);
          
          if (!role) {
            next(new EmptyResExeption('Empty result body.'));
          }
    
        } catch (err) {
          next(err);
        }
      }
    
      async getAllRoles(req, res, next) {
        try {
          const roles = await roleService.getAllRoles();
          
          if (!roles || !roles.length) {
            next(new EmptyResExeption('Empty result body.'));
          }
    
        } catch (err) {
          next(err);
        }
      }
    
      async addRole(req, res, next) {
        try {
          const role = req.body;
          
          await roleService.addRole(role);
    
        } catch (err) {
          next(err);
        }
      }
    
      async deleteRole(req, res, next) {
        try {
          const id = req.params.id;
          
          await roleService.deleteRole(id);
    
        } catch (err) {
          next(err);
        }
      }
    
      async updateRole(req, res, next) {
        try {
          const id = req.params.id;
          const role = req.body;
          
          await roleService.updateRole(id, role);
    
        } catch (err) {
          next(err);
        }
      }
}

module.exports = new RoleController();