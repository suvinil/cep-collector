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
          switch (address.get('platform')) {
            case 'institucional.suvinil.com':
              platform = 1;
              break;
            case 'loja.suvinil.com':
              platform = 2;
              break;
            case 'pintor.suvinil.com':
              platform = 3;
              break;
            default:
              platform = 1;
          }

          address.set('platform', platform);
        },

        beforeUpdate: (address, options) => {
          let platform;
          switch (address.get('platform')) {
            case 'institucional.suvinil.com':
              platform = 1;
              break;
            case 'loja.suvinil.com':
              platform = 2;
              break;
            case 'pintor.suvinil.com':
              platform = 3;
              break;
            default:
              platform = 1;
          }

          address.set('platform', platform);
        },
      },
    },
  );

  return Address;
};
