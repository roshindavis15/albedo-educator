import { DataTypes } from "sequelize";

export default (sequelize) => {
    const TeacherStudent = sequelize.define('TeacherStudent', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        teacherId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Teacher',
                key: 'id'
            }
        },
        studentId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Student',
                key: 'id'
            }
        }
    }, {
        tableName: 'TeacherStudents',
        timestamps: true
    });

    return TeacherStudent;
};