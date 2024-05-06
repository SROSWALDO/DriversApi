const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Driver', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isCreate:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }
  },{timestamps: false});
};
