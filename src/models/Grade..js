module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    grade: DataTypes.STRING,
    number_students: DataTypes.INTEGER,
    school_id: DataTypes.INTEGER,
  },{
    timestamps: true,
    tableName: 'grades',
  });

  Grade.associate = (models) => {
    Grade.belongsTo(models.School, {
      foreignKey: 'school_id',
      as: 'school',
    });
  };

  return Grade;
}