import Role from '../models/Role.js';

// Create a new role
export const createRole = async (req, res) => {
  const { name, permissions } = req.body;

  try {
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(409).json({ success: false, message: 'Role already exists' });
    }

    const newRole = new Role({ name, permissions });
    await newRole.save();

    return res.status(201).json({ success: true, message: 'Role created successfully', role: newRole });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Get all roles
export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    return res.status(200).json({ success: true, roles });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Update a role by ID
export const updateRole = async (req, res) => {
  const { id } = req.params;
  const { name, permissions } = req.body;

  try {
    const role = await Role.findById(id);
    if (!role) {
      return res.status(404).json({ success: false, message: 'Role not found' });
    }

    role.name = name || role.name;
    role.permissions = permissions || role.permissions;

    await role.save();
    return res.status(200).json({ success: true, message: 'Role updated successfully', role });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Delete a role by ID
export const deleteRole = async (req, res) => {
  const { id } = req.params;

  try {
    const role = await Role.findById(id);
    if (!role) {
      return res.status(404).json({ success: false, message: 'Role not found' });
    }

    await role.remove();
    return res.status(200).json({ success: true, message: 'Role deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
