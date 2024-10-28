import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export default (sequelize) => {
    const AssistantAdmin = sequelize.define('AssistantAdmin', {
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
        empId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
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
        timezone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        previousCompanies: {
            type: DataTypes.JSONB, 
            allowNull: true,
        },
        preferredLanguage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resumeLink: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        upiId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        accountNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        accountHolderName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        accountType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ifscCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bankName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true,
    });

    return AssistantAdmin;
};