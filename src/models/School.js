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

  School.associate = (models) => {
    School.hasMany(models.Grade, {
      foreignKey: 'school_id',
      as: 'grades',
    })
  };

  return School;
}