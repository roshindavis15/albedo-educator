import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Teacher = sequelize.define('Teacher', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
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
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        qualification: {
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
        previousWorkedCompanies: {
            type: DataTypes.JSON, 
            allowNull: true,
        },
        preferredPackages: {
            type: DataTypes.JSON, 
            allowNull: true,
        },
        resumeLink: {
            type: DataTypes.STRING, 
            allowNull: true,
        },
        demoLink: {
            type: DataTypes.STRING, 
            allowNull: true,
        },
        upiId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        accountNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountHolderName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ifscCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bankName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
    });

    return Teacher;
};