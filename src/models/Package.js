import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Package = sequelize.define('Package', {
        packageName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        syllabus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        packageFee: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        spotAdmissionFee: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        teachersSalary: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        selectMode: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        classTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        couponCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        schedule: {
            type: DataTypes.JSON, 
            allowNull: false,
        },
    }, {
        timestamps: true,
    });

    return Package;
};
