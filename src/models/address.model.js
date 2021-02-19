const { constants } = require('../utils');

const { platforms } = constants;

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'Address',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      platform: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'addresses',
      underscored: true,
      paranoid: true,
      hooks: {
        beforeSave: (address, options) => {
          let platform;

          platform = platforms.indexOf(address.get('platform'));
          platform = platform !== -1 ? platform + 1 : 1;

          address.set('platform', platform);
        },
      },
    },
  );

  return Address;
};
