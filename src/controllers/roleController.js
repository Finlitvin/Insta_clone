const roleService = require('../services/roleService');

class RoleController{

    async getRole(req, res, next) {
        try {
          const id = req.params.id;
          const role = await roleService.getRole(id);
          
          // if (!role) {
          //   next(new EmptyResExeption('Empty result body.'));
          // }
          
          res.send(role);

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
          
          res.send(roles);

        } catch (err) {
          next(err);
        }
      }
    
      async addRole(req, res, next) {
        try {
          const role = {
                value: req.body.value,
          }
          
          await roleService.addRole(role);
    
          res.send('add role');

        } catch (err) {
          next(err);
        }
      }
    
      async deleteRole(req, res, next) {
        try {
          const id = req.params.id;
          
          await roleService.deleteRole(id);
            
            res.send('delete role');
            
        } catch (err) {
          next(err);
        }
      }
    
      async updateRole(req, res, next) {
        try {
          const id = req.params.id;
          const role = req.body;
          
          await roleService.updateRole(id, role);
            
          res.send('update role');

        } catch (err) {
          next(err);
        }
      }
}

module.exports = new RoleController();