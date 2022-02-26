module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    grade: DataTypes.STRING,
    number_students: DataTypes.INTEGER,
    school_id: DataTypes.INTEGER,
  },{
    timestamps: true,
    tableName: 'grades',
  });

  return Grade;
}