import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Student = sequelize.define('Student', {
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

    return Student;
};