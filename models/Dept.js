// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// console.log("DEPT IS WORKING TOO!");
// // class Dept extends Model { }

// // Dept Table
// const Dept = sequelize.define('Dept', {
//     // Model attributes are defined here
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
//   }, {
//     // Other model options go here
//     sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'dept'
//   });

// // Dept.init (
// //     {
// //         id: {
// //             type: DataTypes.INTEGER,
// //             allowNull: false,
// //             primaryKey: true,
// //             autoIncrement: true
// //         },
// //         name: {
// //             type: DataTypes.STRING,
// //             allowNull: false
// //         }
// //     },
// //     {
// //         sequelize,
// //         freezeTableName: true,
// //         underscored: true,
// //         modelName: 'dept'
// //     }
// // );

// const user = new Dept({ id: 1 , ""});


// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

// module.exports = Dept;