module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    name: DataTypes.STRING,
    local: DataTypes.STRING,
    email: DataTypes.STRING,
    tel: DataTypes.STRING
  },{
    timestamps: true,
    tableName: 'schools',
  });

  return School;
}