import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Role', roleSchema);


// // models/Role.js
// import mongoose from 'mongoose';

// // Define the role schema
// const roleSchema = new mongoose.Schema({
//     roleName: {
//         type: String,
//         required: true,
//     },
//     permissions: {
//         type: [String], // List of permissions associated with this role
//         default: [],
//     },
// }, { timestamps: true });

// const Role = mongoose.model('Role', roleSchema);

// export default Role;
