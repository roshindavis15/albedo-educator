import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Mentor = sequelize.define('Mentor', {
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
            type: DataTypes.DATE,
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
            allowNull: false,
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
        previousCompanies: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    }, {
        timestamps: true,
    });

    return Mentor;
};
