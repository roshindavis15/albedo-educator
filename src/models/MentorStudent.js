import { DataTypes } from "sequelize";

export default(sequelize)=>{
    const MentorStudent=sequelize.define('MentorStudent',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        mentorId:{
            type:DataTypes.UUID,
            allowNull:false,
            references:{
                model:'Mentor',
                key:'id'
            }
        },
        studentId:{
            type:DataTypes.UUID,
            allowNull:false,
            references:{
                model:'Student',
                key:'id'
            }
        },
       
    }, {
        tableName:'MentorStudents',
        timestamps:true
    });
    

    return MentorStudent;
};