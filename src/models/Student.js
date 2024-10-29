import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export default (sequelize) => {
    const Student = sequelize.define('Student', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, 
            primaryKey: true,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        whatsappNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        parentName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parentOccupation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        place: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pincode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timeZone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        selectedMode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adviserName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        registrationFee:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    }, {
        timestamps: true,
    });

    Student.associate=(models)=>{
        Student.belongsToMany(models.Teacher,{
            through:'TeacherStudent',
            as:'teachers',
            foreignKey:'studentId',
            otherKey:'teacherId'

        });
    };

    return Student;
};